import { MousePointerClick, Send, Search, MessageCircle } from 'lucide-react'

const STEPS = [
  { num: '01', icon: MousePointerClick, title: 'Choisissez un service', desc: 'Location, pièces, urgence, nettoyage ou atelier.' },
  { num: '02', icon: Send, title: 'Envoyez votre demande', desc: 'Formulaire simple, quelques secondes suffisent.' },
  { num: '03', icon: Search, title: 'Notre équipe vérifie', desc: 'Nous recherchons les meilleures options disponibles.' },
  { num: '04', icon: MessageCircle, title: 'Vous recevez une réponse', desc: 'Prix, disponibilités et informations directement.' },
]

export default function HowItWorks() {
  return (
    <section id="comment" style={{ background: '#000', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span className="section-tag">Comment ça marche</span>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Simple, rapide, fiable.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, borderTop: '1px solid #111', borderLeft: '1px solid #111' }} className="hw-grid">
          <style>{`@media(max-width:767px){.hw-grid{grid-template-columns:1fr!important}}@media(min-width:768px) and (max-width:1023px){.hw-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>

          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.num}
                className="reveal"
                style={{ padding: '40px 32px', borderRight: '1px solid #111', borderBottom: '1px solid #111', transitionDelay: `${i * 80}ms` }}
              >
                <div style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 56, color: '#111', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 24, userSelect: 'none' }}>
                  {s.num}
                </div>
                <div style={{ width: 44, height: 44, background: '#0A0A0A', border: '1px solid #1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, borderRadius: 2 }}>
                  <Icon style={{ width: 18, height: 18, color: '#0084FF' }} />
                </div>
                <h3 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 15, color: '#fff', letterSpacing: '-0.01em', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#444', fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
