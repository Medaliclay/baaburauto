import { useState, useEffect } from 'react'
import { Menu, X, Car, Phone } from 'lucide-react'
import { CONTACT_CONFIG } from '../config'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Location / Achat', href: '#location-achat' },
  { label: 'Pièces', href: '#pieces' },
  { label: 'Urgence', href: '#urgence' },
  { label: 'Nettoyage', href: '#nettoyage' },
  { label: 'Ateliers', href: '#ateliers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={() => handleNavClick('#accueil')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center shadow-md group-hover:bg-amber-400 transition-colors">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-base leading-tight">
                Baabur Auto
              </div>
              <div className="text-amber-400 text-[10px] font-medium leading-tight hidden sm:block">
                Services auto à Djibouti
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-300 hover:text-amber-400 font-medium text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT_CONFIG.phone}`}
              className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_CONFIG.phone}</span>
            </a>

            <button
              onClick={() => handleNavClick('#urgence')}
              className="hidden sm:flex btn-primary text-xs px-4 py-2.5"
            >
              Urgence
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden menu-slide bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-200 hover:text-amber-400 font-medium text-sm px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-left"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href={`tel:${CONTACT_CONFIG.phone}`}
                className="flex items-center gap-2 text-amber-400 font-semibold text-sm px-4 py-2"
              >
                <Phone className="w-4 h-4" />
                {CONTACT_CONFIG.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
