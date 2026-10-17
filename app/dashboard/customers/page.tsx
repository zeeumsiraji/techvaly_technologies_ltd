"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useSheet } from "@/lib/dashboard/useSheet";
import { Plus } from "lucide-react";

type CustomerRow = {
  id: string;
  name: string;
  phone: string;
  address: string;
  category: string;
  totalMeetings: string;
  totalSales: string;
  lastContact: string;
};

export default function CustomersPage() {
  const { data, loading, error } = useSheet<CustomerRow>("Customers");

  const columns = [
    { key: "name", label: "নাম" },
    { key: "phone", label: "ফোন" },
    { key: "address", label: "ঠিকানা" },
    {
      key: "category",
      label: "ক্যাটাগরি",
      render: (r: CustomerRow) => (
        <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
          {r.category || "—"}
        </span>
      ),
    },
    { key: "totalMeetings", label: "মোট মিটিং" },
    {
      key: "totalSales",
      label: "মোট বিক্রয়",
      render: (r: CustomerRow) =>
        `৳ ${Number(r.totalSales || 0).toLocaleString("bn-BD")}`,
    },
    { key: "lastContact", label: "শেষ যোগাযোগ" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">👥 Customers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Plus size={16} /> Add Customer
        </button>
      </div>
      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">⚠️ {error}</div>}
      {!loading && !error && <DataTable columns={columns} data={data} />}
    </div>
  );
}