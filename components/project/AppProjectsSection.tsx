// components/project/AppProjectsSection.tsx
'use client';

import { AnimatePresence } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { appProjects } from '@/lib/appProjects';
import type { Project } from '@/lib/projects';

// ✅ Props-এ onSelectProject যোগ করা হলো
interface AppProjectsSectionProps {
  isEmbedded?: boolean;
  onSelectProject?: Dispatch<SetStateAction<Project | null>>;
}

export default function AppProjectsSection({
  isEmbedded = false,
  onSelectProject, // ✅ প্রপটি রিসিভ করা হলো
}: AppProjectsSectionProps) {
  const [internalProject, setInternalProject] = useState<Project | null>(null);

  // ✅ প্যারেন্টের সেটার ফাংশন থাকলে সেটা ব্যবহার করবে, নাহলে লোকাল স্টেট
  const selectedProject = internalProject;
  const setSelectedProject = onSelectProject || setInternalProject;

  const items = appProjects.filter((p) => !p.featured);

  if (items.length === 0) return null;

  return (
    <>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-linear-to-b from-purple-500 to-pink-500 rounded-full" />
          <h2
            className={`text-2xl font-bold flex items-center gap-2 ${
              isEmbedded ? 'text-slate-800' : 'text-white'
            }`}
          >
            <Smartphone
              className={isEmbedded ? 'text-purple-600' : 'text-purple-400'}
            />
            App Projects
          </h2>
          <p
            className={
              isEmbedded
                ? 'text-slate-500 hidden md:inline'
                : 'text-gray-400 hidden md:inline'
            }
          >
            Built with Kotlin, Jetpack Compose & KMP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onHover={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}