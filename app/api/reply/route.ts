import { NextResponse } from "next/server";
import { google } from "googleapis";
import { saveToServer } from "@/lib/upload-server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function getSheetAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!email || !key) throw new Error("Missing credentials");
  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

async function getNextId(
  sheets: ReturnType<typeof google.sheets>,
  sheetId: string
): Promise<string> {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Inbox!A:A",
    });
    const rows = res.data.values ?? [];
    return String(Math.max(0, rows.length - 1) + 1);
  } catch {
    return String(Date.now());
  }
}

export async function POST(req: Request) {
  try {
    const fd = await req.formData();

    const to = String(fd.get("to") ?? "");
    const toName = String(fd.get("toName") ?? "");
    const subject = String(fd.get("subject") ?? "");
    const message = String(fd.get("message") ?? "");
    const originalId = String(fd.get("originalId") ?? "");

    if (!to || !subject) {
      return NextResponse.json(
        { ok: false, error: "to ও subject required" },
        { status: 400 }
      );
    }

    // Attachments
    const pdfs = fd.getAll("pdfs") as File[];
    const images = fd.getAll("images") as File[];
    const voices = fd.getAll("voices") as File[];
    const excels = fd.getAll("excels") as File[];
    const files = fd.getAll("files") as File[];
    const links = fd.getAll("links").map(String);

    const uploaded: { name: string; url: string; mimeType: string }[] = [];

    const uploadGroup = async (arr: File[], defaultMime: string) => {
      for (const f of arr) {
        if (f.size === 0) continue;
        try {
          const r = await saveToServer(
            f,
            f.name,
            f.type || defaultMime
          );
          uploaded.push({
            name: r.name,
            url: r.url,
            mimeType: r.mimeType,
          });
        } catch (err) {
          console.error("Upload failed:", err);
        }
      }
    };

    await uploadGroup(pdfs, "application/pdf");
    await uploadGroup(images, "image/jpeg");
    await uploadGroup(voices, "audio/webm");
    await uploadGroup(excels, "application/octet-stream");
    await uploadGroup(files, "application/octet-stream");

    // Attachments + Links
    const reqUrl = new URL(req.url);
    const baseUrl = `${reqUrl.protocol}//${reqUrl.host}`;

    const lines: string[] = [];

    for (const u of uploaded) {
      lines.push(`${u.name} (${u.mimeType}) — ${baseUrl}${u.url}`);
    }
    for (const l of links) {
      if (l.trim()) lines.push(`${l} (video-link) — ${l}`);
    }

    const bodyWithAttachments =
      lines.length > 0
        ? `${message}\n\n--- Attachments ---\n${lines.join("\n")}`
        : message;

    // Save to Sheet
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

    const auth = getSheetAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const nextId = await getNextId(sheets, sheetId);

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Inbox!A:H",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            nextId,
            `Admin → ${toName}`,
            to,
            "",
            subject,
            bodyWithAttachments,
            `Admin Reply (to #${originalId})`,
            new Date().toISOString(),
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true, id: nextId });
  } catch (err) {
    console.error("Reply error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown" },
      { status: 500 }
    );
  }
}