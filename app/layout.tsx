// app/layout.tsx
import type { ReactNode } from 'react'
import './globals.css'

import Navbar from './components/Navigation/Navbar'
import Footer from './components/Navigation/Footer'
import FloatingChat from './components/Navigation/FloatingChat'

import { metadata, viewport, siteConfig } from './metadata.config'

export { metadata, viewport }

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  sameAs: Object.values(siteConfig.social),
  description:
    'Modern software company specializing in web applications, mobile apps, SaaS platforms, and custom software solutions while developing skilled senior developers.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="msapplication-TileColor" content="#00aba9" />

        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Dhaka" />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />
      </head>

      <body>
        <div className="flex min-h-screen flex-col">
          <nav className="fixed left-0 top-0 z-50 flex h-16 w-full items-center bg-linear-to-r from-blue-400/30 via-cyan-400/30 to-teal-400/30 px-4 text-white">
            <Navbar />
          </nav>

          <main className="grow pt-16">{children}</main>

          <Footer />
          <FloatingChat />
        </div>
      </body>
    </html>
  )
}