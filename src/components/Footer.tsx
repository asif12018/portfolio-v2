export default function Footer() {
  const socialLinks = [
    { href: '#', label: 'Github' },
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'Resume' },
  ]

  return (
    <footer className="w-full py-12 bg-black border-t border-white/5 text-sm">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
        <div className="text-lg font-semibold text-white/80">DevPortfolio</div>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-white/40">© 2024 Crafted with precision. All rights reserved.</div>
      </div>
    </footer>
  )
}
