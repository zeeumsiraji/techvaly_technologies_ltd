
import { Link } from 'lucide-react'; // Or another UI/icon library

export default function Footer() {
  const navLinks = [
    { name: 'ABOUT US', href: '/about' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Client Information', href: '/client' },
    { name: 'CONTACT US', href: '/contact' },
  ]

  return (
    <footer className="bg-tiger-dark text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-tiger-orange italic">BdSoft</span>
            <span className="text-sm text-tiger-orange ml-0.5">.org</span>
          </div>

           <div className="border-t border-white/10 pt-6 flex flex-col text-sm text-white/40 text-center">
            © {new Date().getFullYear()} BdSoft.org — All rights reserved.
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/70 text-sm font-medium hover:text-tiger-orange transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          
        </div>

        {/* Bottom Section */}
      
          
          

         
        
      </div> 
    </footer>
  )
}