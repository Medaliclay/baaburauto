import { useState } from 'react'
import { AlertTriangle, CheckCircle, Send, Loader, Truck, Battery, Wind, Wrench, Fuel, Key, ShieldAlert, HelpCircle } from 'lucide-react'
import { sendRequest } from '../config'

const EMERGENCY_TYPES = [
  { id: 'remorquage', label: 'Remorquage', icon: Truck },
  { id: 'batterie', label: 'Batterie', icon: Battery },
  { id: 'pneu', label: 'Pneu crevé', icon: Wind },
  { id: 'panne', label: 'Panne mécanique', icon: Wrench },
  { id: 'carburant', label: 'Carburant', icon: Fuel },
  { id: 'cle', label: 'Clé bloquée', icon: Key },
  { id: 'accident', label: 'Accident', icon: ShieldAlert },
  { id: 'autre', label: 'Autre urgence', icon: HelpCircle },
]

const INITIAL = { name: '', phone: '', type: '', location: '', vehicle: '', notes: '' }

export default function Emergency() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Champ obligatoire'
    if (!form.phone.trim()) e.phone = 'Champ obligatoire'
    if (!form.type) e.type = "Sélectionnez un type d'urgence"
    if (!form.location.trim()) e.location = 'Indiquez votre position'
    return e
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const selectType = (id) => {
    setForm((f) => ({ ...f, type: id }))
    setErrors((er) => ({ ...er, type: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    const typeLabel = EMERGENCY_TYPES.find((t) => t.id === form.type)?.label || form.type
    setLoading(true)
    setTimeout(() => {
      sendRequest(`🚨 URGENCE — ${typeLabel}`, {
        'Nom': form.name, 'Téléphone': form.phone,
        "Type d'urgence": typeLabel, 'Localisation': form.location,
        'Véhicule': form.vehicle, 'Notes': form.notes,
      })
      setLoading(false)
      setSent(true)
    }, 800)
  }

  return (
    <section
      id="urgence"
      className="py-24 relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.12) 0%, #060e1a 60%), #060e1a' }}
    >
      <div
        className="absolute inset-0 pointer-events-none glow-pulse"
        style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(239,68,68,0.1) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-300 border border-red-500/30 px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(239,68,68,0.1)' }}
          >
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            Assistance urgente — 24h/24
          </div>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-3 tracking-tight">
            Besoin d'aide immédiate ?
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.7), transparent)' }} />
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Signalez votre situation, notre équipe vous met en contact avec l'assistance
            la plus proche dès que possible.
          </p>
        </div>

        {sent ? (
          <div
            className="reveal rounded-2xl p-12 text-center toast"
            style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}
          >
            <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-4" />
            <h3 className="font-display font-bold text-white text-xl mb-2">Demande transmise !</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
              Notre équipe a reçu votre demande. Restez en sécurité — nous vous contactons rapidement.
            </p>
            <button
              onClick={() => { setSent(false); setForm(INITIAL) }}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-colors active:scale-95"
            >
              Nouvelle demande
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal rounded-2xl p-6 md:p-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(239,68,68,0.15)' }}
          >
            {/* Emergency type */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-widest text-red-400/80 mb-3">
                Type d'urgence <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {EMERGENCY_TYPES.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => selectType(id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all text-xs font-semibold active:scale-95 ${
                      form.type === id
                        ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-900/50'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                    style={form.type !== id ? { background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' } : {}}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </button>
                ))}
              </div>
              {errors.type && <p className="text-red-400 text-xs mt-2">{errors.type}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="form-label">Nom <span className="text-red-400">*</span></label>
                <input name="name" value={form.name} onChange={handleChange}
                  className={`form-input ${errors.name ? '!border-red-500/60' : ''}`}
                  placeholder="Votre nom" />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="form-label">Téléphone <span className="text-red-400">*</span></label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                  className={`form-input ${errors.phone ? '!border-red-500/60' : ''}`}
                  placeholder="+253 77 …" />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Votre position <span className="text-red-400">*</span></label>
              <input name="location" value={form.location} onChange={handleChange}
                className={`form-input ${errors.location ? '!border-red-500/60' : ''}`}
                placeholder="Quartier, rue, point de repère…" />
              {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
            </div>

            <div className="mb-4">
              <label className="form-label">Véhicule</label>
              <input name="vehicle" value={form.vehicle} onChange={handleChange}
                className="form-input" placeholder="Ex : Toyota Hilux 2019" />
            </div>

            <div className="mb-6">
              <label className="form-label">Informations supplémentaires</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                className="form-input resize-none" placeholder="Décrivez la situation en détail…" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 text-white font-black py-4 rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-60 text-base"
              style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', boxShadow: '0 4px 24px rgba(220,38,38,0.4)' }}
            >
              {loading ? (
                <><Loader className="w-5 h-5 animate-spin" />Envoi en cours…</>
              ) : (
                <><AlertTriangle className="w-5 h-5" />Contacter l'assistance</>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
