import React from 'react';
import { ArrowRight, FileText, CalendarCheck, Sparkles, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnostic & Devis rapide',
      desc: 'Évaluation claire de vos besoins par téléphone, WhatsApp ou visite sur site. Devis détaillé sans engagement en moins de 30 minutes.',
    },
    {
      step: '02',
      title: 'Planification sur mesure',
      desc: 'Choix de la date et du créneau horaire adapté à votre rythme de vie ou aux heures creuses de votre entreprise à Marrakech.',
    },
    {
      step: '03',
      title: 'Intervention experte outillée',
      desc: 'Arrivée de nos techniciens avec tout le matériel pro (monobrosses, injecteurs, perches) et produits écologiques certifiés.',
    },
    {
      step: '04',
      title: 'Contrôle qualité & validation',
      desc: 'Vérification point par point avec vous ou rapport photo pour les propriétaires Airbnb avant toute validation définitive.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#fbd64a] border-b border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-2">
            <span>Méthode de travail</span>
            <span className="text-[#0B192C]/40">/</span>
            <span>Cleanzoe Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Comment se déroule votre intervention ?
          </h2>
          <p className="mt-3 text-base text-[#0B192C]/85 leading-relaxed font-medium">
            Un processus transparent, rigoureux et sans mauvaise surprise du premier contact jusqu'au contrôle final de propreté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-lg bg-white border border-black/10 shadow-sm hover:shadow-md transition-smooth flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-extrabold text-[#0084F4] tracking-tight block mb-4 tabular-nums">
                  {item.step}.
                </span>
                <h3 className="text-base font-bold text-[#0B192C] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>Étape {idx + 1} sur 4</span>
                <span className="w-2 h-2 rounded-full bg-[#0084F4]/40" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
