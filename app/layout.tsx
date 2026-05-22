import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Navigation/Footer'
import FloatingChat from './components/Navigation/FloatingChat'

export const metadata: Metadata = {
  title: 'Softvaly®.com - End-to-end Credential Management',
  description:
    'Softvaly®.com provides end-to-end credential management solutions for government and state agencies.',
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
          <FloatingChat/>
          

        </div>
      </body>
    </html>
  )
}