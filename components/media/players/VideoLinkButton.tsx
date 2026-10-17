"use client";

import { Video, ExternalLink } from "lucide-react";

interface Props {
  url: string;
  provider: "zoom" | "meet" | "teams" | "generic";
}

export default function VideoLinkButton({ url, provider }: Props) {
  const { icon, label, color } = getStyle(provider);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 bg-white border rounded-lg px-3 py-2 transition group ${color.border} ${color.hover}`}
    >
      <div
        className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${color.bg}`}
      >
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate">{label}</p>
        <p className="text-[11px] text-slate-500 truncate">{url}</p>
      </div>

      <div
        className={`flex items-center gap-1 text-xs shrink-0 ${color.text} group-hover:underline`}
      >
        <ExternalLink size={12} />
        Join
      </div>
    </a>
  );
}

function getStyle(provider: string) {
  switch (provider) {
    case "zoom":
      return {
        icon: <Video size={16} className="text-blue-600" />,
        label: "🎥 Zoom Meeting",
        color: {
          border: "border-blue-200",
          hover: "hover:bg-blue-50/40",
          bg: "bg-blue-50",
          text: "text-blue-700",
        },
      };
    case "meet":
      return {
        icon: <Video size={16} className="text-green-600" />,
        label: "📹 Google Meet",
        color: {
          border: "border-green-200",
          hover: "hover:bg-green-50/40",
          bg: "bg-green-50",
          text: "text-green-700",
        },
      };
    case "teams":
      return {
        icon: <Video size={16} className="text-purple-600" />,
        label: "💼 Microsoft Teams",
        color: {
          border: "border-purple-200",
          hover: "hover:bg-purple-50/40",
          bg: "bg-purple-50",
          text: "text-purple-700",
        },
      };
    default:
      return {
        icon: <ExternalLink size={16} className="text-slate-600" />,
        label: "🔗 Link",
        color: {
          border: "border-slate-200",
          hover: "hover:bg-slate-50",
          bg: "bg-slate-100",
          text: "text-slate-700",
        },
      };
  }
}