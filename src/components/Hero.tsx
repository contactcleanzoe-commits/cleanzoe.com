import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      {/* Bauhaus-inspired subtle geometric color accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B82E]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#0084F4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20" style={{ fontSize: '18px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Location & Entity Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <span className="w-2.5 h-2.5 bg-[#0084F4] rounded-sm" />
              <span>Cleanzoe Marrakech · Nettoyage Résidentiel &amp; Professionnel</span>
            </div>

            {/* H1 Heading - Clear Service + Location Intent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] leading-tight tracking-tight text-balance">
              Une propreté visible, une tranquillité durable à Marrakech.
            </h1>

            {/* Humanist value proposition */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
              Notre entreprise de nettoyage intervient à Marrakech pour accompagner particuliers, propriétaires de villas, gestionnaires Airbnb et professionnels avec des prestations rigoureuses, discrètes et soignées.
            </p>

            {/* Key differentiators in quiet humanist layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0084F4] shrink-0" />
                <span>Intervention sur tout Marrakech</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0084F4] shrink-0" />
                <span>Matériel professionnel & produits fournis</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0084F4] shrink-0" />
                <span>Rotations Airbnb disponibles 7j/7</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0084F4] shrink-0" />
                <span>Devis gratuit sans engagement sous 30 min</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded shadow-sm transition-smooth"
              >
                <span>Calculer mon devis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20un%20devis%20de%20nettoyage%20%C3%A0%20Marrakech.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold tracking-wide text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded shadow-sm transition-smooth"
              >
                <MessageSquare className="w-4 h-4 text-[#0B192C]" />
                <span>WhatsApp : 06 64 69 64 70</span>
              </a>
            </div>

            {/* Clean metadata strip */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Dior Atlas Meuble N24 Mhamid
              </span>
              <span>·</span>
              <span>Lun - Sam 08h-19h (Airbnb 7j/7)</span>
              <span>·</span>
              <button
                onClick={onExploreServices}
                className="text-[#0084F4] hover:underline font-medium"
              >
                Voir les 12 prestations
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Marrakech Visual with Bauhaus Geometric Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
              <img
                src="/src/assets/images/hero_cleaning_marrakech_1792769384949.jpg"
                alt="Intérieur villa de luxe à Marrakech nettoyée par CleanZoe"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Card Strip */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B192C]/95 via-[#0B192C]/70 to-transparent p-5 text-white">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#F5B82E] font-bold block uppercase tracking-wider text-[10px]">
                      Intervention locale
                    </span>
                    <span className="font-semibold text-white">Guéliz, Hivernage, Palmeraie, M'hamid</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-300 block text-[10px]">Standard qualité</span>
                    <span className="font-bold text-[#0084F4]">100% Pro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
