import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { google } from "googleapis";

// ✅ Custom Types for Extended User/Session
interface ExtendedUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  dbName?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      try {
        const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
        const sheetId = process.env.GOOGLE_SHEET_ID;

        if (!email || !key || !sheetId) return false;

        const auth = new google.auth.JWT({
          email,
          key,
          scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const res = await sheets.spreadsheets.values.get({
          spreadsheetId: sheetId,
          range: "Users!A:E",
        });

        const rows = res.data.values ?? [];
        if (rows.length < 2) return false;

        const [headers, ...data] = rows;
        const headersLower = headers.map((h) => String(h).toLowerCase());
        
        const eIdx = headersLower.indexOf("email");
        const sIdx = headersLower.indexOf("status");
        const rIdx = headersLower.indexOf("role");
        const nIdx = headersLower.indexOf("name");

        if (eIdx < 0) return false;

        const userRow = data.find(
          (row) => String(row[eIdx] ?? "").toLowerCase() === user.email?.toLowerCase()
        );

        if (!userRow) return false;
        if (sIdx >= 0 && String(userRow[sIdx] ?? "").toLowerCase() !== "active") return false;

        const extUser = user as ExtendedUser;
        extUser.role = rIdx >= 0 ? String(userRow[rIdx] || "Member") : "Member";
        extUser.dbName = nIdx >= 0 ? String(userRow[nIdx] || user.name) : (user.name ?? "");

        return true;
      } catch (err) {
        console.error("SignIn error:", err);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        const extUser = user as ExtendedUser;
        token.role = extUser.role;
        token.dbName = extUser.dbName;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        const extSession = session.user as ExtendedUser;
        extSession.role = token.role as string;
        extSession.dbName = token.dbName as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/",
    error: "/",
  },

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
};