import { ChevronDown, Wrench, AlertTriangle, Car, Sparkles, Building2, ShieldCheck, Zap, MapPin, Clock } from 'lucide-react'

const SERVICE_CHIPS = [
  { icon: Car, label: 'Location / Achat', href: '#location-achat', color: 'text-blue-400', border: 'border-blue-500/30 hover:border-blue-400/60' },
  { icon: Wrench, label: 'Pièces détachées', href: '#pieces', color: 'text-amber-400', border: 'border-amber-500/30 hover:border-amber-400/60' },
  { icon: AlertTriangle, label: 'Urgence', href: '#urgence', color: 'text-red-400', border: 'border-red-500/30 hover:border-red-400/60' },
  { icon: Sparkles, label: 'Nettoyage', href: '#nettoyage', color: 'text-teal-400', border: 'border-teal-500/30 hover:border-teal-400/60' },
  { icon: Building2, label: 'Ateliers', href: '#ateliers', color: 'text-purple-400', border: 'border-purple-500/30 hover:border-purple-400/60' },
]

const STATS = [
  { icon: Clock, value: '24h', label: 'Urgences' },
  { icon: ShieldCheck, value: '100%', label: 'Vérifié' },
  { icon: Zap, value: '5+', label: 'Services' },
  { icon: MapPin, value: 'DJI', label: 'Local' },
]

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
      style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(245,158,11,0.07) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(59,130,246,0.05) 0%, transparent 50%), #06111f' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none glow-pulse"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.09) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-24 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 badge-pulse"
          style={{ background: 'rgba(245,158,11,0.08)' }}>
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          Plateforme auto locale — Djibouti
        </div>

        {/* Heading */}
        <h1 className="font-display font-black text-white leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 4.5rem)' }}>
          Tous les services auto
          <br />
          à Djibouti,{' '}
          <span className="gradient-text">au même endroit.</span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          Location, achat, pièces détachées, dépannage, nettoyage et ateliers partenaires
          —{' '}
          <span className="text-amber-400 font-semibold">une demande simple, une réponse rapide.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <button
            onClick={() => scrollTo('#pieces')}
            className="btn-primary w-full sm:w-auto px-8 py-4 text-base"
          >
            <Wrench className="w-5 h-5" />
            Demander une pièce
          </button>
          <button
            onClick={() => scrollTo('#urgence')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 active:scale-95 text-base border border-red-500/40 hover:border-red-400/70"
            style={{ background: 'rgba(239,68,68,0.12)', boxShadow: '0 4px 20px rgba(239,68,68,0.2)' }}
          >
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            Urgence
          </button>
          <button
            onClick={() => scrollTo('#services')}
            className="btn-outline w-full sm:w-auto px-8 py-4 text-base"
          >
            Voir les services
          </button>
        </div>

        {/* Service chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-16">
          {SERVICE_CHIPS.map(({ icon: Icon, label, href, color, border }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 active:scale-95 hover:bg-white/5 ${border}`}
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-slate-300">{label}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="glass rounded-2xl px-4 py-4 text-center"
            >
              <div className="font-display font-black text-white text-2xl leading-none mb-1">{value}</div>
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-amber-400 transition-colors animate-bounce hidden sm:block"
        aria-label="Défiler"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
