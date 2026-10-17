// components/project/ProjectsSection.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Smartphone, Sparkles } from 'lucide-react';
import { useState, CSSProperties, Suspense, lazy } from 'react';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from '@/lib/projects';
import { webProjects } from '@/lib/webProjects';
import { appProjects } from '@/lib/appProjects';

const WebProjectsSection = lazy(() => import('./WebProjectsSection'));
const AppProjectsSection = lazy(() => import('./AppProjectsSection'));

const featuredProjects = [...webProjects, ...appProjects].filter(
  (p) => p.featured
);

interface ProjectsSectionProps {
  showHeader?: boolean;
  maxHeight?: string;
  isEmbedded?: boolean;
}

type Category = 'all' | 'web' | 'app';

export default function ProjectsSection({
  showHeader,
  maxHeight = 'none',
  isEmbedded = false,
}: ProjectsSectionProps) {
  const shouldShowHeader = showHeader ?? !isEmbedded;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${cat}`);
    }
  };

  const containerStyle: CSSProperties = {};
  if (maxHeight !== 'none') {
    containerStyle.maxHeight = maxHeight;
    containerStyle.overflowY = 'auto';
  }

  const showFeatured = activeCategory === 'all' && featuredProjects.length > 0;
  const showWeb = activeCategory === 'all' || activeCategory === 'web';
  const showApp = activeCategory === 'all' || activeCategory === 'app';

  return (
    <div className="relative">
      {shouldShowHeader && (
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Explore our innovative solutions across web and mobile platforms
            </p>
          </motion.div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          type="button"
          onClick={() => handleCategoryChange('all')}
          className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : isEmbedded
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          All Projects
        </button>

        <button
          type="button"
          onClick={() => handleCategoryChange('web')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${
            activeCategory === 'web'
              ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
              : isEmbedded
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <Globe size={18} />
          Web Prototypes
        </button>

        <button
          type="button"
          onClick={() => handleCategoryChange('app')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${
            activeCategory === 'app'
              ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : isEmbedded
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <Smartphone size={18} />
          App Prototypes
        </button>
      </div>

      <div
        style={containerStyle}
        className="pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
      >
        {/* ✅ mode="wait" বাদ — একাধিক child handle করতে default sync mode ব্যবহার */}
        <AnimatePresence>
          {showFeatured && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-linear-to-b from-yellow-400 to-pink-500 rounded-full" />
                <h2
                  className={`text-2xl font-bold flex items-center gap-2 ${
                    isEmbedded ? 'text-slate-800' : 'text-white'
                  }`}
                >
                  <Sparkles
                    className={
                      isEmbedded ? 'text-yellow-500' : 'text-yellow-400'
                    }
                  />
                  Featured Project
                </h2>
                <p
                  className={
                    isEmbedded
                      ? 'text-slate-500 hidden md:inline'
                      : 'text-gray-400 hidden md:inline'
                  }
                >
                  AI-Powered Innovation
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onHover={setSelectedProject}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {showWeb && (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <Suspense
                fallback={
                  <div className="h-40 flex items-center justify-center text-gray-400">
                    Loading web projects...
                  </div>
                }
              >
                <WebProjectsSection
                  isEmbedded={isEmbedded}
                  onSelectProject={setSelectedProject}
                />
              </Suspense>
            </motion.div>
          )}

          {showApp && (
            <motion.div
              key="app"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <Suspense
                fallback={
                  <div className="h-40 flex items-center justify-center text-gray-400">
                    Loading app projects...
                  </div>
                }
              >
                <AppProjectsSection
                  isEmbedded={isEmbedded}
                  onSelectProject={setSelectedProject}
                />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .scrollbar-thin::-webkit-scrollbar { width: 6px; }
            .scrollbar-thin::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 3px; }
            .scrollbar-thin::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
            .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
          `,
        }}
      />
    </div>
  );
}