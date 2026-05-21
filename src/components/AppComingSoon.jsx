import { Smartphone, Bell } from 'lucide-react'

export default function AppComingSoon() {
  return (
    <section className="py-20 bg-navy-900 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Tag */}
        <div className="reveal inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <Bell className="w-3.5 h-3.5 animate-pulse" />
          Bientôt disponible
        </div>

        {/* Headline */}
        <h2 className="reveal font-display font-extrabold text-white text-3xl md:text-5xl leading-tight mb-4">
          Baabur Auto dans<br />
          <span className="gradient-text">votre poche.</span>
        </h2>

        <p className="reveal text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10">
          L'application mobile arrive bientôt. Gérez vos demandes, suivez vos réparations
          et trouvez un véhicule en quelques taps — où que vous soyez à Djibouti.
        </p>

        {/* Store badges */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {/* App Store */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all duration-200 rounded-2xl px-6 py-4 w-52 cursor-default">
            <svg className="w-8 h-8 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-white/50 text-xs leading-none mb-0.5">Bientôt sur</div>
              <div className="text-white font-bold text-sm leading-tight">App Store</div>
            </div>
          </div>

          {/* Google Play */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all duration-200 rounded-2xl px-6 py-4 w-52 cursor-default">
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M3.18 23.76a2 2 0 0 1-.93-1.76V2a2 2 0 0 1 .93-1.76l.1-.06 12.09 12.09-.1.1L3.18 23.76z" fill="#EA4335"/>
              <path d="M20.12 14.39l-2.55 1.47-2.72-2.72 2.72-2.72 2.57 1.48a2 2 0 0 1 0 3.49z" fill="#FBBC04"/>
              <path d="M3.18 23.76l12.09-12.09 2.72 2.72-12.3 7.1a2 2 0 0 1-2.51-.73z" fill="#34A853"/>
              <path d="M3.18.24a2 2 0 0 1 2.51-.73l12.3 7.1-2.72 2.72L3.18.24z" fill="#4285F4"/>
            </svg>
            <div className="text-left">
              <div className="text-white/50 text-xs leading-none mb-0.5">Bientôt sur</div>
              <div className="text-white font-bold text-sm leading-tight">Google Play</div>
            </div>
          </div>
        </div>

        {/* Phone mockup hint */}
        <div className="reveal inline-flex items-center gap-2 text-slate-500 text-xs">
          <Smartphone className="w-4 h-4" />
          iOS & Android — disponible prochainement
        </div>
      </div>
    </section>
  )
}
