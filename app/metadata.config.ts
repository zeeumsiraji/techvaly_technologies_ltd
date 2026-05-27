// app/metadata.config.ts

import type { Metadata, Viewport } from 'next'

const SITE_URL = 'https://bdsoft.org'
const SITE_NAME = 'BdSoft.org'

const SITE_TITLE =
  'BdSoft.org — Software Company & Developer Growth Platform'

const SITE_DESCRIPTION =
  'BdSoft.org is a modern software company focused on web applications, mobile apps, SaaS platforms, automation systems, and custom software solutions while helping freshers become skilled senior developers through real-world experience and teamwork.'

export const siteConfig = {
  name: SITE_NAME,
  url: SITE_URL,

  // Social / SEO Image
  logo: '/bdsoftlogo.jpeg',

  title: SITE_TITLE,
  description: SITE_DESCRIPTION,

  creator: '@bdsoft',

  locale: 'en_US',
  alternateLocale: 'bn_BD',

  keywords: [
    'BdSoft',
    'BdSoft.org',
    'Software Company',
    'Web Development',
    'Mobile App Development',
    'SaaS Platform',
    'Custom Software',
    'Software Solutions',
    'Bangladesh Software Company',
    'Developer Team',
    'Freshers to Senior Developers',
    'API Development',
    'Automation Systems',
    'Kotlin Multiplatform',
    'Jetpack Compose',
    'React Development',
    'Next.js Development',
    'Cross Platform Apps',
    'iOS Development',
    'Android Development',
    'Web Applications',
    'Enterprise Software',
  ],

  social: {
    facebook: 'https://facebook.com/bdsoft',
    twitter: 'https://twitter.com/bdsoft',
    linkedin: 'https://linkedin.com/company/bdsoft',
    github: 'https://github.com/bdsoft',
  },
} as const

// Viewport Configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,

  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#0a0a0a',
    },
  ],
}

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  // FIXED TypeScript Error
  keywords: [...siteConfig.keywords],

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.creator,
  publisher: siteConfig.name,

  category: 'technology',

  // Canonical URLs
  alternates: {
    canonical: '/',

    languages: {
      'en-US': '/en',
      'bn-BD': '/bn',
    },
  },

  // Favicons & App Icons
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],

    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],

    shortcut: ['/favicon.ico'],
  },

  // OpenGraph
  openGraph: {
    title: siteConfig.title,

    description: siteConfig.description,

    siteName: siteConfig.name,

    url: siteConfig.url,

    type: 'website',

    locale: siteConfig.locale,

    alternateLocale: siteConfig.alternateLocale,

    images: [
      {
        url: siteConfig.logo,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Company Logo`,
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',

    title: siteConfig.title,

    description:
      'Building innovative software solutions and transforming freshers into skilled senior developers',

    images: [siteConfig.logo],

    creator: siteConfig.creator,

    site: siteConfig.creator,
  },

  // Robots
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (optional)
  verification: {
    google: 'google-site-verification-code',
  },

  // Extra Mobile Meta
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: siteConfig.name,
  },

  formatDetection: {
    telephone: false,
  },
}