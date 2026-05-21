import { Wrench } from 'lucide-react'
import { sendRequest } from '../config'

const WORKSHOP_SERVICES = [
  { title: 'Vidange', emoji: '🛢️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Oil_Change_oil_pan_2005_gmc_suv.JPG/330px-Oil_Change_oil_pan_2005_gmc_suv.JPG', desc: 'Vidange huile moteur + filtre selon préconisations constructeur.' },
  { title: 'Diagnostic', emoji: '🔍', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/MaxScan_OE509_img95.jpg/330px-MaxScan_OE509_img95.jpg', desc: 'Lecture des codes défauts et diagnostic électronique complet.' },
  { title: 'Freins', emoji: '🛞', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Disk_brake_dsc03682.jpg/330px-Disk_brake_dsc03682.jpg', desc: 'Remplacement plaquettes, disques, liquide de frein.' },
  { title: 'Climatisation', emoji: '❄️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Regassing_the_aircon_of_a_Ford_Focus_2017_04.jpg/330px-Regassing_the_aircon_of_a_Ford_Focus_2017_04.jpg', desc: 'Recharge gaz, nettoyage circuit, vérification compresseur.' },
  { title: 'Batterie', emoji: '🔋', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Car_battery.jpg/330px-Car_battery.jpg', desc: 'Test, remplacement et installation de batterie adaptée.' },
  { title: 'Pneus', emoji: '⚙️', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Large_tyre.jpg/330px-Large_tyre.jpg', desc: 'Montage, équilibrage, permutation et contrôle de pression.' },
  { title: 'Suspension', emoji: '🔩', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Shock_Absorbers_Detail.jpg/330px-Shock_Absorbers_Detail.jpg', desc: 'Amortisseurs, rotules, silent-blocs et trains roulants.' },
  { title: 'Électricité auto', emoji: '⚡', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Jeep_2.5_liter_4-cylinder_engine_chromed_e.jpg/330px-Jeep_2.5_liter_4-cylinder_engine_chromed_e.jpg', desc: 'Diagnostic électrique, alternateur, démarreur, câblage.' },
  { title: 'Moteur', emoji: '🔧', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Clevelandblock.jpg/330px-Clevelandblock.jpg', desc: 'Réparation moteur, courroie de distribution, joint de culasse.' },
  { title: 'Montage de pièces', emoji: '🪛', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mechanic_at_work.jpg/330px-Mechanic_at_work.jpg', desc: 'Pose de pièces détachées fournies par le client.' },
  { title: 'Inspection avant achat', emoji: '📋', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Car_repair.jpg/330px-Car_repair.jpg', desc: 'Contrôle complet d\'un véhicule avant acquisition.' },
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
              <div className="h-32 -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-2xl bg-slate-100">
                {service.img ? (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-3xl">{service.emoji}</div>
                )}
              </div>
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
