import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/", // লগইন না থাকলে হোমপেজে পাঠাবে (সেখানে Footer-এ লগইন অপশন আছে)
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/meetings/:path*",
    "/api/customers/:path*",
    "/api/reply/:path*",
  ],
};