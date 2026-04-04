export default function Footer() {
  return (
    <footer className="bg-tiger-dark text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-tiger-orange italic">Softvaly</span>IT
          <span className="text-sm text-tiger-orange ml-0.5">.com</span>
        </div>

        <div className="flex gap-8 text-sm text-white/60">
          <a href="#" className="hover:text-tiger-orange transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-tiger-orange transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-tiger-orange transition-colors">
            Careers
          </a>
        </div>

        <div className="text-sm text-white/40">
          © {new Date().getFullYear()} Softvaly © All rights reserved.
        </div>
      </div>
    </footer>
  )
}