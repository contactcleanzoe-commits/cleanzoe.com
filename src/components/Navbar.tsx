import React from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenQuote: () => void;
  onOpenSeoAudit: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenQuote,
  onOpenSeoAudit,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À Propos' },
    { id: 'zones', label: 'Pourquoi CleanZoe' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    if (id === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const elem = document.getElementById(
        id === 'services' ? 'services-section' : id === 'about' ? 'about' : id === 'zones' ? 'zones' : 'contact'
      );
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fcfdf6]/95 backdrop-blur-md border-b border-stone-200/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] sm:h-[71px] gap-4">
          
          {/* Zone 1: Brand Wordmark with transparent logo */}
          <button
            onClick={() => handleNavClick('accueil')}
            className="flex items-center gap-2.5 sm:gap-3 whitespace-nowrap shrink-0 group text-left focus:outline-none"
            aria-label="CleanZoe Marrakech Accueil"
          >
            <img
              src="/assets/aistudio/logo_cleanzoe_transparent.webp"
              alt="Logo CleanZoe Nettoyage Marrakech"
              className="object-contain w-[41px] h-[42px] sm:w-[60px] sm:h-[52px]"
              loading="eager"
              decoding="async"
              width={60}
              height={52}
            />
            <div className="flex flex-col justify-center">
              <span className="text-[19px] sm:text-2xl font-extrabold tracking-tight leading-none">
                <span className="text-[#172126]">Clean</span>
                <span className="text-[#0084F4]">zoe</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-tight -mt-[2px]">
                on nettoie, vous respirez
              </span>
            </div>
          </button>

          {/* Zone 2: Desktop Navigation Links (single-line, clean text) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#172126]">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#0483dd] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0084F4] ${
                    isActive ? 'text-[#172126] font-bold' : 'text-[#172126]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0084F4]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Desktop Actions (No Facebook icon here) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLEANZOE_NAP.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#172126] hover:text-[#0084F4] transition-colors py-2 px-3 rounded border border-slate-200 bg-white/70"
              title="Appeler CleanZoe Marrakech"
            >
              <Phone className="w-3.5 h-3.5 text-[#0084F4]" />
              <span className="tabular-nums text-[#172126]">06 64 69 64 70</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-all whitespace-nowrap shrink-0 shadow-sm hover:shadow"
            >
              <span>Devis Express</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Top Header Actions (No Facebook icon) */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${CLEANZOE_NAP.phone}`}
              className="p-2 text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Appeler CleanZoe"
              title="Appeler CleanZoe"
            >
              <Phone className="w-4 h-4 text-[#0084F4]" />
            </a>

            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-bold uppercase text-[#0B192C] bg-[#fbd64a] rounded shadow-xs active:scale-95 transition-transform"
            >
              Devis
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
