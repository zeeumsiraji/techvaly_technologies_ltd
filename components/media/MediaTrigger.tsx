"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { MediaConfig, MediaPreset, SelectedFile } from "./types";
import { PRESETS } from "./types";
import { useMediaUpload } from "./hooks/useMediaUpload";
import MediaList from "./MediaList";
import PDFPicker from "./pickers/PDFPicker";
import ImagePicker from "./pickers/ImagePicker";
import VoiceRecorder from "./pickers/VoiceRecorder";
import ExcelPicker from "./pickers/ExcelPicker";
import FilePicker from "./pickers/FilePicker";
import VideoLinkInput from "./pickers/VideoLinkInput";

interface Props {
  preset?: MediaPreset;
  config?: MediaConfig;
  onChange?: (files: SelectedFile[]) => void;
  defaultOpen?: boolean;
}

export default function MediaTrigger({
  preset,
  config,
  onChange,
  defaultOpen = true,
}: Props) {
  const media = useMediaUpload({ preset, config });
  const [open, setOpen] = useState(defaultOpen);

  const cfg = media.config;

  // Notify parent
  const handleChange = () => {
    // Use microtask to ensure state is updated
    queueMicrotask(() => onChange?.(media.selected));
  };

  const hasAnyPicker =
    cfg.pdf || cfg.image || cfg.voice || cfg.excel || cfg.file || cfg.link;

  if (!hasAnyPicker) return null;

  return (
    <div className="space-y-2">
      {/* Label + Toggle */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          📎 {cfg.label ?? "Attachment"}
          {cfg.required && <span className="text-red-500">*</span>}
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {media.hasAny && (
          <span className="text-[11px] text-slate-500">
            {media.selected.length} file
          </span>
        )}
      </div>

      {/* Pickers */}
      {open && (
        <div className="space-y-3 border border-slate-200 rounded-lg p-3 bg-white">
          <div className="flex flex-wrap gap-2">
            {cfg.pdf && (
              <PDFPicker
                onPick={(f) => {
                  media.addFiles(f, "pdf");
                  handleChange();
                }}
                maxSize={media.maxPerFile}
              />
            )}
            {cfg.image && (
              <ImagePicker
                onPick={(f) => {
                  media.addFiles(f, "image");
                  handleChange();
                }}
                maxSize={media.maxPerFile}
              />
            )}
            {cfg.voice && (
              <VoiceRecorder
                onPick={(b) => {
                  media.addVoice(b);
                  handleChange();
                }}
                maxSize={media.maxPerFile}
              />
            )}
            {cfg.excel && (
              <ExcelPicker
                onPick={(f) => {
                  media.addFiles(f, "excel");
                  handleChange();
                }}
                maxSize={media.maxPerFile}
              />
            )}
            {cfg.file && (
              <FilePicker
                onPick={(f) => {
                  media.addFiles(f, "file");
                  handleChange();
                }}
                maxSize={media.maxPerFile}
              />
            )}
            {cfg.link && (
              <VideoLinkInput
                onAdd={(url, provider) => {
                  media.addLink(url, provider);
                  handleChange();
                }}
              />
            )}
          </div>

          {/* Error */}
          {media.error && (
            <p className="text-xs text-red-600">⚠️ {media.error}</p>
          )}

          {/* Selected List */}
          <MediaList
            files={media.selected}
            onRemove={(id) => {
              media.remove(id);
              handleChange();
            }}
            onClear={() => {
              media.clear();
              handleChange();
            }}
          />

          {/* Total */}
          {media.hasAny && (
            <p className="text-[10px] text-slate-400 text-right">
              Total: {formatSize(media.totalSize)} /{" "}
              {formatSize(media.maxTotal)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}