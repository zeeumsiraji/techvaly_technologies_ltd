"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  X,
  Send,
  Check,
  Image as ImageIcon,
  Paperclip,
  Mic,
  Square,
  Trash2,
  RefreshCw,
  ExternalLink,
  Download,
} from "lucide-react";
import {
  formatFileSize,
  validateImage,
  validateFile,
  validateVoice,
  validateTotal,
} from "@/lib/upload";

// ... Types & Interfaces আগের মতোই থাকবে ...
interface ChatAttachment {
  type: "image" | "file" | "voice";
  name: string;
  size: number;
  url?: string;
}

interface ChatMessage {
  id: string;
  text: string;
  from: "user" | "admin";
  timestamp: Date;
  sourceId?: string;
  attachments?: ChatAttachment[];
}

interface VisitorInfo {
  name: string;
  email: string;
  phone: string;
}

const STORAGE_KEY = "bdsoft_chat_history";
const USER_KEY = "bdsoft_chat_user";
const SEEN_KEY = "bdsoft_chat_seen_replies";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [visitor, setVisitor] = useState<VisitorInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const [images, setImages] = useState<File[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [voice, setVoice] = useState<Blob | null>(null);
  const [showAttachments, setShowAttachments] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ... (আগের সব useEffect এবং Functions এখানে থাকবে, আমি নিচে শুধু UI-তে পরিবর্তন করেছি) ...
  
  // নিচের রিটার্ন অংশটুকু সম্পূর্ণ পরিবর্তন করা হয়েছে

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChatMessage[];
        setMessages(
          parsed.map((m) => ({ ...m, timestamp: new Date(m.timestamp) }))
        );
      }
      const rawUser = localStorage.getItem(USER_KEY);
      if (rawUser) setVisitor(JSON.parse(rawUser));
    } catch {}
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      try {
        const safe = messages.map((m) => ({
          ...m,
          timestamp: m.timestamp,
          attachments: m.attachments?.map((a) => ({
            ...a,
            url: a.url && a.url.startsWith("http") ? a.url : undefined,
          })),
        }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(safe));
      } catch {}
    }
  }, [messages]);

  useEffect(() => {
    if (visitor.email) {
      localStorage.setItem(USER_KEY, JSON.stringify(visitor));
    }
  }, [visitor]);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, showAttachments]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  const fetchAdminReplies = async () => {
    if (!visitor.email) return;
    try {
      setRefreshing(true);
      const res = await fetch(
        `/api/chat/replies?email=${encodeURIComponent(visitor.email)}`
      );
      const json = await res.json();
      if (!json.ok) return;

      const seenRaw = localStorage.getItem(SEEN_KEY);
      const seenIds: string[] = seenRaw ? JSON.parse(seenRaw) : [];

      const newReplies: ChatMessage[] = (json.replies as {
        id: string;
        message: string;
        attachments?: { name: string; mimeType: string; url: string }[];
        date: string;
      }[])
        .filter((r) => !seenIds.includes(r.id))
        .filter(
          (r) =>
            (r.message && r.message.trim()) ||
            (r.attachments && r.attachments.length > 0)
        )
        .map((r) => {
          const classified: ChatAttachment[] = (r.attachments ?? []).map(
            (a) => {
              let type: "image" | "file" | "voice" = "file";
              if (a.mimeType.startsWith("image/")) type = "image";
              else if (a.mimeType.startsWith("audio/")) type = "voice";
              return { type, name: a.name, size: 0, url: a.url };
            }
          );
          return {
            id: crypto.randomUUID(),
            sourceId: r.id,
            text:
              r.message.trim() ||
              (classified.length > 0
                ? `(${classified.length} attachment)`
                : "(empty)"),
            from: "admin" as const,
            timestamp: new Date(r.date),
            attachments: classified,
          };
        });

      if (newReplies.length > 0) {
        setMessages((prev) => [...prev, ...newReplies]);
        const newSeen = [...seenIds, ...newReplies.map((r) => r.sourceId!)];
        localStorage.setItem(SEEN_KEY, JSON.stringify(newSeen));
      }
    } catch {
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (pollRef.current) clearInterval(pollRef.current);
    if (open && visitor.email) {
      fetchAdminReplies();
      pollRef.current = setInterval(fetchAdminReplies, 10000);
    }
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, visitor.email]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const list = Array.from(e.target.files ?? []);
    const valid: File[] = [];
    for (const f of list) {
      const err = validateImage(f);
      if (err) {
        setError(err);
        continue;
      }
      valid.push(f);
    }
    setImages((prev) => [...prev, ...valid]);
    if (imageInputRef.current) imageInputRef.current.value = "";
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const list = Array.from(e.target.files ?? []);
    const valid: File[] = [];
    for (const f of list) {
      const err = validateFile(f);
      if (err) {
        setError(err);
        continue;
      }
      valid.push(f);
    }
    setFiles((prev) => [...prev, ...valid]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const startRecording = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const err = validateVoice(blob);
        if (err) setError(err);
        else setVoice(blob);
        stream.getTracks().forEach((t) => t.stop());
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setRecording(true);
      setRecordingSeconds(0);
      timerRef.current = setInterval(() => {
        setRecordingSeconds((s) => s + 1);
      }, 1000);
    } catch {
      setError("Microphone access denied");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const fmtTimeShort = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const clearAttachments = () => {
    setImages([]);
    setFiles([]);
    setVoice(null);
    setShowAttachments(false);
  };

  const hasAttachments =
    images.length > 0 || files.length > 0 || voice !== null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!visitor.name.trim() || !visitor.email.trim() || !visitor.phone.trim()) {
      setError("নাম, ইমেইল ও ফোন — সব দিন");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visitor.email)) {
      setError("সঠিক ইমেইল দিন");
      return;
    }
    if (!message.trim() && !hasAttachments) {
      setError("Message বা attachment দিন");
      return;
    }
    const totalErr = validateTotal([...images, ...files], voice);
    if (totalErr) {
      setError(totalErr);
      return;
    }

    const localAttachments: ChatAttachment[] = [
      ...images.map((f) => ({
        type: "image" as const,
        name: f.name,
        size: f.size,
        url: URL.createObjectURL(f),
      })),
      ...files.map((f) => ({
        type: "file" as const,
        name: f.name,
        size: f.size,
        url: URL.createObjectURL(f),
      })),
      ...(voice
        ? [
            {
              type: "voice" as const,
              name: "voice.webm",
              size: voice.size,
              url: URL.createObjectURL(voice),
            },
          ]
        : []),
    ];

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      text: message || "(attachment)",
      from: "user",
      timestamp: new Date(),
      attachments: localAttachments,
    };

    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setSending(true);

    try {
      const fd = new FormData();
      fd.append("from", visitor.name);
      fd.append("email", visitor.email);
      fd.append("phone", visitor.phone);
      fd.append("subject", "Live Chat");
      fd.append("body", message || "(attachment only)");
      fd.append("source", "Live Chat");

      images.forEach((f) => fd.append("images", f));
      files.forEach((f) => fd.append("files", f));
      if (voice) fd.append("voice", voice, "voice.webm");

      const res = await fetch("/api/chat", { method: "POST", body: fd });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? "Failed");

      clearAttachments();
      setTimeout(fetchAdminReplies, 500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setSending(false);
    }
  };

  const fmtTime = (d: Date) =>
    d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  // ==========================================
  // 🌟 FIXED UI SECTION (text-left, flex-col etc.) 🌟
  // ==========================================
  return (
    <div className="text-left font-sans">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-9999 rounded-full bg-green-600 p-4 text-white shadow-2xl transition-all duration-300 hover:bg-green-700"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-9999 flex h-[calc(100vh-140px)] max-h-170 w-100 flex-col overflow-hidden rounded-[35px] border border-gray-700 bg-white shadow-2xl">
          
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b bg-white px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/masud.png"
                  alt="Support"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  priority
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="text-left">
                <h2 className="text-[22px] font-semibold leading-none text-black">
                  BdSoft Support
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  🟢 Usually replies in 5 min
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <button
                type="button"
                onClick={fetchAdminReplies}
                disabled={refreshing || !visitor.email}
                className="p-1.5 hover:bg-slate-100 rounded disabled:opacity-40"
                title="Refresh replies"
              >
                <RefreshCw
                  size={16}
                  className={refreshing ? "animate-spin" : ""}
                />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-[#f5f5f5] p-4 text-left"
          >
            <div>
              <div className="max-w-70 rounded-3xl bg-[#e9e9e9] p-4">
                <p className="text-[15px] leading-relaxed text-black">
                  👋 স্বাগতম! আপনার নাম, ইমেইল ও ফোন দিয়ে message পাঠান —
                  আমরা দ্রুত reply দিব।
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-500">BdSoft • now</p>
            </div>

            {messages.map((m) => (
              <div key={m.id} className={m.from === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block max-w-72.5 rounded-3xl p-3 text-left ${
                    m.from === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 shadow-sm border border-slate-100"
                  }`}
                >
                  {m.from === "admin" && (
                    <p className="text-[10px] font-semibold text-blue-600 mb-1">
                      👨‍💼 Admin Reply
                    </p>
                  )}
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap wrap-break-word">
                    {m.text}
                  </p>
                  {m.attachments && m.attachments.length > 0 && (
                    <div className="mt-2 space-y-1.5 border-t border-white/20 pt-2">
                      {m.attachments.map((a, i) => (
                        <AttachmentBubble
                          key={i}
                          attachment={a}
                          isUser={m.from === "user"}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <p
                  className={`mt-1 text-xs text-gray-400 ${
                    m.from === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {m.from === "user" ? visitor.name || "You" : "BdSoft"} •{" "}
                  {fmtTime(m.timestamp)}
                </p>
              </div>
            ))}

            {sending && (
              <div className="text-xs text-gray-400 italic">Sending...</div>
            )}
            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 p-2 text-xs text-red-700">
                ⚠️ {error}
              </div>
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="shrink-0 border-t bg-white p-3 space-y-2 text-left"
          >
            <div className="rounded-2xl border border-gray-200 p-3 space-y-2">
              <input
                type="text"
                value={visitor.name}
                onChange={(e) =>
                  setVisitor((v) => ({ ...v, name: e.target.value }))
                }
                placeholder="আপনার নাম *"
                required
                className="w-full border-b border-gray-100 pb-2 text-sm outline-none focus:border-blue-400"
              />
              <input
                type="email"
                value={visitor.email}
                onChange={(e) =>
                  setVisitor((v) => ({ ...v, email: e.target.value }))
                }
                placeholder="email@example.com *"
                required
                className="w-full border-b border-gray-100 pb-2 text-sm outline-none focus:border-blue-400"
              />
              <input
                type="tel"
                value={visitor.phone}
                onChange={(e) =>
                  setVisitor((v) => ({ ...v, phone: e.target.value }))
                }
                placeholder="01XXXXXXXXX *"
                required
                className="w-full border-b border-gray-100 pb-2 text-sm outline-none focus:border-blue-400"
              />
              <div className="flex items-center justify-between gap-2 pt-1">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message..."
                  className="min-w-0 flex-1 text-sm outline-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  aria-label="Send"
                  className="rounded-full bg-gray-200 p-2.5 text-gray-700 transition-all hover:bg-blue-600 hover:text-white disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowAttachments((p) => !p)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs transition ${
                  showAttachments || hasAttachments
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Paperclip size={14} />
                Attachment
                {hasAttachments && (
                  <span className="ml-1 bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {images.length + files.length + (voice ? 1 : 0)}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={recording ? stopRecording : startRecording}
                className={`p-2 rounded-lg border transition ${
                  recording
                    ? "bg-red-500 text-white border-red-500 animate-pulse"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
                title={recording ? "Stop recording" : "Record voice"}
              >
                {recording ? <Square size={14} /> : <Mic size={14} />}
              </button>
              {recording && (
                <span className="text-xs text-red-600 font-mono">
                  {fmtTimeShort(recordingSeconds)}
                </span>
              )}
            </div>

            {showAttachments && (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 space-y-2 max-h-48 overflow-y-auto">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => imageInputRef.current?.click()}
                    className="flex items-center justify-center gap-1.5 py-2 rounded-md bg-white border border-gray-200 text-xs text-gray-700 hover:bg-blue-50 hover:border-blue-300"
                  >
                    <ImageIcon size={14} /> Image
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center justify-center gap-1.5 py-2 rounded-md bg-white border border-gray-200 text-xs text-gray-700 hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Paperclip size={14} /> File
                  </button>
                </div>

                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageSelect}
                  className="hidden"
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {(images.length > 0 || files.length > 0 || voice) && (
                  <ul className="space-y-1">
                    {images.map((f, i) => (
                      <li
                        key={`img-${i}`}
                        className="flex items-center gap-2 text-xs bg-white rounded-md px-2 py-1.5"
                      >
                        <ImageIcon size={12} className="text-blue-500" />
                        <span className="truncate flex-1">{f.name}</span>
                        <span className="text-gray-400">
                          {formatFileSize(f.size)}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setImages((prev) =>
                              prev.filter((_, idx) => idx !== i)
                            )
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={12} />
                        </button>
                      </li>
                    ))}
                    {files.map((f, i) => (
                      <li
                        key={`file-${i}`}
                        className="flex items-center gap-2 text-xs bg-white rounded-md px-2 py-1.5"
                      >
                        <Paperclip size={12} className="text-gray-500" />
                        <span className="truncate flex-1">{f.name}</span>
                        <span className="text-gray-400">
                          {formatFileSize(f.size)}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setFiles((prev) =>
                              prev.filter((_, idx) => idx !== i)
                            )
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={12} />
                        </button>
                      </li>
                    ))}
                    {voice && (
                      <li className="flex items-center gap-2 text-xs bg-white rounded-md px-2 py-1.5">
                        <Mic size={12} className="text-red-500" />
                        <span className="flex-1">Voice recording</span>
                        <span className="text-gray-400">
                          {formatFileSize(voice.size)}
                        </span>
                        <button
                          type="button"
                          onClick={() => setVoice(null)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={12} />
                        </button>
                      </li>
                    )}
                  </ul>
                )}

                {hasAttachments && (
                  <button
                    type="button"
                    onClick={clearAttachments}
                    className="w-full text-[11px] text-red-600 hover:underline"
                  >
                    সব মুছুন
                  </button>
                )}

                <p className="text-[10px] text-gray-400 text-center">
                  Max 10MB per file • মোট max 30MB
                </p>
              </div>
            )}

            <div className="flex items-center justify-center gap-1 text-center text-[11px] text-gray-400">
              <Check size={10} /> Powered by BdSoft
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function AttachmentBubble({
  attachment,
  isUser,
}: {
  attachment: ChatAttachment;
  isUser: boolean;
}) {
  const { type, name, size, url } = attachment;

  if (!url) {
    return (
      <div className="flex items-center gap-1 text-[11px] opacity-90 py-1">
        {type === "image" && <ImageIcon size={11} />}
        {type === "file" && <Paperclip size={11} />}
        {type === "voice" && <Mic size={11} />}
        <span className="truncate max-w-45">{name}</span>
        {size > 0 && (
          <span className="opacity-70">({formatFileSize(size)})</span>
        )}
      </div>
    );
  }

  if (type === "image") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="rounded-lg overflow-hidden border border-white/30 bg-black/10">
          <img
            src={url}
            alt={name}
            className="max-h-40 w-auto object-cover group-hover:opacity-90 transition"
          />
        </div>
        <p className="mt-1 text-[10px] opacity-80 truncate flex items-center gap-1">
          <ExternalLink size={10} /> {name}
          {size > 0 && <span>({formatFileSize(size)})</span>}
        </p>
      </a>
    );
  }

  if (type === "voice") {
    return (
      <div className="rounded-lg bg-black/10 p-2">
        <audio
          src={url}
          controls
          className="h-7 w-full min-w-37.5"
          style={{ maxWidth: "180px" }}
        />
        <p className="mt-1 text-[10px] opacity-80 truncate flex items-center gap-1">
          🎤 {name}
          {size > 0 && <span>({formatFileSize(size)})</span>}
        </p>
      </div>
    );
  }

  return (
    <a
      href={url}
      download={name}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1.5 text-[11px] py-1.5 px-2 rounded-md transition ${
        isUser
          ? "bg-white/15 hover:bg-white/25"
          : "bg-slate-100 hover:bg-slate-200"
      }`}
    >
      <Paperclip size={11} />
      <span className="truncate max-w-37.5">{name}</span>
      {size > 0 && <span className="opacity-70">({formatFileSize(size)})</span>}
      <Download size={11} className="ml-auto opacity-70" />
    </a>
  );
}