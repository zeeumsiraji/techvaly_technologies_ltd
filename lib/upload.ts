export const MAX_FILE_SIZE = 10 * 1024 * 1024;
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
export const MAX_VOICE_SIZE = 10 * 1024 * 1024;
export const MAX_TOTAL_SIZE = 30 * 1024 * 1024;

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function validateImage(file: File): string | null {
  if (!file.type.startsWith("image/")) return "শুধু image file allowed";
  if (file.size > MAX_IMAGE_SIZE)
    return `Image max ${formatFileSize(MAX_IMAGE_SIZE)}`;
  return null;
}

export function validateFile(file: File): string | null {
  if (file.size > MAX_FILE_SIZE)
    return `File max ${formatFileSize(MAX_FILE_SIZE)}`;
  return null;
}

export function validateVoice(blob: Blob): string | null {
  if (blob.size > MAX_VOICE_SIZE)
    return `Voice max ${formatFileSize(MAX_VOICE_SIZE)}`;
  return null;
}

export function validateTotal(files: File[], voice: Blob | null): string | null {
  const total = files.reduce((s, f) => s + f.size, 0) + (voice?.size ?? 0);
  if (total > MAX_TOTAL_SIZE)
    return `সব মিলিয়ে max ${formatFileSize(MAX_TOTAL_SIZE)}`;
  return null;
}