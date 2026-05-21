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
        'Nom': form.name, 'Téléphone': form.phone,
        'Objet': form.subject, 'Message': form.message,
      })
      setLoading(false)
      setSent(true)
    }, 800)
  }

  const CONTACT_ITEMS = [
    { icon: Phone, label: 'Téléphone', value: CONTACT_CONFIG.phone, href: `tel:${CONTACT_CONFIG.phone}`, accent: '#f59e0b' },
    { icon: Mail, label: 'Email', value: CONTACT_CONFIG.email, href: `mailto:${CONTACT_CONFIG.email}`, accent: '#3b82f6' },
    { icon: MapPin, label: 'Localisation', value: CONTACT_CONFIG.address, href: null, accent: '#14b8a6' },
  ]

  return (
    <section id="contact" className="py-24" style={{ background: '#060e1a' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Contact</span>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-3 tracking-tight">
            Parlons de votre besoin
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Une question générale ? Contactez notre équipe directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Info */}
          <div className="lg:col-span-2 reveal flex flex-col gap-4">
            <div
              className="rounded-2xl p-6 flex flex-col gap-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="font-display font-bold text-white text-base">Nos coordonnées</h3>

              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, accent }) => {
                const inner = (
                  <div className="flex items-center gap-3 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
                    >
                      <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18, color: accent }} />
                    </div>
                    <div>
                      <div className="text-slate-600 text-xs font-semibold uppercase tracking-wider">{label}</div>
                      <div className="text-white font-semibold text-sm mt-0.5">{value}</div>
                    </div>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} className="hover:opacity-80 transition-opacity">{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                )
              })}
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              <div className="font-display font-bold text-red-300 text-sm mb-2">⚡ Besoin urgent ?</div>
              <p className="text-slate-500 text-sm mb-3 leading-relaxed">
                Utilisez notre formulaire d'urgence pour une réponse prioritaire.
              </p>
              <button
                onClick={() => document.querySelector('#urgence')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-red-400 hover:text-red-300 font-bold text-sm transition-colors underline underline-offset-2"
              >
                Accéder au formulaire urgence →
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            {sent ? (
              <div
                className="rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center toast"
                style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="font-display font-bold text-white text-xl mb-2">Message envoyé !</h3>
                <p className="text-slate-400 text-sm max-w-xs mx-auto mb-5">
                  Notre équipe a bien reçu votre message et reviendra vers vous prochainement.
                </p>
                <button onClick={() => { setSent(false); setForm(INITIAL) }} className="btn-primary">
                  Nouveau message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 md:p-8 h-full"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="form-label">Nom <span className="text-red-400">*</span></label>
                    <input name="name" value={form.name} onChange={handleChange}
                      required className="form-input" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="form-label">Téléphone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="form-input" placeholder="+253 77 …" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Objet</label>
                  <input name="subject" value={form.subject} onChange={handleChange}
                    className="form-input" placeholder="Objet de votre message" />
                </div>

                <div className="mb-6">
                  <label className="form-label">Message <span className="text-red-400">*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    required rows={5} className="form-input resize-none"
                    placeholder="Comment pouvons-nous vous aider ?" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60"
                >
                  {loading ? (
                    <><Loader className="w-5 h-5 animate-spin" />Envoi…</>
                  ) : (
                    <><Send className="w-5 h-5" />Nous contacter</>
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
