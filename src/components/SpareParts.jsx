import { useState } from 'react'
import { Wrench, CheckCircle, Send, Loader } from 'lucide-react'
import { sendRequest } from '../config'

const INITIAL = {
  name: '',
  phone: '',
  brand: '',
  model: '',
  year: '',
  part: '',
  quality: '',
  urgency: '',
  notes: '',
}

export default function SpareParts() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Champ obligatoire'
    if (!form.phone.trim()) e.phone = 'Champ obligatoire'
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setLoading(true)
    setTimeout(() => {
      sendRequest('Demande de pièce détachée', {
        'Nom': form.name,
        'Téléphone': form.phone,
        'Marque du véhicule': form.brand,
        'Modèle': form.model,
        'Année': form.year,
        'Pièce recherchée': form.part,
        'Préférence qualité': form.quality,
        'Urgence': form.urgency,
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
    <section id="pieces" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="section-tag">Pièces détachées</span>
          <h2 className="section-title">Trouver une pièce</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">
            Décrivez la pièce dont vous avez besoin. Notre équipe vérifie la disponibilité
            auprès de nos fournisseurs et vous répond rapidement.
          </p>
        </div>

        {sent ? (
          <div className="reveal bg-green-50 border border-green-200 rounded-2xl p-10 text-center toast">
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
            <h3 className="font-display font-bold text-green-900 text-xl mb-2">
              Demande envoyée !
            </h3>
            <p className="text-green-700 text-sm mb-6 max-w-sm mx-auto">
              Votre demande a été préparée. Notre équipe reviendra vers vous rapidement
              pour vous proposer les options disponibles.
            </p>
            <button onClick={reset} className="btn-primary">
              Faire une nouvelle demande
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal bg-slate-50 rounded-2xl border border-slate-100 p-6 md:p-8"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="form-label">
                  Nom complet <span className="text-red-400">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'border-red-400 ring-2 ring-red-100' : ''}`}
                  placeholder="Votre nom"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="form-label">
                  Téléphone <span className="text-red-400">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'border-red-400 ring-2 ring-red-100' : ''}`}
                  placeholder="+253 77 …"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 2 — vehicle info */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Informations sur le véhicule
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="form-label">Marque</label>
                  <input
                    name="brand"
                    value={form.brand}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Toyota, Nissan…"
                  />
                </div>
                <div>
                  <label className="form-label">Modèle</label>
                  <input
                    name="model"
                    value={form.model}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Land Cruiser…"
                  />
                </div>
                <div>
                  <label className="form-label">Année</label>
                  <input
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="2018"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>

            {/* Piece */}
            <div className="mb-4">
              <label className="form-label">
                Pièce recherchée <span className="text-red-400">*</span>
              </label>
              <input
                name="part"
                value={form.part}
                onChange={handleChange}
                className={`form-input ${errors.part ? 'border-red-400 ring-2 ring-red-100' : ''}`}
                placeholder="Ex : filtre à huile, plaquettes de frein, alternateur…"
              />
              {errors.part && <p className="text-red-500 text-xs mt-1">{errors.part}</p>}
            </div>

            {/* Quality + Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="form-label">Préférence qualité</label>
                <select
                  name="quality"
                  value={form.quality}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Sélectionner…</option>
                  <option value="Neuve">Neuve</option>
                  <option value="Occasion">Occasion</option>
                  <option value="Originale">Originale (OEM)</option>
                  <option value="Adaptable">Adaptable</option>
                </select>
              </div>
              <div>
                <label className="form-label">Délai souhaité</label>
                <select
                  name="urgency"
                  value={form.urgency}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Sélectionner…</option>
                  <option value="Aujourd'hui">Aujourd'hui</option>
                  <option value="Cette semaine">Cette semaine</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="form-label">Notes supplémentaires</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className="form-input resize-none"
                placeholder="Informations complémentaires (code OEM, symptôme de panne…)"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer la demande
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
