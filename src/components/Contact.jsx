import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Loader, CheckCircle } from 'lucide-react'
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
        'Nom': form.name,
        'Téléphone': form.phone,
        'Objet': form.subject,
        'Message': form.message,
      })
      setLoading(false)
      setSent(true)
    }, 800)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Parlons de votre besoin</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">
            Une question générale ? Contactez notre équipe directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 reveal flex flex-col gap-5">
            <div className="bg-navy-900 rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold text-lg mb-5">Nos coordonnées</h3>

              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT_CONFIG.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                    <Phone className="w-5 h-5 text-amber-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">Téléphone</div>
                    <div className="text-white font-semibold text-sm">{CONTACT_CONFIG.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                    <Mail className="w-5 h-5 text-amber-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">Email</div>
                    <div className="text-white font-semibold text-sm">{CONTACT_CONFIG.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">Localisation</div>
                    <div className="text-white font-semibold text-sm">{CONTACT_CONFIG.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="font-display font-bold text-amber-900 mb-2 text-sm">
                ⚡ Besoin urgent ?
              </div>
              <p className="text-amber-700 text-sm mb-3">
                Utilisez notre formulaire d'urgence pour une réponse prioritaire.
              </p>
              <button
                onClick={() => document.querySelector('#urgence')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-amber-600 font-bold text-sm hover:text-amber-800 underline underline-offset-2 transition-colors"
              >
                Accéder au formulaire urgence →
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center toast">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="font-display font-bold text-green-900 text-xl mb-2">Message envoyé !</h3>
                <p className="text-green-700 text-sm max-w-xs mx-auto mb-5">
                  Notre équipe a bien reçu votre message et reviendra vers vous prochainement.
                </p>
                <button
                  onClick={() => { setSent(false); setForm(INITIAL) }}
                  className="btn-primary"
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label">Nom <span className="text-red-400">*</span></label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="form-label">Téléphone</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+253 77 …"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Objet</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div className="mb-6">
                  <label className="form-label">Message <span className="text-red-400">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Envoi…
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Nous contacter
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
