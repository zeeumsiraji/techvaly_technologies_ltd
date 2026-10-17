"use client";

import { useMemo, useState } from "react";
import type {
  MediaConfig,
  MediaPreset,
  MediaType,
  SelectedFile,
} from "../types";
import {
  DEFAULT_MAX_SIZE,
  DEFAULT_MAX_TOTAL,
  PRESETS,
} from "../types";

interface UseMediaUploadOptions {
  preset?: MediaPreset;
  config?: MediaConfig;
}

export function useMediaUpload(options: UseMediaUploadOptions = {}) {
  const config: MediaConfig = useMemo(() => {
    if (options.preset) return PRESETS[options.preset];
    return options.config ?? {};
  }, [options.preset, options.config]);

  const maxPerFile = config.maxSizePerFile ?? DEFAULT_MAX_SIZE;
  const maxTotal = config.maxTotalSize ?? DEFAULT_MAX_TOTAL;

  const [selected, setSelected] = useState<SelectedFile[]>([]);
  const [error, setError] = useState<string | null>(null);

  // ===== Add =====
  const addFiles = (files: File[], type: MediaType) => {
    setError(null);
    const valid: SelectedFile[] = [];

    for (const f of files) {
      if (f.size > maxPerFile) {
        setError(`"${f.name}" ${formatSize(f.size)} — max ${formatSize(maxPerFile)}`);
        continue;
      }
      valid.push({
        id: crypto.randomUUID(),
        type,
        name: f.name,
        size: f.size,
        file: f,
      });
    }

    setSelected((prev) => {
      const next = [...prev, ...valid];
      const total = next.reduce((s, x) => s + x.size, 0);
      if (total > maxTotal) {
        setError(`মোট ${formatSize(total)} — max ${formatSize(maxTotal)}`);
        return prev;
      }
      return next;
    });
  };

  const addVoice = (blob: Blob) => {
    setError(null);
    if (blob.size > maxPerFile) {
      setError(`Voice ${formatSize(blob.size)} — max ${formatSize(maxPerFile)}`);
      return;
    }
    setSelected((prev) => {
      const next = [
        ...prev,
        {
          id: crypto.randomUUID(),
          type: "voice" as const,
          name: `Voice-${new Date().toISOString().slice(11, 19)}.webm`,
          size: blob.size,
          file: blob,
        },
      ];
      const total = next.reduce((s, x) => s + x.size, 0);
      if (total > maxTotal) {
        setError(`মোট ${formatSize(total)} — max ${formatSize(maxTotal)}`);
        return prev;
      }
      return next;
    });
  };

  const addLink = (url: string, provider: "zoom" | "meet" | "teams" | "generic") => {
    if (!url.trim()) return;
    setSelected((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type: "link",
        name: url,
        size: 0,
        file: new Blob(),
        url,
        linkProvider: provider,
      },
    ]);
  };

  // ===== Remove =====
  const remove = (id: string) => {
    setSelected((prev) => prev.filter((x) => x.id !== id));
  };

  const clear = () => {
    setSelected([]);
    setError(null);
  };

  // ===== Filters =====
  const pdfs = selected.filter((x) => x.type === "pdf");
  const images = selected.filter((x) => x.type === "image");
  const voices = selected.filter((x) => x.type === "voice");
  const excels = selected.filter((x) => x.type === "excel");
  const files = selected.filter((x) => x.type === "file");
  const links = selected.filter((x) => x.type === "link");

  // ===== Build FormData =====
  const buildFormData = (base: FormData): FormData => {
    pdfs.forEach((x) => base.append("pdfs", x.file, x.name));
    images.forEach((x) => base.append("images", x.file, x.name));
    voices.forEach((x) => base.append("voices", x.file, x.name));
    excels.forEach((x) => base.append("excels", x.file, x.name));
    files.forEach((x) => base.append("files", x.file, x.name));
    links.forEach((x) => base.append("links", x.url ?? ""));
    return base;
  };

  const totalSize = selected.reduce((s, x) => s + x.size, 0);
  const hasAny = selected.length > 0;

  return {
    config,
    maxPerFile,
    maxTotal,

    selected,
    pdfs,
    images,
    voices,
    excels,
    files,
    links,

    addFiles,
    addVoice,
    addLink,
    remove,
    clear,

    totalSize,
    hasAny,
    error,
    setError,

    buildFormData,
  };
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}