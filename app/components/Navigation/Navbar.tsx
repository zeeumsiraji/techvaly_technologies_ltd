'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

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
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CLIENT INFORMATION', href: '/client' },
    { name: 'CONTACT US', href: '/contact' },
  ]

  const solutionLinks = [
        

    { name: 'Web Applications', href: '/solutions/web-applications' },
    { name: 'Mobile Apps', href: '/solutions/mobile-apps' },
    { name: 'SaaS Platforms', href: '/solutions/saas-platforms' },
    { name: 'Business Software', href: '/solutions/business-software' },
    { name: ' Automation', href: '/solutions/automation-systems' },
    { name: 'Custom Software', href: '/solutions/custom-software' },
    { name: ' API Development', href: '/solutions/api-development' },

  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-linear-to-r from-blue-400/30 via-cyan-400/30 to-teal-400/30 backdrop-blur-md py-3 shadow-lg'
          : 'bg-linear-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-tiger-orange italic">BdSoft</span>
          <span className="text-white">®</span>
          <span className="text-sm text-tiger-orange ml-0.5">.org</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-white/90 hover:text-tiger-orange text-sm font-semibold tracking-wide transition-colors flex items-center gap-1"
                >
                  {link.name}
                  <ChevronDown size={14} />
                </Link>

                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-56 rounded-xl bg-white/95 backdrop-blur-md shadow-xl overflow-hidden"
                    >
                      {solutionLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-tiger-orange hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-tiger-orange text-sm font-semibold tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-linear-to-r from-blue-400/30 via-cyan-400/30 to-teal-400/30 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pl-4 flex flex-col gap-3 border-l border-white/20">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/70 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}