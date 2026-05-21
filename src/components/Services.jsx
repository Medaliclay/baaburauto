import { Car, Wrench, AlertTriangle, Sparkles, Building2, ChevronRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Car,
    title: 'Location / Achat',
    desc: 'Trouvez le véhicule idéal — location courte durée, longue durée ou achat direct avec des prestataires fiables.',
    href: '#location-achat',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    cta: 'Voir les véhicules',
  },
  {
    icon: Wrench,
    title: 'Pièces détachées',
    desc: 'Recherchez et commandez des pièces neuves, d\'occasion ou d\'origine pour votre véhicule rapidement.',
    href: '#pieces',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    cta: 'Demander une pièce',
  },
  {
    icon: AlertTriangle,
    title: 'Urgence',
    desc: 'Remorquage, batterie, pneu crevé, panne mécanique — notre réseau intervient le plus vite possible.',
    href: '#urgence',
    color: 'text-red-500',
    bg: 'bg-red-50',
    cta: 'Demander de l\'aide',
  },
  {
    icon: Sparkles,
    title: 'Nettoyage automobile',
    desc: 'Lavage simple, nettoyage intérieur, detailing complet ou polissage — à l\'atelier ou à domicile.',
    href: '#nettoyage',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    cta: 'Réserver un lavage',
  },
  {
    icon: Building2,
    title: 'Ateliers & maintenance',
    desc: 'Vidange, frein, diagnostic, climatisation — accédez à des ateliers partenaires qualifiés à Djibouti.',
    href: '#ateliers',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    cta: 'Trouver un atelier',
  },
]

export default function Services() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Nos services</span>
          <h2 className="section-title">
            Tout ce dont vous avez besoin
          </h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">
            Baabur Auto regroupe l'ensemble des services automobiles disponibles à Djibouti
            pour vous faire gagner du temps.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="reveal card-hover bg-slate-50 rounded-2xl p-6 border border-slate-100 group cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => scrollTo(service.href)}
              >
                <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className={`inline-flex items-center gap-1 text-sm font-semibold ${service.color} group-hover:gap-2 transition-all`}>
                  {service.cta}
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
