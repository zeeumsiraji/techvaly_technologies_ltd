"use client";

import { Bell, Search, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3 bg-slate-100 px-3 py-2 rounded-md w-80">
        <Search size={16} className="text-slate-500" />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="text-sm font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
}