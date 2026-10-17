// components/project/WebProjectsSection.tsx
'use client';

import { AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { webProjects } from '@/lib/webProjects';
import type { Project } from '@/lib/projects';

// ✅ Props-এ onSelectProject যোগ করা হলো
interface WebProjectsSectionProps {
  isEmbedded?: boolean;
  onSelectProject?: Dispatch<SetStateAction<Project | null>>;
}

export default function WebProjectsSection({
  isEmbedded = false,
  onSelectProject, // ✅ প্রপটি রিসিভ করা হলো
}: WebProjectsSectionProps) {
  const [internalProject, setInternalProject] = useState<Project | null>(null);

  // ✅ প্যারেন্টের সেটার ফাংশন থাকলে সেটা ব্যবহার করবে, নাহলে লোকাল স্টেট
  const selectedProject = internalProject;
  const setSelectedProject = onSelectProject || setInternalProject;

  const items = webProjects.filter((p) => !p.featured);

  if (items.length === 0) return null;

  return (
    <>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-linear-to-b from-emerald-500 to-teal-500 rounded-full" />
          <h2
            className={`text-2xl font-bold flex items-center gap-2 ${
              isEmbedded ? 'text-slate-800' : 'text-white'
            }`}
          >
            <Globe
              className={isEmbedded ? 'text-emerald-600' : 'text-emerald-400'}
            />
            Web Projects
          </h2>
          <p
            className={
              isEmbedded
                ? 'text-slate-500 hidden md:inline'
                : 'text-gray-400 hidden md:inline'
            }
          >
            Built with React, Next.js, Node.js & Modern Stack
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