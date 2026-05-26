'use client'


import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Smartphone, Globe, FolderGit2, Users, Sparkles, Filter, SortAsc, Mail, User, ArrowRight } from 'lucide-react'

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
    }, 100)
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
      features: ['iOS & Android', 'Kotlin', 'KMP', 'Native Apps (MacOS & Linux)']
    },
    {
      title: 'Web Development',
      description: 'Build modern, responsive websites and web apps',
      icon: Globe,
      href: '/projects/web',
      features: ['React & Next.js', 'Vue.js', 'Node.js', 'Cloud Integration']
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
      <button 
        className="flex items-center gap-1 text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-orange-400"
        onClick={() => window.location.href = '/projects'}
      >
        PROJECTS
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-4 w-180 overflow-hidden rounded-xl bg-white/95 shadow-xl backdrop-blur-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-6">
              {/* Two Cards Row */}
              <div className="grid grid-cols-2 gap-4">
                {mainCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Link
                      key={category.title}
                      href={category.href}
                      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 hover:border-purple-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Decorative background */}
                      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-linear-to from-purple-100/50 to-blue-100/50 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-4 inline-block rounded-xl bg-linear-to-br from-purple-500 to-purple-600 p-2.5 text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <Icon size={24} />
                        </div>
                        
                        {/* Title */}
                        <h3 className="mb-2 text-lg font-bold text-slate-800 transition-colors group-hover:text-purple-600">
                          {category.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="mb-3 text-sm text-slate-500">
                          {category.description}
                        </p>
                        
                        {/* Features */}
                        <div className="mb-4 flex flex-wrap gap-1.5">
                          {category.features?.map((feature) => (
                            <span
                              key={feature}
                              className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 transition-colors group-hover:bg-purple-100 group-hover:text-purple-700"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {/* Learn more link */}
                        <div className="flex items-center gap-1 text-sm font-medium text-purple-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                          <span>Learn more</span>
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-linear-to from-transparent via-slate-200 to-transparent" />

              {/* Quick Links Section */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Quick Links */}
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Popular Projects
                  </h4>
                  <div className="space-y-1">
                    {leftQuickLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 transition-all hover:bg-purple-50 hover:text-purple-600 hover:pl-4"
                          onClick={() => setIsOpen(false)}
                        >
                          {Icon && <Icon size={14} className="text-slate-400" />}
                          <span>{link.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Right Quick Links */}
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Manage Projects
                  </h4>
                  <div className="space-y-1">
                    {rightQuickLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 transition-all hover:bg-purple-50 hover:text-purple-600 hover:pl-4"
                          onClick={() => setIsOpen(false)}
                        >
                          {Icon && <Icon size={14} className="text-slate-400" />}
                          <span>{link.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with featured project */}
            <div className="border-t border-slate-100 bg-linear-to from-purple-50 to-blue-50 p-4">
              <Link
                href="/projects/featured"
                className="group flex items-center justify-between rounded-lg p-2 transition-all hover:bg-white/50"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-linear-to from-purple-500 to-blue-500 p-1.5 text-white shadow-md">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Featured Project</span>
                    <span className="ml-2 text-sm text-slate-500">View our latest work</span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-purple-500 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}