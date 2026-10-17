"use client";

import { useState } from "react";
import DataTable from "@/components/dashboard/DataTable";
import { useSheet } from "@/lib/dashboard/useSheet";
import MeetingForm from "@/components/forms/MeetingForm";
import MediaPreview from "@/components/media/MediaPreview";
import { Plus, Eye, Pencil, Trash2, Paperclip } from "lucide-react";

type MeetingRow = {
  id: string;
  name: string;
  purpose: string;
  date: string;
  followUp: string;
  number: string;
  location: string;
  remarks: string;
  category: string;
  draft: string;
};

function parseAttachments(remarks: string) {
  if (!remarks) return { text: "", count: 0, types: [] as string[] };
  const parts = remarks.split("--- Attachments ---");
  const text = (parts[0] ?? "").trim();
  const attachPart = (parts[1] ?? "").trim();
  const lines = attachPart
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const types: string[] = [];
  lines.forEach((line) => {
    const m = line.match(/\(([^)]+)\)/);
    if (m) {
      const mime = m[1].toLowerCase();
      if (mime.startsWith("image/")) types.push("image");
      else if (mime.startsWith("audio/")) types.push("voice");
      else if (mime === "application/pdf") types.push("pdf");
      else types.push("file");
    } else {
      types.push("file");
    }
  });

  return { text, count: lines.length, types };
}

export default function MeetingsPage() {
  const { data, loading, error } = useSheet<MeetingRow>("Meetings");
  const [selected, setSelected] = useState<MeetingRow | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  
  // ✅ নতুন State যোগ করা হলো
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<MeetingRow | null>(null);
  const [optimisticRows, setOptimisticRows] = useState<MeetingRow[]>([]);
  const [deleting, setDeleting] = useState<string | null>(null);

  // ✅ LATEST FIRST: Optimistic (উপরে) + Sheet (reverse করে নিচে)
  const allData: MeetingRow[] = [
    ...optimisticRows,
    ...[...data].reverse(),
  ];

  const filtered = allData
    .filter((m) => {
      const s = search.toLowerCase();
      return (
        (m.name ?? "").toLowerCase().includes(s) ||
        (m.number ?? "").includes(search) ||
        (m.location ?? "").toLowerCase().includes(s)
      );
    })
    .filter((m) => category === "all" || m.category === category);

  // ✅ Delete Handler
  const handleDelete = async (row: MeetingRow) => {
    if (!confirm(`"${row.name}" — Meeting-টি Delete করবেন?`)) return;

    setDeleting(row.id);
    try {
      const res = await fetch(`/api/meetings/${row.id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? "Delete failed");

      setOptimisticRows((prev) => prev.filter((r) => r.id !== row.id));
      window.location.reload();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeleting(null);
    }
  };

  // ✅ Edit Handler
  const handleEdit = (row: MeetingRow) => {
    setEditing(row);
    setShowForm(true);
  };

  const columns = [
    { key: "name", label: "নাম" },
    { key: "purpose", label: "উদ্দেশ্য" },
    { key: "date", label: "ডেট" },
    {
      key: "followUp",
      label: "Follow-up",
      render: (r: MeetingRow) => (
        <span className="px-2 py-1 text-xs rounded bg-amber-100 text-amber-800">
          {r.followUp || "—"}
        </span>
      ),
    },
    { key: "number", label: "Number" },
    { key: "location", label: "Location" },
    {
      key: "remarks",
      label: "Remarks",
      render: (r: MeetingRow) => {
        const { text } = parseAttachments(r.remarks);
        return (
          <span className="text-slate-500 line-clamp-1 max-w-50">
            {text || "—"}
          </span>
        );
      },
    },
    {
      key: "attachments",
      label: "📎",
      render: (r: MeetingRow) => {
        const { count, types } = parseAttachments(r.remarks);
        if (count === 0) return <span className="text-slate-300">—</span>;
        const icons = { image: "🖼️", voice: "🎤", pdf: "📄", file: "📎" };
        const uniqueTypes = Array.from(new Set(types)).slice(0, 3);
        return (
          <div className="flex items-center gap-1">
            {uniqueTypes.map((t, i) => (
              <span key={i} className="text-sm">
                {icons[t as keyof typeof icons]}
              </span>
            ))}
            <span className="text-[10px] text-slate-400">({count})</span>
          </div>
        );
      },
    },
    {
      key: "category",
      label: "Category",
      render: (r: MeetingRow) => (
        <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
          {r.category || "—"}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (r: MeetingRow) => (
        <div className="flex gap-1">
          <button
            onClick={() => setSelected(r)}
            className="p-1.5 hover:bg-slate-100 rounded"
            title="View"
          >
            <Eye size={14} />
          </button>
          {/* ✅ Edit Button Fix */}
          <button 
            onClick={() => handleEdit(r)}
            className="p-1.5 hover:bg-blue-50 rounded text-blue-600" 
            title="Edit"
          >
            <Pencil size={14} />
          </button>
          {/* ✅ Delete Button Fix */}
          <button
            onClick={() => handleDelete(r)}
            disabled={deleting === r.id}
            className="p-1.5 hover:bg-red-50 rounded text-red-600 disabled:opacity-40"
            title="Delete"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📅 Meetings</h1>
        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={16} /> Add New
        </button>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search name / Number / Location"
          className="border border-slate-200 rounded-md px-3 py-2 text-sm w-72"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-slate-200 rounded-md px-3 py-2 text-sm"
        >
          <option value="all">সব Category</option>
          <option value="Client">Client</option>
          <option value="Vendor">Vendor</option>
          <option value="Partner">Partner</option>
          <option value="Lead">Lead</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {loading && optimisticRows.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-lg p-10 text-center text-slate-500">
          ⏳ লোড হচ্ছে...
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          ⚠️ Error: {error}
        </div>
      )}
      {(!loading || optimisticRows.length > 0) && !error && (
        <DataTable columns={columns} data={filtered} />
      )}

      {/* ✅ Add / Edit Modal */}
      {showForm && (
        <MeetingForm
          existing={editing}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
          onSuccess={(newMeeting) => {
            setOptimisticRows((prev) => [
              newMeeting as unknown as MeetingRow,
              ...prev,
            ]);
            setShowForm(false);
            setEditing(null);
            setTimeout(() => {
              setOptimisticRows((prev) =>
                prev.filter((r) => r.id !== newMeeting.id)
              );
            }, 2000);
          }}
        />
      )}

      {/* ✅ Detail Slide Panel */}
      {selected && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="flex-1 bg-black/30"
            onClick={() => setSelected(null)}
          />
          <div className="w-125 bg-white h-full overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 sticky top-0 bg-white">
              <h3 className="text-lg font-semibold">👤 {selected.name}</h3>
              
              {/* ✅ Slide Panel-এ Edit Button */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelected(null);
                    handleEdit(selected);
                  }}
                  className="p-2 hover:bg-blue-50 rounded-md text-blue-600"
                  title="Edit"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 hover:bg-slate-100 rounded-md"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4 text-sm">
              <Info label="📞 Number" value={selected.number} />
              <Info label="📍 Location" value={selected.location} />
              <Info label="🏷️ Category" value={selected.category} />
              <Info label="🎯 উদ্দেশ্য" value={selected.purpose} />
              <Info label="📅 Meeting Date" value={selected.date} />
              <Info label="🔄 Follow-up" value={selected.followUp} />

              <div>
                <p className="text-xs text-slate-500 mb-1">
                  📝 আলোচনার ড্রাফট
                </p>
                <div className="bg-slate-50 rounded-md p-3 text-slate-700 whitespace-pre-wrap text-xs">
                  {selected.draft || "—"}
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                  <Paperclip size={11} />
                  Attachments & Remarks
                </p>
                <MediaPreview body={selected.remarks} />
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
                  ✅ Mark Done
                </button>
                <a
                  href={`tel:${selected.number}`}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm text-center hover:bg-blue-700"
                >
                  📞 Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-2">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-800">{value || "—"}</span>
    </div>
  );
}