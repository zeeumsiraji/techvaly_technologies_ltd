"use client";

import { Mic, Play, Pause, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  url: string;
  name: string;
  size?: number;
}

export default function AudioPlayer({ url, name, size }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration);
    const onTime = () => setCurrent(audio.currentTime);
    const onEnd = () => {
      setPlaying(false);
      setCurrent(0);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 space-y-2">
      <audio ref={audioRef} src={url} preload="metadata" />

      <div className="flex items-center gap-3">
        {/* Mic icon */}
        <div className="w-9 h-9 rounded-md bg-purple-50 flex items-center justify-center shrink-0">
          <Mic size={16} className="text-purple-500" />
        </div>

        {/* Play button */}
        <button
          type="button"
          onClick={toggle}
          className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center hover:bg-purple-600 shrink-0"
        >
          {playing ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-800 truncate">
            🎤 {name}
          </p>
          <p className="text-[11px] text-slate-500">
            {fmt(current)} / {fmt(duration)}
            {size ? ` • ${formatSize(size)}` : ""}
          </p>
        </div>

        {/* Download */}
        <a
          href={url}
          download={name}
          className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100 flex-shrink-0"
          title="Download"
        >
          <Download size={14} />
        </a>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}