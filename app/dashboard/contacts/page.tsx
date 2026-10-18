"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useSheet } from "@/lib/dashboard/useSheet";
import { Plus, Phone, MessageCircle, Mail, FileText, ExternalLink } from "lucide-react";

type RawRow = Record<string, string>;

interface ContactItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  lastTalk: string;
  address: string;
  file: string;
}

function normalize(row: RawRow): ContactItem {
  const get = (...keys: string[]): string => {
    for (const k of keys) {
      const v = row[k];
      if (v !== undefined && v !== null && v !== "") return String(v);
    }
    return "";
  };

  return {
    id: get("id", "ID"),
    name: get("name", "Name", "নাম"),
    phone: get("phone", "Phone", "ফোন"),
    email: get("email", "Email", "ইমেইল"),
    type: get("type", "Type", "টাইপ"),
    lastTalk: get("lastTalk", "LastTalk", "last_talk", "শেষ কথা", "সর্বশেষ কথা"),
    address: get("address", "Address", "ঠিকানা"),
    file: get("file", "File", "files", "attachment", "Attachment"),
  };
}

export default function ContactsPage() {
  const { data, loading, error } = useSheet<RawRow>("Contacts");
  
  // ✅ Sheet ডেটা Normalize করা হলো এবং Reverse করা হলো (নতুন আগে)
  const items = [...data].map(normalize).reverse(); 

  const columns = [
    { key: "name", label: "নাম" },
    { key: "phone", label: "ফোন" },
    { key: "email", label: "ইমেইল" },
    {
      key: "type",
      label: "টাইপ",
      render: (r: ContactItem) => (
        <span className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-700">
          {r.type || "—"}
        </span>
      ),
    },
    {
      key: "lastTalk",
      label: "সর্বশেষ কথা",
      render: (r: ContactItem) => {
        if (!r.lastTalk) return "—";
        try {
          const d = new Date(r.lastTalk);
          if (isNaN(d.getTime())) return r.lastTalk; // যদি টেক্সট হয়
          return d.toLocaleDateString("en-GB");
        } catch {
          return r.lastTalk;
        }
      },
    },
    {
      key: "file",
      label: "File",
      render: (r: ContactItem) => {
        // ফাইল না থাকলে ড্যাশ
        if (!r.file || r.file.trim() === "") {
          return <span className="text-slate-300">—</span>;
        }

        // ✅ লিংক ফরম্যাট ঠিক করা (যদি /uploads/ না থাকে তবে যোগ করা)
        const fileUrl = r.file.startsWith("http")
          ? r.file
          : r.file.startsWith("/uploads")
          ? r.file
          : `/uploads/${r.file}`;

        return (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-blue-600 hover:underline bg-blue-50 px-2 py-1 rounded"
            title="Click to view file"
          >
            <FileText size={12} />
            <span className="max-w-20 truncate">
              {/* ফাইলের নাম থেকে অপ্রয়োজনীয় টাইমস্ট্যাম্প বাদ দেওয়া হচ্ছে */}
              {r.file.split("-").pop() || "File"}
            </span>
            <ExternalLink size={10} />
          </a>
        );
      },
    },
    {
      key: "actions",
      label: "Actions",
      render: (r: ContactItem) => (
        <div className="flex gap-1">
          <a 
            href={`tel:${r.phone}`} 
            className="p-1.5 hover:bg-slate-100 rounded text-blue-600"
            title="Call"
          >
            <Phone size={14} />
          </a>
          <a 
            href={`https://wa.me/${r.phone?.replace(/\D/g, "")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-1.5 hover:bg-slate-100 rounded text-green-600"
            title="WhatsApp"
          >
            <MessageCircle size={14} />
          </a>
          <a 
            href={`mailto:${r.email}`} 
            className="p-1.5 hover:bg-slate-100 rounded text-slate-600"
            title="Email"
          >
            <Mail size={14} />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📞 Contacts</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <Plus size={16} /> Add Contact
        </button>
      </div>

      {loading && <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>}
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          ⚠️ Error: {error}
        </div>
      )}
      
      {!loading && !error && <DataTable columns={columns} data={items} />}
    </div>
  );
}