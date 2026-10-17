"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useSheet } from "@/lib/dashboard/useSheet";
import { Plus } from "lucide-react";

type InvestmentRow = Record<string, string>;

export default function InvestmentsPage() {
  const { data, loading, error } = useSheet<InvestmentRow>("Investments");

  const fmt = (v: string) => `৳ ${Number(v || 0).toLocaleString("bn-BD")}`;

  const columns = [
    { key: "তারিখ", label: "তারিখ" },
    { key: "খাত", label: "খাত" },
    { key: "পরিমাণ", label: "পরিমাণ", render: (r: InvestmentRow) => fmt(r["পরিমাণ"]) },
    { key: "উৎস", label: "উৎস" },
    { key: "প্রত্যাশিত রিটার্ন", label: "প্রত্যাশিত রিটার্ন", render: (r: InvestmentRow) => fmt(r["প্রত্যাশিত রিটার্ন"]) },
    { key: "প্রাপ্ত রিটার্ন", label: "প্রাপ্ত রিটার্ন", render: (r: InvestmentRow) => fmt(r["প্রাপ্ত রিটার্ন"]) },
    {
      key: "স্ট্যাটাস",
      label: "স্ট্যাটাস",
      render: (r: InvestmentRow) => {
        const s = r["স্ট্যাটাস"];
        const color =
          s === "Active"
            ? "bg-green-100 text-green-800"
            : s === "Pending"
            ? "bg-amber-100 text-amber-800"
            : "bg-slate-100 text-slate-700";
        return <span className={`px-2 py-1 text-xs rounded ${color}`}>{s}</span>;
      },
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📈 Investments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Plus size={16} /> Add Investment
        </button>
      </div>
      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">⚠️ {error}</div>}
      {!loading && !error && <DataTable columns={columns} data={data} />}
    </div>
  );
}