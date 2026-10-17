"use client";

import { useState } from "react";
import { useSheet } from "@/lib/dashboard/useSheet";
import { Mail, Reply } from "lucide-react";
import MediaPreview from "@/components/media/MediaPreview";
import AdminReplyForm from "@/components/forms/AdminReplyForm";

type RawRow = Record<string, string>;

interface InboxItem {
  id: string;
  from: string;
  email: string;
  phone: string;
  subject: string;
  body: string;
  source: string;
  date: string;
}

function normalize(row: RawRow): InboxItem {
  const get = (...keys: string[]): string => {
    for (const k of keys) {
      const v = row[k];
      if (v !== undefined && v !== null && v !== "") return String(v);
    }
    return "";
  };
  return {
    id: get("id", "ID", "_id"),
    from: get("from", "From", "name", "Name"),
    email: get("email", "Email"),
    phone: get("phone", "Phone"),
    subject: get("subject", "Subject"),
    body: get("body", "Body"),
    source: get("source", "Source"),
    date: get("date", "Date"),
  };
}

export default function InboxPage() {
  const { data, loading, error } = useSheet<RawRow>("Inbox");
  const [replyTo, setReplyTo] = useState<InboxItem | null>(null);

  const items = data.map(normalize);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">📥 Inbox</h1>

      {loading && (
        <p className="text-center p-10 text-slate-500">⏳ লোড হচ্ছে...</p>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && (
        <div className="bg-white rounded-lg border border-slate-200 divide-y divide-slate-100">
          {items.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <Mail size={40} className="mx-auto text-slate-300 mb-3" />
              কোনো Message নেই
            </div>
          ) : (
            items.map((m, i) => (
              <div key={m.id || i} className="p-4 hover:bg-slate-50">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium">
                        {m.from || "(no name)"}
                      </span>
                      {m.source && (
                        <span className="px-2 py-0.5 text-[10px] rounded bg-slate-100 text-slate-600">
                          {m.source}
                        </span>
                      )}
                    </div>

                    {m.subject && (
                      <p className="text-sm font-medium text-slate-800 mt-1">
                        {m.subject}
                      </p>
                    )}

                    {(m.email || m.phone) && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {m.email && `✉️ ${m.email}`}
                        {m.phone && ` • 📞 ${m.phone}`}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-slate-400">
                      {formatDate(m.date)}
                    </span>
                    <button
                      onClick={() => setReplyTo(m)}
                      className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      <Reply size={11} />
                      Reply
                    </button>
                  </div>
                </div>

                {/* Body + Attachments — MediaPreview auto-render করে */}
                <div className="mt-2">
                  <MediaPreview body={m.body} />
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Reply Form */}
      {replyTo && (
        <AdminReplyForm
          original={replyTo}
          onClose={() => setReplyTo(null)}
          onSuccess={() => setReplyTo(null)}
        />
      )}
    </div>
  );
}

function formatDate(d: string): string {
  if (!d) return "";
  try {
    const date = new Date(d);
    if (isNaN(date.getTime())) return d;
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return d;
  }
}