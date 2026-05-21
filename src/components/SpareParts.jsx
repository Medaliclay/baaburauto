import { useState } from 'react'
import { Wrench, CheckCircle, ArrowRight, Loader } from 'lucide-react'
import { sendRequest } from '../config'

const INITIAL = { name: '', phone: '', brand: '', model: '', year: '', part: '', quality: '', urgency: '', notes: '' }

export default function SpareParts() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Requis'
    if (!form.phone.trim()) e.phone = 'Requis'
    if (!form.part.trim()) e.part = 'Décrivez la pièce recherchée'
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
    setLoading(true)
    setTimeout(() => {
      sendRequest('Demande de pièce détachée', {
        'Nom': form.name, 'Téléphone': form.phone,
        'Marque': form.brand, 'Modèle': form.model, 'Année': form.year,
        'Pièce recherchée': form.part, 'Qualité': form.quality, 'Délai': form.urgency, 'Notes': form.notes,
      })
      setLoading(false); setSent(true)
    }, 800)
  }

  const labelStyle = { fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', display: 'block', marginBottom: 6 }
  const errStyle = { fontSize: 11, color: '#FF3B3B', marginTop: 4 }

  return (
    <section id="pieces" style={{ background: '#000', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="section-tag">Pièces détachées</span>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Trouver une pièce
          </h2>
          <p style={{ color: '#555', fontSize: 14, marginTop: 12 }}>
            Décrivez la pièce. Notre équipe vérifie la disponibilité et vous répond rapidement.
          </p>
        </div>

        {sent ? (
          <div className="reveal toast" style={{ background: '#080808', border: '1px solid #111', borderTop: '2px solid #22c55e', padding: '60px 40px', textAlign: 'center' }}>
            <CheckCircle style={{ width: 40, height: 40, color: '#22c55e', margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 8 }}>Demande envoyée</h3>
            <p style={{ color: '#555', fontSize: 13, marginBottom: 24 }}>Notre équipe reviendra vers vous rapidement.</p>
            <button onClick={() => { setSent(false); setForm(INITIAL) }} className="btn-primary">Nouvelle demande</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal" style={{ background: '#080808', border: '1px solid #1A1A1A' }}>
            <div style={{ padding: '32px 32px 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-2col">
                <style>{`@media(max-width:600px){.form-2col{grid-template-columns:1fr!important}.form-3col{grid-template-columns:1fr!important}}`}</style>
                <div>
                  <label style={labelStyle}>Nom complet *</label>
                  <input name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="Votre nom" style={errors.name ? { borderColor: '#FF3B3B' } : {}} />
                  {errors.name && <div style={errStyle}>{errors.name}</div>}
                </div>
                <div>
                  <label style={labelStyle}>Téléphone *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="+253 77 …" style={errors.phone ? { borderColor: '#FF3B3B' } : {}} />
                  {errors.phone && <div style={errStyle}>{errors.phone}</div>}
                </div>
              </div>

              {/* Vehicle block */}
              <div style={{ background: '#050505', border: '1px solid #1A1A1A', borderLeft: '2px solid #0084FF', padding: '20px', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <Wrench style={{ width: 13, height: 13, color: '#0084FF' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0084FF' }}>Véhicule</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 80px', gap: 12 }} className="form-3col">
                  <div><label style={labelStyle}>Marque</label><input name="brand" value={form.brand} onChange={handleChange} className="form-input" placeholder="Toyota…" /></div>
                  <div><label style={labelStyle}>Modèle</label><input name="model" value={form.model} onChange={handleChange} className="form-input" placeholder="Land Cruiser…" /></div>
                  <div><label style={labelStyle}>Année</label><input name="year" value={form.year} onChange={handleChange} className="form-input" placeholder="2018" maxLength={4} /></div>
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Pièce recherchée *</label>
                <input name="part" value={form.part} onChange={handleChange} className="form-input" placeholder="Ex : filtre à huile, plaquettes de frein, alternateur…" style={errors.part ? { borderColor: '#FF3B3B' } : {}} />
                {errors.part && <div style={errStyle}>{errors.part}</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-2col">
                <div>
                  <label style={labelStyle}>Qualité</label>
                  <select name="quality" value={form.quality} onChange={handleChange} className="form-input">
                    <option value="">Sélectionner…</option>
                    <option>Neuve</option><option>Occasion</option>
                    <option>Originale (OEM)</option><option>Adaptable</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Délai</label>
                  <select name="urgency" value={form.urgency} onChange={handleChange} className="form-input">
                    <option value="">Sélectionner…</option>
                    <option>Aujourd'hui</option><option>Cette semaine</option><option>Flexible</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="form-input" style={{ resize: 'none' }} placeholder="Code OEM, symptôme, informations complémentaires…" />
              </div>
            </div>

            <div style={{ borderTop: '1px solid #111', padding: '20px 32px' }}>
              <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: 13, opacity: loading ? 0.6 : 1 }}>
                {loading ? <><Loader style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} />Envoi…</> : <>Envoyer la demande<ArrowRight style={{ width: 15, height: 15 }} /></>}
              </button>
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
