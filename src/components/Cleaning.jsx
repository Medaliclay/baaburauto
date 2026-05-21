import { ArrowRight } from 'lucide-react'
import { sendRequest } from '../config'

const SERVICES = [
  { title: 'Lavage simple', desc: 'Carrosserie, vitres et jantes.', price: '1 500', currency: 'DJF', duration: '30 min', emoji: '🚿' },
  { title: 'Nettoyage intérieur', desc: 'Aspiration, tableau de bord, vitres intérieures.', price: '2 500', currency: 'DJF', duration: '45 min', emoji: '🪣' },
  { title: 'Lavage complet', desc: 'Extérieur + intérieur — formule tout inclus.', price: '4 000', currency: 'DJF', duration: '1h30', emoji: '✨', popular: true },
  { title: 'Detailing', desc: 'Nettoyage profond avec produits spécialisés.', price: '12 000', currency: 'DJF', duration: '3–4h', emoji: '💎' },
  { title: 'Polissage', desc: 'Traitement carrosserie pour un éclat neuf.', price: '15 000', currency: 'DJF', duration: '2–3h', emoji: '🪞' },
  { title: 'À domicile / bureau', desc: 'Déplacement à votre adresse sur rendez-vous.', price: 'Sur devis', currency: '', duration: 'Sur RDV', emoji: '🏠' },
]

export default function Cleaning() {
  const req = (s) => sendRequest(`Demande nettoyage — ${s.title}`, {
    'Service': s.title, 'Prix': s.price ? `${s.price} ${s.currency}` : 'Sur devis', 'Durée': s.duration,
  })

  return (
    <section id="nettoyage" style={{ background: '#000', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span className="section-tag">Nettoyage automobile</span>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Redonnez de l'éclat à votre véhicule
          </h2>
          <p style={{ color: '#555', fontSize: 14, marginTop: 12, maxWidth: 500 }}>
            Prestations de nettoyage pour tous les besoins — proposées par nos partenaires à Djibouti.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1 }} className="clean-grid">
          <style>{`@media(max-width:767px){.clean-grid{grid-template-columns:1fr!important}}@media(min-width:768px) and (max-width:1023px){.clean-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>

          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="reveal card-hover"
              style={{
                background: '#060606', padding: '28px 24px',
                border: '1px solid #1A1A1A',
                borderTop: s.popular ? '2px solid #0084FF' : '1px solid #1A1A1A',
                cursor: 'pointer', position: 'relative',
                transitionDelay: `${i * 55}ms`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.borderColor = '#2A2A2A' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#060606'; e.currentTarget.style.borderColor = '#1A1A1A' }}
            >
              {s.popular && (
                <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0084FF', background: '#0084FF14', padding: '4px 8px', borderRadius: 1 }}>
                  LE PLUS DEMANDÉ
                </div>
              )}

              <div style={{ fontSize: 32, marginBottom: 20 }}>{s.emoji}</div>
              <h3 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: '-0.01em', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid #111', marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#333', marginBottom: 3 }}>Prix</div>
                  <div style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 15, color: '#fff' }}>
                    {s.price === 'Sur devis' ? <span style={{ color: '#0084FF' }}>Sur devis</span> : <>{s.price} <span style={{ color: '#0084FF', fontSize: 10 }}>{s.currency}</span></>}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#333', marginBottom: 3 }}>Durée</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#666' }}>{s.duration}</div>
                </div>
              </div>

              <button onClick={() => req(s)} className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 11, padding: '10px' }}>
                Faire une demande <ArrowRight style={{ width: 12, height: 12 }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
