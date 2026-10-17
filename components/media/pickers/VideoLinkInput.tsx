"use client";

import { useState } from "react";
import { Link2, Plus, Check } from "lucide-react";
import { detectLinkProvider, linkIcon, linkLabel } from "../classify";

interface Props {
  onAdd: (
    url: string,
    provider: "zoom" | "meet" | "teams" | "generic"
  ) => void;
  disabled?: boolean;
}

export default function VideoLinkInput({ onAdd, disabled }: Props) {
  const [url, setUrl] = useState("");
  const [added, setAdded] = useState(false);

  const detected = url.trim() ? detectLinkProvider(url) : null;

  const handleAdd = () => {
    if (!url.trim()) return;
    const provider = detectLinkProvider(url);
    onAdd(url.trim(), provider);
    setUrl("");
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div>
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          const el = document.getElementById("video-link-input");
          el?.focus();
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-300 transition disabled:opacity-50"
      >
        <Link2 size={16} className="text-purple-500" />
        Meeting Link
      </button>

      <div className="mt-2 space-y-1">
        <div className="flex items-center gap-2">
          <input
            id="video-link-input"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://zoom.us/j/12345..."
            className="flex-1 border border-slate-200 rounded-md px-2 py-1.5 text-xs outline-none focus:border-blue-400"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAdd();
              }
            }}
          />
          <button
            type="button"
            disabled={!url.trim()}
            onClick={handleAdd}
            className="p-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
          >
            {added ? <Check size={14} /> : <Plus size={14} />}
          </button>
        </div>

        {detected && (
          <p className="text-[11px] text-slate-500 flex items-center gap-1">
            {linkIcon(detected)} Detected: {linkLabel(detected)}
          </p>
        )}
      </div>
    </div>
  );
}