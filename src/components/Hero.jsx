import { ArrowRight, AlertTriangle } from 'lucide-react'

const STATS = [
  { value: '5', label: 'Services' },
  { value: '24H', label: 'Urgences' },
  { value: '100%', label: 'Vérifié' },
  { value: 'DJI', label: 'Local' },
]

export default function Hero() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="accueil" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      background: '#000',
      position: 'relative', overflow: 'hidden',
      paddingTop: 80,
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(#0084FF08 1px, transparent 1px), linear-gradient(90deg, #0084FF08 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Blue accent line top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 1, height: '30vh', background: 'linear-gradient(#0084FF, transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 900, width: '100%',
        margin: '0 auto', padding: '0 24px',
        textAlign: 'center',
      }}>
        {/* Top label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginBottom: 48,
        }}>
          <div style={{ width: 32, height: 1, background: '#0084FF' }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0084FF' }}>
            Baabur Auto · Djibouti
          </span>
          <div style={{ width: 32, height: 1, background: '#0084FF' }} />
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'Sora', fontWeight: 900, color: '#fff',
          fontSize: 'clamp(2.6rem, 8vw, 5.5rem)',
          lineHeight: 1.0, letterSpacing: '-0.03em',
          marginBottom: 24,
        }}>
          Services Auto<br />
          <span style={{ color: '#0084FF' }}>à Djibouti.</span>
        </h1>

        {/* Sub */}
        <p style={{ color: '#555', fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 40px', fontWeight: 500 }}>
          Location · Achat · Pièces détachées · Dépannage
          <br />Nettoyage · Ateliers partenaires
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 72 }}>
          <button onClick={() => go('#services')} className="btn-primary" style={{ fontSize: 13, padding: '14px 32px' }}>
            Explorer les services
            <ArrowRight style={{ width: 15, height: 15 }} />
          </button>
          <button onClick={() => go('#urgence')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', border: '1px solid #FF3B3B',
              color: '#FF3B3B', fontWeight: 700, fontSize: 13,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '13px 28px', borderRadius: 2, cursor: 'pointer',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,59,59,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF3B3B', flexShrink: 0 }} />
            Urgence
          </button>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: '#111', marginBottom: 40 }} />

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
          {STATS.map(({ value, label }, i) => (
            <div key={label} style={{
              padding: '20px 16px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid #111' : 'none',
            }}>
              <div style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 24, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {value}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginTop: 6 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
