// app/layout.tsx
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/Navigation/Topbar'
import Footer from './components/Navigation/Footer'
import FloatingChat from './components/Navigation/FloatingChat'

import { metadata, viewport, siteConfig } from './metadata.config'

// Initialize Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export { metadata }
export { viewport }

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  sameAs: Object.values(siteConfig.social),
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD',
    addressLocality: 'Dhaka',
    addressRegion: 'Dhaka',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['English', 'Bengali'],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      data-scroll-behavior="smooth"
      className={`${inter.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Font Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        
        {/* Apple Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        
        {/* Microsoft Meta Tags */}
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0f172a" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Dhaka" />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />
        
        {/* Preload Critical Assets */}
        <link 
          rel="preload" 
          href="/backgroundImage/backgroundImage1.png" 
          as="image"
          type="image/png"
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Main Layout Container with Background Image */}
        <div className="relative flex min-h-screen flex-col">
          {/* Background Image with Overlay for Better Text Contrast */}
         <div 
  className="fixed inset-0 -z-10 bg-cover bg-fixed bg-center bg-no-repeat"
  style={{ 
    backgroundImage: "url('/backgroundImage/backgroundImage1.png')"
  }}
  aria-hidden="true"
/>
          
          {/* Optional Dark Overlay for Better Readability */}
          <div 
  className="fixed inset-0 -z-10 bg-cover bg-fixed bg-center bg-no-repeat"
  style={{ 
    backgroundImage: "url('/backgroundImage/backgroundImage1.png')",
    backgroundColor: '#0f172a',
    filter: 'brightness(1.2)'  // ১.২ = ২০% বেশি উজ্জ্বল, চাইলে ১.৩ বা ১.৫ দিন
  }}
  aria-hidden="true"
/>

          {/* Navigation Bar - Fixed */}
          <nav 
            
          >
            <Navbar />
          </nav>

          {/* Main Content Area */}
          <main 
            id="main-content" 
            className="relative z-10 grow pt-16"
            tabIndex={-1}
          >
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Chat Widget */}
          <FloatingChat />
        </div>
      </body>
    </html>
  )
}