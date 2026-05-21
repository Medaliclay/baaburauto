import { MousePointerClick, Send, Search, MessageCircle } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: MousePointerClick,
    title: 'Choisissez un service',
    desc: 'Sélectionnez parmi nos catégories : location, pièces, urgence, nettoyage ou atelier.',
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,0.15)',
  },
  {
    num: '02',
    icon: Send,
    title: 'Envoyez votre demande',
    desc: 'Remplissez le formulaire en quelques secondes avec vos informations et besoins.',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.15)',
  },
  {
    num: '03',
    icon: Search,
    title: 'Notre équipe vérifie',
    desc: 'Nous recherchons les meilleures options disponibles auprès de nos partenaires vérifiés.',
    accent: '#14b8a6',
    glow: 'rgba(20,184,166,0.15)',
  },
  {
    num: '04',
    icon: MessageCircle,
    title: 'Vous recevez une réponse',
    desc: 'Nous vous contactons directement avec les informations, prix et disponibilités.',
    accent: '#a855f7',
    glow: 'rgba(168,85,247,0.15)',
  },
]

export default function HowItWorks() {
  return (
    <section id="comment" className="py-24" style={{ background: '#06111f' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Comment ça marche</span>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-3 tracking-tight">
            Simple, rapide, fiable.
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Baabur Auto simplifie l'accès aux services automobiles à Djibouti en 4 étapes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="reveal relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Connector line on desktop */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-[52px] left-[calc(50%+44px)] right-0 h-px z-0"
                    style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }}
                  />
                )}

                <div
                  className="relative z-10 rounded-2xl p-6 text-center h-full"
                  style={{
                    background: `radial-gradient(ellipse at top, ${step.glow} 0%, rgba(255,255,255,0.03) 60%)`,
                    border: `1px solid rgba(255,255,255,0.07)`,
                  }}
                >
                  <div
                    className="font-display font-black text-5xl mb-4 leading-none"
                    style={{ color: `${step.accent}18`, WebkitTextStroke: `1px ${step.accent}30` }}
                  >
                    {step.num}
                  </div>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: step.glow, border: `1px solid ${step.accent}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: step.accent }} />
                  </div>

                  <h3 className="font-display font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
