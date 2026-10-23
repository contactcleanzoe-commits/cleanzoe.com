import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

interface MobileQuickBarProps {
  onOpenQuote: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenQuote }) => {
  return (
    <aside
      aria-label="Actions rapides mobiles"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#fcfdf6]/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 md:hidden shadow-lg"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${CLEANZOE_NAP.phone}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-[11px] font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded text-center whitespace-nowrap shrink-0 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#0084F4]" />
          <span>Appeler</span>
        </a>

        <a
          href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20un%20devis%20de%20nettoyage%20%C3%A0%20Marrakech.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-[11px] font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded text-center whitespace-nowrap shrink-0 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuote}
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-[11px] font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded text-center whitespace-nowrap shrink-0 transition-colors shadow-xs"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Devis</span>
        </button>
      </div>
    </aside>
  );
};
