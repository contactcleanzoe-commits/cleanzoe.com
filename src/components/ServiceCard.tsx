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
    <div className="group bg-white border border-slate-200/90 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#0084F4] hover:shadow-lg transition-smooth">
      <div>
        {/* Service Image */}
        {service.image && (
          <div className="h-48 w-full overflow-hidden bg-slate-100 relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-6">
          {/* H3 Headline */}
          <h3 className="text-lg font-bold text-[#0B192C] group-hover:text-[#0084F4] transition-colors leading-snug">
            {service.title}
          </h3>

          {/* Short description */}
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Card Action footer */}
      <div className="px-6 pb-6 pt-3 flex items-center justify-between gap-3 border-t border-slate-100">
        <button
          onClick={() => onSelect(service)}
          className="text-xs font-semibold text-slate-600 hover:text-[#0084F4] inline-flex items-center gap-1 py-1"
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

