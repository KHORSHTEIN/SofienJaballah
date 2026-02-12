'use client'

import { useState } from 'react' // 1. Import useState
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()
  // 2. Add state to track if menu is open
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/research', label: 'Recherche' },
    { href: '/publications', label: 'Publications' },
    { href: '/media', label: 'Médias' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="serif-title text-2xl font-bold text-primary">
          Dr. Sofien Jaballah
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button - 3. Added onClick handler */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-primary focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // X Icon when open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger Icon when closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 4. Mobile Menu Panel - Only shows when isOpen is true */}
      <div 
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-background border-b border-border`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              className={`text-base font-medium transition-colors ${
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}