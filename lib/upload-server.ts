import { writeFile, mkdir } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

export interface UploadedFileInfo {
  name: string;      // Original name (Bangla সহ)
  url: string;       // URL-safe filename
  mimeType: string;
  size: number;
  storedName: string; // Actual filename on disk
}

/**
 * Generate safe filename — English only
 */
function makeSafeFileName(
  originalName: string,
  mimeType: string
): { stored: string; ext: string } {
  // Get extension
  const origExt = path.extname(originalName).toLowerCase();
  let ext = origExt;

  // Fallback extension from mime
  if (!ext) {
    if (mimeType.startsWith("image/")) {
      ext = "." + mimeType.split("/")[1].split("+")[0];
    } else if (mimeType.startsWith("audio/")) {
      ext = ".webm";
    } else if (mimeType === "application/pdf") {
      ext = ".pdf";
    } else {
      ext = ".bin";
    }
  }

  const timestamp = Date.now();
  const random = Math.random().toString(36).slice(2, 8);
  const stored = `${timestamp}-${random}${ext}`;

  return { stored, ext };
}

export async function saveToServer(
  file: File | Blob,
  originalName: string,
  mimeType: string
): Promise<UploadedFileInfo> {
  // Ensure directory
  await mkdir(UPLOAD_DIR, { recursive: true });

  // Safe filename — English only
  const { stored } = makeSafeFileName(originalName, mimeType);
  const filePath = path.join(UPLOAD_DIR, stored);

  // Convert & write
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await writeFile(filePath, buffer);

  // Public URL — always URL-safe
  const publicUrl = `/uploads/${stored}`;

  return {
    name: originalName,      // ← Original name (Bangla)
    url: publicUrl,          // ← URL-safe path
    mimeType,
    size: buffer.length,
    storedName: stored,
  };
}