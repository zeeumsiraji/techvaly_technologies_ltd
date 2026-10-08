'use client'

import Link from 'next/link'; // নেভিগেশনের জন্য মেইন লিংক
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

type NavLink = {
  name: string
  href: string
  hasDropdown?: boolean
}

type SolutionLink = {
  name: string
  href: string
  icon: LucideIcon | IconType
}

interface SolutionsDropdownProps {
  link: NavLink
  solutions: SolutionLink[]
}

export default function SolutionsDropdown({
  link,
  solutions,
}: SolutionsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={link.href}
        className="flex items-center gap-1 text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-orange-400"
        aria-expanded={isOpen}
      >
        {link.name}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
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
            className="absolute left-1/2 top-full z-50 mt-4 w-[min(90vw,20rem)] -translate-x-1/2 overflow-hidden rounded-xl bg-white/95 shadow-xl backdrop-blur-md sm:w-80 lg:left-0 lg:translate-x-0"
          >
            <div className="grid max-h-[70vh] gap-1 overflow-y-auto p-2 sm:grid-cols-1">
              {solutions.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="shrink-0 text-xl text-purple-500" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}