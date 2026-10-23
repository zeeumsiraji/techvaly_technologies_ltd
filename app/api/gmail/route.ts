import { NextResponse } from "next/server";
import { google } from "googleapis";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    // ✅ সেশন বা ইউজার টোকেনের বদলে অফিসিয়াল Refresh Token ব্যবহার করা হচ্ছে
    const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
    
    if (!refreshToken) {
      return NextResponse.json(
        { ok: false, error: "GMAIL_REFRESH_TOKEN is missing in .env.local" },
        { status: 500 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_GMAIL_CLIENT_ID,
      process.env.GOOGLE_GMAIL_CLIENT_SECRET
    );
    
    // টোকেন সেট করা হলো
    oauth2Client.setCredentials({ refresh_token: refreshToken });

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const { searchParams } = new URL(req.url);
    const pageToken = searchParams.get("pageToken") || undefined;

    // ✅ ২০টি করে মেইল আনবে (আপনি চাইলে বাড়াতে পারেন)
    const res = await gmail.users.messages.list({
      userId: "me",
      maxResults: 20,
      pageToken,
    });

    const messages = res.data.messages || [];
    const nextPageToken = res.data.nextPageToken;

    const detailedMessages = await Promise.all(
      messages.map(async (msg) => {
        const detail = await gmail.users.messages.get({
          userId: "me",
          id: msg.id!,
          format: "metadata",
          metadataHeaders: ["From", "Subject", "Date"],
        });

        const headers = detail.data.payload?.headers || [];
        const getHeader = (name: string) =>
          headers.find((h) => h.name === name)?.value || "";

        return {
          id: msg.id,
          from: getHeader("From"),
          subject: getHeader("Subject"),
          date: getHeader("Date"),
          snippet: detail.data.snippet,
        };
      })
    );

    return NextResponse.json({
      ok: true,
      messages: detailedMessages,
      nextPageToken,
    });
  } catch (err) {
    console.error("Gmail API Error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown" },
      { status: 500 }
    );
  }
}