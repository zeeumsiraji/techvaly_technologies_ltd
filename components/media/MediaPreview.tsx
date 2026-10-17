"use client";

import { Paperclip } from "lucide-react";
import PDFViewer from "./players/PDFViewer";
import ImageViewer from "./players/ImageViewer";
import AudioPlayer from "./players/AudioPlayer";
import ExcelViewer from "./players/ExcelViewer";
import VideoLinkButton from "./players/VideoLinkButton";
import FileDownloader from "./players/FileDownloader";
import { classifyByMime, detectLinkProvider } from "./classify";

interface Props {
  /** Sheet-এ saved body — এতে --- Attachments --- marker থাকে */
  body: string;
  /** শুধু Attachments দেখাতে চাইলে true */
  onlyAttachments?: boolean;
}

export default function MediaPreview({ body, onlyAttachments }: Props) {
  if (!body) return null;

  const parts = body.split("--- Attachments ---");

  if (parts.length === 1) {
    // Attachments নেই
    if (onlyAttachments) return null;
    return (
      <p className="text-xs text-slate-600 whitespace-pre-wrap">
        {body}
      </p>
    );
  }

  const [main, attStr] = parts;

  // Parse attachment lines
  const lines = attStr
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  // Attachments parse
  const attachments = lines
    .map((line) => {
      // Format: "filename (mimeType) — url"
      const match = line.match(/^(.+?)\s+\(([^)]+)\)\s+—\s+(\S+)$/);
      if (!match) return null;
      const [, name, mimeType, url] = match;
      return { name, mimeType, url };
    })
    .filter(
      (x): x is { name: string; mimeType: string; url: string } => x !== null
    );

  return (
    <div className="space-y-2">
      {/* Main text */}
      {!onlyAttachments && main.trim() && (
        <p className="text-xs text-slate-600 whitespace-pre-wrap">
          {main.trim()}
        </p>
      )}

      {/* Attachments header */}
      {attachments.length > 0 && (
        <>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 pt-1">
            <Paperclip size={11} />
            Attachments ({attachments.length})
          </div>

          <div className="space-y-1.5">
            {attachments.map((a, i) => (
              <AttachmentRow
                key={i}
                name={a.name}
                url={a.url}
                mimeType={a.mimeType}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ===== Auto-render by type ===== */
function AttachmentRow({
  name,
  url,
  mimeType,
}: {
  name: string;
  url: string;
  mimeType: string;
}) {
  // Link detect
  if (mimeType === "video-link") {
    const provider = detectLinkProvider(url);
    return <VideoLinkButton url={url} provider={provider} />;
  }

  const type = classifyByMime(mimeType, name);

  switch (type) {
    case "pdf":
      return <PDFViewer url={url} name={name} />;
    case "image":
      return <ImageViewer url={url} name={name} />;
    case "voice":
      return <AudioPlayer url={url} name={name} />;
    case "excel":
      return <ExcelViewer url={url} name={name} />;
    default:
      return <FileDownloader url={url} name={name} />;
  }
}