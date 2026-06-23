'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu,
  X,
  Monitor,
  Globe,
  BriefcaseBusiness,
  Bot,
  Code2,
  Cloud,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { SiAndroid, SiApple, SiLinux } from 'react-icons/si';
import type { IconType } from 'react-icons';

import SolutionsDropdown from './SolutionsDropdown';
import ProductDropdown from './ProductDropdown';

type NavLink = {
  name: string;
  href: string;
  hasDropdown?: boolean;
};

type SolutionLink = {
  name: string;
  href: string;
  icon: LucideIcon | IconType;
};

const navLinks: NavLink[] = [
  { name: 'ABOUT US', href: '/about' },
  { name: 'SOLUTIONS', href: '/solutions', hasDropdown: true },
  { name: 'PRODUCTS', href: '/products', hasDropdown: true },
  { name: 'CAREER', href: '/career' },
  { name: 'CONTACT US', href: '/contact' },
];

const solutionLinks: SolutionLink[] = [
  { name: 'Android Apps', href: '/solutions/android-apps', icon: SiAndroid },
  { name: 'Web Applications', href: '/solutions/web-applications', icon: Globe },
  { name: 'iOS Apps', href: '/solutions/ios-apps', icon: SiApple },
  { name: 'Linux Apps', href: '/solutions/linux-apps', icon: SiLinux },
  { name: 'SaaS Platforms', href: '/solutions/saas-platforms', icon: Cloud },
  { name: 'Business Software', href: '/solutions/business-software', icon: BriefcaseBusiness },
  { name: 'Automation', href: '/solutions/automation-systems', icon: Bot },
  { name: 'Custom Software', href: '/solutions/custom-software', icon: Monitor },
  { name: 'API Development', href: '/solutions/api-development', icon: Code2 },
];

const productLinks = [
  { name: 'App Development', href: '/products/app' },
  { name: 'Web Development', href: '/products/web' },
  { name: 'All Products', href: '/products/all' },
  { name: 'Featured Product', href: '/products/featured' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  // Helper function to render mobile dropdown items
  const renderMobileDropdownItems = (links: any[], isSolution: boolean = false) => {
    return (
      <div className={`grid gap-2 px-3 pb-3 ${isSolution ? 'sm:grid-cols-2' : ''}`}>
        {links.map((item) => {
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-orange-400`}
              onClick={closeMobileMenu}
            >
              {Icon && <Icon className="text-lg text-purple-300" />}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <nav
      className={`fixed left-10 right-10 top-5 z-50 transition-all duration-300 rounded-[15px] ${
        isScrolled
          ? 'bg-slate-700/40 py-3 shadow-lg backdrop-blur-md border border-white/10'
          : 'bg-slate-600/30 py-4 backdrop-blur-sm sm:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tighter sm:text-2xl">
          <span className="italic text-green-500">BdSoft</span>
          <span className="text-red-500">®</span>
          <span className="ml-0.5 text-xs text-green-500 sm:text-sm">.org</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          {navLinks.map((link) => {
            if (link.name === 'SOLUTIONS') {
              return (
                <SolutionsDropdown
                  key={link.name}
                  link={link}
                  solutions={solutionLinks}
                />
              );
            }

            if (link.name === 'PRODUCTS') {
              return <ProductDropdown key={link.name} />;
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-orange-400"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-slate-950/95 shadow-xl backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-5 sm:px-6">
              {navLinks.map((link) => {
                const isOpen = openMobileDropdown === link.name;

                // Dropdown links (SOLUTIONS & PRODUCTS)
                if (link.hasDropdown) {
                  const links = link.name === 'SOLUTIONS' ? solutionLinks : productLinks;
                  const isSolution = link.name === 'SOLUTIONS';

                  return (
                    <div key={link.name} className="rounded-xl bg-white/5">
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="flex w-full items-center justify-between px-3 py-3 text-base font-semibold text-white"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {renderMobileDropdownItems(links, isSolution)}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Regular links
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-base font-semibold text-white transition hover:bg-white/10 hover:text-orange-400"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}