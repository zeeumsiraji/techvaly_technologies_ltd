export type MediaType = "pdf" | "image" | "voice" | "excel" | "file" | "link";

export interface SelectedFile {
  id: string;
  type: MediaType;
  name: string;
  size: number;
  file: File | Blob; // link হলে Blob empty হবে
  url?: string;      // link type-এর জন্য
  linkProvider?: "zoom" | "meet" | "teams" | "generic";
}

export interface AttachmentLink {
  name: string;
  url: string;
  mimeType: string;
  type: MediaType;
  size?: number;
  linkProvider?: "zoom" | "meet" | "teams" | "generic";
}

export interface MediaConfig {
  pdf?: boolean;
  image?: boolean;
  voice?: boolean;
  excel?: boolean;
  file?: boolean;
  link?: boolean;

  maxSizePerFile?: number; // bytes — default 10MB
  maxTotalSize?: number;   // bytes — default 30MB
  label?: string;
  required?: boolean;
}

export type MediaPreset =
  | "contact"
  | "career"
  | "meeting"
  | "adminReply"
  | "report"
  | "chat"
  | "minimal";

export const PRESETS: Record<MediaPreset, MediaConfig> = {
  contact: {
    pdf: true,
    file: true,
    label: "PDF বা অন্যান্য ফাইল",
  },
  career: {
    pdf: true,
    excel: true,
    label: "Resume / CV (PDF, Word, Excel)",
  },
  meeting: {
    pdf: true,
    image: true,
    voice: true,
    excel: true,
    file: true,
    link: true,
    label: "Meeting-এর attachment",
  },
  adminReply: {
    pdf: true,
    image: true,
    voice: true,
    excel: true,
    file: true,
    link: true,
    label: "Reply-এর attachment",
  },
  report: {
    pdf: true,
    excel: true,
    label: "Report file",
  },
  chat: {
    pdf: true,
    image: true,
    voice: true,
    excel: true,
    file: true,
    label: "Attachment",
  },
  minimal: {
    pdf: true,
    label: "PDF",
  },
};

export const DEFAULT_MAX_SIZE = 10 * 1024 * 1024;       // 10 MB
export const DEFAULT_MAX_TOTAL = 30 * 1024 * 1024;      // 30 MB