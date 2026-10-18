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

async function getNextId(sheets: ReturnType<typeof google.sheets>, sheetId: string) {
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

    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const number = String(fd.get("number") ?? "");
    const address = String(fd.get("address") ?? "");
    const file = fd.get("file") as File | null;

    if (!name || !email || !number) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // ফাইল আপলোড
    let fileUrl = "";
    let fileName = "";
    if (file && file.size > 0) {
      try {
        const uploaded = await saveToServer(file, file.name, file.type);
        fileUrl = uploaded.url;
        fileName = uploaded.name;
      } catch (err) {
        console.error("File upload failed:", err);
      }
    }

    // Google Sheet-এ ডেটা সেভ (Inbox ট্যাবে)
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const nextId = await getNextId(sheets, sheetId);

    // Inbox-এ সেভ করার জন্য Body তৈরি
    let bodyText = `Address: ${address}`;
    if (fileUrl || fileName) {
      bodyText += `\n\n--- Attachments ---\n${fileName || "CV.pdf"} (application/pdf) — ${fileUrl}`;
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Inbox!A:H",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            nextId,
            name,
            email,
            number,
            "Career Application", // Subject
            bodyText,             // Body
            "Career Page",        // Source
            new Date().toISOString(),
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true, message: "Application saved" });
  } catch (err) {
    console.error("Career API Error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}