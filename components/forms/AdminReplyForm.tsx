"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";
import MediaTrigger from "@/components/media/MediaTrigger";
import type { SelectedFile } from "@/components/media/types";

interface Original {
  id: string;
  from: string;
  email: string;
  subject: string;
}

interface Props {
  original: Original;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AdminReplyForm({
  original,
  onClose,
  onSuccess,
}: Props) {
  const [subject, setSubject] = useState(
    original.subject?.startsWith("Re: ")
      ? original.subject
      : `Re: ${original.subject ?? ""}`
  );
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<SelectedFile[]>([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!message.trim() && attachments.length === 0) {
      setError("Message বা attachment দিন");
      return;
    }

    setSending(true);
    try {
      const fd = new FormData();
      fd.append("to", original.email);
      fd.append("toName", original.from);
      fd.append("subject", subject);
      fd.append("message", message);
      fd.append("originalId", original.id);
      fd.append("source", "Admin Reply");

      // Attachments from MediaTrigger
      for (const a of attachments) {
        if (a.type === "link") {
          fd.append("links", a.url ?? "");
        } else {
          fd.append(`${a.type}s`, a.file, a.name);
        }
      }

      const res = await fetch("/api/reply", { method: "POST", body: fd });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? "Failed");

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 sticky top-0 bg-white">
          <div>
            <h2 className="text-lg font-semibold">
              ↩️ Reply to {original.from}
            </h2>
            <p className="text-xs text-slate-500">
              To: {original.email}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-md"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Subject */}
          <div>
            <label className="text-sm text-slate-600 block mb-1">
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-slate-600 block mb-1">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="আপনার reply লিখুন..."
              className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Attachments */}
          <MediaTrigger
            preset="adminReply"
            onChange={setAttachments}
          />

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700">
              ⚠️ {error}
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={sending}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
            >
              <Send size={14} />
              {sending ? "পাঠানো হচ্ছে..." : "Send Reply"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}