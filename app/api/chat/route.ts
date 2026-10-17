import { NextResponse } from "next/server";
import { google } from "googleapis";
import { saveToServer, type UploadedFileInfo } from "@/lib/upload-server";

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
  sheetId: string,
  sheetName: string
): Promise<string> {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:A`,
    });
    const rows = res.data.values ?? [];
    const dataCount = Math.max(0, rows.length - 1);
    return String(dataCount + 1);
  } catch {
    return String(Date.now());
  }
}

export async function POST(req: Request) {
  try {
    const fd = await req.formData();

    const from = String(fd.get("from") ?? "");
    const email = String(fd.get("email") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const subject = String(fd.get("subject") ?? "Live Chat");
    const body = String(fd.get("body") ?? "");
    const source = String(fd.get("source") ?? "Live Chat");

    if (!from || !email || !body) {
      return NextResponse.json(
        { ok: false, error: "Name, email ও message required" },
        { status: 400 }
      );
    }

    // ===== Attachments =====
    const images = fd.getAll("images") as File[];
    const files = fd.getAll("files") as File[];
    const voice = fd.get("voice") as File | null;

    const uploaded: UploadedFileInfo[] = [];

    for (const img of images) {
      if (img.size === 0) continue;
      try {
        const r = await saveToServer(img, img.name, img.type || "image/jpeg");
        uploaded.push(r);
      } catch (err) {
        console.error("Image save failed:", err);
      }
    }

    for (const f of files) {
      if (f.size === 0) continue;
      try {
        const r = await saveToServer(
          f,
          f.name,
          f.type || "application/octet-stream"
        );
        uploaded.push(r);
      } catch (err) {
        console.error("File save failed:", err);
      }
    }

    if (voice && voice.size > 0) {
      try {
        const r = await saveToServer(
          voice,
          "voice.webm",
          voice.type || "audio/webm"
        );
        uploaded.push(r);
      } catch (err) {
        console.error("Voice save failed:", err);
      }
    }

    // ✅ Absolute URL for attachments
    const reqUrl = new URL(req.url);
    const baseUrl = `${reqUrl.protocol}//${reqUrl.host}`;

    const attachmentLines = uploaded.map(
      (u) => `${u.name} (${u.mimeType}) — ${baseUrl}${u.url}`
    );
    const bodyWithAttachments =
      attachmentLines.length > 0
        ? `${body}\n\n--- Attachments ---\n${attachmentLines.join("\n")}`
        : body;

    // ===== Save to Sheet =====
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

    const auth = getSheetAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // ✅ Serial ID
    const nextId = await getNextId(sheets, sheetId, "Inbox");

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Inbox!A:H",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            nextId,
            from,
            email,
            phone,
            subject,
            bodyWithAttachments,
            source,
            new Date().toISOString(),
          ],
        ],
      },
    });

    return NextResponse.json({
      ok: true,
      id: nextId,
      attachments: uploaded.map((u) => ({
        name: u.name,
        url: `${baseUrl}${u.url}`,
      })),
    });
  } catch (err) {
    console.error("Chat error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown" },
      { status: 500 }
    );
  }
}