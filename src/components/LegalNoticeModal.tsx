import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { CLEANZOE_NAP } from '../data/servicesData';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#0084F4]" />
            <h3 id="legal-title" className="text-lg font-bold text-[#0B192C]">
              Mentions Légales &amp; Confidentialité
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-200 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700 leading-relaxed">
          
          <div>
            <h4 className="font-bold text-sm text-[#0B192C] mb-1">
              1. Éditeur du site
            </h4>
            <p>
              Le site web <strong>Cleanzoe</strong> est édité par l'entreprise de nettoyage professionnel <strong>Cleanzoe</strong>, basée à Marrakech, Maroc.
            </p>
            <ul className="mt-2 space-y-1 text-slate-600 pl-4 list-disc">
              <li><strong>Siège social :</strong> {CLEANZOE_NAP.address}</li>
              <li><strong>Téléphone :</strong> {CLEANZOE_NAP.formattedPhone}</li>
              <li><strong>Email :</strong> {CLEANZOE_NAP.email}</li>
              <li><strong>Localisation :</strong> Marrakech, Région Marrakech-Safi, Maroc</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0B192C] mb-1">
              2. Activité &amp; Prestations
            </h4>
            <p>
              Cleanzoe fournit des prestations de nettoyage professionnel pour particuliers et entreprises : nettoyage résidentiel, ménage Airbnb, entretien de bureaux, remise en état après chantier, vitres et cristallisation des sols à Marrakech.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0B192C] mb-1">
              3. Protection des données personnelles (Loi 09-08)
            </h4>
            <p>
              Conformément à la législation marocaine relative à la protection des données à caractère personnel (Loi n° 09-08), les informations collectées via nos formulaires de contact ou WhatsApp (nom, numéro de téléphone, quartier) sont strictement destinées au traitement de vos demandes de devis et d'intervention. Elles ne sont en aucun cas cédées, vendues ou louées à des tiers.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0B192C] mb-1">
              4. Propriété intellectuelle
            </h4>
            <p>
              L'ensemble des éléments graphiques, logos, marques, textes et photographies présents sur ce site sont la propriété exclusive de Cleanzoe. Toute reproduction totale ou partielle sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#0B192C] mb-1">
              5. Hébergement &amp; Sécurité
            </h4>
            <p>
              Le site est hébergé sur une infrastructure cloud sécurisée avec chiffrement SSL/TLS (HTTPS) garantissant l'intégrité et la confidentialité des échanges.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-smooth shadow-xs"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
