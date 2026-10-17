// lib/projects.ts

// --- Types ---
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

// --- Re-exports ---
export { webProjects } from './webProjects';
export { appProjects } from './appProjects';

// --- Aggregated (backward compatible) ---
import { webProjects } from './webProjects';
import { appProjects } from './appProjects';

export const projects: Project[] = [...webProjects, ...appProjects];

// --- Helpers ---
export const getAppProjects = () => appProjects;
export const getWebProjects = () => webProjects;
export const getProjectById = (id: number) =>
  projects.find((p) => p.id === id);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getSortedProjects = () =>
  [...projects].sort(
    (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
  );