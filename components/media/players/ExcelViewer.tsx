"use client";

import { FileSpreadsheet, Download } from "lucide-react";

interface Props {
  url: string;
  name: string;
  size?: number;
}

export default function ExcelViewer({ url, name, size }: Props) {
  return (
    <a
      href={url}
      download={name}
      className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-green-300 hover:bg-green-50/30 transition group"
    >
      <div className="w-9 h-9 rounded-md bg-green-50 flex items-center justify-center shrink-0">
        <FileSpreadsheet size={16} className="text-green-600" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate">{name}</p>
        <p className="text-[11px] text-slate-500">
          Excel/Word {size ? `• ${formatSize(size)}` : ""}
        </p>
      </div>

      <div className="flex items-center gap-1 text-xs text-green-700 group-hover:underline shrink-0">
        <Download size={12} />
        Download
      </div>
    </a>
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}