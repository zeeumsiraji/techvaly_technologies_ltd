'use client'

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';
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

  const renderMobileDropdownItems = (links: any[], isSolution: boolean = false) => {
    return (
      <div className={`grid gap-2 px-3 pb-3 ${isSolution ? 'sm:grid-cols-2' : ''}`}>
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-800 transition hover:bg-sky-500/10 hover:text-orange-500"
              onClick={closeMobileMenu}
            >
              {Icon && <Icon className="text-lg text-sky-600" />}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <nav
      className={`fixed left-[5%] right-[5%] top-5 z-50 mx-auto max-w-[90%] rounded-[15px] transition-all duration-300 h-16 flex items-center ${
        isScrolled
          ? 'bg-sky-300/70 shadow-md backdrop-blur-md border border-sky-500/50'
          : 'bg-sky-50/50 backdrop-blur-sm border border-sky-100/30'
      }`}
    >
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 text-xl font-bold tracking-tighter sm:text-2xl">
          <Image
            src="/nav.png"
            alt="BdSoft Logo"
            width={36}
            height={36}
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            priority
          />
          <div className="flex items-start">
            <span className="italic text-green-600">BdSoft</span>
            <span className="text-red-500 text-xs sm:text-sm select-none">®</span>
            <span className="ml-0.5 text-xs text-green-600 sm:text-sm self-end mb-0.5">.org</span>
          </div>
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
                className="text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-orange-500"
              >
                {link.name}
              </Link>
            );
          })}

          {/* Contact Us Gradient Button */}
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-md hover:opacity-95 transition-opacity"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-sky-500/10 md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto border-t border-sky-100 bg-sky-50/95 shadow-xl backdrop-blur-md md:hidden rounded-b-[15px]">
          <div className="flex flex-col gap-2 px-4 py-5 sm:px-6">
            {navLinks.map((link) => {
              const isOpen = openMobileDropdown === link.name;

              if (link.hasDropdown) {
                const links = link.name === 'SOLUTIONS' ? solutionLinks : productLinks;
                const isSolution = link.name === 'SOLUTIONS';

                return (
                  <div key={link.name} className="rounded-xl bg-sky-500/5">
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="flex w-full items-center justify-between px-3 py-3 text-base font-semibold text-slate-800"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="overflow-hidden">
                        {renderMobileDropdownItems(links, isSolution)}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 transition hover:bg-sky-500/10 hover:text-orange-500"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              );
            })}
            {/* Mobile Contact Us Gradient Button */}
            <Link
              href="/contact"
              className="mt-2 block text-center rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-md"
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}