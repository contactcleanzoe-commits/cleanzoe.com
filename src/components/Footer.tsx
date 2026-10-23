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
    <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800 pb-16 md:pb-8 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 text-xs">
          
          {/* Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/logo_cleanzoe_light.png"
                alt="CleanZoe Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Clean<span className="text-[#0084F4]">zoe</span>
                </span>
                <span className="text-[11px] font-medium text-slate-400 tracking-tight mt-1">
                  on nettoie, vous respirez
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Entreprise spécialisée dans le nettoyage professionnel et l'entretien soigné à Marrakech. Particuliers, villas, bureaux, conciergeries Airbnb et fin de chantier.
            </p>
            <p className="text-slate-400 text-xs">
              Disponible du lundi au samedi de 08h à 19h (7j/7 pour les urgences Airbnb).
            </p>
          </div>

          {/* Coordonnées & Siège Marrakech (Replaces Prestations list) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B82E] block">
              Coordonnées &amp; Siège Marrakech
            </span>
            <div className="space-y-3 pt-1 text-xs">
              <div className="flex items-start gap-3 p-3 rounded bg-white/5 border border-white/10 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0084F4] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Adresse :</span>
                  <span>Dior Atlas Meuble N24 Mhamid, Marrakech, Maroc</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 text-slate-300">
                <Phone className="w-4 h-4 text-[#0084F4] shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Téléphone direct :</span>
                  <a href="tel:0664696470" className="hover:text-[#F5B82E] text-white font-semibold tabular-nums">
                    +212 6 64 69 64 70
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 text-slate-300">
                <Mail className="w-4 h-4 text-[#0084F4] shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Email professionnel :</span>
                  <a href="mailto:cleanzoeservice@gmail.com" className="hover:text-white text-slate-300">
                    cleanzoeservice@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux Sociaux (Disposés verticalement) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B82E] block">
              Réseaux Sociaux
            </span>
            <p className="text-slate-400 text-xs leading-relaxed">
              Suivez nos interventions et chantiers à Marrakech :
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-white/10 transition-colors shadow-sm group"
                aria-label="Facebook Cleanzoe"
                title="Facebook Cleanzoe"
              >
                <Facebook className="w-4 h-4 text-[#0084F4] group-hover:text-white transition-colors" />
                <span className="text-xs font-medium">Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded bg-white/5 hover:bg-[#E4405F] text-slate-300 hover:text-white border border-white/10 transition-colors shadow-sm group"
                aria-label="Instagram Cleanzoe"
                title="Instagram Cleanzoe"
              >
                <Instagram className="w-4 h-4 text-[#0084F4] group-hover:text-white transition-colors" />
                <span className="text-xs font-medium">Instagram</span>
              </a>

              <a
                href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20un%20devis.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded bg-white/5 hover:bg-[#25D366] text-slate-300 hover:text-white border border-white/10 transition-colors shadow-sm group"
                aria-label="WhatsApp Cleanzoe"
                title="WhatsApp Cleanzoe"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-medium">WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Cleanzoe Marrakech. Tous droits réservés. (Phase 1)
          </div>
          <div>
            <button
              onClick={() => setLegalOpen(true)}
              className="text-slate-400 hover:text-white transition-colors underline underline-offset-4"
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
