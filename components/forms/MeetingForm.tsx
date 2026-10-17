"use client";

import { useState } from "react";
import { X, Save } from "lucide-react";

interface ExistingMeeting {
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
}

interface MeetingFormProps {
  onClose: () => void;
  onSuccess: (newMeeting: Record<string, string>) => void;
  existing?: ExistingMeeting | null;
}

export default function MeetingForm({
  onClose,
  onSuccess,
  existing,
}: MeetingFormProps) {
  const isEdit = !!existing;

  const getRemarksOnly = (remarks: string) =>
    (remarks ?? "").split("--- Attachments ---")[0].trim();

  const [name, setName] = useState(existing?.name ?? "");
  const [purpose, setPurpose] = useState(existing?.purpose ?? "");
  const [date, setDate] = useState(
    existing?.date || new Date().toISOString().split("T")[0]
  );
  const [followUp, setFollowUp] = useState(existing?.followUp ?? "");
  const [number, setNumber] = useState(existing?.number ?? "");
  const [location, setLocation] = useState(existing?.location ?? "");
  const [remarks, setRemarks] = useState(
    getRemarksOnly(existing?.remarks ?? "")
  );
  const [category, setCategory] = useState(existing?.category ?? "Client");
  const [draft, setDraft] = useState(existing?.draft ?? "");

  const [images, setImages] = useState<File[]>([]);
  const [pdfs, setPdfs] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !purpose.trim() || !date) {
      setError("নাম, উদ্দেশ্য এবং ডেট — সব দিন");
      return;
    }

    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("purpose", purpose);
      fd.append("date", date);
      fd.append("followUp", followUp);
      fd.append("number", number);
      fd.append("location", location);
      fd.append("remarks", remarks);
      fd.append("category", category);
      fd.append("draft", draft);

      images.forEach((f) => fd.append("images", f));
      pdfs.forEach((f) => fd.append("pdfs", f));

      const url = isEdit ? `/api/meetings/${existing.id}` : "/api/meetings";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, { method, body: fd });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? "Failed");

      onSuccess(
        json.data ?? {
          id: existing?.id ?? "",
          name,
          purpose,
          date,
          followUp,
          number,
          location,
          remarks,
          category,
          draft,
        }
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    // z-[100] ensures it sits above the navbar
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 shrink-0">
          <h2 className="text-lg font-semibold">
            {isEdit ? "✏️ Edit Meeting" : "➕ Add New Meeting"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-md transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Wrapper */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
          
          {/* Scrollable Fields Area */}
          <div className="p-4 space-y-4 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field label="নাম *" value={name} onChange={setName} required />
              <Field label="Number" value={number} onChange={setNumber} />
              <Field
                label="উদ্দেশ্য *"
                value={purpose}
                onChange={setPurpose}
                required
              />
              <Field label="Location" value={location} onChange={setLocation} />
              <Field
                label="Meeting ডেট *"
                value={date}
                onChange={setDate}
                type="date"
                required
              />
              <Field
                label="Follow-up ডেট"
                value={followUp}
                onChange={setFollowUp}
                type="date"
              />
              <div>
                <label className="text-sm text-slate-600 block mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Client">Client</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Partner">Partner</option>
                  <option value="Lead">Lead</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <Field
              label="Remarks"
              value={remarks}
              onChange={setRemarks}
              type="textarea"
              rows={2}
            />

            <Field
              label="আলোচনার ড্রাফট"
              value={draft}
              onChange={setDraft}
              type="textarea"
              rows={4}
            />

            {/* Attachments */}
            <div className="border-t border-slate-100 pt-4 space-y-2">
              <p className="text-sm font-medium text-slate-700">
                📎 {isEdit ? "Add More Attachments" : "Attachment (optional)"}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <FileInput
                  label="📄 PDF"
                  accept=".pdf"
                  onFiles={(f) => setPdfs((prev) => [...prev, ...f])}
                />
                <FileInput
                  label="🖼️ Image"
                  accept="image/*"
                  onFiles={(f) => setImages((prev) => [...prev, ...f])}
                />
              </div>

              {(images.length > 0 || pdfs.length > 0) && (
                <ul className="space-y-1 mt-2">
                  {pdfs.map((f, i) => (
                    <li
                      key={`pdf-${i}`}
                      className="flex items-center gap-2 text-xs bg-slate-50 rounded px-2 py-1.5"
                    >
                      <span>📄</span>
                      <span className="truncate flex-1">{f.name}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setPdfs((prev) => prev.filter((_, idx) => idx !== i))
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                  {images.map((f, i) => (
                    <li
                      key={`img-${i}`}
                      className="flex items-center gap-2 text-xs bg-slate-50 rounded px-2 py-1.5"
                    >
                      <span>🖼️</span>
                      <span className="truncate flex-1">{f.name}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setImages((prev) => prev.filter((_, idx) => idx !== i))
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700">
                ⚠️ {error}
              </div>
            )}
          </div>

          {/* Footer / Actions - Fixed at bottom */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-2 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm text-slate-600 bg-white border border-slate-300 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2 transition"
            >
              <Save size={14} />
              {saving ? "Saving..." : isEdit ? "Update Meeting" : "Save Meeting"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: "text" | "date" | "textarea";
  required?: boolean;
  rows?: number;
}) {
  const cls =
    "w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div>
      <label className="text-sm text-slate-600 block mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          required={required}
          className={cls}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={cls}
        />
      )}
    </div>
  );
}

function FileInput({
  label,
  accept,
  onFiles,
}: {
  label: string;
  accept: string;
  onFiles: (files: File[]) => void;
}) {
  return (
    <label className="flex items-center justify-center gap-1.5 py-2 rounded-md bg-white border border-slate-200 text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition">
      {label}
      <input
        type="file"
        accept={accept}
        multiple
        className="hidden"
        onChange={(e) => {
          const list = Array.from(e.target.files ?? []);
          if (list.length) onFiles(list);
          e.target.value = "";
        }}
      />
    </label>
  );
}