// app/metadata.config.ts
import type { Metadata } from 'next'

export const siteConfig = {
  name: 'BdSoft.org',
  url: 'https://bdsoft.org',
  logo: '/bdsoftlogo.jpeg',
  title: 'BdSoft.org — Software Company & Developer Growth Platform',
  description: 'BdSoft.org is a modern software company focused on web applications, mobile apps, SaaS platforms, automation systems, and custom software solutions while helping freshers become skilled senior developers through real-world experience and teamwork.',
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
    'Enterprise Software'
  ],
  
  social: {
    facebook: 'https://facebook.com/bdsoft',
    twitter: 'https://twitter.com/bdsoft',
    linkedin: 'https://linkedin.com/company/bdsoft',
    github: 'https://github.com/bdsoft',
  },
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: '%s | BdSoft.org'
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'BdSoft.org', url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: 'BdSoft.org',
  metadataBase: new URL(siteConfig.url),
  
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'BdSoft.org',
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.logo,
        width: 1200,
        height: 630,
        alt: 'BdSoft.org - Software Company Logo',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: siteConfig.locale,
    alternateLocale: siteConfig.alternateLocale,
  },

  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: 'Building innovative software solutions and transforming freshers into skilled senior developers',
    images: [siteConfig.logo],
    creator: siteConfig.creator,
    site: siteConfig.creator,
  },

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

  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': `${siteConfig.url}/en`,
      'bn-BD': `${siteConfig.url}/bn`,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}