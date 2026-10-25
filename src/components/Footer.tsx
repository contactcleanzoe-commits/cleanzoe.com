import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';
import { LegalNoticeModal } from './LegalNoticeModal';

interface FooterProps {
  onSelectNav?: (tab: string) => void;
  onOpenSeoAudit?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <footer className="bg-[#fbd64a] text-[#172126] border-t border-amber-300 -mt-[5px] pt-[12px] pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-amber-300/80 text-xs">
          
          {/* Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/logo_cleanzoe_transparent.webp"
                alt="CleanZoe Logo"
                className="h-11 w-auto object-contain"
                loading="lazy"
                decoding="async"
                width={44}
                height={44}
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight leading-none">
                  <span className="text-[#172126]">Clean</span>
                  <span className="text-[#0084F4]">zoe</span>
                </span>
                <span className="text-[11px] font-medium text-[#172126]/75 tracking-tight mt-1">
                  on nettoie, vous respirez
                </span>
              </div>
            </div>
            <p className="text-[#172126] leading-relaxed text-[12px] max-w-sm">
              Spécialiste du nettoyage professionnel et de l'entretien soigné à Marrakech. Particuliers, villas, bureaux, conciergeries Airbnb et fin de chantier.
            </p>
          </div>

          {/* Coordonnées & Siège Marrakech (Replaces Prestations list) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B192C] block">
              Coordonnées &amp; Siège Marrakech
            </span>
            <div className="space-y-3 pt-1 text-xs">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/80 border border-amber-200/90 text-[#172126] shadow-xs">
                <MapPin className="w-4 h-4 text-[#0084F4] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0B192C] block">Adresse :</span>
                  <span>Dior Atlas Meuble N24 Mhamid, Marrakech, Maroc</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-amber-200/90 text-[#172126] shadow-xs">
                <Phone className="w-4 h-4 text-[#0084F4] shrink-0" />
                <div>
                  <span className="font-bold text-[#0B192C] block">Téléphone direct :</span>
                  <a href="tel:0664696470" className="hover:text-[#0084F4] text-[#0B192C] font-bold tabular-nums">
                    +212 6 64 69 64 70
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/80 border border-amber-200/90 text-[#172126] shadow-xs">
                <Mail className="w-4 h-4 text-[#0084F4] shrink-0" />
                <div>
                  <span className="font-bold text-[#0B192C] block">Email professionnel :</span>
                  <a href="mailto:cleanzoeservice@gmail.com" className="hover:text-[#0084F4] text-[#172126] font-medium">
                    cleanzoeservice@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux Sociaux (Disposés verticalement) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B192C] block">
              Réseaux Sociaux
            </span>
            <p className="text-[#172126] text-xs leading-relaxed">
              Suivez nos interventions et chantiers à Marrakech :
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href={CLEANZOE_NAP.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded-lg bg-white/80 hover:bg-[#1877F2] text-[#172126] hover:text-white border border-amber-200/90 transition-colors shadow-xs group"
                aria-label="Facebook CleanZoe Marrakech"
                title="Page Facebook CleanZoe Marrakech"
              >
                <Facebook className="w-4 h-4 text-[#0084F4] group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold">Page Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded-lg bg-white/80 hover:bg-[#E4405F] text-[#172126] hover:text-white border border-amber-200/90 transition-colors shadow-xs group"
                aria-label="Instagram Cleanzoe"
                title="Instagram Cleanzoe"
              >
                <Instagram className="w-4 h-4 text-[#0084F4] group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold">Instagram</span>
              </a>

              <a
                href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20un%20devis.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded-lg bg-white/80 hover:bg-[#25D366] text-[#172126] hover:text-white border border-amber-200/90 transition-colors shadow-xs group"
                aria-label="WhatsApp Cleanzoe"
                title="WhatsApp Cleanzoe"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#172126]/80 font-medium">
          <div>
            © {new Date().getFullYear()} Cleanzoe Marrakech. Tous droits réservés. (Phase 1)
          </div>
          <div>
            <button
              onClick={() => setLegalOpen(true)}
              className="text-[#0B192C] hover:text-[#0084F4] transition-colors underline underline-offset-4 font-semibold"
            >
              Mentions Légales
            </button>
          </div>
        </div>

      </div>

      {/* Mentions Légales Popup Modal */}
      <LegalNoticeModal
        isOpen={legalOpen}
        onClose={() => setLegalOpen(false)}
      />
    </footer>
  );
};
