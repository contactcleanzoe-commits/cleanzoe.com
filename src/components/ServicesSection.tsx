import React from 'react';
import { SERVICES_LIST, CleaningServiceItem } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  onSelectService: (service: CleaningServiceItem) => void;
  onOpenQuoteWithService: (service: CleaningServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuoteWithService,
}) => {
  return (
    <section id="services-section" className="py-16 sm:py-24 bg-[#fbd64a] border-b border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-2">
            <span>Prestations certifiées</span>
            <span className="text-[#0B192C]/40">/</span>
            <span>Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight text-balance">
            Services de nettoyage professionnel à Marrakech
          </h2>
          <p className="mt-3 text-base text-[#0B192C]/85 leading-relaxed font-medium max-w-2xl mx-auto">
            Interventions sur mesure pour villas, appartements, locaux d'entreprises et hébergements touristiques. Aucun compromis sur la rigueur et l'hygiène.
          </p>
        </div>

        {/* Category Indicator: Toutes les prestations */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold rounded bg-[#0B192C] text-white border border-[#0B192C] shadow-sm uppercase tracking-wider">
            <span>Toutes les prestations ({SERVICES_LIST.length})</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
              onDirectQuote={onOpenQuoteWithService}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
