import Link from 'next/link'

export default function Footer() {
  const navLinks = [
    { name: 'ABOUT US', href: '/about' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Client Information', href: '/client' },
    { name: 'CONTACT US', href: '/contact' },
  ]

  return (
    // 🌟 bg-[#1e293b] হলো কমন ডার্ক ব্লু (Slate 800)
    <footer className="bg-[#1e293b] text-white pt-12 pb-28 border-t border-white/10 relative z-10">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-[#f42a41] italic">BdSoft</span>
            <span className="text-sm text-[#f42a41] ml-0.5">.org</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 order-3 md:order-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/70 text-sm font-medium hover:text-[#f42a41] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col text-sm text-white/50 text-center order-2 md:order-3">
            © {new Date().getFullYear()} BdSoft.org — All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>
  )
}