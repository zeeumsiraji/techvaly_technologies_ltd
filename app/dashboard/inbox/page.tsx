"use client";

import { useState, useMemo, useEffect } from "react";
import { useSheet } from "@/lib/dashboard/useSheet";
import {
  Mail,
  Reply,
  Search,
  Inbox,
  Users,
  Briefcase,
  Globe,
  MessageSquare,
  UserCheck,
} from "lucide-react";
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

  // ✅ Gmail API থেকে ডেটা রাখার জন্য নতুন স্টেট
  const [gmailMessages, setGmailMessages] = useState<InboxItem[]>([]);
  const [gmailLoading, setGmailLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [activeSource, setActiveSource] = useState<string>("all");
  const [selectedMessage, setSelectedMessage] = useState<InboxItem | null>(null);
  const [replyTo, setReplyTo] = useState<InboxItem | null>(null);

  // ✅ Gmail API কল করা
  useEffect(() => {
    async function fetchGmail() {
      try {
        const res = await fetch("/api/gmail");
        const json = await res.json();
        if (json.ok) {
          const formatted: InboxItem[] = json.messages.map(
            (m: { id: string; from: string; subject: string; date: string; snippet: string }) => {
              // "Rahim <rahim@x.com>" থেকে নাম এবং ইমেইল আলাদা করা
              const fromMatch = m.from.match(/^(.*?)\s*<(.*)>$/);
              const fromName = fromMatch ? fromMatch[1].replace(/"/g, "").trim() : m.from;
              const fromEmail = fromMatch ? fromMatch[2] : m.from;

              return {
                id: m.id,
                from: fromName,
                email: fromEmail,
                phone: "",
                subject: m.subject || "(No Subject)",
                body: m.snippet || "",
                source: "Gmail",
                date: m.date ? new Date(m.date).toISOString() : new Date().toISOString(),
              };
            }
          );
          setGmailMessages(formatted);
        }
      } catch (err) {
        console.error("Failed to fetch Gmail", err);
      } finally {
        setGmailLoading(false);
      }
    }
    fetchGmail();
  }, []);

  // ✅ Sheet ডেটা এবং Gmail ডেটা একসাথে মিলিয়ে তারিখ অনুযায়ী সাজানো
  const allItems = useMemo(() => {
    const sheetItems = [...data].map(normalize);
    return [...sheetItems, ...gmailMessages].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [data, gmailMessages]);

  // ফিল্টার লজিক (সোর্স এবং সার্চ)
  const filteredItems = useMemo(() => {
    return allItems.filter((m) => {
      const matchSource =
        activeSource === "all" ||
        m.source.toLowerCase().includes(activeSource.toLowerCase());
      const matchSearch =
        m.from.toLowerCase().includes(search.toLowerCase()) ||
        m.email.toLowerCase().includes(search.toLowerCase()) ||
        m.subject.toLowerCase().includes(search.toLowerCase());
      return matchSource && matchSearch;
    });
  }, [allItems, activeSource, search]);

  const isLoading = loading || gmailLoading;
  const combinedError = error;

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
      
      {/* ================= বাম কলাম: Sidebar (Filters) ================= */}
      <div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
            <Inbox size={20} className="text-blue-600" /> Inbox
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-6">
          {/* Channel Filters */}
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
              Channels
            </p>
            <div className="space-y-1">
              <FilterButton
                label="All Messages"
                icon={<Mail size={16} />}
                active={activeSource === "all"}
                onClick={() => setActiveSource("all")}
                count={allItems.length}
              />
              <FilterButton
                label="Gmail"
                icon={<Mail size={16} className="text-red-500" />}
                active={activeSource === "gmail"}
                onClick={() => setActiveSource("gmail")}
                count={gmailMessages.length}
              />
              <FilterButton
                label="Web Form"
                icon={<Globe size={16} />}
                active={activeSource === "contact form"}
                onClick={() => setActiveSource("contact form")}
              />
              <FilterButton
                label="Live Chat"
                icon={<MessageSquare size={16} />}
                active={activeSource === "live chat"}
                onClick={() => setActiveSource("live chat")}
              />
              <FilterButton
                label="Career / CV"
                icon={<Briefcase size={16} />}
                active={activeSource === "career"}
                onClick={() => setActiveSource("career")}
              />
            </div>
          </div>

          {/* Dynamic Groups */}
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
              Groups
            </p>
            <div className="space-y-1">
              <FilterButton
                label="All Contacts"
                icon={<Users size={16} />}
                active={false}
                onClick={() => {}}
              />
              <FilterButton
                label="Candidates"
                icon={<UserCheck size={16} />}
                active={false}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= মাঝের কলাম: Message List ================= */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col bg-white">
        {/* Search Bar */}
        <div className="p-3 border-b border-slate-200">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-100 border-none rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {isLoading && (
            <p className="p-4 text-center text-sm text-slate-500">⏳ লোড হচ্ছে...</p>
          )}
          {combinedError && (
            <p className="p-4 text-center text-sm text-red-500">⚠️ {combinedError}</p>
          )}

          {!isLoading && !combinedError && filteredItems.length === 0 && (
            <div className="p-8 text-center text-slate-400">
              <Mail size={32} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm">কোনো মেসেজ নেই</p>
            </div>
          )}

          {filteredItems.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedMessage(m)}
              className={`p-3 cursor-pointer transition-colors ${
                selectedMessage?.id === m.id
                  ? "bg-blue-50 border-l-4 border-blue-600"
                  : "hover:bg-slate-50 border-l-4 border-transparent"
              }`}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-sm text-slate-800 truncate">
                  {m.from || "(No Name)"}
                </span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">
                  {formatDateShort(m.date)}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-700 truncate">
                {m.subject}
              </p>
              <p className="text-[11px] text-slate-400 truncate mt-1">
                {m.body.substring(0, 50)}...
              </p>

              <div className="mt-2 flex items-center gap-1">
                <span className="px-1.5 py-0.5 text-[9px] rounded bg-slate-100 text-slate-500 uppercase">
                  {m.source || "Unknown"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ডান কলাম: Message Details ================= */}
      <div className="flex-1 flex flex-col bg-slate-50/50">
        {selectedMessage ? (
          <>
            {/* Header */}
            <div className="p-4 border-b border-slate-200 bg-white flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  {selectedMessage.subject}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  From:{" "}
                  <span className="font-medium text-slate-800">
                    {selectedMessage.from}
                  </span>{" "}
                  &lt;{selectedMessage.email}&gt;
                </p>
                {selectedMessage.phone && (
                  <p className="text-xs text-slate-500">
                    Phone: {selectedMessage.phone}
                  </p>
                )}
              </div>
              <button
                onClick={() => setReplyTo(selectedMessage)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
              >
                <Reply size={16} /> Reply
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 bg-white m-4 rounded-lg border border-slate-200">
              <MediaPreview body={selectedMessage.body} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8">
            <Mail size={48} className="mb-4 opacity-20" />
            <p className="text-sm">
              বাম দিকের তালিকা থেকে একটি মেসেজ সিলেক্ট করুন
            </p>
          </div>
        )}
      </div>

      {/* Reply Form Modal */}
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

/* ==================== Helper Components ==================== */

function FilterButton({
  label,
  icon,
  active,
  onClick,
  count,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
  count?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
        active
          ? "bg-blue-100 text-blue-700 font-medium"
          : "text-slate-600 hover:bg-slate-200"
      }`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      {count !== undefined && (
        <span
          className={`text-[10px] px-1.5 py-0.5 rounded-full ${
            active ? "bg-blue-200 text-blue-800" : "bg-slate-200 text-slate-600"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function formatDateShort(d: string): string {
  if (!d) return "";
  try {
    const date = new Date(d);
    if (isNaN(date.getTime())) return d;
    if (date.toDateString() === new Date().toDateString()) {
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
  } catch {
    return d;
  }
}