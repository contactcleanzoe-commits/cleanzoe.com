import React, { useEffect } from 'react';
import {
  X,
  Phone,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenQuote: () => void;
  onOpenSeoAudit?: () => void;
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
  currentTab,
  onSelectTab,
  onOpenQuote,
}) => {
  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navigateTo = (targetId: string, tabName: string) => {
    onSelectTab(tabName);
    onClose();

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTimeout(() => {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const navLinks = [
    { id: 'accueil', targetId: 'top', label: 'Accueil' },
    { id: 'services', targetId: 'services-section', label: 'Services' },
    { id: 'about', targetId: 'about', label: 'À Propos' },
    { id: 'zones', targetId: 'zones', label: 'Pourquoi Nous' },
    { id: 'contact', targetId: 'contact', label: 'Contact' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu principal CleanZoe Mobile"
      className="fixed inset-0 z-[100] flex flex-col bg-[#fcfdf6] sm:bg-black/60 sm:items-center sm:justify-center animate-in fade-in duration-200"
    >
      {/* Backdrop tap to close on tablet/desktop */}
      <div
        className="hidden sm:block fixed inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Drawer Container - Full screen on mobile with zero top space/gap, modal card on desktop */}
      <div className="relative z-10 w-full h-full sm:h-auto sm:max-h-[88vh] sm:max-w-md mx-auto bg-[#fcfdf6] sm:rounded-3xl shadow-2xl flex flex-col sm:border border-stone-200 overflow-hidden">
        
        {/* Top Header Bar - Flush at top, no drag handle, no wasted space */}
        <div className="shrink-0 px-4 sm:px-5 py-3 border-b border-stone-200/80 bg-[#fcfdf6]">
          <div className="flex items-center justify-between">
            {/* Logo & Cleanzoe Brand Name */}
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/aistudio/logo_cleanzoe_transparent.webp"
                alt="Logo Cleanzoe Marrakech"
                className="w-10 h-10 object-contain"
                loading="lazy"
                decoding="async"
                width={40}
                height={40}
              />
              <span className="text-2xl font-black tracking-tight text-[#172126] leading-none">
                Cleanzoe
              </span>
            </div>

            {/* Quick Action Icons & Close Button */}
            <div className="flex items-center gap-2">
              {/* WhatsApp Square Icon Button */}
              <a
                href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20un%20renseignement%20ou%20un%20devis.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-stone-300 text-[#25D366] flex items-center justify-center hover:bg-stone-50 active:scale-95 transition-all shadow-xs"
                aria-label="Ouvrir WhatsApp direct"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-5 h-5 stroke-[2.2]" />
              </a>

              {/* Phone Square Icon Button */}
              <a
                href={`tel:${CLEANZOE_NAP.phone}`}
                className="w-10 h-10 rounded-xl bg-white border border-stone-300 text-[#172126] flex items-center justify-center hover:bg-stone-50 active:scale-95 transition-all shadow-xs"
                aria-label="Appeler directement CleanZoe"
                title="Appel direct"
              >
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </a>

              {/* Close Button X */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl text-[#172126] hover:bg-stone-200/60 active:scale-95 flex items-center justify-center transition-all focus:outline-none"
                aria-label="Fermer le menu"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 overscroll-contain bg-[#fcfdf6]">
          
          {/* SECTION: NAVIGATION LINKS */}
          <nav className="space-y-1">
            {navLinks.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.targetId, item.id)}
                  className={`w-full text-left transition-all ${
                    isActive
                      ? 'bg-[#172126] text-white font-bold py-3 px-4 rounded-xl shadow-xs'
                      : 'text-[#172126] hover:bg-stone-200/50 active:bg-stone-200/70 font-bold text-base py-2.5 px-4 rounded-xl'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Thin Divider */}
          <div className="border-t border-stone-300/80 my-2" />

          {/* SECTION: PRIMARY DIRECT CALL-TO-ACTIONS */}
          <div className="space-y-2.5">
            {/* 1. WhatsApp Direct Button (Matches Appel direct background and style) */}
            <a
              href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20un%20devis%20de%20nettoyage%20%C3%A0%20Marrakech.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-stone-50 text-[#172126] font-bold text-sm border border-stone-300 flex items-center justify-center gap-2.5 shadow-xs active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] stroke-[2.5]" />
              <span>WhatsApp Direct</span>
            </a>

            {/* 2. Appel direct Button */}
            <a
              href={`tel:${CLEANZOE_NAP.phone}`}
              className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-stone-50 text-[#172126] font-bold text-sm border border-stone-300 flex items-center justify-center gap-2.5 shadow-xs active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Appel direct : {CLEANZOE_NAP.phone}</span>
            </a>

            {/* 3. Devis Gratuit Button */}
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#fbd64a] hover:bg-[#fae066] text-[#172126] font-extrabold text-sm border border-[#e5be30] flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Demander un Devis Gratuit</span>
            </button>

            {/* 4. Social Media Icons (Facebook & Instagram directly under Demander un devis gratuit) */}
            <div className="pt-2 pb-6 flex items-center justify-center gap-3">
              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/profile.php?id=61595717915199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CleanZoe Marrakech"
                className="flex-1 py-3 px-4 rounded-xl bg-[#fbd64a] hover:bg-[#fae066] text-[#172126] font-bold text-xs border border-[#e5be30] flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all"
              >
                <div className="w-6 h-6 rounded-md bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span>Facebook</span>
              </a>

              {/* Instagram Button */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CleanZoe Marrakech"
                className="flex-1 py-3 px-4 rounded-xl bg-[#fbd64a] hover:bg-[#fae066] text-[#172126] font-bold text-xs border border-[#e5be30] flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all"
              >
                <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>Instagram</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
