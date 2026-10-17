"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useSheet } from "@/lib/dashboard/useSheet";
import { Download } from "lucide-react";

type ReportRow = Record<string, string>;

export default function ReportsPage() {
  const { data, loading, error } = useSheet<ReportRow>("Reports");

  const columns = [
    { key: "নাম", label: "রিপোর্টের নাম" },
    {
      key: "Type",
      label: "Type",
      render: (r: ReportRow) => (
        <span className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-700">
          {r["Type"] || "—"}
        </span>
      ),
    },
    { key: "Period", label: "Period" },
    { key: "GeneratedAt", label: "তৈরি হয়েছে" },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <div className="flex gap-2">
          <button className="text-xs text-blue-600 hover:underline">View</button>
          <button className="text-xs text-slate-600 hover:underline flex items-center gap-1">
            <Download size={12} /> PDF
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📊 Reports</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Download size={16} /> Export All
        </button>
      </div>
      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">⚠️ {error}</div>}
      {!loading && !error && <DataTable columns={columns} data={data} />}
    </div>
  );
}