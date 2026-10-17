import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error("Missing Google Service Account credentials");
  }

  return new google.auth.JWT({
    email,
    key,
    scopes: SCOPES,
  });
}

export async function getSheetData<T = Record<string, string>>(
  sheetName: string
): Promise<T[]> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${sheetName}!A:Z`,
  });

  const rows: string[][] = (res.data.values ?? []) as string[][];
  if (rows.length < 2) return [];

  const [headers, ...dataRows] = rows;

  return dataRows.map((row: string[], index: number) => {
    const obj: Record<string, string> = {};

    headers.forEach((h: string, i: number) => {
      obj[String(h)] = row[i] ?? "";
    });

    // ✅ ID Normalize — Sheet-এ "ID" হলে lowercase "id"-ও copy
    if (obj.ID && !obj.id) {
      obj.id = obj.ID;
    }
    if (!obj.id) {
      obj.id = String(index + 1);
    }

    return obj as T;
  });
}