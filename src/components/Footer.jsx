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
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">Baabur Auto</div>
                <div className="text-amber-400 text-[10px]">Services auto à Djibouti</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Tous les services auto à Djibouti, au même endroit. Location, achat, pièces,
              urgence, nettoyage et ateliers.
            </p>
            <div className="flex flex-col gap-2">
              <a href={`tel:${CONTACT_CONFIG.phone}`} className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-xs transition-colors">
                <Phone className="w-3.5 h-3.5" />{CONTACT_CONFIG.phone}
              </a>
              <a href={`mailto:${CONTACT_CONFIG.email}`} className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-xs transition-colors">
                <Mail className="w-3.5 h-3.5" />{CONTACT_CONFIG.email}
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5" />{CONTACT_CONFIG.address}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">Navigation</h4>
            <ul className="grid grid-cols-1 gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 hover:text-amber-400 text-xs transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA box */}
          <div>
            <div className="bg-navy-800 rounded-2xl p-5 border border-white/5">
              <h4 className="font-display font-bold text-white text-sm mb-2">
                Besoin d'aide ?
              </h4>
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                Notre équipe est disponible pour répondre à vos demandes de services
                automobiles à Djibouti.
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

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Baabur Auto — Tous droits réservés
          </p>
          <p className="text-slate-700 text-xs flex items-center gap-1">
            Fait avec <Heart className="w-3 h-3 text-red-500 fill-current" /> à Djibouti 🇩🇯
          </p>
        </div>
      </div>
    </footer>
  )
}
