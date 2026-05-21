import { Car, Users, MapPin, Clock } from 'lucide-react'

const STATS = [
  { icon: Car, value: '5+', label: 'Services disponibles' },
  { icon: Users, value: '100%', label: 'Prestataires vérifiés' },
  { icon: MapPin, value: 'DJI', label: 'Ancré à Djibouti' },
  { icon: Clock, value: '24H', label: 'Urgences' },
]

export default function About() {
  return (
    <section id="apropos" style={{ background: '#030303', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="ab-grid">
          <style>{`@media(max-width:900px){.ab-grid{grid-template-columns:1fr!important;gap:56px!important}}`}</style>

          {/* Text */}
          <div className="reveal">
            <span className="section-tag">À propos</span>
            <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
              La plateforme auto pensée pour Djibouti
            </h2>
            <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>
              Baabur Auto simplifie l'accès aux services automobiles à Djibouti. Notre objectif :
              connecter les conducteurs avec des solutions fiables pour les pièces détachées,
              le dépannage, le nettoyage, la location, l'achat et l'entretien.
            </p>
            <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 36 }}>
              Nous travaillons avec des partenaires de confiance pour vous offrir un service
              simple, rapide et adapté aux réalités du marché local.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Service local de confiance', 'Réseau de partenaires vérifiés', 'Réponse rapide garantie'].map((tag) => (
                <div key={tag} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: '#555', background: '#0A0A0A', border: '1px solid #1A1A1A', padding: '6px 14px', borderRadius: 1 }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: '1px solid #111' }}>
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} style={{ padding: '36px 28px', borderRight: '1px solid #111', borderBottom: '1px solid #111', background: '#060606' }}>
                  <Icon style={{ width: 18, height: 18, color: '#0084FF', marginBottom: 16 }} />
                  <div style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 36, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>{value}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444' }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 1, padding: '28px', background: '#060606', border: '1px solid #111', borderTop: 'none' }}>
              <p style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 14, color: '#888', letterSpacing: '-0.01em', lineHeight: 1.5 }}>
                "Tous les services auto à Djibouti, au même endroit."
              </p>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0084FF', marginTop: 10 }}>
                — Baabur Auto · 🇩🇯
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
