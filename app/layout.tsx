// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Navigation/Footer'
import FloatingChat from './components/Navigation/FloatingChat'

// Separate Viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

// Metadata export (without themeColor and viewport)
export const metadata: Metadata = {
  title: {
    default: 'BdSoft.org — Software Company & Developer Growth Platform',
    template: '%s | BdSoft.org'
  },
  
  description: 'BdSoft.org is a modern software company focused on web applications, mobile apps, SaaS platforms, automation systems, and custom software solutions while helping freshers become skilled senior developers through real-world experience and teamwork.',

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

  authors: [{ name: 'BdSoft.org', url: 'https://bdsoft.org' }],
  creator: 'BdSoft.org',
  publisher: 'BdSoft.org',
  
  metadataBase: new URL('https://bdsoft.org'),
  
  openGraph: {
    title: 'BdSoft.org — Software Company & Developer Growth Platform',
    description: 'Building innovative software solutions and transforming freshers into skilled senior developers through practical experience, teamwork, and real-world projects.',
    siteName: 'BdSoft.org',
    url: 'https://bdsoft.org',
    images: [
      {
        url: '/bdsoftlogo.jpeg',
        width: 1200,
        height: 630,
        alt: 'BdSoft.org - Software Company Logo',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'bn_BD',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'BdSoft.org — Software Company & Developer Growth Platform',
    description: 'Building innovative software solutions and transforming freshers into skilled senior developers',
    images: ['/bdsoftlogo.jpeg'],
    creator: '@bdsoft',
    site: '@bdsoft',
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
    canonical: 'https://bdsoft.org',
    languages: {
      'en-US': 'https://bdsoft.org/en',
      'bn-BD': 'https://bdsoft.org/bn',
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

// Structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BdSoft.org',
  url: 'https://bdsoft.org',
  logo: 'https://bdsoft.org/bdsoftlogo.jpeg',
  sameAs: [
    'https://facebook.com/bdsoft',
    'https://twitter.com/bdsoft',
    'https://linkedin.com/company/bdsoft',
    'https://github.com/bdsoft',
  ],
  description: 'Modern software company specializing in web applications, mobile apps, SaaS platforms, and custom software solutions while developing skilled senior developers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BdSoft.org" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Geo Tags for Bangladesh */}
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Dhaka" />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full h-16 bg-linear-to-r from-blue-400/30 via-cyan-400/30 to-teal-400/30 text-white flex items-center px-4 z-50">

        

            <Navbar />
          </nav>

          {/* Main Content */}
          <main className="grow pt-16">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Message Button */}
          <FloatingChat />
        </div>
      </body>
    </html>
  )
}