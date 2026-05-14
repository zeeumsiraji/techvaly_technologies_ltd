import type { Metadata } from 'next'
import './globals.css'           // Your Tailwind CSS file
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'

export const metadata: Metadata = {
  title: 'Softvaly®.com - End-to-end Credential Management',
  description: 'Softvaly®.com provides end-to-end credential management solutions for government and state agencies.',
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