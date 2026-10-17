"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useSheet } from "@/lib/dashboard/useSheet";
import { Plus } from "lucide-react";

type UserRow = Record<string, string>;

export default function UsersPage() {
  const { data, loading, error } = useSheet<UserRow>("Users");

  const columns = [
    { key: "নাম", label: "নাম" },
    { key: "ইমেইল", label: "ইমেইল" },
    {
      key: "Role",
      label: "Role",
      render: (r: UserRow) => (
        <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
          {r["Role"] || "—"}
        </span>
      ),
    },
    { key: "শেষ Login", label: "শেষ Login" },
    {
      key: "স্ট্যাটাস",
      label: "স্ট্যাটাস",
      render: (r: UserRow) => (
        <span
          className={`px-2 py-1 text-xs rounded ${
            r["স্ট্যাটাস"] === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          {r["স্ট্যাটাস"] || "—"}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">👤 Users</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Plus size={16} /> Add User
        </button>
      </div>
      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">⚠️ {error}</div>}
      {!loading && !error && <DataTable columns={columns} data={data} />}
    </div>
  );
}