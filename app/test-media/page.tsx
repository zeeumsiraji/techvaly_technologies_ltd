"use client";

import { useState } from "react";
import { useMediaUpload } from "@/components/media/hooks/useMediaUpload";
import PDFPicker from "@/components/media/pickers/PDFPicker";
import ImagePicker from "@/components/media/pickers/ImagePicker";
import VoiceRecorder from "@/components/media/pickers/VoiceRecorder";
import ExcelPicker from "@/components/media/pickers/ExcelPicker";
import FilePicker from "@/components/media/pickers/FilePicker";
import VideoLinkInput from "@/components/media/pickers/VideoLinkInput";
import MediaPreview from "@/components/media/MediaPreview";
import { formatSize, linkIcon, mediaIcon } from "@/components/media/classify";

export default function TestMediaPage() {
  const media = useMediaUpload({ preset: "meeting" });

  // Local preview URL build করি SelectedFile থেকে
  const [localUrls] = useState<Record<string, string>>({});

  // Selected file থেকে dummy body তৈরি
  const buildPreviewBody = () => {
    if (media.selected.length === 0) return "";

    const lines = media.selected.map((s) => {
      if (s.type === "link") {
        return `${s.url} (video-link) — ${s.url}`;
      }
      // Local file — Object URL
      const objUrl =
        localUrls[s.id] ?? URL.createObjectURL(s.file as Blob);
      if (!localUrls[s.id]) localUrls[s.id] = objUrl;

      const mime =
        (s.file as File).type ||
        (s.type === "voice" ? "audio/webm" : "application/octet-stream");

      return `${s.name} (${mime}) — ${objUrl}`;
    });

    return `Selected files preview:\n\n--- Attachments ---\n${lines.join("\n")}`;
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🧪 Media Component Test</h1>

      {/* ============ Picker Section ============ */}
      <div className="bg-white border rounded-lg p-4 space-y-3">
        <h2 className="text-lg font-semibold">1️⃣ Pickers</h2>

        <p className="text-sm text-slate-500">
          Total: {formatSize(media.totalSize)} / {formatSize(media.maxTotal)}
        </p>

        <div className="flex flex-wrap gap-2">
          <PDFPicker
            onPick={(f) => media.addFiles(f, "pdf")}
            maxSize={media.maxPerFile}
          />
          <ImagePicker
            onPick={(f) => media.addFiles(f, "image")}
            maxSize={media.maxPerFile}
          />
          <VoiceRecorder
            onPick={media.addVoice}
            maxSize={media.maxPerFile}
          />
          <ExcelPicker
            onPick={(f) => media.addFiles(f, "excel")}
            maxSize={media.maxPerFile}
          />
          <FilePicker
            onPick={(f) => media.addFiles(f, "file")}
            maxSize={media.maxPerFile}
          />
          <VideoLinkInput onAdd={media.addLink} />
        </div>

        {media.error && (
          <p className="text-xs text-red-600">⚠️ {media.error}</p>
        )}

        {media.selected.length > 0 && (
          <div className="border-t pt-3 space-y-2">
            <p className="text-sm font-medium">
              Selected ({media.selected.length}):
            </p>
            <ul className="space-y-1">
              {media.selected.map((s) => (
                <li
                  key={s.id}
                  className="flex items-center gap-2 bg-slate-50 rounded px-2 py-1 text-xs"
                >
                  <span>
                    {s.type === "link"
                      ? linkIcon(s.linkProvider ?? "generic")
                      : mediaIcon(s.type)}
                  </span>
                  <span className="truncate flex-1">{s.name}</span>
                  {s.type !== "link" && (
                    <span className="text-slate-400">
                      {formatSize(s.size)}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => media.remove(s.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={media.clear}
              className="text-xs text-red-600 hover:underline"
            >
              সব মুছুন
            </button>
          </div>
        )}
      </div>
      

      {/* ============ Live Preview Section ============ */}
      <div className="bg-white border rounded-lg p-4 space-y-3">
        <h2 className="text-lg font-semibold">2️⃣ Live Preview (Selected)</h2>
        <p className="text-xs text-slate-500">
          Picker থেকে যা যা select করেছেন — এখানে Live দেখা যাবে
        </p>

        {media.selected.length === 0 ? (
          <p className="text-sm text-slate-400 italic p-4 text-center border border-dashed rounded">
            উপরের Picker থেকে file select করুন — Live Preview এখানে দেখাবে
          </p>
        ) : (
          <MediaPreview body={buildPreviewBody()} onlyAttachments={true} />
        )}
      </div>

      {/* ============ MediaPreview Demo ============ */}
      <div className="bg-white border rounded-lg p-4 space-y-3">
        <h2 className="text-lg font-semibold">3️⃣ MediaPreview Demo</h2>
        <p className="text-xs text-slate-500">
          Sheet-এ saved format এর মতো করে সব ধরনের attachment দিয়ে test
        </p>

        <MediaPreview
          body={`এই message-এ সব ধরনের attachment আছে।

--- Attachments ---
Dummy PDF.pdf (application/pdf) — https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
Sample Photo.jpg (image/jpeg) — https://picsum.photos/400/300.jpg
Sample Audio.webm (audio/webm) — https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
Sample Data.xlsx (application/vnd.openxmlformats-officedocument.spreadsheetml.sheet) — https://file-examples.com/storage/fe5c6e5b88a6f58a4d2f2f4/2017/02/file_example_XLS_10.xls
https://meet.google.com/abc-defg-hij (video-link) — https://meet.google.com/abc-defg-hij
https://zoom.us/j/123456789 (video-link) — https://zoom.us/j/123456789
Sample Archive.zip (application/zip) — https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip`}
        />
      </div>

      {/* ============ Info ============ */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-xs text-blue-800 space-y-1">
        <p className="font-semibold">📌 কী Test করবেন:</p>
        <ul className="list-disc list-inside space-y-0.5">
          <li>
            <b>PDF</b> → Click → নতুন tab-এ PDF open হবে
          </li>
          <li>
            <b>Image</b> → Click → নতুন tab-এ full image
          </li>
          <li>
            <b>Voice</b> → ▶ Play button → inline player-এ বাজবে
          </li>
          <li>
            <b>Excel</b> → Click → file download হবে
          </li>
          <li>
            <b>Zoom/Meet</b> → Click → Join button → Meeting খুলবে
          </li>
          <li>
            <b>Other File</b> → Click → download হবে
          </li>
        </ul>
      </div>
      
      
    
    </div>
  );
}