import { MousePointerClick, Send, Search, MessageCircle } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: MousePointerClick,
    title: 'Choisissez un service',
    desc: 'Sélectionnez parmi nos catégories : location, pièces, urgence, nettoyage ou atelier.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    num: '02',
    icon: Send,
    title: 'Envoyez votre demande',
    desc: 'Remplissez le formulaire en quelques secondes avec vos informations et besoins.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    num: '03',
    icon: Search,
    title: 'Notre équipe vérifie',
    desc: 'Nous recherchons les meilleures options disponibles auprès de nos partenaires vérifiés.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    num: '04',
    icon: MessageCircle,
    title: 'Vous recevez une réponse',
    desc: 'Nous vous contactons directement avec les informations, prix et disponibilités.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
]

export default function HowItWorks() {
  return (
    <section id="comment" className="py-20 bg-navy-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            Comment ça marche
          </span>
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">
            Simple, rapide, fiable.
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Baabur Auto simplifie l'accès aux services automobiles à Djibouti
            en 4 étapes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="reveal relative"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] right-0 h-px bg-white/10 z-0" />
                )}

                <div className="relative z-10 text-center">
                  {/* Number */}
                  <div className="text-4xl font-display font-extrabold text-white mb-2">
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className={`w-7 h-7 ${step.color}`} />
                  </div>

                  <h3 className="font-display font-bold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
