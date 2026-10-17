// lib/types.ts
export interface ProjectFile {
  name: string;
  url: string;
  type: string;
  size?: string;
}

export interface DemoLink {
  type: 'app' | 'web';
  url: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'app' | 'web';
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  bgGradient: string;
  image: string;
  features: string[];
  color: string;
  demoLinks: DemoLink[];
  projectFile?: ProjectFile;
  featured?: boolean;
}

