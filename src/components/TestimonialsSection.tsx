import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Yassine E.',
      role: 'Propriétaire de Riad & Hôte Airbnb',
      location: 'Médina · Marrakech',
      service: 'Ménage Airbnb & Rotation de linge',
      feedback:
        'Équipe ponctuelle et méticuleuse entre chaque séjour. Le linge est impeccable et nos notes de propreté sur Airbnb restent à 5/5.',
    },
    {
      name: 'Nadia B.',
      role: 'Propriétaire de villa',
      location: 'Palmeraie · Marrakech',
      service: 'Cristallisation du marbre & Baies vitrées',
      feedback:
        'Le marbre de notre séjour a retrouvé un véritable brillant miroir sans micro-rayures. Équipe très discrète et outillée avec de vraies monobrosses.',
    },
    {
      name: 'Mehdi L.',
      role: 'Gérant d’agence conseil',
      location: 'Hivernage · Marrakech',
      service: 'Entretien régulier de bureaux',
      feedback:
        'Contrat régulier respecté avec rigueur. Nos espaces de travail et salles de réunion sont impeccables dès 8h sans jamais perturber nos équipes.',
    },
  ];

  return (
    <section id="avis-clients" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0084F4] mb-2">
            <span>Retours d'expérience</span>
            <span className="text-slate-300">/</span>
            <span>Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Ce que disent nos clients à Marrakech
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Propriétaires de villas, hôtes Airbnb et gestionnaires d'entreprises témoignent de la rigueur de nos interventions.
          </p>
        </div>

        {/* 3 Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-smooth"
            >
              <div>
                {/* Clean quote mark */}
                <div className="w-8 h-8 rounded bg-[#fbd64a]/30 text-[#0B192C] flex items-center justify-center mb-5">
                  <Quote className="w-4 h-4" />
                </div>

                {/* Feedback quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  « {item.feedback} »
                </p>
              </div>

              {/* Client & Service Info */}
              <div className="mt-6 pt-5 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0B192C]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Vérifié</span>
                  </div>
                </div>

                {/* Metadata strip */}
                <div className="mt-3 text-[11px] text-slate-500 flex items-center gap-2">
                  <span className="font-medium text-[#0084F4]">{item.service}</span>
                  <span>·</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
