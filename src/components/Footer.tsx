import SocialLinks from '@/components/SocialLinks'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-white/5 text-sm">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Asif Sheikh Logo" className="w-8 h-8 rounded-md object-cover" />
          <span className="text-lg font-semibold text-white/80">Asif<span className="text-[#7c3aed]">.</span></span>
        </div>
        <SocialLinks />
        <div className="text-white/40 text-center">© {new Date().getFullYear()} Asif Sheikh. All rights reserved.</div>
      </div>
    </footer>
  )
}
