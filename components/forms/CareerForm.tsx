"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import FormField from "./FormField";
import UploadAttachment from "./UploadAttachment";

export default function CareerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [voice, setVoice] = useState<Blob | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("phone", phone);
      fd.append("position", position);
      fd.append("experience", experience);
      fd.append("coverLetter", coverLetter);
      fd.append("source", "Career Form");
      images.forEach((f) => fd.append("images", f));
      files.forEach((f) => fd.append("files", f));
      if (voice) fd.append("voice", voice, "voice.webm");

      const res = await fetch("/api/career", { method: "POST", body: fd });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error ?? "Failed");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="bg-white rounded-lg border border-slate-200 p-10 text-center max-w-2xl mx-auto">
        <CheckCircle2 size={56} className="mx-auto text-green-500 mb-4" />
        <h2 className="text-xl font-bold mb-2">
          ধন্যবাদ! আপনার Application পাঠানো হয়েছে।
        </h2>
        <p className="text-sm text-slate-500">
          আমরা শীঘ্রই যোগাযোগ করব।
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg border border-slate-200 p-6 max-w-2xl mx-auto space-y-4"
    >
      <h1 className="text-xl font-bold mb-2">💼 Career Application</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="নাম"
          value={name}
          onChange={setName}
          required
          placeholder="আপনার নাম"
        />
        <FormField
          label="ইমেইল"
          value={email}
          onChange={setEmail}
          inputType="email"
          required
          placeholder="you@example.com"
        />
        <FormField
          label="ফোন"
          value={phone}
          onChange={setPhone}
          required
          placeholder="01XXXXXXXXX"
        />
        <FormField
          label="Position"
          value={position}
          onChange={setPosition}
          required
          placeholder="যে পদে আবেদন করছেন"
        />
      </div>

      <FormField
        label="অভিজ্ঞতা"
        value={experience}
        onChange={setExperience}
        placeholder="যেমন: ২ বছর"
      />

      <FormField
        label="Cover Letter"
        value={coverLetter}
        onChange={setCoverLetter}
        type="textarea"
        rows={5}
        placeholder="নিজের সম্পর্কে লিখুন..."
      />

      <UploadAttachment
        images={images}
        setImages={setImages}
        files={files}
        setFiles={setFiles}
        voice={voice}
        setVoice={setVoice}
      />

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <Send size={16} />
        {submitting ? "পাঠানো হচ্ছে..." : "Application পাঠান"}
      </button>
    </form>
  );
}