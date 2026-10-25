import { MessageSquare, ArrowRight } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';
import heroCleaningImg from '../assets/images/hero_cleaning_marrakech_1792769384949.webp';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-[#fcfdf6] border-b border-slate-200">
      {/* Bauhaus-inspired subtle geometric color accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B82E]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#0084F4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[23px] pb-[46px] lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Location & Entity Kicker */}
            <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-[#0483dd]">
              <span className="w-2.5 h-2.5 bg-[#0483dd] rounded-sm shrink-0" />
              <span className="text-[#0483dd] text-[9px] sm:text-xs leading-4 text-center sm:text-left">
                Cleanzoe Marrakech · Nettoyage Résidentiel &amp; Professionnel
              </span>
            </div>

            {/* H1 Heading - Clear Service + Location Intent */}
            <h1 className="-mt-[23px] text-[30px] sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] leading-[36.5px] sm:leading-tight tracking-tight text-center sm:text-left text-balance">
              Une propreté visible, une tranquillité durable à Marrakech.
            </h1>

            {/* Humanist value proposition */}
            <p className="-mt-[14px] -mb-[7px] text-[13px] sm:text-base text-[#172126] max-w-2xl leading-relaxed text-center sm:text-left">
              Notre équipe de nettoyage intervient à Marrakech pour accompagner particuliers, propriétaires de villas, gestionnaires Airbnb et professionnels avec des prestations rigoureuses, discrètes et soignées.
            </p>



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
          </div>

          {/* Right Column: High-Impact Marrakech Visual with Bauhaus Geometric Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
              <img
                src={heroCleaningImg}
                alt="Intérieur villa de luxe à Marrakech nettoyée par CleanZoe"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={600}
                height={460}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('images.unsplash.com')) {
                    target.src = '/images/hero_cleaning_marrakech_1792769384949.webp';
                  }
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
