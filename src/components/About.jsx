import { Car, Users, MapPin, Clock } from 'lucide-react'

const STATS = [
  { icon: Car, value: '5+', label: 'Services disponibles' },
  { icon: Users, value: '100%', label: 'Prestataires vérifiés' },
  { icon: MapPin, value: 'DJI', label: 'Ancré à Djibouti' },
  { icon: Clock, value: '24h', label: 'Urgences' },
]

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="section-tag">À propos</span>
            <h2 className="section-title">
              La plateforme auto pensée pour Djibouti
            </h2>
            <div className="section-divider mb-6 mx-0" />
            <p className="text-slate-600 leading-relaxed mb-5">
              Baabur Auto est une plateforme pensée pour simplifier l'accès aux services
              automobiles à Djibouti. Notre objectif est de connecter les conducteurs avec
              des solutions fiables pour les pièces détachées, le dépannage, le nettoyage,
              la location, l'achat et l'entretien automobile.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Nous comprenons les réalités du marché local et travaillons avec des
              partenaires de confiance pour vous offrir un service à la hauteur de vos
              attentes — simple, rapide et adapté à Djibouti.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-4 py-2 rounded-full">
                ✅ Service local de confiance
              </div>
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-4 py-2 rounded-full">
                🤝 Réseau de partenaires
              </div>
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-2 rounded-full">
                ⚡ Réponse rapide garantie
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-2 gap-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="card-hover bg-slate-50 rounded-2xl border border-slate-100 p-6 text-center"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="font-display font-extrabold text-navy-900 text-3xl mb-1">
                  {value}
                </div>
                <div className="text-slate-500 text-sm">{label}</div>
              </div>
            ))}

            {/* Quote */}
            <div className="col-span-2 bg-navy-900 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">🇩🇯</div>
              <p className="text-white font-display font-semibold text-sm leading-relaxed">
                "Tous les services auto à Djibouti, au même endroit."
              </p>
              <p className="text-amber-400 text-xs mt-2 font-medium">— Baabur Auto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
