"use client";

import { useSheet } from "@/lib/dashboard/useSheet";
import { Plus } from "lucide-react";

type ProductRow = Record<string, string>;

export default function ProductsPage() {
  const { data, loading, error } = useSheet<ProductRow>("Products");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">🛍️ Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Plus size={16} /> Add Product
        </button>
      </div>

      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">⚠️ {error}</div>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((p, i) => (
            <div
              key={p["id"] ?? i}
              className="bg-white rounded-lg border border-slate-200 p-4"
            >
              <div className="h-32 bg-slate-100 rounded-md mb-3 flex items-center justify-center text-slate-400">
                📦
              </div>
              <h3 className="font-semibold">{p["নাম"]}</h3>
              <p className="text-sm text-slate-500">{p["ক্যাটাগরি"]}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-blue-600 font-bold">
                  ৳ {Number(p["দাম"] || 0).toLocaleString("bn-BD")}
                </span>
                <span className="text-xs text-green-600">
                  Stock: {p["Stock"]}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}