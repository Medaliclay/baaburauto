import { Car, Heart, Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT_CONFIG } from '../config'

const FOOTER_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Location / Achat', href: '#location-achat' },
  { label: 'Pièces détachées', href: '#pieces' },
  { label: 'Urgence', href: '#urgence' },
  { label: 'Nettoyage', href: '#nettoyage' },
  { label: 'Ateliers', href: '#ateliers' },
  { label: 'Comment ça marche', href: '#comment' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#04090f', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center"
                style={{ boxShadow: '0 4px 12px rgba(245,158,11,0.3)' }}
              >
                <Car style={{ width: 16, height: 16, color: '#000' }} />
              </div>
              <div>
                <div className="font-display font-black text-white text-sm">Baabur Auto</div>
                <div className="text-amber-500/60 text-[10px] font-medium">Services auto à Djibouti</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Tous les services auto à Djibouti, au même endroit. Location, achat, pièces,
              urgence, nettoyage et ateliers.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${CONTACT_CONFIG.phone}`}
                className="flex items-center gap-2 text-slate-600 hover:text-amber-400 text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                {CONTACT_CONFIG.phone}
              </a>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="flex items-center gap-2 text-slate-600 hover:text-amber-400 text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                {CONTACT_CONFIG.email}
              </a>
              <div className="flex items-center gap-2 text-slate-600 text-xs">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {CONTACT_CONFIG.address}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="grid grid-cols-1 gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-600 hover:text-amber-400 text-xs transition-colors text-left font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <h4 className="font-display font-bold text-white text-sm mb-2">Besoin d'aide ?</h4>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                Notre équipe est disponible pour répondre à vos demandes de services automobiles à Djibouti.
              </p>
              <button
                onClick={() => scrollTo('#pieces')}
                className="btn-primary w-full justify-center text-xs py-2.5"
              >
                Faire une demande
              </button>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Baabur Auto — Tous droits réservés
          </p>
          <p className="text-slate-700 text-xs flex items-center gap-1">
            Fait avec <Heart className="w-3 h-3 text-red-600 fill-current" /> à Djibouti 🇩🇯
          </p>
        </div>
      </div>

      {/* Mobile bottom bar spacer */}
      <div className="lg:hidden h-16" />
    </footer>
  )
}
