import { Car, Wrench, AlertTriangle, Sparkles, Building2, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    num: '01', icon: AlertTriangle, title: 'Urgence',
    desc: 'Remorquage, batterie, pneu crevé, panne mécanique — intervention rapide.',
    href: '#urgence', cta: "Assistance immédiate", accent: '#FF3B3B', featured: true,
    tag: 'DISPONIBLE 24H/24',
  },
  {
    num: '02', icon: Car, title: 'Location & Achat',
    desc: 'Location courte/longue durée ou achat direct avec nos partenaires fiables.',
    href: '#location-achat', cta: 'Voir les véhicules', accent: '#0084FF',
  },
  {
    num: '03', icon: Wrench, title: 'Pièces détachées',
    desc: 'Pièces neuves, occasion ou origine — livrées rapidement auprès de nos fournisseurs.',
    href: '#pieces', cta: 'Demander une pièce', accent: '#0084FF',
  },
  {
    num: '04', icon: Sparkles, title: 'Nettoyage',
    desc: 'Lavage, nettoyage intérieur, detailing complet — à l\'atelier ou à domicile.',
    href: '#nettoyage', cta: 'Réserver', accent: '#0084FF',
  },
  {
    num: '05', icon: Building2, title: 'Ateliers',
    desc: 'Vidange, diagnostic, freins, climatisation — ateliers partenaires qualifiés.',
    href: '#ateliers', cta: 'Trouver un atelier', accent: '#0084FF',
  },
]

export default function Services() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" style={{ background: '#000', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span className="section-tag">Services</span>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 0 }}>
            Tout ce dont vous avez besoin
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }} className="services-grid">
          <style>{`
            @media(max-width:768px){.services-grid{grid-template-columns:1fr!important}}
            @media(min-width:769px) and (max-width:1023px){.services-grid{grid-template-columns:repeat(2,1fr)!important}}
          `}</style>

          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.num}
                className="reveal"
                onClick={() => go(s.href)}
                style={{
                  background: s.featured ? '#080808' : '#050505',
                  border: s.featured ? `1px solid ${s.accent}30` : '1px solid #111',
                  borderTop: `2px solid ${s.accent}`,
                  padding: '32px 28px',
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s',
                  transitionDelay: `${i * 60}ms`,
                  position: 'relative',
                  gridColumn: s.featured && i === 0 ? 'span 1' : 'auto',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0A0A0A'
                  e.currentTarget.style.borderColor = s.accent
                  e.currentTarget.style.borderTopColor = s.accent
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = s.featured ? '#080808' : '#050505'
                  e.currentTarget.style.borderColor = s.featured ? `${s.accent}30` : '#111'
                  e.currentTarget.style.borderTopColor = s.accent
                }}
              >
                {s.tag && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: s.accent,
                    marginBottom: 20,
                  }}>
                    <span className="blink" style={{ width: 5, height: 5, borderRadius: '50%', background: s.accent }} />
                    {s.tag}
                  </div>
                )}

                <div style={{
                  width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${s.accent}12`, border: `1px solid ${s.accent}25`,
                  borderRadius: 2, marginBottom: 20,
                }}>
                  <Icon style={{ width: 18, height: 18, color: s.accent }} />
                </div>

                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#333', marginBottom: 8, textTransform: 'uppercase' }}>
                  {s.num}
                </div>
                <h3 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 12, letterSpacing: '-0.01em' }}>
                  {s.title}
                </h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, marginBottom: 24 }}>
                  {s.desc}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: s.accent, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {s.cta}
                  <ArrowRight style={{ width: 13, height: 13 }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
