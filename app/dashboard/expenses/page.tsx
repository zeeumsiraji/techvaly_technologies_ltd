"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useSheet } from "@/lib/dashboard/useSheet";
import { Plus } from "lucide-react";

type ExpenseRow = Record<string, string>;

export default function ExpensesPage() {
  const { data, loading, error } = useSheet<ExpenseRow>("Expenses");

  const columns = [
    { key: "তারিখ", label: "তারিখ" },
    { key: "খাত", label: "খাত" },
    { key: "বিবরণ", label: "বিবরণ" },
    {
      key: "পরিমাণ",
      label: "পরিমাণ",
      render: (r: ExpenseRow) =>
        `৳ ${Number(r["পরিমাণ"] || 0).toLocaleString("bn-BD")}`,
    },
    { key: "মাধ্যম", label: "পরিশোধ মাধ্যম" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">🧾 Expenses</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Plus size={16} /> Add Expense
        </button>
      </div>
      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">⚠️ {error}</div>}
      {!loading && !error && <DataTable columns={columns} data={data} />}
    </div>
  );
}