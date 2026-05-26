'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

export default function SolutionsDropdown({ link, solutions }: SolutionsDropdownProps) {
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
      >
        {link.name}
        <ChevronDown size={14} />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-4 w-64 overflow-hidden rounded-xl bg-white/95 shadow-xl backdrop-blur-md"
          >
            {solutions.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600"
                >
                  <Icon className="text-xl text-purple-500" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}