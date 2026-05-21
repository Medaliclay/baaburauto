import { Sparkles, Send } from 'lucide-react'
import { sendRequest } from '../config'

const CLEANING_SERVICES = [
  { title: 'Lavage simple', desc: 'Nettoyage extérieur rapide — carrosserie, vitres et jantes.', price: '1 500', currency: 'DJF', emoji: '🚿', duration: '30 min', popular: false },
  { title: 'Nettoyage intérieur', desc: 'Aspiration, essuyage du tableau de bord, vitres intérieures.', price: '2 500', currency: 'DJF', emoji: '🪣', duration: '45 min', popular: false },
  { title: 'Lavage complet', desc: 'Extérieur + intérieur — formule tout inclus.', price: '4 000', currency: 'DJF', emoji: '✨', duration: '1h30', popular: true },
  { title: 'Detailing', desc: 'Nettoyage profond intérieur/extérieur avec produits spécialisés.', price: '12 000', currency: 'DJF', emoji: '💎', duration: '3–4h', popular: false },
  { title: 'Polissage', desc: "Traitement de la carrosserie pour un éclat neuf.", price: '15 000', currency: 'DJF', emoji: '🪞', duration: '2–3h', popular: false },
  { title: 'À domicile / bureau', desc: 'Nos équipes se déplacent à votre adresse sur rendez-vous.', price: 'Sur devis', currency: '', emoji: '🏠', duration: 'Sur RDV', popular: false },
]

export default function Cleaning() {
  const handleRequest = (service) => {
    sendRequest(`Demande de nettoyage — ${service.title}`, {
      'Service': service.title,
      'Prix indicatif': service.price ? `${service.price} ${service.currency}` : 'Sur devis',
      'Durée estimée': service.duration,
    })
  }

  return (
    <section id="nettoyage" className="py-24" style={{ background: '#08131e' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Nettoyage automobile</span>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-3 tracking-tight">
            Redonnez de l'éclat à votre véhicule
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Des prestations de nettoyage adaptées à tous les besoins,
            proposées par nos partenaires à Djibouti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CLEANING_SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="reveal card-hover relative rounded-2xl p-6 flex flex-col"
              style={{
                background: service.popular ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.03)',
                border: service.popular ? '1px solid rgba(245,158,11,0.25)' : '1px solid rgba(255,255,255,0.07)',
                transitionDelay: `${i * 65}ms`,
              }}
            >
              {service.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-black text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)', boxShadow: '0 4px 12px rgba(245,158,11,0.4)' }}
                >
                  ⭐ Le plus demandé
                </div>
              )}

              <div className="text-4xl mb-4 mt-2">{service.emoji}</div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>

              <div
                className="flex items-center justify-between py-3 mb-4 border-y"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <div>
                  <div className="text-slate-600 text-xs uppercase tracking-wider font-bold mb-0.5">Prix</div>
                  <div className="font-display font-black text-white text-lg leading-none">
                    {service.price === 'Sur devis' ? (
                      <span className="text-teal-400 text-base">Sur devis</span>
                    ) : (
                      <>
                        {service.price}{' '}
                        <span className="text-teal-400 text-xs font-bold">{service.currency}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-slate-600 text-xs uppercase tracking-wider font-bold mb-0.5">Durée</div>
                  <div className="text-slate-300 font-bold text-sm">{service.duration}</div>
                </div>
              </div>

              <button
                onClick={() => handleRequest(service)}
                className="w-full flex items-center justify-center gap-2 font-bold text-sm py-2.5 rounded-xl transition-all duration-200 active:scale-95 border"
                style={{
                  background: service.popular ? 'rgba(245,158,11,0.12)' : 'rgba(20,184,166,0.08)',
                  borderColor: service.popular ? 'rgba(245,158,11,0.3)' : 'rgba(20,184,166,0.2)',
                  color: service.popular ? '#fbbf24' : '#2dd4bf',
                }}
              >
                <Sparkles className="w-4 h-4" />
                Faire une demande
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
