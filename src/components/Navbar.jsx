import { useState, useEffect } from 'react'
import { Menu, X, Car, Phone, AlertTriangle, Wrench, Sparkles, Building2 } from 'lucide-react'
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
  { icon: AlertTriangle, label: 'Urgence', href: '#urgence', color: '#FF3B3B' },
  { icon: Wrench, label: 'Pièces', href: '#pieces', color: '#0084FF' },
  { icon: Car, label: 'Véhicules', href: '#location-achat', color: '#888' },
  { icon: Sparkles, label: 'Nettoyage', href: '#nettoyage', color: '#888' },
  { icon: Building2, label: 'Ateliers', href: '#ateliers', color: '#888' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (href) => {
    setOpen(false)
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? 'rgba(0,0,0,0.96)' : 'transparent',
          borderBottom: scrolled ? '1px solid #1E1E1E' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

            {/* Logo */}
            <a
              href="#accueil"
              onClick={(e) => { e.preventDefault(); go('#accueil') }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            >
              <div style={{
                width: 32, height: 32,
                background: '#0084FF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 2,
              }}>
                <Car style={{ width: 16, height: 16, color: '#fff' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 14, color: '#fff', letterSpacing: '-0.02em' }}>
                  BAABUR AUTO
                </div>
                <div style={{ fontSize: 9, color: '#444', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Djibouti
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav style={{ display: 'none', alignItems: 'center', gap: 2 }} className="lg-nav">
              <style>{`@media(min-width:1024px){.lg-nav{display:flex!important}}`}</style>
              {NAV_LINKS.map((l) => (
                <button key={l.href} onClick={() => go(l.href)}
                  style={{ background: 'none', border: 'none', color: '#666', fontSize: 13, fontWeight: 600, padding: '8px 14px', cursor: 'pointer', letterSpacing: '0.01em', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => e.target.style.color = '#fff'}
                  onMouseLeave={(e) => e.target.style.color = '#666'}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <a href={`tel:${CONTACT_CONFIG.phone}`}
                style={{ display: 'none', alignItems: 'center', gap: 6, color: '#666', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'color 0.15s' }}
                className="md-phone"
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#666' }}
              >
                <style>{`@media(min-width:768px){.md-phone{display:flex!important}}`}</style>
                <Phone style={{ width: 13, height: 13 }} />
                {CONTACT_CONFIG.phone}
              </a>

              <button onClick={() => go('#urgence')}
                className="btn-primary sm-show"
                style={{ display: 'none', fontSize: 11, padding: '9px 18px' }}
              >
                <style>{`@media(min-width:640px){.sm-show{display:inline-flex!important}}`}</style>
                <AlertTriangle style={{ width: 13, height: 13 }} />
                Urgence
              </button>

              <button onClick={() => setOpen(!open)}
                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', padding: 6, display: 'flex' }}
                className="lg-hide"
              >
                <style>{`@media(min-width:1024px){.lg-hide{display:none!important}}`}</style>
                {open ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="menu-slide" style={{
            background: 'rgba(0,0,0,0.98)', borderTop: '1px solid #1E1E1E',
          }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 16 }}>
                {NAV_LINKS.map((l) => (
                  <button key={l.href} onClick={() => go(l.href)}
                    style={{ background: 'none', border: 'none', color: '#888', fontSize: 13, fontWeight: 600, padding: '12px 16px', cursor: 'pointer', textAlign: 'left', letterSpacing: '0.01em', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => e.target.style.color = '#fff'}
                    onMouseLeave={(e) => e.target.style.color = '#888'}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #1E1E1E', paddingTop: 12 }}>
                <a href={`tel:${CONTACT_CONFIG.phone}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#0084FF', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
                  <Phone style={{ width: 14, height: 14 }} />
                  {CONTACT_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile bottom bar */}
      <div
        className="lg-hide"
        style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
          background: 'rgba(0,0,0,0.97)', borderTop: '1px solid #1E1E1E',
          display: 'grid', gridTemplateColumns: 'repeat(5,1fr)',
          paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
        }}
      >
        {BOTTOM_ACTIONS.map(({ icon: Icon, label, href, color }) => (
          <button key={href} onClick={() => go(href)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '10px 4px' }}>
            <Icon style={{ width: 18, height: 18, color }} />
            <span style={{ fontSize: 9, color: '#444', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
          </button>
        ))}
      </div>
    </>
  )
}
