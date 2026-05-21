import { ChevronDown, Wrench, ShieldCheck, Zap, MapPin, Star } from 'lucide-react'

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Prestataires vérifiés' },
  { icon: Zap, label: 'Réponse rapide' },
  { icon: MapPin, label: 'Adapté à Djibouti' },
  { icon: Star, label: 'Demandes simplifiées' },
]

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="accueil"
      className="hero-pattern min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 badge-pulse">
          <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
          Plateforme auto locale — Djibouti
        </div>

        {/* Heading */}
        <h1 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          Tous les services auto{' '}
          <br className="hidden sm:block" />
          à Djibouti,{' '}
          <span className="gradient-text">au même endroit.</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Location, achat, pièces détachées, dépannage, nettoyage et ateliers partenaires
          —{' '}
          <span className="text-amber-400 font-semibold">
            une demande simple, une réponse rapide.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <button
            onClick={() => scrollTo('#pieces')}
            className="btn-primary w-full sm:w-auto px-7 py-4 text-base shadow-amber-500/20 shadow-lg"
          >
            <Wrench className="w-5 h-5" />
            Demander une pièce
          </button>
          <button
            onClick={() => scrollTo('#urgence')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg active:scale-95 text-base"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Besoin d'urgence
          </button>
          <button
            onClick={() => scrollTo('#services')}
            className="btn-outline w-full sm:w-auto px-7 py-4 text-base border-white/20 text-white hover:bg-white/10"
          >
            Voir les services
          </button>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/5 border border-white/8 backdrop-blur-sm rounded-xl px-3 py-2.5"
            >
              <Icon className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-slate-300 text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
