'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-[20px] border-b border-white/10 antialiased tracking-tight transition-all duration-300"
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 px-4 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity duration-300 relative z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            DevPortfolio
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 ${
                  isActive(link.href)
                    ? 'text-white border-b border-violet-500 pb-1'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-[60]">
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary-container px-4 py-2 md:px-6 md:py-2 rounded-full font-label-caps text-sm md:text-label-caps hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95"
            >
              Hire Me
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-center items-center md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <nav className="flex flex-col gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-bold tracking-tight transition-all duration-300 ${
                isActive(link.href) ? 'text-primary' : 'text-white hover:text-primary-container'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
