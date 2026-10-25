import React from 'react';
import {
  Sparkles,
  Check,
  X,
  MapPin,
  MessageCircle
} from 'lucide-react';

export const ServiceAreaSection: React.FC = () => {
  const guarantees = [
    {
      num: '01',
      title: 'Garantie Satisfaction 100%',
      desc: 'Chaque intervention se conclut par un contrôle minutieux avec vous. Si le moindre détail ne vous convient pas, nous réintervenons gratuitement sous 24h.',
      badge: 'Zéro risque'
    },
    {
      num: '02',
      title: 'Devis WhatsApp en 15 min',
      desc: 'Envoyez-nous vos photos ou dimensions par WhatsApp. Nous vous transmettons un tarif clair, fixe et sans mauvaise surprise immédiatement.',
      badge: 'Réactivité éclair'
    },
    {
      num: '03',
      title: 'Matériel Kärcher & Produits Éco',
      desc: 'Monobrosses, injecteurs-extracteurs industriels et formules biodégradables. Une puissance de nettoyage maximale qui protège vos marbres et vos proches.',
      badge: 'Normes pro'
    },
    {
      num: '04',
      title: 'Personnel Vérifié & Discret',
      desc: 'Tous nos techniciens sont déclarés, équipés de tenues professionnelles et formés au respect scrupuleux de votre intimité et de vos biens.',
      badge: 'Confiance totale'
    }
  ];

  const comparisonItems = [
    {
      critere: 'Équipement de travail',
      other: 'Matériel ménager basique ou balais manuels',
      cleanzoe: 'Machines industrielles Kärcher, Nilfisk & monobrosses'
    },
    {
      critere: 'Contrôle & Engagement',
      other: 'Aucun engagement formel, résultats inconstants',
      cleanzoe: 'Check-list 25 points de contrôle + ré-intervention offerte'
    },
    {
      critere: 'Disponibilité & Ponctualité',
      other: 'Retards fréquents, indisponibilité le week-end',
      cleanzoe: 'Ponctualité stricte, interventions 7j/7 pour urgences & Airbnb'
    },
    {
      critere: 'Tarification',
      other: 'Prix à la tête du client, suppléments imprévus',
      cleanzoe: 'Devis écrit clair, transparent et sans surcoût caché'
    }
  ];

  const marrakechDistricts = [
    'Guéliz',
    'Hivernage',
    'Palmeraie',
    'Médina & Riad',
    'Targa',
    'Agdal',
    'Victor Hugo',
    'M\'hamid',
    'Route de Fès',
    'Route de l\'Ourika',
    'Route d\'Amizmiz',
    'Sidi Ghanem'
  ];

  return (
    <section id="zones" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-medium text-[#0084F4] mb-2">
            <span>Pourquoi CleanZoe</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight text-balance">
            Pourquoi choisir CleanZoe pour votre nettoyage à Marrakech ?
          </h2>
          <p className="mt-3 text-base text-[#172126] leading-relaxed max-w-2xl mx-auto">
            Nous avons éliminé les aléas du nettoyage traditionnel pour vous offrir une prestation de niveau hôtelier : du matériel industriel, des agents méticuleux et un respect absolu de votre calendrier.
          </p>
        </div>

        {/* 4 Pillars of Excellence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#FAFAFA] border border-slate-200 hover:border-slate-300 transition-smooth flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-[#0084F4] tabular-nums">
                    {item.num}.
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0B192C] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#172126] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-Side Comparison: Nettoyage Informel vs CleanZoe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0084F4]">
              Transparence &amp; Rigueur
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B192C] tracking-tight">
              La différence entre un simple ménage et l'exigence CleanZoe
            </h3>
            <p className="text-xs sm:text-sm text-[#172126] leading-relaxed">
              À Marrakech, confier ses clés demande une confiance absolue. Nous appliquons des protocoles d'hygiène stricts et une organisation sans faille pour préserver la valeur de votre patrimoine immobilier.
            </p>
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs">
              <span className="font-bold block mb-1">Notre engagement contractuel :</span>
              Tout dommage accidentel ou prestation non conforme est pris en charge immédiatement par notre protocole assurance &amp; qualité.
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <div className="grid grid-cols-12 bg-[#0B192C] text-white p-3.5 text-xs font-bold">
              <div className="col-span-4">Critère de qualité</div>
              <div className="col-span-4 text-slate-300">Prestataire classique</div>
              <div className="col-span-4 text-[#fbd64a] font-extrabold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CleanZoe Marrakech</span>
              </div>
            </div>
            <div className="divide-y divide-slate-100 text-xs">
              {comparisonItems.map((comp, idx) => (
                <div key={idx} className="grid grid-cols-12 p-3.5 items-center hover:bg-slate-50/80 transition-smooth">
                  <div className="col-span-4 font-semibold text-slate-900 pr-2">
                    {comp.critere}
                  </div>
                  <div className="col-span-4 text-slate-500 pr-2 flex items-start gap-1.5">
                    <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{comp.other}</span>
                  </div>
                  <div className="col-span-4 text-slate-900 font-medium flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{comp.cleanzoe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage Banner (Modern replacement of the boring list) */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#0B192C] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#fbd64a]">
              <MapPin className="w-4 h-4" />
              <span>Couverture Mobile Rapide · Marrakech &amp; Périphérie</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold">
              Nos équipes se déplacent quotidiennement dans tous les quartiers
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {marrakechDistricts.join(' · ')} et dans les villas isolées sur les axes principaux.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/212664696470?text=Bonjour%20CleanZoe,%20intervenez-vous%20aujourd'hui%20dans%20mon%20quartier%20?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded-lg transition-smooth shadow-xs flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Vérifier la disponibilité</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
