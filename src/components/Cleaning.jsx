import { Sparkles, Send } from 'lucide-react'
import { sendRequest } from '../config'

const CLEANING_SERVICES = [
  {
    title: 'Lavage simple',
    desc: 'Nettoyage extérieur rapide — carrosserie, vitres et jantes.',
    price: 'À partir de 1 500 DJF',
    emoji: '🚿',
    duration: '30 min',
  },
  {
    title: 'Nettoyage intérieur',
    desc: 'Aspiration, essuyage du tableau de bord, vitres intérieures.',
    price: 'À partir de 2 500 DJF',
    emoji: '🪣',
    duration: '45 min',
  },
  {
    title: 'Lavage complet',
    desc: 'Extérieur + intérieur — formule tout inclus.',
    price: 'À partir de 4 000 DJF',
    emoji: '✨',
    duration: '1h30',
    popular: true,
  },
  {
    title: 'Detailing',
    desc: 'Nettoyage profond intérieur/extérieur avec produits spécialisés.',
    price: 'À partir de 12 000 DJF',
    emoji: '💎',
    duration: '3-4h',
  },
  {
    title: 'Polissage',
    desc: 'Traitement de la carrosserie pour un éclat neuf.',
    price: 'À partir de 15 000 DJF',
    emoji: '🪞',
    duration: '2-3h',
  },
  {
    title: 'Lavage à domicile / bureau',
    desc: 'Nos équipes se déplacent à votre adresse sur rendez-vous.',
    price: 'Sur devis',
    emoji: '🏠',
    duration: 'Sur rendez-vous',
  },
]

export default function Cleaning() {
  const handleRequest = (service) => {
    sendRequest(`Demande de nettoyage — ${service.title}`, {
      'Service': service.title,
      'Prix indicatif': service.price,
      'Durée estimée': service.duration,
    })
  }

  return (
    <section id="nettoyage" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Nettoyage automobile</span>
          <h2 className="section-title">Redonnez de l'éclat à votre véhicule</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">
            Des prestations de nettoyage adaptées à tous les besoins,
            proposées par nos partenaires à Djibouti.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLEANING_SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="reveal card-hover relative bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                  ⭐ Le plus demandé
                </div>
              )}

              <div className="text-3xl mb-4">{service.emoji}</div>
              <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                {service.desc}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Prix</div>
                  <div className="font-bold text-teal-600 text-sm">{service.price}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Durée</div>
                  <div className="font-semibold text-slate-600 text-sm">{service.duration}</div>
                </div>
              </div>

              <button
                onClick={() => handleRequest(service)}
                className="w-full flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-500 text-teal-700 hover:text-white border border-teal-200 hover:border-teal-500 font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 text-sm active:scale-95"
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
