import { Wrench } from 'lucide-react'
import { sendRequest } from '../config'

const WORKSHOP_SERVICES = [
  { title: 'Vidange', emoji: '🛢️', desc: 'Vidange huile moteur + filtre selon préconisations constructeur.' },
  { title: 'Diagnostic', emoji: '🔍', desc: 'Lecture des codes défauts et diagnostic électronique complet.' },
  { title: 'Freins', emoji: '🛞', desc: 'Remplacement plaquettes, disques, liquide de frein.' },
  { title: 'Climatisation', emoji: '❄️', desc: 'Recharge gaz, nettoyage circuit, vérification compresseur.' },
  { title: 'Batterie', emoji: '🔋', desc: 'Test, remplacement et installation de batterie adaptée.' },
  { title: 'Pneus', emoji: '⚙️', desc: 'Montage, équilibrage, permutation et contrôle de pression.' },
  { title: 'Suspension', emoji: '🔩', desc: 'Amortisseurs, rotules, silent-blocs et trains roulants.' },
  { title: 'Électricité auto', emoji: '⚡', desc: 'Diagnostic électrique, alternateur, démarreur, câblage.' },
  { title: 'Moteur', emoji: '🔧', desc: 'Réparation moteur, courroie de distribution, joint de culasse.' },
  { title: 'Montage de pièces', emoji: '🪛', desc: 'Pose de pièces détachées fournies par le client.' },
  { title: 'Inspection avant achat', emoji: '📋', desc: 'Contrôle complet d\'un véhicule avant acquisition.' },
]

export default function Workshop() {
  const handleRequest = (service) => {
    sendRequest(`Demande atelier — ${service.title}`, {
      'Service demandé': service.title,
      'Description': service.desc,
    })
  }

  return (
    <section id="ateliers" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Ateliers & Maintenance</span>
          <h2 className="section-title">Services d'entretien & réparation</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">
            Accédez à des ateliers partenaires qualifiés pour tous vos besoins
            de maintenance et de réparation à Djibouti.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {WORKSHOP_SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="reveal card-hover bg-white rounded-2xl border border-slate-100 p-5 flex flex-col group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="text-3xl mb-3">{service.emoji}</div>
              <h3 className="font-display font-bold text-navy-900 text-base mb-1.5">
                {service.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                {service.desc}
              </p>
              <button
                onClick={() => handleRequest(service)}
                className="w-full flex items-center justify-center gap-1.5 bg-navy-900/5 hover:bg-navy-900 text-navy-800 hover:text-white border border-navy-900/10 hover:border-navy-900 font-semibold px-3 py-2 rounded-xl transition-all duration-200 text-xs active:scale-95"
              >
                <Wrench className="w-3.5 h-3.5" />
                Demander ce service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
