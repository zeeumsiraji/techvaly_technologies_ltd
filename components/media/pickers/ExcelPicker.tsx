"use client";

import { useRef, useState } from "react";
import { FileSpreadsheet } from "lucide-react";
import { formatSize } from "../classify";

const ACCEPT =
  ".xlsx,.xls,.csv,.doc,.docx,.ppt,.pptx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

interface Props {
  onPick: (files: File[]) => void;
  maxSize?: number;
  disabled?: boolean;
}

export default function ExcelPicker({
  onPick,
  maxSize = 10 * 1024 * 1024,
  disabled,
}: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErr(null);
    const list = Array.from(e.target.files ?? []);
    const valid: File[] = [];

    for (const f of list) {
      if (f.size > maxSize) {
        setErr(`"${f.name}" — max ${formatSize(maxSize)}`);
        continue;
      }
      valid.push(f);
    }

    if (valid.length) onPick(valid);
    if (ref.current) ref.current.value = "";
  };

  return (
    <div>
      <button
        type="button"
        disabled={disabled}
        onClick={() => ref.current?.click()}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-300 transition disabled:opacity-50"
      >
        <FileSpreadsheet size={16} className="text-green-600" />
        Excel / Word
      </button>
      <input
        ref={ref}
        type="file"
        accept={ACCEPT}
        multiple
        onChange={handleChange}
        className="hidden"
      />
      {err && <p className="text-xs text-red-600 mt-1">⚠️ {err}</p>}
    </div>
  );
}