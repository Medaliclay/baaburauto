import { Fuel, Settings, MapPin, Tag, Send } from 'lucide-react'
import { sendRequest } from '../config'

const VEHICLES = [
  {
    brand: 'Toyota', model: 'Land Cruiser 200', year: 2019, type: 'Vente',
    price: '9 500 000', currency: 'DJF', fuel: 'Diesel', transmission: 'Automatique',
    location: 'Djibouti-Ville', badge: 'Populaire', badgeColor: '#f59e0b',
  },
  {
    brand: 'Nissan', model: 'Patrol Y62', year: 2020, type: 'Vente',
    price: '11 200 000', currency: 'DJF', fuel: 'Essence', transmission: 'Automatique',
    location: 'Balbala', badge: 'Récent', badgeColor: '#3b82f6',
  },
  {
    brand: 'Toyota', model: 'Hilux Double Cab', year: 2021, type: 'Location',
    price: '45 000', currency: 'DJF/mois', fuel: 'Diesel', transmission: 'Manuelle',
    location: 'Djibouti-Ville', badge: 'Disponible', badgeColor: '#22c55e',
  },
  {
    brand: 'Hyundai', model: 'Tucson', year: 2018, type: 'Vente',
    price: '5 800 000', currency: 'DJF', fuel: 'Essence', transmission: 'Automatique',
    location: 'Djibouti-Ville', badge: null, badgeColor: '',
  },
  {
    brand: 'Mitsubishi', model: 'L200 Pickup', year: 2020, type: 'Location',
    price: '35 000', currency: 'DJF/mois', fuel: 'Diesel', transmission: 'Manuelle',
    location: 'PK12', badge: 'Disponible', badgeColor: '#22c55e',
  },
  {
    brand: 'Kia', model: 'Sportage', year: 2022, type: 'Vente',
    price: '7 200 000', currency: 'DJF', fuel: 'Essence', transmission: 'Automatique',
    location: 'Djibouti-Ville', badge: 'Nouveau', badgeColor: '#a855f7',
  },
]

function VehicleCard({ vehicle }) {
  const handleRequest = () => {
    sendRequest(`Demande de véhicule — ${vehicle.brand} ${vehicle.model}`, {
      'Type': vehicle.type,
      'Véhicule': `${vehicle.brand} ${vehicle.model} (${vehicle.year})`,
      'Prix': `${vehicle.price} ${vehicle.currency}`,
      'Carburant': vehicle.fuel,
      'Transmission': vehicle.transmission,
      'Localisation': vehicle.location,
    })
  }

  const isLocation = vehicle.type === 'Location'

  return (
    <div
      className="reveal card-hover rounded-2xl overflow-hidden flex flex-col"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Image placeholder */}
      <div
        className="relative h-44 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #06111f 100%)' }}
      >
        <div className="text-center opacity-60">
          <div className="text-5xl mb-1">🚗</div>
          <div className="text-slate-600 text-xs">Photo bientôt disponible</div>
        </div>
        {vehicle.badge && (
          <span
            className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: vehicle.badgeColor, boxShadow: `0 2px 8px ${vehicle.badgeColor}50` }}
          >
            {vehicle.badge}
          </span>
        )}
        <span
          className="absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-full border"
          style={{
            background: isLocation ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.07)',
            borderColor: isLocation ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.12)',
            color: isLocation ? '#93c5fd' : '#94a3b8',
          }}
        >
          {vehicle.type}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-display font-bold text-white text-lg leading-tight">
            {vehicle.brand} {vehicle.model}
          </h3>
          <div className="text-slate-600 text-sm font-medium">{vehicle.year}</div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Fuel className="w-3.5 h-3.5 text-amber-500" />
            {vehicle.fuel}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Settings className="w-3.5 h-3.5 text-amber-500" />
            {vehicle.transmission}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs col-span-2">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            {vehicle.location}
          </div>
        </div>

        <div
          className="flex items-center justify-between pt-4 mt-auto border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div>
            <div className="text-xs text-slate-600 uppercase tracking-wide font-semibold mb-0.5">Prix</div>
            <div className="font-display font-black text-white text-base leading-none">
              {vehicle.price}{' '}
              <span className="text-amber-400 text-xs font-bold">{vehicle.currency}</span>
            </div>
          </div>
          <button onClick={handleRequest} className="btn-primary px-3.5 py-2 text-xs">
            <Send className="w-3.5 h-3.5" />
            Demander
          </button>
        </div>
      </div>
    </div>
  )
}

export default function VehicleRental() {
  return (
    <section id="location-achat" className="py-24" style={{ background: '#060e1a' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Location & Achat</span>
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-3 tracking-tight">
            Véhicules disponibles
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Exemples de véhicules proposés par nos partenaires.
            Envoyez une demande et notre équipe vous contacte sous peu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VEHICLES.map((v, i) => (
            <div key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <VehicleCard vehicle={v} />
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl p-5 flex items-start gap-3 reveal"
          style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          <Tag className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-amber-200/80 text-sm">
            <strong className="text-amber-300">Vous ne trouvez pas ce que vous cherchez ?</strong>{' '}
            Envoyez-nous votre demande avec les caractéristiques souhaitées et nous rechercherons
            parmi nos partenaires disponibles.
          </p>
        </div>
      </div>
    </section>
  )
}
