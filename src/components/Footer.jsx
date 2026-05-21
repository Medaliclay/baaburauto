import { Car, Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT_CONFIG } from '../config'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Location / Achat', href: '#location-achat' },
  { label: 'Pièces détachées', href: '#pieces' },
  { label: 'Urgence', href: '#urgence' },
  { label: 'Nettoyage', href: '#nettoyage' },
  { label: 'Ateliers', href: '#ateliers' },
  { label: 'Comment ça marche', href: '#comment' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#000', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="ft-grid">
          <style>{`@media(max-width:767px){.ft-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 30, height: 30, background: '#0084FF', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
                <Car style={{ width: 14, height: 14, color: '#fff' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 13, color: '#fff', letterSpacing: '-0.01em' }}>BAABUR AUTO</div>
                <div style={{ fontSize: 9, color: '#333', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 1 }}>Djibouti</div>
              </div>
            </div>
            <p style={{ color: '#333', fontSize: 12, lineHeight: 1.7, marginBottom: 20 }}>
              Tous les services auto à Djibouti, au même endroit.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: Phone, value: CONTACT_CONFIG.phone, href: `tel:${CONTACT_CONFIG.phone}` },
                { icon: Mail, value: CONTACT_CONFIG.email, href: `mailto:${CONTACT_CONFIG.email}` },
                { icon: MapPin, value: CONTACT_CONFIG.address, href: null },
              ].map(({ icon: Icon, value, href }) => {
                const el = (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#333' }}>
                    <Icon style={{ width: 12, height: 12, flexShrink: 0 }} />
                    {value}
                  </div>
                )
                return href ? (
                  <a key={value} href={href} style={{ textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                  >{el}</a>
                ) : <div key={value}>{el}</div>
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333', marginBottom: 20 }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LINKS.map((l) => (
                <button key={l.href} onClick={() => go(l.href)}
                  style={{ background: 'none', border: 'none', color: '#333', fontSize: 12, fontWeight: 600, cursor: 'pointer', textAlign: 'left', padding: 0, transition: 'color 0.15s' }}
                  onMouseEnter={(e) => e.target.style.color = '#888'}
                  onMouseLeave={(e) => e.target.style.color = '#333'}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333', marginBottom: 20 }}>Action rapide</div>
            <div style={{ background: '#080808', border: '1px solid #1A1A1A', borderTop: '2px solid #0084FF', padding: '24px' }}>
              <h4 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 14, color: '#fff', marginBottom: 10 }}>Besoin d'aide ?</h4>
              <p style={{ color: '#444', fontSize: 12, lineHeight: 1.65, marginBottom: 20 }}>
                Notre équipe est disponible pour répondre à vos demandes à Djibouti.
              </p>
              <button onClick={() => go('#pieces')} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 11, padding: '11px' }}>
                Faire une demande
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #0A0A0A', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 11, color: '#222' }}>© {new Date().getFullYear()} Baabur Auto — Tous droits réservés</span>
          <span style={{ fontSize: 11, color: '#222' }}>Fait avec ❤️ à Djibouti 🇩🇯</span>
        </div>
      </div>

      {/* Mobile bottom spacer */}
      <div className="lg-hide" style={{ height: 64 }}>
        <style>{`@media(min-width:1024px){.lg-hide{display:none}}`}</style>
      </div>
    </footer>
  )
}
