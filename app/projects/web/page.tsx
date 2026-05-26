// app/projects/web/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Globe, ArrowRight, CheckCircle, Code, Server, Database, Cloud, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Development Projects',
  description: 'Explore our web development projects built with React, Next.js, Node.js, and modern technologies',
}

export default function WebProjectsPage() {
  const webProjects = [
    {
      title: 'Study Management System',
      description: 'Complete academic management platform with course planning, assignment tracking, and performance analytics',
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Firebase'],
      features: ['Course Planner', 'Assignment Tracker', 'Performance Analytics', 'Resource Library'],
      link: '/projects/study-management'
    },
    {
      title: 'Construction Development Site',
      description: 'Comprehensive construction management with real-time progress tracking and resource management',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Prisma'],
      features: ['Project Timeline', 'Labor Management', 'Material Tracking', 'Budget Control'],
      link: '/projects/construction'
    },
    {
      title: 'E-Learning Platform',
      description: 'Interactive online learning platform with live classes, quizzes, and certification',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      features: ['Live Streaming', 'Interactive Quizzes', 'Progress Tracking', 'Certification'],
      link: '/projects/e-learning'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Web Development Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern web applications built with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 mb-3">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}