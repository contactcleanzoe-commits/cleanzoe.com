import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CleaningServiceItem } from '../data/servicesData';

interface ServiceCardProps {
  service: CleaningServiceItem;
  onSelect: (service: CleaningServiceItem) => void;
  onDirectQuote: (service: CleaningServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, onDirectQuote }) => {
  return (
    <div className="group bg-[#0483dd] border border-[#0483dd]/40 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-white/30 transition-smooth">
      <div>
        {/* Service Image */}
        {service.image && (
          <div className="h-48 w-full overflow-hidden bg-slate-900/10 relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              loading="lazy"
              decoding="async"
              width={400}
              height={192}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('images.unsplash.com/photo-1581578731548-c64695cc6952')) {
                  target.src = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80&fm=webp';
                }
              }}
            />
          </div>
        )}

        <div className="p-6">
          {/* H3 Headline */}
          <h3 className="text-lg font-bold text-[#fcfdf6] group-hover:text-white transition-colors leading-snug">
            {service.title}
          </h3>

          {/* Short description */}
          <p className="text-sm text-[#fcfdf6] mt-2.5 leading-relaxed opacity-95">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Card Action footer */}
      <div className="px-6 pb-6 pt-3 flex items-center justify-between gap-3 border-t border-white/20">
        <button
          onClick={() => onSelect(service)}
          className="text-xs font-semibold text-[#fcfdf6] hover:text-white inline-flex items-center gap-1.5 py-1 transition-colors"
        >
          <span>En savoir plus</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onDirectQuote(service)}
          className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-smooth shadow-xs"
        >
          Demander un devis
        </button>
      </div>
    </div>
  );
};

