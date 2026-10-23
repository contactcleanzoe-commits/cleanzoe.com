import React, { useState } from 'react';
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
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les prestations (12)' },
    { id: 'residentiel', label: 'Particuliers & Résidences' },
    { id: 'professionnel', label: 'Bureaux & Copropriétés' },
    { id: 'airbnb', label: 'Airbnb & Conciergerie' },
    { id: 'specifique', label: 'Sols, Vitres & Traitements' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-[#fbd64a] border-b border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-2">
            <span>Prestations certifiées</span>
            <span className="text-[#0B192C]/40">/</span>
            <span>Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight text-balance">
            Services de nettoyage professionnel à Marrakech
          </h2>
          <p className="mt-3 text-base text-[#0B192C]/85 leading-relaxed font-medium">
            Interventions sur mesure pour villas, appartements, locaux d'entreprises et hébergements touristiques. Aucun compromis sur la rigueur et l'hygiène.
          </p>
        </div>

        {/* Interactive Filter Controls (functional buttons, not pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded transition-smooth whitespace-nowrap shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-sm'
                  : 'bg-white/90 text-[#0B192C] border-black/10 hover:bg-white shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
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
