"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useSheet } from "@/lib/dashboard/useSheet";
import { Plus } from "lucide-react";

type SaleRow = Record<string, string>;

export default function SalesPage() {
  const { data, loading, error } = useSheet<SaleRow>("Sales");

  const fmt = (v: string) => {
    const n = Number(v || 0);
    return `৳ ${n.toLocaleString("bn-BD")}`;
  };

  const columns = [
    { key: "তারিখ", label: "তারিখ" },
    { key: "গ্রাহক", label: "গ্রাহক" },
    { key: "পণ্য", label: "পণ্য" },
    { key: "পরিমাণ", label: "পরিমাণ" },
    { key: "দাম", label: "দাম", render: (r: SaleRow) => fmt(r["দাম"]) },
    { key: "মোট", label: "মোট", render: (r: SaleRow) => fmt(r["মোট"]) },
    { key: "পরিশোধ", label: "পরিশোধ", render: (r: SaleRow) => fmt(r["পরিশোধ"]) },
    {
      key: "বাকি",
      label: "বাকি",
      render: (r: SaleRow) => {
        const due = Number(r["বাকি"] || 0);
        return due > 0 ? (
          <span className="text-red-600 font-medium">{fmt(r["বাকি"])}</span>
        ) : (
          <span className="text-green-600">✅</span>
        );
      },
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">💰 Sales</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Plus size={16} /> Add Sale
        </button>
      </div>

      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}
      {!loading && !error && <DataTable columns={columns} data={data} />}
    </div>
  );
}