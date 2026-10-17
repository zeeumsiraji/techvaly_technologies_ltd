import { NextResponse } from "next/server";
import { google } from "googleapis";

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

// Find row number in sheet by ID
async function findRowById(
  sheets: ReturnType<typeof google.sheets>,
  sheetId: string,
  targetId: string
): Promise<number> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Meetings!A:A",
  });

  const rows = res.data.values ?? [];
  for (let i = 1; i < rows.length; i++) {
    // i=0 is header
    if (String(rows[i][0] ?? "") === targetId) {
      return i + 1; // Sheet row is 1-indexed
    }
  }
  throw new Error("Meeting not found");
}

// ===== PUT — Update =====
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const fd = await req.formData();

    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const rowNum = await findRowById(sheets, sheetId, id);

    // Get existing row data first (to preserve attachments)
    const existingRes = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `Meetings!A${rowNum}:J${rowNum}`,
    });
    const existing = existingRes.data.values?.[0] ?? [];

    const name = String(fd.get("name") ?? "");
    const purpose = String(fd.get("purpose") ?? "");
    const date = String(fd.get("date") ?? "");
    const followUp = String(fd.get("followUp") ?? "");
    const number = String(fd.get("number") ?? "");
    const location = String(fd.get("location") ?? "");
    const remarks = String(fd.get("remarks") ?? "");
    const category = String(fd.get("category") ?? "");
    const draft = String(fd.get("draft") ?? "");

    // Preserve existing attachments from remarks
    const existingRemarks = String(existing[7] ?? "");
    const attachMatch = existingRemarks.match(
      /(--- Attachments ---[\s\S]*)$/
    );
    const attachmentsPart = attachMatch ? `\n\n${attachMatch[1]}` : "";

    const finalRemarks = remarks + attachmentsPart;

    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `Meetings!A${rowNum}:J${rowNum}`,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            id,
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

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error("Update error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown" },
      { status: 500 }
    );
  }
}

// ===== DELETE =====
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const rowNum = await findRowById(sheets, sheetId, id);

    // Get sheet's gid
    const meta = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    });
    const sheetMeta = meta.data.sheets?.find(
      (s) => s.properties?.title === "Meetings"
    );
    const sheetGid = sheetMeta?.properties?.sheetId ?? 0;

    // Delete row
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: sheetId,
      requestBody: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: sheetGid,
                dimension: "ROWS",
                startIndex: rowNum - 1, // 0-indexed
                endIndex: rowNum,
              },
            },
          },
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Delete error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown" },
      { status: 500 }
    );
  }
}