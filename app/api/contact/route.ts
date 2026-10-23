import { NextResponse } from "next/server";
import { google } from "googleapis";
import { saveToServer } from "@/lib/upload-server";
import { sendMail } from "@/lib/mailer"; // ⭐ নতুন ইমপোর্ট

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
      range: "Contacts!A:A",
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
        { ok: false, error: "Name, email, and number are required" },
        { status: 400 }
      );
    }

    // ১. ফাইল থাকলে সার্ভারে আপলোড
    let fileUrl = "";
    if (file && file.size > 0) {
      try {
        const uploaded = await saveToServer(file, file.name, file.type);
        fileUrl = uploaded.url; 
      } catch (err) {
        console.error("File upload failed:", err);
      }
    }

    // ২. ডেটা Google Sheet-এ সেভ করা
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const nextId = await getNextId(sheets, sheetId);

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Contacts!A:H",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            nextId,
            name,
            number,
            email,
            "Contact Form",
            new Date().toISOString(),
            address,
            fileUrl, 
          ],
        ],
      },
    });

    // ৩. ⭐ এডমিনকে নোটিফিকেশন মেইল পাঠানো
    // (নোট: এখানে ট্রাই-ক্যাচ দেওয়া হয়েছে যাতে মেইল ফেইল করলেও ফর্ম সাবমিট ফেইল না করে)
    try {
      await sendMail({
        to: process.env.GMAIL_USER as string, // আপনার জিমেইলে যাবে
        subject: `New Contact Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px;">
            <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${number}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><strong>Address:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${address}</td>
              </tr>
              ${
                fileUrl
                  ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Attachment:</strong></td>
                <td style="padding: 8px 0;"><a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}${fileUrl}" style="color: #2563eb;">Click to view file</a></td>
              </tr>`
                  : ""
              }
            </table>
          </div>
        `,
        replyTo: email, // ✅ আপনি যেন সরাসরি কাস্টমারকে রিপ্লাই দিতে পারেন
      });
    } catch (mailError) {
      console.error("Notification email failed:", mailError);
      // ইমেইল ফেইল করলেও ফর্ম সাবমিট সফল হবে
    }

    return NextResponse.json({ ok: true, message: "Contact saved" });
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}