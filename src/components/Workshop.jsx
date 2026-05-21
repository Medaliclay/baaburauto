import { Wrench } from 'lucide-react'
import { sendRequest } from '../config'

const WORKSHOP_SERVICES = [
  { title: 'Vidange', emoji: '🛢️', desc: "Vidange huile moteur + filtre selon préconisations constructeur." },
  { title: 'Diagnostic', emoji: '🔍', desc: "Lecture des codes défauts et diagnostic électronique complet." },
  { title: 'Freins', emoji: '🛞', desc: "Remplacement plaquettes, disques, liquide de frein." },
  { title: 'Climatisation', emoji: '❄️', desc: "Recharge gaz, nettoyage circuit, vérification compresseur." },
  { title: 'Batterie', emoji: '🔋', desc: "Test, remplacement et installation de batterie adaptée." },
  { title: 'Pneus', emoji: '⚙️', desc: "Montage, équilibrage, permutation et contrôle de pression." },
  { title: 'Suspension', emoji: '🔩', desc: "Amortisseurs, rotules, silent-blocs et trains roulants." },
  { title: 'Électricité auto', emoji: '⚡', desc: "Diagnostic électrique, alternateur, démarreur, câblage." },
  { title: 'Moteur', emoji: '🔧', desc: "Réparation moteur, courroie de distribution, joint de culasse." },
  { title: 'Montage de pièces', emoji: '🪛', desc: "Pose de pièces détachées fournies par le client." },
  { title: "Inspection avant achat", emoji: '📋', desc: "Contrôle complet d'un véhicule avant acquisition." },
]

export default function Workshop() {
  const handleRequest = (service) => {
    sendRequest(`Demande atelier — ${service.title}`, {
      'Service demandé': service.title,
      'Description': service.desc,
    })
  }

  return (
    <section id="ateliers" className="py-24" style={{ background: '#060e1a' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Ateliers & Maintenance</span>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-3 tracking-tight">
            Services d'entretien & réparation
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Accédez à des ateliers partenaires qualifiés pour tous vos besoins
            de maintenance et de réparation à Djibouti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {WORKSHOP_SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="reveal card-hover rounded-2xl p-5 flex flex-col group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                transitionDelay: `${i * 45}ms`,
              }}
            >
              <div className="text-3xl mb-3">{service.emoji}</div>
              <h3 className="font-display font-bold text-white text-base mb-1.5">{service.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{service.desc}</p>
              <button
                onClick={() => handleRequest(service)}
                className="w-full flex items-center justify-center gap-1.5 font-bold text-xs py-2 rounded-xl transition-all duration-200 active:scale-95 border"
                style={{
                  background: 'rgba(168,85,247,0.08)',
                  borderColor: 'rgba(168,85,247,0.2)',
                  color: '#c084fc',
                }}
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
