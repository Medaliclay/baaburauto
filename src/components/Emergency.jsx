import { useState } from 'react'
import { AlertTriangle, CheckCircle, Send, Loader, Truck, Battery, Wind, Wrench, Fuel, Key, ShieldAlert, HelpCircle } from 'lucide-react'
import { sendRequest } from '../config'

const EMERGENCY_TYPES = [
  { id: 'remorquage', label: 'Remorquage', icon: Truck },
  { id: 'batterie', label: 'Batterie déchargée', icon: Battery },
  { id: 'pneu', label: 'Pneu crevé', icon: Wind },
  { id: 'panne', label: 'Panne mécanique', icon: Wrench },
  { id: 'carburant', label: 'Carburant', icon: Fuel },
  { id: 'cle', label: 'Clé bloquée', icon: Key },
  { id: 'accident', label: 'Accident', icon: ShieldAlert },
  { id: 'autre', label: 'Autre urgence', icon: HelpCircle },
]

const INITIAL = {
  name: '',
  phone: '',
  type: '',
  location: '',
  vehicle: '',
  notes: '',
}

export default function Emergency() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Champ obligatoire'
    if (!form.phone.trim()) e.phone = 'Champ obligatoire'
    if (!form.type) e.type = 'Sélectionnez un type d\'urgence'
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const typeLabel = EMERGENCY_TYPES.find((t) => t.id === form.type)?.label || form.type

    setLoading(true)
    setTimeout(() => {
      sendRequest(`🚨 URGENCE — ${typeLabel}`, {
        'Nom': form.name,
        'Téléphone': form.phone,
        'Type d\'urgence': typeLabel,
        'Localisation': form.location,
        'Véhicule': form.vehicle,
        'Notes': form.notes,
      })
      setLoading(false)
      setSent(true)
    }, 800)
  }

  const reset = () => {
    setSent(false)
    setForm(INITIAL)
  }

  return (
    <section id="urgence" className="py-20 bg-red-950">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            Assistance urgente
          </div>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">
            Besoin d'aide immédiate ?
          </h2>
          <div className="section-divider mb-4" style={{ background: 'linear-gradient(90deg, transparent, #ef4444, transparent)' }} />
          <p className="text-red-200/70 text-sm md:text-base max-w-lg mx-auto">
            Signalez votre situation, notre équipe vous met en contact avec l'assistance
            la plus proche dès que possible.
          </p>
        </div>

        {sent ? (
          <div className="reveal bg-green-900/40 border border-green-500/30 rounded-2xl p-10 text-center toast">
            <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-4" />
            <h3 className="font-display font-bold text-white text-xl mb-2">
              Demande transmise !
            </h3>
            <p className="text-green-200/80 text-sm mb-6 max-w-sm mx-auto">
              Notre équipe a reçu votre demande d'urgence. Restez à l'endroit sûr le plus proche.
              Nous vous contactons rapidement.
            </p>
            <button onClick={reset} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Nouvelle demande
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
          >
            {/* Emergency type selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-widest text-red-300 mb-3">
                Type d'urgence <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {EMERGENCY_TYPES.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => selectType(id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all text-xs font-semibold ${
                      form.type === id
                        ? 'bg-red-500 border-red-400 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </button>
                ))}
              </div>
              {errors.type && <p className="text-red-400 text-xs mt-2">{errors.type}</p>}
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                  Nom <span className="text-red-400">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm ${errors.name ? 'border-red-500' : 'border-white/15'}`}
                  placeholder="Votre nom"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                  Téléphone <span className="text-red-400">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm ${errors.phone ? 'border-red-500' : 'border-white/15'}`}
                  placeholder="+253 77 …"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Localisation */}
            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                Votre position <span className="text-red-400">*</span>
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm ${errors.location ? 'border-red-500' : 'border-white/15'}`}
                placeholder="Quartier, rue, point de repère…"
              />
              {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
            </div>

            {/* Vehicle */}
            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                Véhicule
              </label>
              <input
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                placeholder="Ex : Toyota Hilux 2019"
              />
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                Informations supplémentaires
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm resize-none"
                placeholder="Décrivez la situation en détail…"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg active:scale-95"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <AlertTriangle className="w-5 h-5" />
                  Contacter l'assistance
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
