"use client";

import { X, Trash2 } from "lucide-react";
import type { SelectedFile } from "./types";
import { formatSize, linkIcon, mediaIcon } from "./classify";

interface Props {
  files: SelectedFile[];
  onRemove: (id: string) => void;
  onClear?: () => void;
}

export default function MediaList({ files, onRemove, onClear }: Props) {
  if (files.length === 0) return null;

  return (
    <div className="border border-slate-200 rounded-lg bg-slate-50 p-3 space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-slate-600">
          📎 {files.length} file{files.length > 1 ? "s" : ""} selected
        </p>
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] text-red-600 hover:underline flex items-center gap-1"
          >
            <Trash2 size={11} />
            সব মুছুন
          </button>
        )}
      </div>

      <ul className="space-y-1">
        {files.map((s) => (
          <li
            key={s.id}
            className="flex items-center gap-2 bg-white rounded-md px-2 py-1.5 text-xs"
          >
            <span className="text-base">
              {s.type === "link"
                ? linkIcon(s.linkProvider ?? "generic")
                : mediaIcon(s.type)}
            </span>
            <span className="truncate flex-1 text-slate-700">{s.name}</span>
            {s.type !== "link" && (
              <span className="text-slate-400 text-[10px]">
                {formatSize(s.size)}
              </span>
            )}
            <button
              type="button"
              onClick={() => onRemove(s.id)}
              className="text-red-500 hover:text-red-700 shrink-0"
            >
              <X size={12} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}