"use client";

import DataTable from "@/components/dashboard/DataTable";
import { dummyContacts } from "@/lib/dashboard/dummy-data";
import { Plus, Phone, MessageCircle, Mail } from "lucide-react";
import type { Contact } from "@/types";

export default function ContactsPage() {
  const columns = [
    { key: "name", label: "নাম" },
    { key: "phone", label: "ফোন" },
    { key: "email", label: "ইমেইল" },
    {
      key: "type",
      label: "টাইপ",
      render: (r: Contact) => (
        <span className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-700">
          {r.type}
        </span>
      ),
    },
    { key: "lastTalk", label: "সর্বশেষ কথা" },
    {
      key: "actions",
      label: "Actions",
      render: (r: Contact) => (
        <div className="flex gap-1">
          <a
            href={`tel:${r.phone}`}
            className="p-1.5 hover:bg-slate-100 rounded"
          >
            <Phone size={14} />
          </a>
          <button className="p-1.5 hover:bg-slate-100 rounded">
            <MessageCircle size={14} />
          </button>
          <button className="p-1.5 hover:bg-slate-100 rounded">
            <Mail size={14} />
          </button>
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
      <DataTable columns={columns} data={dummyContacts} />
    </div>
  );
}