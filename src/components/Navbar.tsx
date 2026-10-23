import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenQuote: () => void;
  onOpenSeoAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenQuote,
  onOpenSeoAudit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fcfdf6] backdrop-blur-md border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between gap-8"
          style={{
            height: '71px',
            width: '1092.77px',
            maxWidth: '100%',
            marginLeft: '-7px',
            marginRight: '-4px',
            marginTop: '0px',
            marginBottom: '-1px',
            paddingLeft: '0px',
            paddingBottom: '0px',
          }}
        >
          
          {/* Zone 1: Brand Wordmark with transparent logo, no frame, no background */}
          <button
            onClick={() => handleNavClick('accueil')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group text-left focus:outline-none"
          >
            <img
              src="/assets/aistudio/logo_cleanzoe_transparent.png"
              alt="Logo CleanZoe Nettoyage Marrakech"
              className="object-contain"
              style={{
                width: '63.7461px',
                height: '54.9766px',
                paddingTop: '2px',
                marginLeft: '6px',
                marginTop: '-1px',
                paddingLeft: '2px',
                marginRight: '-5px',
                marginBottom: '-2px',
              }}
              loading="eager"
            />
            <div className="flex flex-col">
              <span
                className="text-2xl font-extrabold tracking-tight text-[#0B192C] leading-none"
                style={{
                  marginLeft: '-1px',
                  paddingLeft: '0px',
                  marginTop: '20px',
                  marginRight: '12px',
                  width: '126.656px',
                  height: '21.9844px',
                  display: 'inline-block',
                }}
              >
                Clean<span className="text-[#0084F4]">zoe</span>
              </span>
              <span
                className="text-[11px] font-medium text-slate-500 tracking-tight"
                style={{
                  paddingLeft: '0px',
                  marginRight: '4px',
                  marginLeft: '1px',
                  marginBottom: '13px',
                  height: '12.4844px',
                  width: '129.656px',
                  display: 'inline-block',
                }}
              >
                on nettoie, vous respirez
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (single-line, clean text) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#0B192C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0084F4] ${
                    isActive ? 'text-[#0B192C] font-semibold' : ''
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

          {/* Zone 3: Primary Action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${CLEANZOE_NAP.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0084F4] transition-colors py-2 px-3 rounded border border-slate-200"
              title="Appeler CleanZoe Marrakech"
            >
              <Phone className="w-3.5 h-3.5 text-[#0084F4]" />
              <span className="tabular-nums">06 64 69 64 70</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-smooth whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Devis Express</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-bold uppercase text-[#0B192C] bg-[#fbd64a] rounded shadow-xs"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Ouvrir le menu de navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#fcfdf6] px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2 px-3 text-sm font-medium rounded ${
                currentTab === link.id
                  ? 'bg-slate-100 text-[#0B192C] font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${CLEANZOE_NAP.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded"
            >
              <Phone className="w-4 h-4 text-[#0084F4]" />
              <span>Appeler le 06 64 69 64 70</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeoAudit();
              }}
              className="text-xs text-left text-slate-400 py-1"
            >
              Rapport SEO & Fiche Google Business
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
