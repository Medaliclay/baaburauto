import { useState } from 'react'
import { AlertTriangle, CheckCircle, ArrowRight, Loader, Truck, Battery, Wind, Wrench, Fuel, Key, ShieldAlert, HelpCircle } from 'lucide-react'
import { sendRequest } from '../config'

const TYPES = [
  { id: 'remorquage', label: 'Remorquage', icon: Truck },
  { id: 'batterie', label: 'Batterie', icon: Battery },
  { id: 'pneu', label: 'Pneu crevé', icon: Wind },
  { id: 'panne', label: 'Panne mécanique', icon: Wrench },
  { id: 'carburant', label: 'Carburant', icon: Fuel },
  { id: 'cle', label: 'Clé bloquée', icon: Key },
  { id: 'accident', label: 'Accident', icon: ShieldAlert },
  { id: 'autre', label: 'Autre', icon: HelpCircle },
]

const INITIAL = { name: '', phone: '', type: '', location: '', vehicle: '', notes: '' }

export default function Emergency() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Requis'
    if (!form.phone.trim()) e.phone = 'Requis'
    if (!form.type) e.type = "Sélectionnez un type"
    if (!form.location.trim()) e.location = 'Indiquez votre position'
    return e
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const typeLabel = TYPES.find((t) => t.id === form.type)?.label || form.type
    setLoading(true)
    setTimeout(() => {
      sendRequest(`🚨 URGENCE — ${typeLabel}`, {
        'Nom': form.name, 'Téléphone': form.phone,
        "Type d'urgence": typeLabel, 'Localisation': form.location,
        'Véhicule': form.vehicle, 'Notes': form.notes,
      })
      setLoading(false); setSent(true)
    }, 800)
  }

  const labelStyle = { fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', display: 'block', marginBottom: 6 }
  const errStyle = { fontSize: 11, color: '#FF3B3B', marginTop: 4 }

  return (
    <section id="urgence" style={{ background: '#030303', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF3B3B', marginBottom: 16 }}>
            <span className="blink" style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF3B3B' }} />
            Assistance urgente · 24h/24
          </div>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Besoin d'aide immédiate ?
          </h2>
          <p style={{ color: '#555', fontSize: 14, marginTop: 12 }}>
            Signalez votre situation. Notre réseau vous met en contact avec l'assistance la plus proche.
          </p>
        </div>

        {sent ? (
          <div className="reveal toast" style={{ background: '#080808', border: '1px solid #111', borderTop: '2px solid #22c55e', padding: '60px 40px', textAlign: 'center' }}>
            <CheckCircle style={{ width: 40, height: 40, color: '#22c55e', margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Demande transmise</h3>
            <p style={{ color: '#555', fontSize: 13, marginBottom: 24 }}>Restez en sécurité. Nous vous contactons rapidement.</p>
            <button onClick={() => { setSent(false); setForm(INITIAL) }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF3B3B', color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '13px 28px', borderRadius: 2, border: 'none', cursor: 'pointer' }}>
              Nouvelle demande
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal" style={{ background: '#080808', border: '1px solid #1A1A1A', borderTop: '2px solid #FF3B3B' }}>
            <div style={{ padding: '32px 32px 0' }}>

              {/* Type selector */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ ...labelStyle, color: '#FF3B3B66' }}>Type d'urgence *</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1 }} className="em-grid">
                  <style>{`@media(max-width:500px){.em-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
                  {TYPES.map(({ id, label, icon: Icon }) => (
                    <button key={id} type="button" onClick={() => { setForm(f => ({ ...f, type: id })); setErrors(er => ({ ...er, type: undefined })) }}
                      style={{
                        background: form.type === id ? '#FF3B3B' : '#050505',
                        border: `1px solid ${form.type === id ? '#FF3B3B' : '#1A1A1A'}`,
                        color: form.type === id ? '#fff' : '#555',
                        padding: '14px 8px', cursor: 'pointer', borderRadius: 0,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                        fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={(e) => { if (form.type !== id) e.currentTarget.style.borderColor = '#333' }}
                      onMouseLeave={(e) => { if (form.type !== id) e.currentTarget.style.borderColor = '#1A1A1A' }}
                    >
                      <Icon style={{ width: 16, height: 16 }} />
                      {label}
                    </button>
                  ))}
                </div>
                {errors.type && <div style={errStyle}>{errors.type}</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-2col">
                <style>{`@media(max-width:600px){.form-2col{grid-template-columns:1fr!important}}`}</style>
                <div>
                  <label style={labelStyle}>Nom *</label>
                  <input name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="Votre nom" style={errors.name ? { borderColor: '#FF3B3B' } : {}} />
                  {errors.name && <div style={errStyle}>{errors.name}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Téléphone *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="+253 77 …" style={errors.phone ? { borderColor: '#FF3B3B' } : {}} />
                  {errors.phone && <div style={errStyle}>{errors.phone}</div>}
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Votre position *</label>
                <input name="location" value={form.location} onChange={handleChange} className="form-input" placeholder="Quartier, rue, point de repère…" style={errors.location ? { borderColor: '#FF3B3B' } : {}} />
                {errors.location && <div style={errStyle}>{errors.location}</div>}
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Véhicule</label>
                <input name="vehicle" value={form.vehicle} onChange={handleChange} className="form-input" placeholder="Ex : Toyota Hilux 2019" />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Informations supplémentaires</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="form-input" style={{ resize: 'none' }} placeholder="Décrivez la situation…" />
              </div>
            </div>

            <div style={{ borderTop: '1px solid #111', padding: '20px 32px' }}>
              <button type="submit" disabled={loading}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#FF3B3B', color: '#fff', fontWeight: 800, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '15px', borderRadius: 2, border: 'none', cursor: 'pointer', opacity: loading ? 0.6 : 1, transition: 'background 0.15s' }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#e02020' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#FF3B3B' }}
              >
                {loading ? <><Loader style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} />Envoi…</> : <><AlertTriangle style={{ width: 15, height: 15 }} />Contacter l'assistance</>}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
