import React from 'react';
import { Home, Sparkles, Calculator, MessageSquare, Menu, X } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

interface MobileQuickBarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenQuote: () => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  currentTab,
  onSelectTab,
  onOpenQuote,
  isMenuOpen,
  onToggleMenu,
}) => {
  return (
    <nav
      aria-label="Barre de menu mobile Cleanzoe"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#fcfdf6]/95 backdrop-blur-lg border-t border-stone-200/80 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center gap-1 text-center">
        
        {/* 1. Accueil */}
        <button
          onClick={() => {
            onSelectTab('accueil');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors ${
            currentTab === 'accueil' && !isMenuOpen
              ? 'text-[#0483dd] font-bold'
              : 'text-[#172126] hover:text-[#0483dd]'
          }`}
          aria-label="Aller à l'accueil"
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight leading-tight">Accueil</span>
        </button>

        {/* 2. Services */}
        <button
          onClick={() => {
            onSelectTab('services');
            document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors ${
            currentTab === 'services' && !isMenuOpen
              ? 'text-[#0483dd] font-bold'
              : 'text-[#172126] hover:text-[#0483dd]'
          }`}
          aria-label="Voir les services"
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight leading-tight">Services</span>
        </button>

        {/* 3. Center CTA: Devis Express */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center -mt-3 py-1.5 px-1 bg-[#fbd64a] hover:bg-[#f5c72b] text-[#0B192C] font-extrabold rounded-xl shadow-md active:scale-95 transition-all border-2 border-[#fcfdf6]"
          aria-label="Demander un devis"
        >
          <Calculator className="w-4 h-4 mb-0.5 text-[#0B192C]" />
          <span className="text-[10px] uppercase font-black tracking-wide leading-tight">Devis</span>
        </button>

        {/* 4. WhatsApp Direct */}
        <a
          href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20un%20devis%20de%20nettoyage%20%C3%A0%20Marrakech.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 text-emerald-700 hover:text-emerald-800 rounded-lg transition-colors"
          aria-label="Contacter sur WhatsApp"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-emerald-600" />
          <span className="text-[10px] font-semibold tracking-tight leading-tight">WhatsApp</span>
        </a>

        {/* 5. Menu complet */}
        <button
          onClick={onToggleMenu}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-colors ${
            isMenuOpen
              ? 'text-[#0483dd] font-bold bg-blue-50'
              : 'text-[#172126] hover:text-[#0483dd]'
          }`}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir la barre de menu'}
        >
          {isMenuOpen ? (
            <X className="w-4 h-4 mb-0.5 text-[#0483dd]" />
          ) : (
            <Menu className="w-4 h-4 mb-0.5" />
          )}
          <span className="text-[10px] tracking-tight leading-tight">Menu</span>
        </button>

      </div>
    </nav>
  );
};
