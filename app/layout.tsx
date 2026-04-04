import type { Metadata } from 'next'
import './globals.css'           // Your Tailwind CSS file
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import Link from 'next/dist/client/link'
import About from './components/About'

export const metadata: Metadata = {
  title: 'TigerIT - End-to-end Credential Management',
  description: 'TigerIT provides end-to-end credential management solutions for government and state agencies.',
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

        

          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}