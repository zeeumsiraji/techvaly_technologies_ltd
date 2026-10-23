import nodemailer from 'nodemailer';

// ✅ Gmail Transporter তৈরি করা হলো
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL এর জন্য true
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

interface MailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail({ to, subject, html, replyTo }: MailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"BdSoft" <${process.env.GMAIL_USER}>`, // প্রেরকের নাম ও ইমেইল
      to,
      subject,
      html,
      replyTo, // কাস্টমারকে সরাসরি রিপ্লাই দেওয়ার জন্য
    });

    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error };
  }
}