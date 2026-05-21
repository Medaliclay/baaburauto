import { useState, useEffect } from 'react'
import { Menu, X, Car, Phone, AlertTriangle, Wrench, MessageCircle, Sparkles } from 'lucide-react'
import { CONTACT_CONFIG } from '../config'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Véhicules', href: '#location-achat' },
  { label: 'Pièces', href: '#pieces' },
  { label: 'Urgence', href: '#urgence' },
  { label: 'Nettoyage', href: '#nettoyage' },
  { label: 'Ateliers', href: '#ateliers' },
  { label: 'Contact', href: '#contact' },
]

const BOTTOM_ACTIONS = [
  { icon: AlertTriangle, label: 'Urgence', href: '#urgence', color: 'text-red-400' },
  { icon: Wrench, label: 'Pièces', href: '#pieces', color: 'text-amber-400' },
  { icon: Car, label: 'Véhicules', href: '#location-achat', color: 'text-blue-400' },
  { icon: Sparkles, label: 'Nettoyage', href: '#nettoyage', color: 'text-teal-400' },
  { icon: MessageCircle, label: 'Contact', href: '#contact', color: 'text-purple-400' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#06111f]/92 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a
              href="#accueil"
              onClick={(e) => { e.preventDefault(); handleNavClick('#accueil') }}
              className="flex items-center gap-2.5 group"
            >
              <div
                className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center group-hover:bg-amber-400 transition-colors"
                style={{ boxShadow: '0 4px 16px rgba(245,158,11,0.4)' }}
              >
                <Car style={{ width: 17, height: 17, color: '#000' }} />
              </div>
              <div>
                <div className="font-display font-black text-white text-[15px] leading-none tracking-tight">
                  Baabur Auto
                </div>
                <div className="text-amber-500/70 text-[10px] leading-tight hidden sm:block font-medium mt-0.5">
                  Services auto à Djibouti
                </div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-slate-400 hover:text-white text-sm px-3.5 py-2 rounded-lg hover:bg-white/5 transition-all duration-150 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${CONTACT_CONFIG.phone}`}
                className="hidden md:flex items-center gap-1.5 text-slate-400 hover:text-amber-400 text-sm font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CONTACT_CONFIG.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('#urgence')}
                className="hidden sm:flex btn-primary text-xs px-4 py-2"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                Urgence
              </button>

              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden text-slate-400 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden menu-slide bg-[#06111f]/98 backdrop-blur-2xl border-t border-white/[0.06]">
            <nav className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-slate-300 hover:text-amber-400 font-medium text-sm px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="px-4 pb-4 pt-1 border-t border-white/[0.06] mx-4">
              <a
                href={`tel:${CONTACT_CONFIG.phone}`}
                className="flex items-center gap-2 text-amber-400 font-bold text-sm py-2"
              >
                <Phone className="w-4 h-4" />
                {CONTACT_CONFIG.phone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-white/[0.07]"
        style={{ background: 'rgba(6,17,31,0.95)', backdropFilter: 'blur(24px)' }}
      >
        <div className="grid grid-cols-5 px-1 py-1.5 pb-safe" style={{ paddingBottom: 'max(6px, env(safe-area-inset-bottom))' }}>
          {BOTTOM_ACTIONS.map(({ icon: Icon, label, href, color }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="flex flex-col items-center gap-1 py-2 px-1 rounded-xl hover:bg-white/5 transition-colors active:scale-95"
            >
              <Icon className={`w-5 h-5 ${color}`} />
              <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wide">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
