"use client";

import { useState, useRef, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image"; // ✅ Next/Image ইমপোর্ট
import { User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";

// ✅ Custom Type ডিফাইন করা হলো
interface ExtendedUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  dbName?: string;
}

export default function LoginDropdown() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return <div className="text-sm text-gray-400">Loading...</div>;
  }

  // ✅ session.user কে ExtendedUser টাইপে কাস্ট করা হলো
  const extUser = session?.user as ExtendedUser | undefined;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md text-sm transition"
      >
        {session?.user ? (
          <>
            {extUser?.image ? (
              <Image
                src={extUser.image}
                alt="User"
                width={20}
                height={20}
                className="w-5 h-5 rounded-full"
              />
            ) : (
              <User size={16} />
            )}
            <span>{extUser?.dbName || extUser?.name}</span>
          </>
        ) : (
          <>
            <User size={16} />
            <span>Admin Login</span>
          </>
        )}
        <ChevronDown size={14} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute bottom-full mb-2 right-0 w-64 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50">
          {session?.user ? (
            // === লগইন করা অবস্থায় ===
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                {extUser?.image ? (
                  <Image
                    src={extUser.image}
                    alt="User"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <User size={20} />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {extUser?.dbName || extUser?.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {extUser?.role || "Member"}
                  </p>
                </div>
              </div>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 w-full text-left text-sm text-slate-700 p-2 rounded-md hover:bg-slate-50 transition"
              >
                <LayoutDashboard size={16} />
                Dashboard
              </Link>

              <button
                onClick={() => {
                  setOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="flex items-center gap-2 w-full text-left text-sm text-red-600 p-2 rounded-md hover:bg-red-50 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            // === লগইন না করা অবস্থায় ===
            <div className="p-4 space-y-3">
              <div className="text-center pb-2">
                <p className="text-sm font-semibold text-slate-800">
                  BdSoft Team Login
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  শুধুমাত্র অনুমোদিত ইমেইল
                </p>
              </div>

              <button
                onClick={() => {
                  setOpen(false);
                  signIn("google", { callbackUrl: "/dashboard" });
                }}
                className="w-full flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 py-2.5 rounded-md font-medium hover:bg-slate-50 transition text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google দিয়ে সাইন ইন
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}