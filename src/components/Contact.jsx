import { useState } from 'react'
import { Phone, Mail, MapPin, ArrowRight, Loader, CheckCircle } from 'lucide-react'
import { CONTACT_CONFIG, sendRequest } from '../config'

const INITIAL = { name: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.message) return
    setLoading(true)
    setTimeout(() => {
      sendRequest(`Contact — ${form.subject || 'Message général'}`, {
        'Nom': form.name, 'Téléphone': form.phone, 'Objet': form.subject, 'Message': form.message,
      })
      setLoading(false); setSent(true)
    }, 800)
  }

  const labelStyle = { fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', display: 'block', marginBottom: 6 }

  return (
    <section id="contact" style={{ background: '#000', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span className="section-tag">Contact</span>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Parlons de votre besoin
          </h2>
          <p style={{ color: '#555', fontSize: 14, marginTop: 12 }}>Une question ? Contactez notre équipe directement.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 1 }} className="ct-grid">
          <style>{`@media(max-width:900px){.ct-grid{grid-template-columns:1fr!important}}`}</style>

          {/* Info */}
          <div className="reveal" style={{ background: '#060606', border: '1px solid #1A1A1A', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#444', marginBottom: 24 }}>Coordonnées</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: Phone, label: 'Téléphone', value: CONTACT_CONFIG.phone, href: `tel:${CONTACT_CONFIG.phone}` },
                  { icon: Mail, label: 'Email', value: CONTACT_CONFIG.email, href: `mailto:${CONTACT_CONFIG.email}` },
                  { icon: MapPin, label: 'Adresse', value: CONTACT_CONFIG.address, href: null },
                ].map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                      <Icon style={{ width: 15, height: 15, color: '#0084FF', flexShrink: 0, marginTop: 1 }} />
                      <div>
                        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginBottom: 3 }}>{label}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#888' }}>{value}</div>
                      </div>
                    </div>
                  )
                  return href ? (
                    <a key={label} href={href} style={{ textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.querySelector('div>div:last-child').style.color = '#fff'}
                      onMouseLeave={(e) => e.currentTarget.querySelector('div>div:last-child').style.color = '#888'}
                    >{inner}</a>
                  ) : <div key={label}>{inner}</div>
                })}
              </div>
            </div>

            <div style={{ borderTop: '1px solid #111', paddingTop: 24 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF3B3B', marginBottom: 10 }}>⚡ Besoin urgent ?</div>
              <p style={{ color: '#444', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
                Utilisez notre formulaire d'urgence pour une réponse prioritaire.
              </p>
              <button onClick={() => document.querySelector('#urgence')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'none', border: 'none', color: '#FF3B3B', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, padding: 0 }}>
                Formulaire urgence <ArrowRight style={{ width: 12, height: 12 }} />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            {sent ? (
              <div className="toast" style={{ background: '#060606', border: '1px solid #1A1A1A', borderTop: '2px solid #22c55e', padding: '60px 40px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle style={{ width: 40, height: 40, color: '#22c55e', marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Message envoyé</h3>
                <p style={{ color: '#555', fontSize: 13, marginBottom: 24 }}>Notre équipe vous répondra prochainement.</p>
                <button onClick={() => { setSent(false); setForm(INITIAL) }} className="btn-primary">Nouveau message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: '#060606', border: '1px solid #1A1A1A', height: '100%' }}>
                <div style={{ padding: '40px 32px 0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-2col">
                    <style>{`@media(max-width:600px){.form-2col{grid-template-columns:1fr!important}}`}</style>
                    <div>
                      <label style={labelStyle}>Nom *</label>
                      <input name="name" value={form.name} onChange={handleChange} required className="form-input" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label style={labelStyle}>Téléphone</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="+253 77 …" />
                    </div>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>Objet</label>
                    <input name="subject" value={form.subject} onChange={handleChange} className="form-input" placeholder="Objet de votre message" />
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={6} className="form-input" style={{ resize: 'none' }} placeholder="Comment pouvons-nous vous aider ?" />
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #111', padding: '20px 32px' }}>
                  <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 15, opacity: loading ? 0.6 : 1 }}>
                    {loading ? <><Loader style={{ width: 15, height: 15, animation: 'spin 1s linear infinite' }} />Envoi…</> : <>Nous contacter <ArrowRight style={{ width: 14, height: 14 }} /></>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
