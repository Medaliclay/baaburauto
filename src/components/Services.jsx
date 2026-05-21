import { Car, Wrench, AlertTriangle, Sparkles, Building2, ChevronRight } from 'lucide-react'

const SERVICES = [
  {
    icon: AlertTriangle,
    title: 'Urgence',
    desc: 'Remorquage, batterie, pneu crevé, panne mécanique — notre réseau intervient le plus vite possible.',
    href: '#urgence',
    cta: "Demander de l'aide",
    accent: '#ef4444',
    glow: 'rgba(239,68,68,0.15)',
    tag: '🚨 Disponible 24h/24',
    featured: true,
  },
  {
    icon: Car,
    title: 'Location / Achat',
    desc: 'Trouvez le véhicule idéal — location courte durée, longue durée ou achat direct.',
    href: '#location-achat',
    cta: 'Voir les véhicules',
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,0.12)',
    tag: null,
    featured: false,
  },
  {
    icon: Wrench,
    title: 'Pièces détachées',
    desc: 'Commandez des pièces neuves, d\'occasion ou d\'origine pour votre véhicule rapidement.',
    href: '#pieces',
    cta: 'Demander une pièce',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
    tag: null,
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Nettoyage',
    desc: 'Lavage, nettoyage intérieur, detailing complet ou polissage — à l\'atelier ou à domicile.',
    href: '#nettoyage',
    cta: 'Réserver un lavage',
    accent: '#14b8a6',
    glow: 'rgba(20,184,166,0.12)',
    tag: null,
    featured: false,
  },
  {
    icon: Building2,
    title: 'Ateliers & Maintenance',
    desc: 'Vidange, diagnostic, freins, climatisation — ateliers partenaires qualifiés à Djibouti.',
    href: '#ateliers',
    cta: 'Trouver un atelier',
    accent: '#a855f7',
    glow: 'rgba(168,85,247,0.12)',
    tag: null,
    featured: false,
  },
]

function ServiceCard({ service, className = '' }) {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  const Icon = service.icon

  if (service.featured) {
    return (
      <div
        className={`card-hover relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between cursor-pointer group ${className}`}
        style={{
          background: `radial-gradient(ellipse at top left, ${service.glow} 0%, rgba(255,255,255,0.03) 60%)`,
          border: `1px solid rgba(239,68,68,0.2)`,
          minHeight: '240px',
        }}
        onClick={() => scrollTo(service.href)}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 20% 20%, ${service.glow} 0%, transparent 65%)` }}
        />
        <div className="relative z-10">
          {service.tag && (
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-300 border border-red-500/30 px-3 py-1 rounded-full mb-5"
              style={{ background: 'rgba(239,68,68,0.1)' }}>
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
              {service.tag}
            </div>
          )}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.25)' }}
          >
            <Icon className="w-6 h-6" style={{ color: service.accent }} />
          </div>
          <h3 className="font-display font-bold text-white text-xl mb-2">{service.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
        </div>
        <div
          className="relative z-10 inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all"
          style={{ color: service.accent }}
        >
          {service.cta}
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`card-hover relative overflow-hidden rounded-2xl p-6 flex flex-col cursor-pointer group ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      onClick={() => scrollTo(service.href)}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
        style={{ background: service.glow, border: `1px solid ${service.accent}30` }}
      >
        <Icon className="w-5 h-5" style={{ color: service.accent }} />
      </div>
      <h3 className="font-display font-bold text-white text-base mb-2">{service.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
      <div
        className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-2.5 transition-all"
        style={{ color: service.accent }}
      >
        {service.cta}
        <ChevronRight className="w-3.5 h-3.5" />
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: '#08131e' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Nos services</span>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-3 tracking-tight">
            Tout ce dont vous avez besoin
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Baabur Auto regroupe l'ensemble des services automobiles disponibles à Djibouti.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          <ServiceCard service={SERVICES[0]} className="sm:col-span-2 lg:col-span-2 lg:row-span-1" />
          <ServiceCard service={SERVICES[1]} />
          <ServiceCard service={SERVICES[2]} />
          <ServiceCard service={SERVICES[3]} />
          <ServiceCard service={SERVICES[4]} />
        </div>
      </div>
    </section>
  )
}
