"use client";

import { X, Pencil, CheckCircle2 } from "lucide-react";
import type { Meeting } from "@/types";

interface Props {
  meeting: Meeting | null;
  onClose: () => void;
}

export default function MeetingSlidePanel({ meeting, onClose }: Props) {
  if (!meeting) return null;

  return (
    <div className="fixed inset-0 z-40 flex">
      <div className="flex-1 bg-black/30" onClick={onClose} />
      <div className="w-125 bg-white h-full overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold">👤 {meeting.name}</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-md">
              <Pencil size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-md"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4 text-sm">
          <Info label="📞 Number" value={meeting.number} />
          <Info label="📍 Location" value={meeting.location} />
          <Info label="🏷️ Category" value={meeting.category} />
          <Info label="🎯 উদ্দেশ্য" value={meeting.purpose} />
          <Info label="📅 Meeting Date" value={meeting.date} />
          <Info label="🔄 Follow-up" value={meeting.followUp} />

          <div>
            <p className="text-xs text-slate-500 mb-1">📝 আলোচনার ড্রাফট</p>
            <div className="bg-slate-50 rounded-md p-3 text-slate-700 whitespace-pre-wrap">
              {meeting.draft}
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 flex items-center justify-center gap-2">
              <CheckCircle2 size={16} /> Mark Done
            </button>
            <a
              href={`tel:${meeting.number}`}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm text-center hover:bg-blue-700"
            >
              📞 Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-2">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  );
}