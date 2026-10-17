"use client";

import { useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { formatSize } from "../classify";

interface Props {
  onPick: (files: File[]) => void;
  maxSize?: number;
  disabled?: boolean;
}

export default function ImagePicker({
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
      if (!f.type.startsWith("image/")) {
        setErr("শুধু image file allowed");
        continue;
      }
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
        <ImageIcon size={16} className="text-blue-500" />
        Image
      </button>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        className="hidden"
      />
      {err && <p className="text-xs text-red-600 mt-1">⚠️ {err}</p>}
    </div>
  );
}