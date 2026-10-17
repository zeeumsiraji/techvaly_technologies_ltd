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
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
}

interface ParsedAttachment {
  name: string;
  mimeType: string;
  url: string;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "email required" },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Inbox!A:H",
    });

    const rows = res.data.values ?? [];
    if (rows.length < 2) {
      return NextResponse.json({ ok: true, replies: [] });
    }

    const [headers, ...data] = rows;

    // ✅ Case-insensitive header mapping
    const headersLower = headers.map((h) => String(h).toLowerCase());
    const col = (name: string) => headersLower.indexOf(name.toLowerCase());

    const idIdx = col("id");
    const fromIdx = col("from");
    const emailIdx = col("email");
    const bodyIdx = col("body");
    const sourceIdx = col("source");
    const dateIdx = col("date");

    if (emailIdx < 0 || bodyIdx < 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "Required columns (email, body) not found",
          headers,
        },
        { status: 500 }
      );
    }

    const targetEmail = email.toLowerCase();

    const replies = data
      // Filter: same email + Admin Reply source
      .filter((row) => {
        const rowEmail = String(row[emailIdx] ?? "").toLowerCase();
        const source = String(row[sourceIdx] ?? "").toLowerCase();
        return (
          rowEmail === targetEmail && source.includes("admin reply")
        );
      })
      // Map: parse body → text + attachments
      .map((row) => {
        const rawBody = String(row[bodyIdx] ?? "");

        // Split body by marker
        const parts = rawBody.split("--- Attachments ---");
        const textPart = (parts[0] ?? "").trim();
        const attachPart = (parts[1] ?? "").trim();

        // Parse attachment lines
        const attachments: ParsedAttachment[] = attachPart
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean)
          .map((line) => {
            // Format: "filename (mimeType) — url"
            const m = line.match(/^(.+?)\s+\(([^)]+)\)\s+—\s+(\S+)$/);
            if (!m) return null;
            const [, name, mimeType, url] = m;
            return { name, mimeType, url };
          })
          .filter((x): x is ParsedAttachment => x !== null);

        return {
          id: String(row[idIdx] ?? ""),
          from: String(row[fromIdx] ?? ""),
          message: textPart,
          attachments,
          date: String(row[dateIdx] ?? ""),
        };
      })
      // Sort by date ascending (oldest first)
      .sort((a, b) => {
        const da = new Date(a.date).getTime() || 0;
        const db = new Date(b.date).getTime() || 0;
        return da - db;
      });

    return NextResponse.json({ ok: true, replies });
  } catch (err) {
    console.error("Replies error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown" },
      { status: 500 }
    );
  }
}