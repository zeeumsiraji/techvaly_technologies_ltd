// components/project/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Sparkles } from 'lucide-react';
import type { Project } from '@/lib/projects';

const COLOR_GLOW: Record<string, string> = {
  blue: 'bg-blue-500/20',
  purple: 'bg-purple-500/20',
  emerald: 'bg-emerald-500/20',
  pink: 'bg-pink-500/20',
  yellow: 'bg-yellow-500/20',
  cyan: 'bg-cyan-500/20',
  teal: 'bg-teal-500/20',
  rose: 'bg-rose-500/20',
  indigo: 'bg-indigo-500/20',
  violet: 'bg-violet-500/20',
  sky: 'bg-sky-500/20',
  orange: 'bg-orange-500/20',
  red: 'bg-red-500/20',
  green: 'bg-green-500/20',
  amber: 'bg-amber-500/20',
  lime: 'bg-lime-500/20',
  fuchsia: 'bg-fuchsia-500/20',
};

const getColorGlow = (color?: string) =>
  (color && COLOR_GLOW[color]) || 'bg-gray-500/20';

export interface ProjectCardProps {
  project: Project;
  index: number;
  onHover: (project: Project | null) => void;
}

export default function ProjectCard({
  project,
  index,
  onHover,
}: ProjectCardProps) {
  const getIcon = () => {
    if (project.featured) {
      return <Sparkles className="w-5 h-5 text-yellow-300" />;
    }
    if (project.category === 'app') {
      return <Smartphone className="w-5 h-5 text-purple-400" />;
    }
    return <Globe className="w-5 h-5 text-emerald-400" />;
  };

  const getCategoryColor = () => {
    if (project.featured) {
      return 'bg-linear-to-r from-yellow-400 to-pink-500';
    }
    return project.category === 'app'
      ? 'bg-linear-to-r from-purple-500 to-pink-500'
      : 'bg-linear-to-r from-emerald-500 to-teal-500';
  };

  const getCategoryLabel = () => {
    if (project.featured) return 'FEATURED';
    return project.category === 'app' ? 'APP' : 'WEB';
  };

  return (
    <div
      className={`relative group cursor-pointer ${
        project.featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
      onClick={() => onHover(project)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${project.bgGradient} p-px ${
          project.featured ? 'shadow-2xl shadow-purple-500/30' : ''
        }`}
      >
        <div
          className={`relative ${
            project.featured ? 'h-72 md:h-80' : 'h-80'
          } rounded-2xl bg-gray-900/90 backdrop-blur-sm p-6 flex flex-col justify-between`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          <div className="absolute top-4 right-4 z-10">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor()}`}
            >
              {project.featured ? (
                <Sparkles size={12} />
              ) : project.category === 'app' ? (
                <Smartphone size={12} />
              ) : (
                <Globe size={12} />
              )}
              {getCategoryLabel()}
            </span>
          </div>

          <div className={`relative z-10 ${project.featured ? 'md:max-w-3xl' : ''}`}>
            <div className="mb-4">
              <div
                className={`inline-flex p-2 rounded-lg ${getColorGlow(
                  project.color
                )} backdrop-blur-sm mb-3`}
              >
                {getIcon()}
              </div>
              <h3
                className={`font-bold text-white mb-2 ${
                  project.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-gray-300 line-clamp-2 ${
                  project.featured ? 'text-base md:text-lg' : 'text-sm'
                }`}
              >
                {project.shortDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack
                .slice(0, project.featured ? 6 : 4)
                .map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              {project.techStack.length > (project.featured ? 6 : 4) && (
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                  +{project.techStack.length - (project.featured ? 6 : 4)}
                </span>
              )}
            </div>
          </div>

          <div className="relative z-10 flex justify-end">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}