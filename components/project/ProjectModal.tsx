// components/project/ProjectModal.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Globe,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Project } from '@/lib/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [showFileViewer, setShowFileViewer] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showFileViewer) setShowFileViewer(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showFileViewer, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl h-[85vh] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/55 hover:bg-black/75 transition-colors text-white backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="h-full overflow-y-auto">
          <div className={`relative h-64 bg-linear-to-r ${project.bgGradient}`}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent" />
            <div className="relative z-10 h-full flex items-end p-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-linear-to-r from-yellow-400 to-pink-500">
                      <Sparkles size={12} />
                      FEATURED
                    </span>
                  )}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${
                      project.category === 'app'
                        ? 'bg-linear-to-r from-purple-500 to-pink-500'
                        : 'bg-linear-to-r from-emerald-500 to-teal-500'
                    }`}
                  >
                    {project.category === 'app' ? (
                      <Smartphone size={12} />
                    ) : (
                      <Globe size={12} />
                    )}
                    {project.category === 'app'
                      ? 'APP PROTOTYPE'
                      : 'WEB PROTOTYPE'}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-lg">{project.shortDesc}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    About Project
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.fullDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Live Prototypes
                  </h3>
                  <div className="space-y-3">
                    {project.demoLinks.map((demo, idx) => {
                      const isUpcoming = demo.url === '#';
                      if (isUpcoming) {
                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-xl text-gray-400 font-semibold bg-gray-800/50 border border-gray-700 cursor-not-allowed"
                          >
                            <div className="flex items-center gap-2">
                              {demo.type === 'app' ? (
                                <Smartphone size={18} />
                              ) : (
                                <Globe size={18} />
                              )}
                              <span>{demo.label}</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                              ⏳ Upcoming
                            </span>
                          </div>
                        );
                      }
                      return (
                        <motion.a
                          key={idx}
                          href={demo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center justify-between gap-2 w-full px-4 py-3 rounded-xl text-white font-semibold transition-all hover:shadow-lg ${
                            demo.type === 'app'
                              ? 'bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                              : 'bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {demo.type === 'app' ? (
                              <Smartphone size={18} />
                            ) : (
                              <Globe size={18} />
                            )}
                            <span>{demo.label}</span>
                          </div>
                          <ExternalLink size={16} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {project.projectFile && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Project Files
                    </h3>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <FileText className="w-8 h-8 text-blue-400" />
                        <div className="flex-1">
                          <p className="text-white font-medium">
                            {project.projectFile.name}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {project.projectFile.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.projectFile.url}
                          download
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 transition-all"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </motion.a>
                        <motion.button
                          onClick={() => setShowFileViewer(true)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white text-sm font-semibold hover:bg-gray-600 transition-all"
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFileViewer && project.projectFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setShowFileViewer(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFileViewer(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={project.projectFile.url}
                className="w-full h-full"
                title={project.projectFile.name}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}