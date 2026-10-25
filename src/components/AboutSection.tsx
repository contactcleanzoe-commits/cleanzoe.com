import React from 'react';
import { ShieldCheck, Sparkles, Award, Users, CheckCircle } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto mb-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-medium text-[#0084F4] mb-2">
            <span>Identité &amp; Engagements</span>
            <span className="text-slate-300">/</span>
            <span>CleanZoe Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight text-balance">
            Une société de nettoyage exigeante au service de Marrakech
          </h2>
          <p className="mt-3 text-base text-[#172126] leading-relaxed max-w-2xl mx-auto">
            Née à Marrakech, CleanZoe s'est construite sur une idée simple : offrir un service de nettoyage méticuleux, transparent et ponctuel, aussi bien pour les demeures de charme que pour les entreprises locales.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-lg bg-[#FAFAFA] border border-slate-200">
            <div className="w-10 h-10 rounded bg-[#0084F4]/10 text-[#0084F4] flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B192C] mb-2">
              Personnel qualifié & stable
            </h3>
            <p className="text-xs text-[#172126] leading-relaxed">
              Tous nos agents sont formés aux protocoles d'hygiène, au maniement des machines professionnelles et aux règles strictes de discrétion chez nos clients.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAFAFA] border border-slate-200">
            <div className="w-10 h-10 rounded bg-[#F5B82E]/20 text-[#0B192C] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B192C] mb-2">
              Équipement de pointe
            </h3>
            <p className="text-xs text-[#172126] leading-relaxed">
              Monobrosses pour cristallisation du marbre, injecteurs-extracteurs pour tapis et fauteuils, nettoyeurs haute pression et perches télescopiques pour vitres.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAFAFA] border border-slate-200">
            <div className="w-10 h-10 rounded bg-[#0B192C] text-white flex items-center justify-center mb-4">
              <CheckCircle className="w-5 h-5 text-[#0084F4]" />
            </div>
            <h3 className="text-base font-bold text-[#0B192C] mb-2">
              Engagement de résultat
            </h3>
            <p className="text-xs text-[#172126] leading-relaxed">
              Chaque intervention fait l'objet d'un contrôle rigoureux. En cas de remarque justifiée, notre équipe intervient à nouveau sans surcoût.
            </p>
          </div>

        </div>

        {/* Local Anchor Notice */}
        <div className="mt-12 p-6 rounded-lg bg-[#0B192C] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white">
              Une question ou un besoin spécifique à Marrakech ?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Notre équipe vous répond directement au téléphone ou par message.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLEANZOE_NAP.phone}`}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-smooth shadow-xs"
            >
              06 64 69 64 70
            </a>
            <a
              href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20des%20informations%20sur%20vos%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-bold tracking-wide text-white bg-[#0084F4] hover:bg-sky-600 rounded transition-smooth"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
