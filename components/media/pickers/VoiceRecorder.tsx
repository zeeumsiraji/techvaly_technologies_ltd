"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Square } from "lucide-react";
import { formatSize } from "../classify";

interface Props {
  onPick: (blob: Blob) => void;
  maxSize?: number;
  disabled?: boolean;
}

export default function VoiceRecorder({
  onPick,
  maxSize = 10 * 1024 * 1024,
  disabled,
}: Props) {
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [err, setErr] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const start = async () => {
    setErr(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        if (blob.size > maxSize) {
          setErr(`Voice ${formatSize(blob.size)} — max ${formatSize(maxSize)}`);
        } else {
          onPick(blob);
        }
        stream.getTracks().forEach((t) => t.stop());
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setRecording(true);
      setSeconds(0);

      timerRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } catch {
      setErr("Microphone access denied");
    }
  };

  const stop = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div>
      <button
        type="button"
        disabled={disabled}
        onClick={recording ? stop : start}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition disabled:opacity-50 ${
          recording
            ? "bg-red-500 border-red-500 text-white animate-pulse"
            : "bg-white border-slate-200 text-slate-700 hover:bg-red-50 hover:border-red-300"
        }`}
      >
        {recording ? <Square size={16} /> : <Mic size={16} className="text-red-500" />}
        {recording ? `Stop (${fmt(seconds)})` : "Voice"}
      </button>
      {err && <p className="text-xs text-red-600 mt-1">⚠️ {err}</p>}
    </div>
  );
}