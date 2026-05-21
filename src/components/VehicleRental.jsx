import { Fuel, Settings, MapPin, Tag, Send } from 'lucide-react'
import { sendRequest } from '../config'

const VEHICLES = [
  {
    brand: 'Toyota',
    model: 'Land Cruiser 200',
    year: 2019,
    type: 'Vente',
    price: '9 500 000 DJF',
    fuel: 'Diesel',
    transmission: 'Automatique',
    location: 'Djibouti-Ville',
    img: null,
    badge: 'Populaire',
    badgeColor: 'bg-amber-500',
  },
  {
    brand: 'Nissan',
    model: 'Patrol Y62',
    year: 2020,
    type: 'Vente',
    price: '11 200 000 DJF',
    fuel: 'Essence',
    transmission: 'Automatique',
    location: 'Balbala',
    img: null,
    badge: 'Récent',
    badgeColor: 'bg-blue-500',
  },
  {
    brand: 'Toyota',
    model: 'Hilux Double Cab',
    year: 2021,
    type: 'Location',
    price: '45 000 DJF / mois',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    location: 'Djibouti-Ville',
    img: null,
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
  {
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2018,
    type: 'Vente',
    price: '5 800 000 DJF',
    fuel: 'Essence',
    transmission: 'Automatique',
    location: 'Djibouti-Ville',
    img: null,
    badge: null,
    badgeColor: '',
  },
  {
    brand: 'Mitsubishi',
    model: 'L200 Pickup',
    year: 2020,
    type: 'Location',
    price: '35 000 DJF / mois',
    fuel: 'Diesel',
    transmission: 'Manuelle',
    location: 'PK12',
    img: null,
    badge: 'Disponible',
    badgeColor: 'bg-green-500',
  },
  {
    brand: 'Kia',
    model: 'Sportage',
    year: 2022,
    type: 'Vente',
    price: '7 200 000 DJF',
    fuel: 'Essence',
    transmission: 'Automatique',
    location: 'Djibouti-Ville',
    img: null,
    badge: 'Nouveau',
    badgeColor: 'bg-purple-500',
  },
]

function VehicleCard({ vehicle }) {
  const handleRequest = () => {
    sendRequest(`Demande de véhicule — ${vehicle.brand} ${vehicle.model}`, {
      'Type': vehicle.type,
      'Véhicule': `${vehicle.brand} ${vehicle.model} (${vehicle.year})`,
      'Prix': vehicle.price,
      'Carburant': vehicle.fuel,
      'Transmission': vehicle.transmission,
      'Localisation': vehicle.location,
    })
  }

  const isLocation = vehicle.type === 'Location'

  return (
    <div className="reveal card-hover bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
      {/* Image placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-1">🚗</div>
          <div className="text-white/40 text-xs">Photo bientôt disponible</div>
        </div>
        {vehicle.badge && (
          <span className={`absolute top-3 left-3 ${vehicle.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
            {vehicle.badge}
          </span>
        )}
        <span className={`absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-full ${isLocation ? 'bg-blue-600' : 'bg-slate-700'}`}>
          {vehicle.type}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-display font-bold text-navy-900 text-lg leading-tight">
            {vehicle.brand} {vehicle.model}
          </h3>
          <div className="text-slate-400 text-sm">{vehicle.year}</div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Fuel className="w-3.5 h-3.5 text-amber-400" />
            {vehicle.fuel}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Settings className="w-3.5 h-3.5 text-amber-400" />
            {vehicle.transmission}
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs col-span-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {vehicle.location}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Prix</div>
            <div className="font-display font-bold text-navy-900 text-base">{vehicle.price}</div>
          </div>
          <button onClick={handleRequest} className="btn-primary px-4 py-2.5 text-xs">
            <Send className="w-3.5 h-3.5" />
            Demander ce véhicule
          </button>
        </div>
      </div>
    </div>
  )
}

export default function VehicleRental() {
  return (
    <section id="location-achat" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Location & Achat</span>
          <h2 className="section-title">Véhicules disponibles</h2>
          <div className="section-divider mb-4" />
          <p className="section-subtitle">
            Exemples de véhicules proposés par nos partenaires.
            Envoyez une demande et notre équipe vous contacte sous peu.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VEHICLES.map((v, i) => (
            <div key={i} style={{ transitionDelay: `${i * 70}ms` }}>
              <VehicleCard vehicle={v} />
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 reveal">
          <Tag className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm">
            <strong>Vous ne trouvez pas ce que vous cherchez ?</strong> Envoyez-nous votre
            demande avec les caractéristiques souhaitées et nous rechercherons parmi nos
            partenaires disponibles.
          </p>
        </div>
      </div>
    </section>
  )
}
