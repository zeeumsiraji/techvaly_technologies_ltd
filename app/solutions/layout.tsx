import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions | BdSoft®.org',
  
  description:
    'Explore BdSoft®.org software solutions including web applications, mobile apps, SaaS platforms, APIs, automation systems, and custom business software.',

  keywords: [
    'BdSoft Solutions',
    'Web Applications',
    'Mobile Apps',
    'SaaS Platforms',
    'Business Software',
    'Automation Systems',
    'Custom Software',
    'API Development',
    'Software Services',
  ],

  openGraph: {
    title: 'Solutions | BdSoft®.org',

    description:
      'Modern software solutions designed for businesses, startups, organizations, and scalable digital platforms.',

    url: 'https://bdsoft.org/solutions',

    siteName: 'BdSoft®.org',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BdSoft®.org Solutions',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Solutions | BdSoft®.org',

    description:
      'Web apps, mobile apps, SaaS platforms, automation systems, APIs, and custom software solutions.',

    images: ['/og-image.png'],
  },
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}