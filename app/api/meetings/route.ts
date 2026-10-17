import { NextResponse } from "next/server";
import { google } from "googleapis";
import { saveToServer } from "@/lib/upload-server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function getAuth() {
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
      range: "Meetings!A:A",
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

    const name = String(fd.get("name") ?? "");
    const purpose = String(fd.get("purpose") ?? "");
    const date = String(fd.get("date") ?? "");
    const followUp = String(fd.get("followUp") ?? "");
    const number = String(fd.get("number") ?? "");
    const location = String(fd.get("location") ?? "");
    const remarks = String(fd.get("remarks") ?? "");
    const category = String(fd.get("category") ?? "");
    const draft = String(fd.get("draft") ?? "");

    if (!name || !purpose || !date) {
      return NextResponse.json(
        { ok: false, error: "নাম, উদ্দেশ্য এবং ডেট — সব দিন" },
        { status: 400 }
      );
    }

    // Attachments
    const images = fd.getAll("images") as File[];
    const pdfs = fd.getAll("pdfs") as File[];
    const voices = fd.getAll("voices") as File[];

    const uploaded: { name: string; url: string; mimeType: string }[] = [];

    const uploadGroup = async (arr: File[], defaultMime: string) => {
      for (const f of arr) {
        if (f.size === 0) continue;
        try {
          const r = await saveToServer(f, f.name, f.type || defaultMime);
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

    await uploadGroup(images, "image/jpeg");
    await uploadGroup(pdfs, "application/pdf");
    await uploadGroup(voices, "audio/webm");

    // Build attachment lines
    const reqUrl = new URL(req.url);
    const baseUrl = `${reqUrl.protocol}//${reqUrl.host}`;
    const attachmentLines = uploaded.map(
      (u) => `${u.name} (${u.mimeType}) — ${baseUrl}${u.url}`
    );

    const finalRemarks =
      attachmentLines.length > 0
        ? `${remarks}\n\n--- Attachments ---\n${attachmentLines.join("\n")}`
        : remarks;

    // Save to Sheet
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const nextId = await getNextId(sheets, sheetId);

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Meetings!A:J",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            nextId,
            name,
            purpose,
            date,
            followUp,
            number,
            location,
            finalRemarks,
            category,
            draft,
          ],
        ],
      },
    });

    return NextResponse.json({
      ok: true,
      id: nextId,
      data: {
        id: nextId,
        name,
        purpose,
        date,
        followUp,
        number,
        location,
        remarks: finalRemarks,
        category,
        draft,
      },
    });
  } catch (err) {
    console.error("Meeting save error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown" },
      { status: 500 }
    );
  }
}