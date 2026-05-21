import { Fuel, Settings, MapPin, Tag, ArrowRight } from 'lucide-react'
import { sendRequest } from '../config'

const VEHICLES = [
  { brand: 'Toyota', model: 'Land Cruiser 200', year: 2019, type: 'VENTE', price: '9 500 000', currency: 'DJF', fuel: 'Diesel', transmission: 'Auto', location: 'Djibouti-Ville', badge: 'Populaire' },
  { brand: 'Nissan', model: 'Patrol Y62', year: 2020, type: 'VENTE', price: '11 200 000', currency: 'DJF', fuel: 'Essence', transmission: 'Auto', location: 'Balbala', badge: 'Récent' },
  { brand: 'Toyota', model: 'Hilux Double Cab', year: 2021, type: 'LOCATION', price: '45 000', currency: 'DJF/mois', fuel: 'Diesel', transmission: 'Manuel', location: 'Djibouti-Ville', badge: 'Dispo' },
  { brand: 'Hyundai', model: 'Tucson', year: 2018, type: 'VENTE', price: '5 800 000', currency: 'DJF', fuel: 'Essence', transmission: 'Auto', location: 'Djibouti-Ville', badge: null },
  { brand: 'Mitsubishi', model: 'L200 Pickup', year: 2020, type: 'LOCATION', price: '35 000', currency: 'DJF/mois', fuel: 'Diesel', transmission: 'Manuel', location: 'PK12', badge: 'Dispo' },
  { brand: 'Kia', model: 'Sportage', year: 2022, type: 'VENTE', price: '7 200 000', currency: 'DJF', fuel: 'Essence', transmission: 'Auto', location: 'Djibouti-Ville', badge: 'Nouveau' },
]

function VehicleCard({ v }) {
  const req = () => sendRequest(`Demande — ${v.brand} ${v.model}`, {
    'Type': v.type, 'Véhicule': `${v.brand} ${v.model} (${v.year})`,
    'Prix': `${v.price} ${v.currency}`, 'Carburant': v.fuel,
    'Transmission': v.transmission, 'Localisation': v.location,
  })

  return (
    <div className="reveal card-hover" style={{
      background: '#080808', border: '1px solid #1A1A1A',
      borderTop: '2px solid #0084FF',
    }}>
      {/* Placeholder */}
      <div style={{
        height: 160, background: '#0A0A0A',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: '1px solid #111', position: 'relative',
      }}>
        <span style={{ fontSize: 40 }}>🚗</span>
        {v.badge && (
          <span style={{
            position: 'absolute', top: 12, left: 12,
            background: '#0084FF', color: '#fff',
            fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 8px', borderRadius: 1,
          }}>{v.badge}</span>
        )}
        <span style={{
          position: 'absolute', top: 12, right: 12,
          background: 'transparent', border: '1px solid #222',
          color: '#555', fontSize: 9, fontWeight: 800, letterSpacing: '0.1em',
          textTransform: 'uppercase', padding: '4px 8px', borderRadius: 1,
        }}>{v.type}</span>
      </div>

      <div style={{ padding: '20px 20px 16px' }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: '-0.01em' }}>
            {v.brand} {v.model}
          </div>
          <div style={{ fontSize: 11, color: '#444', fontWeight: 700, letterSpacing: '0.08em', marginTop: 2 }}>{v.year}</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
          {[
            { icon: Fuel, val: v.fuel },
            { icon: Settings, val: v.transmission },
          ].map(({ icon: Icon, val }) => (
            <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#555' }}>
              <Icon style={{ width: 12, height: 12, color: '#333' }} />{val}
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#555', gridColumn: 'span 2' }}>
            <MapPin style={{ width: 12, height: 12, color: '#333' }} />{v.location}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #111', paddingTop: 14 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444', marginBottom: 3 }}>Prix</div>
            <div style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 15, color: '#fff', letterSpacing: '-0.01em' }}>
              {v.price} <span style={{ color: '#0084FF', fontSize: 10 }}>{v.currency}</span>
            </div>
          </div>
          <button onClick={req} className="btn-primary" style={{ fontSize: 11, padding: '9px 14px' }}>
            Demander
            <ArrowRight style={{ width: 12, height: 12 }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function VehicleRental() {
  return (
    <section id="location-achat" style={{ background: '#030303', padding: '100px 0', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <span className="section-tag">Location & Achat</span>
          <h2 style={{ fontFamily: 'Sora', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Véhicules disponibles
          </h2>
          <p style={{ color: '#555', fontSize: 14, marginTop: 12, maxWidth: 500 }}>
            Exemples proposés par nos partenaires. Envoyez une demande, nous vous recontactons sous peu.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }} className="veh-grid">
          <style>{`@media(max-width:767px){.veh-grid{grid-template-columns:1fr!important}}@media(min-width:768px) and (max-width:1023px){.veh-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
          {VEHICLES.map((v, i) => (
            <div key={i} style={{ transitionDelay: `${i * 55}ms` }}><VehicleCard v={v} /></div>
          ))}
        </div>

        <div style={{ marginTop: 32, padding: '20px 24px', background: '#080808', border: '1px solid #1A1A1A', borderLeft: '2px solid #0084FF', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <Tag style={{ width: 16, height: 16, color: '#0084FF', flexShrink: 0, marginTop: 1 }} />
          <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6 }}>
            <strong style={{ color: '#888' }}>Vous ne trouvez pas ce que vous cherchez ?</strong>{' '}
            Envoyez-nous votre demande avec les caractéristiques souhaitées, nous rechercherons parmi nos partenaires.
          </p>
        </div>
      </div>
    </section>
  )
}
