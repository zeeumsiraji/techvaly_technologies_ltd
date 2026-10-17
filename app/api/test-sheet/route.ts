import { NextResponse } from "next/server";
import { google } from "googleapis";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!email || !key || !sheetId) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing env values",
          debug: {
            hasEmail: !!email,
            hasKey: !!key,
            hasSheetId: !!sheetId,
          },
        },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email,
      key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Meetings!A1:J1",
    });

    return NextResponse.json({
      ok: true,
      headers: res.data.values?.[0] ?? [],
      message: "Connection successful!",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}