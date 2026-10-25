import { 
  Smartphone, Globe, Apple, Terminal, Cloud, 
  Briefcase, Bot, Monitor, Code2 
} from 'lucide-react';

export const solutionsData = [
  { 
    slug: 'android-apps',
    name: 'Android Apps', 
    icon: Smartphone, 
    color: 'text-green-600', 
    bg: 'bg-green-50',
    gradient: 'from-green-600 to-emerald-600',
    problem: 'Outdated and sluggish Android apps losing users',
    solution: 'Fast, modern apps built with Kotlin & Jetpack Compose',
    shortDesc: 'Outdated or slow apps? We build fast, modern Android apps using Kotlin.',
    features: ['Native Performance', 'Material Design 3', 'Offline Support']
  },
  { 
    slug: 'web-applications',
    name: 'Web Apps', 
    icon: Globe, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50',
    gradient: 'from-sky-600 to-cyan-600',
    problem: 'Slow, unresponsive websites driving away customers',
    solution: 'Blazing fast web apps with Next.js & React',
    shortDesc: 'Losing customers due to slow sites? Get blazing-fast, SEO-friendly websites.',
    features: ['SEO Optimized', 'Server-Side Rendering', 'Mobile First']
  },
  { 
    slug: 'ios-apps',
    name: 'iOS Apps', 
    icon: Apple, 
    color: 'text-slate-700', 
    bg: 'bg-slate-100',
    gradient: 'from-slate-700 to-gray-700',
    problem: 'Poorly designed iOS apps that fail App Store review',
    solution: 'Premium native iOS apps with Swift & SwiftUI',
    shortDesc: 'Premium iOS apps built with Swift that pass App Store reviews flawlessly.',
    features: ['Apple Guidelines', 'Biometric Auth', 'iOS Ecosystem']
  },
  { 
    slug: 'linux-apps',
    name: 'Linux Apps', 
    icon: Terminal, 
    color: 'text-orange-600', 
    bg: 'bg-orange-50',
    gradient: 'from-orange-600 to-amber-600',
    problem: 'Unstable enterprise Linux software',
    solution: 'Robust, secure, and lightweight Linux applications',
    shortDesc: 'Enterprise-grade Linux software that is secure, lightweight, and stable.',
    features: ['High Stability', 'POSIX Compliant', 'Open Source']
  },
  { 
    slug: 'saas-platforms',
    name: 'SaaS Platforms', 
    icon: Cloud, 
    color: 'text-purple-600', 
    bg: 'bg-purple-50',
    gradient: 'from-violet-600 to-purple-600',
    problem: 'Scaling issues and complex billing management',
    solution: 'Multi-tenant SaaS platforms with Stripe integration',
    shortDesc: 'Struggling to scale? We build multi-tenant SaaS platforms with Stripe billing.',
    features: ['Multi-Tenancy', 'Auto-Scaling', 'Subscription Billing']
  },
  { 
    slug: 'business-software',
    name: 'Business Software', 
    icon: Briefcase, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50',
    gradient: 'from-indigo-600 to-blue-600',
    problem: 'Manual workflows reducing team productivity',
    solution: 'Custom software that automates your operations',
    shortDesc: 'Drowning in manual workflows? Automate your operations with custom ERP/CRM.',
    features: ['Workflow Automation', 'Role-Based Access', 'Dashboards']
  },
  { 
    slug: 'automation-systems',
    name: 'Automation', 
    icon: Bot, 
    color: 'text-cyan-600', 
    bg: 'bg-cyan-50',
    gradient: 'from-cyan-600 to-teal-600',
    problem: 'Wasting hours on repetitive manual tasks',
    solution: 'Intelligent automation with RPA & AI',
    shortDesc: 'Wasting hours on repetitive tasks? Reduce costs by 70% with AI and RPA.',
    features: ['RPA Bots', 'Data Extraction', 'Zero Errors']
  },
  { 
    slug: 'custom-software',
    name: 'Custom Software', 
    icon: Monitor, 
    color: 'text-pink-600', 
    bg: 'bg-pink-50',
    gradient: 'from-pink-600 to-rose-600',
    problem: 'Off-the-shelf software doesn’t fit your needs',
    solution: 'Tailor-made software built specifically for you',
    shortDesc: "Off-the-shelf software doesn't fit? We build tailor-made software just for you.",
    features: ['Requirements First', 'Full Ownership', 'Scalable']
  },
  { 
    slug: 'api-development',
    name: 'API Development', 
    icon: Code2, 
    color: 'text-slate-800', 
    bg: 'bg-slate-200',
    gradient: 'from-slate-800 to-zinc-800',
    problem: 'Disconnected systems and manual data entry',
    solution: 'Secure APIs to connect your entire ecosystem',
    shortDesc: 'Disconnected systems? Connect everything with secure, high-performance APIs.',
    features: ['REST & GraphQL', 'Secure Auth', 'High Performance']
  },
];