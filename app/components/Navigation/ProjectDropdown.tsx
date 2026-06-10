'use client'




import Link from 'next/link'; // নেভিগেশনের জন্য মেইন লিংক

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  Filter,
  FolderGit2,
  Globe,
  Mail,
  Smartphone,
  SortAsc,
  Sparkles,
  User,
  Users,
} from 'lucide-react'

type ProjectCategory = {
  title: string
  description: string
  icon: React.ElementType
  href: string
  features?: string[]
}

type QuickLink = {
  name: string
  href: string
  icon?: React.ElementType
}

export default function ProjectDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 120)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const mainCategories: ProjectCategory[] = [
    {
      title: 'App Development',
      description: 'Design, build, and deploy mobile applications',
      icon: Smartphone,
      href: '/projects/app',
      features: ['iOS & Android', 'Kotlin', 'KMP', 'MacOS & Linux'],
    },
    {
      title: 'Web Development',
      description: 'Build modern responsive websites and web apps',
      icon: Globe,
      href: '/projects/web',
      features: ['React', 'Next.js', 'Node.js', 'Cloud'],
    },
  ]

  const leftQuickLinks: QuickLink[] = [
    { name: 'Acme Corp', href: '/projects/acme', icon: FolderGit2 },
    { name: 'Team', href: '/projects/team', icon: Users },
    { name: 'All Projects', href: '/projects/all', icon: FolderGit2 },
    { name: 'Resources', href: '/projects/resources', icon: FolderGit2 },
  ]

  const rightQuickLinks: QuickLink[] = [
    { name: 'Sort by Date', href: '/projects/sort', icon: SortAsc },
    { name: 'Filter by Tech', href: '/projects/filter', icon: Filter },
    { name: 'Project Name', href: '/projects/name', icon: User },
    { name: 'Contact Email', href: '/projects/email', icon: Mail },
  ]

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/projects"
        className="flex items-center gap-1 text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-orange-400"
        aria-expanded={isOpen}
      >
        PROJECTS
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              absolute right-0 top-full z-50 mt-4
              w-[80vw] max-w-4xl
              overflow-hidden rounded-2xl
              border border-white/20 bg-white/95
              shadow-2xl backdrop-blur-md
            "
          >
            <div className="max-h-[68vh] overflow-y-auto p-4 sm:p-5">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {mainCategories.map((category) => {
                  const Icon = category.icon

                  return (
                    <Link
                      key={category.title}
                      href={category.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        group relative overflow-hidden rounded-2xl
                        border border-slate-200
                        bg-linear-to-br from-white to-slate-50
                        p-4 transition-all duration-300
                        hover:border-purple-200
                        hover:shadow-xl hover:shadow-purple-100
                      "
                    >
                      <div
                        className="
                          absolute -right-6 -top-6 h-24 w-24
                          rounded-full bg-linear-to-br
                          from-purple-100/50 to-blue-100/50
                          opacity-0 transition-all duration-300
                          group-hover:opacity-100
                        "
                      />

                      <div className="relative z-10">
                        <div
                          className="
                            mb-3 inline-flex rounded-xl
                            bg-linear-to-br from-purple-500 to-purple-600
                            p-2.5 text-white shadow-lg
                            transition-transform duration-300
                            group-hover:scale-110
                          "
                        >
                          <Icon size={22} />
                        </div>

                        <h3
                          className="
                            mb-2 text-base font-bold text-slate-800
                            transition-colors group-hover:text-purple-600
                          "
                        >
                          {category.title}
                        </h3>

                        <p className="mb-3 text-sm text-slate-500">
                          {category.description}
                        </p>

                        <div className="mb-4 flex flex-wrap gap-1.5">
                          {category.features?.map((feature) => (
                            <span
                              key={feature}
                              className="
                                rounded-full bg-slate-100
                                px-2 py-0.5 text-xs text-slate-600
                                transition-colors
                                group-hover:bg-purple-100
                                group-hover:text-purple-700
                              "
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div
                          className="
                            flex items-center gap-1
                            text-sm font-medium text-purple-600
                            opacity-0 transition-all duration-300
                            group-hover:opacity-100
                          "
                        >
                          <span>Learn more</span>
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="my-5 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Popular Projects
                  </h4>

                  <div className="space-y-1">
                    {leftQuickLinks.map((link) => {
                      const Icon = link.icon

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="
                            flex items-center gap-3 rounded-lg
                            px-3 py-2 text-sm text-slate-600
                            transition-all duration-200
                            hover:bg-purple-50 hover:pl-5 hover:text-purple-600
                          "
                        >
                          {Icon && <Icon size={15} className="text-slate-400" />}
                          <span>{link.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Manage Projects
                  </h4>

                  <div className="space-y-1">
                    {rightQuickLinks.map((link) => {
                      const Icon = link.icon

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="
                            flex items-center gap-3 rounded-lg
                            px-3 py-2 text-sm text-slate-600
                            transition-all duration-200
                            hover:bg-purple-50 hover:pl-5 hover:text-purple-600
                          "
                        >
                          {Icon && <Icon size={15} className="text-slate-400" />}
                          <span>{link.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 bg-linear-to-r from-purple-50 to-blue-50 p-3">
              <Link
                href="/projects/featured"
                onClick={() => setIsOpen(false)}
                className="
                  group flex flex-col gap-3 rounded-xl p-2
                  transition-all hover:bg-white/60
                  sm:flex-row sm:items-center sm:justify-between
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      rounded-full bg-linear-to-r
                      from-purple-500 to-blue-500
                      p-2 text-white shadow-md
                    "
                  >
                    <Sparkles size={14} />
                  </div>

                  <div>
                    <p className="font-medium text-slate-700">
                      Featured Project
                    </p>
                    <p className="text-sm text-slate-500">
                      View our latest work
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={18}
                  className="
                    text-purple-500 opacity-0 transition-all
                    group-hover:translate-x-1 group-hover:opacity-100
                  "
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}