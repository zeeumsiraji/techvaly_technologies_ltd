import type { Metadata } from 'next'
import './globals.css'           // Your Tailwind CSS file
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Navigation/Footer'

export const metadata: Metadata = {
  title: 'BdSoft®.org | Modern Software Solutions & Developer Growth',
  
  description:
    'BdSoft®.org is a modern software company building innovative digital solutions including web apps, SaaS platforms, APIs, automation systems, and business software while transforming freshers into skilled senior developers through real-world experience, mentorship, teamwork, and continuous learning.',

  keywords: [
    'BdSoft',
    'BdSoft.org',
    'Software Company',
    'Web Development',
    'Mobile Apps',
    'SaaS Platform',
    'Business Software',
    'API Development',
    'Automation Systems',
    'Custom Software Solutions',
    'Developer Training',
    'Software Engineering',
    'Modern Software Solutions',
    'Bangladesh Software Company',
    'Agile Development',
    'Tech Innovation',
  ],

  authors: [{ name: 'BdSoft®.org' }],

  creator: 'BdSoft®.org',

  publisher: 'BdSoft®.org',

  metadataBase: new URL('https://bdsoft.org'),

  openGraph: {
    title: 'BdSoft®.org | Building Software & Future Developers',
    
    description:
      'BdSoft®.org develops scalable digital products, SaaS platforms, business systems, APIs, and automation tools while helping freshers become confident senior developers through practical learning and teamwork.',

    url: 'https://bdsoft.org',

    siteName: 'BdSoft®.org',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BdSoft®.org',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'BdSoft®.org',

    description:
      'Modern software solutions, innovation, teamwork, and developer growth.',

    images: ['/og-image.png'],
  },

  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">


          <Navbar />

        

          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}