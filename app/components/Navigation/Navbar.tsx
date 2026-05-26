'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Menu,
  X,
  Monitor,
  Globe,
  BriefcaseBusiness,
  Bot,
  Code2,
  Cloud,
  type LucideIcon,
} from 'lucide-react'

import {
  SiAndroid,
  SiApple,
  SiLinux,
} from 'react-icons/si'

import type { IconType } from 'react-icons'

import SolutionsDropdown from './SolutionsDropdown'
import ProjectDropdown from './ProjectDropdown'




type SolutionLink = {
  name: string
  href: string
  icon: LucideIcon | IconType
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'ABOUT US', href: '/about' },
    { name: 'SOLUTIONS', href: '/solutions', hasDropdown: true },
    { name: 'PROJECTS', href: '/projects', hasDropdown: true },
    { name: 'CAREER', href: '/career' },
    { name: 'CONTACT US', href: '/contact' },
  ]

  const solutionLinks: SolutionLink[] = [
    {
      name: 'Android Apps',
      href: '/solutions/android-apps',
      icon: SiAndroid,
    },
    {
      name: 'Web Applications',
      href: '/solutions/web-applications',
      icon: Globe,
    },
    {
      name: 'iOS Apps',
      href: '/solutions/ios-apps',
      icon: SiApple,
    },
    {
      name: 'Linux Apps',
      href: '/solutions/linux-apps',
      icon: SiLinux,
    },
    {
      name: 'SaaS Platforms',
      href: '/solutions/saas-platforms',
      icon: Cloud,
    },
    {
      name: 'Business Software',
      href: '/solutions/business-software',
      icon: BriefcaseBusiness,
    },
    {
      name: 'Automation',
      href: '/solutions/automation-systems',
      icon: Bot,
    },
    {
      name: 'Custom Software',
      href: '/solutions/custom-software',
      icon: Monitor,
    },
    {
      name: 'API Development',
      href: '/solutions/api-development',
      icon: Code2,
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-linear-to-r from-blue-400/30 via-cyan-400/30 to-teal-400/30 backdrop-blur-md py-3 shadow-lg'
          : 'bg-linear-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 backdrop-blur-sm py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-green-500 italic">BdSoft</span>
          <span className="text-red-500">®</span>
          <span className="ml-0.5 text-sm text-green-500">.org</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">


        {navLinks.map((link) => {
  if (link.name === 'SOLUTIONS') {
    return <SolutionsDropdown key={link.name} link={link} solutions={solutionLinks} />
  }
  if (link.name === 'PROJECTS') {
    return <ProjectDropdown key={link.name} />
  }
  return (
    <Link
      key={link.name}
      href={link.href}
      className="text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-orange-400"
    >
      {link.name}
    </Link>
  )
})}


        
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-linear-to-r from-blue-400/30 via-cyan-400/30 to-teal-400/30 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-2 border-l border-white/20 pl-4">
                {solutionLinks.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-white transition hover:bg-white/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="text-xl text-purple-300" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}