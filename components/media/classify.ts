import type { MediaType } from "./types";

export function classifyByMime(mimeType: string, fileName = ""): MediaType {
  const mime = mimeType.toLowerCase();
  const ext = fileName.toLowerCase().split(".").pop() ?? "";

  if (mime === "application/pdf" || ext === "pdf") return "pdf";

  if (mime.startsWith("image/")) return "image";

  if (mime.startsWith("audio/")) return "voice";

  if (
    mime.includes("spreadsheet") ||
    mime.includes("excel") ||
    mime.includes("word") ||
    mime.includes("document") ||
    mime.includes("presentation") ||
    ["xlsx", "xls", "csv", "doc", "docx", "ppt", "pptx"].includes(ext)
  ) {
    return "excel";
  }

  return "file";
}

export function detectLinkProvider(
  url: string
): "zoom" | "meet" | "teams" | "generic" {
  const u = url.toLowerCase();
  if (u.includes("zoom.us")) return "zoom";
  if (u.includes("meet.google.com")) return "meet";
  if (u.includes("teams.microsoft.com") || u.includes("teams.live.com"))
    return "teams";
  return "generic";
}

export function linkIcon(provider: string): string {
  switch (provider) {
    case "zoom":
      return "🎥";
    case "meet":
      return "📹";
    case "teams":
      return "💼";
    default:
      return "🔗";
  }
}

export function linkLabel(provider: string): string {
  switch (provider) {
    case "zoom":
      return "Join Zoom";
    case "meet":
      return "Join Meet";
    case "teams":
      return "Join Teams";
    default:
      return "Open Link";
  }
}

export function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function mediaIcon(type: MediaType): string {
  switch (type) {
    case "pdf":
      return "📄";
    case "image":
      return "🖼️";
    case "voice":
      return "🎤";
    case "excel":
      return "📊";
    case "link":
      return "🔗";
    default:
      return "📎";
  }
}