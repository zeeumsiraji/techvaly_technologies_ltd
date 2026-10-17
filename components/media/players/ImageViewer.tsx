"use client";

import { Image as ImageIcon, Eye } from "lucide-react";

interface Props {
  url: string;
  name: string;
  size?: number;
}

export default function ImageViewer({ url, name, size }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-blue-300 hover:bg-blue-50/30 transition group"
    >
      {/* Thumbnail */}
      <div className="w-9 h-9 rounded-md bg-blue-50 overflow-hidden flex-shrink-0 flex items-center justify-center">
        <img
          src={url}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <ImageIcon size={16} className="text-blue-500 absolute" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate">{name}</p>
        <p className="text-[11px] text-slate-500">
          Image {size ? `• ${formatSize(size)}` : ""}
        </p>
      </div>

      <div className="flex items-center gap-1 text-xs text-blue-600 group-hover:underline flex-shrink-0">
        <Eye size={12} />
        View
      </div>
    </a>
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}