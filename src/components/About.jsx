import { Car, Users, MapPin, Clock } from 'lucide-react'

const STATS = [
  { icon: Car, value: '5+', label: 'Services', accent: '#f59e0b', glow: 'rgba(245,158,11,0.12)' },
  { icon: Users, value: '100%', label: 'Vérifié', accent: '#3b82f6', glow: 'rgba(59,130,246,0.12)' },
  { icon: MapPin, value: 'DJI', label: 'Local', accent: '#14b8a6', glow: 'rgba(20,184,166,0.12)' },
  { icon: Clock, value: '24h', label: 'Urgences', accent: '#ef4444', glow: 'rgba(239,68,68,0.12)' },
]

export default function About() {
  return (
    <section id="apropos" className="py-24" style={{ background: '#08131e' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div className="reveal">
            <span className="section-tag">À propos</span>
            <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-4 tracking-tight">
              La plateforme auto pensée pour Djibouti
            </h2>
            <div className="section-divider mb-6 mx-0" />
            <p className="text-slate-400 leading-relaxed mb-4 text-base">
              Baabur Auto est une plateforme pensée pour simplifier l'accès aux services
              automobiles à Djibouti. Notre objectif est de connecter les conducteurs avec
              des solutions fiables pour les pièces détachées, le dépannage, le nettoyage,
              la location, l'achat et l'entretien automobile.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-base">
              Nous comprenons les réalités du marché local et travaillons avec des
              partenaires de confiance pour vous offrir un service à la hauteur de vos
              attentes — simple, rapide et adapté à Djibouti.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: '✅ Service local de confiance', border: 'rgba(245,158,11,0.25)', text: '#fbbf24', bg: 'rgba(245,158,11,0.07)' },
                { label: '🤝 Réseau de partenaires', border: 'rgba(59,130,246,0.25)', text: '#93c5fd', bg: 'rgba(59,130,246,0.07)' },
                { label: '⚡ Réponse rapide garantie', border: 'rgba(34,197,94,0.25)', text: '#86efac', bg: 'rgba(34,197,94,0.07)' },
              ].map(({ label, border, text, bg }) => (
                <div
                  key={label}
                  className="text-xs font-bold px-4 py-2 rounded-full border"
                  style={{ background: bg, borderColor: border, color: text }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="reveal">
            <div className="grid grid-cols-2 gap-3 mb-3">
              {STATS.map(({ icon: Icon, value, label, accent, glow }) => (
                <div
                  key={label}
                  className="card-hover rounded-2xl p-6 text-center"
                  style={{
                    background: `radial-gradient(ellipse at top, ${glow} 0%, rgba(255,255,255,0.03) 70%)`,
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: glow, border: `1px solid ${accent}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div
                    className="font-display font-black text-3xl mb-1 leading-none"
                    style={{ color: accent }}
                  >
                    {value}
                  </div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="text-3xl mb-3">🇩🇯</div>
              <p className="text-white font-display font-bold text-sm leading-relaxed">
                "Tous les services auto à Djibouti, au même endroit."
              </p>
              <p className="text-amber-400 text-xs mt-2 font-semibold">— Baabur Auto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
