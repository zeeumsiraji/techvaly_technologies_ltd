"use client";

// ✅ নতুন Reusable Components থেকে ইম্পোর্ট করুন
import ImageUpload from "@/components/media/pickers/ImagePicker";
import FileUpload from "@/components/media/pickers/FilePicker";
import VoiceRecorder from "@/components/media/pickers/VoiceRecorder";
import { validateTotal } from "@/lib/upload";

interface Props {
  images: File[];
  setImages: (f: File[]) => void;
  files: File[];
  setFiles: (f: File[]) => void;
  voice: Blob | null;
  setVoice: (b: Blob | null) => void;
  showVoice?: boolean;
  showImage?: boolean;
  showFile?: boolean;
}

export default function UploadAttachment({
  images,
  setImages,
  files,
  setFiles,
  voice,
  setVoice,
  showVoice = true,
  showImage = true,
  showFile = true,
}: Props) {
  const totalError = validateTotal([...images, ...files], voice);

  return (
    <div className="space-y-3 pt-3 border-t border-slate-100">
      <p className="text-sm font-medium text-slate-700">
        📎 Attachment (optional)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {showImage && (
          <ImageUpload
            onPick={(f) => setImages([...images, ...f])}
            maxSize={10 * 1024 * 1024}
          />
        )}
        {showFile && (
          <FileUpload
            onPick={(f) => setFiles([...files, ...f])}
            maxSize={10 * 1024 * 1024}
          />
        )}
      </div>

      {showVoice && (
        <VoiceRecorder
          onPick={setVoice}
          maxSize={10 * 1024 * 1024}
        />
      )}

      {totalError && (
        <p className="text-xs text-red-600">⚠️ {totalError}</p>
      )}
    </div>
  );
}