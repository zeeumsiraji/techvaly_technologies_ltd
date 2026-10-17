"use client";

import { useSheet } from "@/lib/dashboard/useSheet";
import { Bell } from "lucide-react";

type NoticeRow = Record<string, string>;

export default function NoticesPage() {
  const { data, loading, error } = useSheet<NoticeRow>("Notices");

  const priorityColor = (p: string) =>
    p === "High"
      ? "bg-red-100 text-red-800"
      : p === "Medium"
      ? "bg-amber-100 text-amber-800"
      : "bg-slate-100 text-slate-700";

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">🔔 Notices</h1>

      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">⚠️ {error}</div>}

      {!loading && !error && (
        <div className="space-y-3">
          {data.length === 0 ? (
            <div className="bg-white rounded-lg border border-slate-200 p-12 text-center text-slate-500">
              <Bell size={40} className="mx-auto text-slate-300 mb-3" />
              কোনো Notice নেই
            </div>
          ) : (
            data.map((n, i) => (
              <div
                key={n["id"] ?? i}
                className="bg-white rounded-lg border border-slate-200 p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{n["Title"]}</h3>
                  <span className={`px-2 py-0.5 text-[10px] rounded ${priorityColor(n["Priority"])}`}>
                    {n["Priority"]}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{n["Body"]}</p>
                <div className="flex gap-3 text-xs text-slate-400 mt-2">
                  <span>👤 {n["Author"]}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}