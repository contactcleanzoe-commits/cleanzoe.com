import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Sparkles,
  Award,
  Check,
  X,
  Clock,
  ArrowRight,
  MessageCircle,
  Home,
  Key,
  Building2,
  Hammer,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

type ClientCategory = 'villas' | 'airbnb' | 'bureaux' | 'chantier';

export const ServiceAreaSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>('villas');

  const categoriesData: Record<
    ClientCategory,
    {
      label: string;
      icon: React.ReactNode;
      title: string;
      context: string;
      challenge: string;
      solution: string;
      equipment: string;
      delai: string;
      whatsappMessage: string;
    }
  > = {
    villas: {
      label: 'Villas & Riads',
      icon: <Home className="w-4 h-4" />,
      title: 'Nettoyage Haute Exigence pour Propriétés & Riads',
      context: 'Palmeraie, Targa, Hivernage, Amelkis, Route de l\'Ourika',
      challenge: 'Poussières désertiques récurrentes, entretien délicat du marbre, zelliges, grandes baies vitrées et mobilier haut de gamme.',
      solution: 'Nos équipes interviennent avec des monobrosses lustrantes, perches télescopiques et microfibres professionnelles. Rigueur hôtelière et discrétion absolue.',
      equipment: 'Monobrosse rotative pour marbre, injecteur-extracteur textiles, perches vitres jusqu\'à 9 mètres.',
      delai: 'Intervention planifiée sous 24h à 48h ou formule d\'entretien régulier.',
      whatsappMessage: 'Bonjour CleanZoe, je souhaite un devis pour le nettoyage de ma villa / riad à Marrakech.'
    },
    airbnb: {
      label: 'Conciergeries & Airbnb',
      icon: <Key className="w-4 h-4" />,
      title: 'Rotation Express & Standard 5 Étoiles Airbnb',
      context: 'Médina, Guéliz, Hivernage, Agdal, Palmeraie',
      challenge: 'Créneaux très serrés entre le check-out (11h) et le check-in (15h), exigence d\'une note propreté maximale sur les plateformes.',
      solution: 'Équipes dédiées aux meublés de tourisme. Ménage complet, désinfection, changement du linge, réassort des consommables et rapport photo WhatsApp après chaque départ.',
      equipment: 'Vapeur assainissante 160°C, aspirateurs anti-acariens, kits de bienvenue et détergents certifiés.',
      delai: 'Disponibilité 7j/7 avec intervention d\'urgence en 2 heures.',
      whatsappMessage: 'Bonjour CleanZoe, j\'ai besoin d\'un service de nettoyage pour un appartement / riad Airbnb à Marrakech.'
    },
    bureaux: {
      label: 'Bureaux & Commerces',
      icon: <Building2 className="w-4 h-4" />,
      title: 'Entretien Corporatif & Espaces Professionnels',
      context: 'Guéliz, Quartier Industriel Sidi Ghanem, Victor Hugo, Hivernage',
      challenge: 'Nécessité d\'un environnement sain sans perturber le travail des collaborateurs ni l\'accueil des clients.',
      solution: 'Horaires décalés flexibles (tôt le matin ou après la fermeture). Dépoussiérage informatique, assainissement des sanitaires et lustrage des sols d\'accueil.',
      equipment: 'Produits bactéricides normés, aspirateurs silencieux classe A, cires protectrices pour sols.',
      delai: 'Contrat mensuel sans engagement ou intervention de remise à neuf ponctuelle.',
      whatsappMessage: 'Bonjour CleanZoe, je cherche une société de nettoyage sérieuse pour nos bureaux / locaux à Marrakech.'
    },
    chantier: {
      label: 'Fin de Chantier',
      icon: <Hammer className="w-4 h-4" />,
      title: 'Remise à Neuf Après Travaux & Rénovations',
      context: 'Tout Marrakech et périphérie (Résidences neuves, réhabilitations)',
      challenge: 'Pellicules tenaces de plâtre, voile de ciment sur carrelage, éclaboussures de peinture et résidus de colle.',
      solution: 'Décapage mécanique en profondeur. Grattage sécurisé des vitrages, aspiration industrielle des micro-poussières et désinfection intégrale avant emménagement.',
      equipment: 'Aspirateurs industriels eau et poussière, monobrosses décapantes, produits neutralisants de ciment.',
      delai: 'Visite préalable gratuite et intervention possible sous 24h.',
      whatsappMessage: 'Bonjour CleanZoe, je souhaite un devis pour un nettoyage de fin de chantier / après travaux à Marrakech.'
    }
  };

  const activeData = categoriesData[activeCategory];

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
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0084F4] mb-2">
            <span>Pourquoi CleanZoe</span>
            <span className="text-slate-300">/</span>
            <span>Excellence &amp; Garanties</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight text-balance">
            Pourquoi choisir CleanZoe pour votre nettoyage à Marrakech ?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
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
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Segmented Switcher by Profile */}
        <div className="rounded-xl bg-[#FAFAFA] border border-slate-200 p-6 sm:p-8 lg:p-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0084F4] block mb-1">
                Solutions sur mesure
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B192C]">
                Une méthodologie adaptée à la réalité de votre espace
              </h3>
            </div>
            
            {/* Segmented Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-slate-200">
              {(Object.keys(categoriesData) as ClientCategory[]).map((key) => {
                const cat = categoriesData[key];
                const isActive = activeCategory === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md transition-smooth whitespace-nowrap ${
                      isActive
                        ? 'bg-[#0B192C] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Detailed Showcase Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-[#0084F4]" />
                <span>Secteurs fréquents : {activeData.context}</span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-[#0B192C]">
                {activeData.title}
              </h4>

              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3 rounded bg-amber-50/60 border border-amber-200/60 text-slate-700">
                  <span className="font-bold text-amber-900 block mb-0.5">Le défi à Marrakech :</span>
                  {activeData.challenge}
                </div>

                <div className="p-3 rounded bg-blue-50/60 border border-blue-200/60 text-slate-700">
                  <span className="font-bold text-blue-900 block mb-0.5">L'intervention CleanZoe :</span>
                  {activeData.solution}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">Équipement mobilisé :</span>
                  <span className="text-slate-600">{activeData.equipment}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Délai d'intervention :</span>
                  <span className="text-slate-600">{activeData.delai}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 bg-[#FAFAFA] rounded-lg p-6 border border-slate-200 flex flex-col justify-between h-full space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Besoin d'une estimation ?
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  Obtenez votre tarif personnalisé pour votre profil en nous envoyant un message direct.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href={`https://wa.me/212664696470?text=${encodeURIComponent(activeData.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded-lg transition-smooth shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#0B192C]" />
                  <span>Devis express sur WhatsApp</span>
                </a>
                <a
                  href="tel:0664696470"
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-smooth"
                >
                  <span>Ou appelez le 06 64 69 64 70</span>
                </a>
              </div>
            </div>
          </div>
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
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
