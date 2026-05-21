import { ArrowRight } from 'lucide-react'
import { sendRequest } from '../config'

const SERVICES = [
  { title: 'Vidange', emoji: '🛢️', desc: "Huile moteur + filtre selon préconisations constructeur." },
  { title: 'Diagnostic', emoji: '🔍', desc: "Lecture codes défauts, diagnostic électronique complet." },
  { title: 'Freins', emoji: '🛞', desc: "Plaquettes, disques, liquide de frein." },
  { title: 'Climatisation', emoji: '❄️', desc: "Recharge gaz, nettoyage circuit, vérification compresseur." },
  { title: 'Batterie', emoji: '🔋', desc: "Test, remplacement, installation batterie adaptée." },
  { title: 'Pneus', emoji: '⚙️', desc: "Montage, équilibrage, permutation, pression." },
  { title: 'Suspension', emoji: '🔩', desc: "Amortisseurs, rotules, silent-blocs, trains roulants." },
  { title: 'Électricité', emoji: '⚡', desc: "Alternateur, démarreur, câblage, diagnostic électrique." },
  { title: 'Moteur', emoji: '🔧', desc: "Courroie distribution, joint culasse, réparation moteur." },
  { title: 'Montage pièces', emoji: '🪛', desc: "Pose de pièces fournies par le client." },
  { title: 'Inspection achat', emoji: '📋', desc: "Contrôle complet avant acquisition de véhicule." },
]

export default function Workshop() {
  const req = (s) => sendRequest(`Demande atelier — ${s.title}`, {
    'Service': s.title, 'Description': s.desc,
  })

  return (
    <section id="ateliers" style={{ background: '#030303', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span className="section-tag">Ateliers & Maintenance</span>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Entretien & réparation
          </h2>
          <p style={{ color: '#555', fontSize: 14, marginTop: 12, maxWidth: 500 }}>
            Ateliers partenaires qualifiés pour tous vos besoins de maintenance à Djibouti.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1 }} className="wk-grid">
          <style>{`@media(max-width:600px){.wk-grid{grid-template-columns:1fr!important}}@media(min-width:601px) and (max-width:900px){.wk-grid{grid-template-columns:repeat(2,1fr)!important}}@media(min-width:901px) and (max-width:1100px){.wk-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>

          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="reveal card-hover"
              style={{ background: '#060606', border: '1px solid #1A1A1A', padding: '24px 20px', cursor: 'pointer', transitionDelay: `${i * 40}ms`, display: 'flex', flexDirection: 'column' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.borderColor = '#2A2A2A' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#060606'; e.currentTarget.style.borderColor = '#1A1A1A' }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{s.emoji}</div>
              <h3 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 14, color: '#fff', letterSpacing: '-0.01em', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: '#444', fontSize: 12, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{s.desc}</p>
              <button onClick={() => req(s)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', color: '#0084FF', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', padding: 0 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4dabff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0084FF'}
              >
                Demander <ArrowRight style={{ width: 11, height: 11 }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
