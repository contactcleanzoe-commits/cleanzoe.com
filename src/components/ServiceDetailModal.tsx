import React from 'react';
import { X, Check, MessageSquare, ArrowRight, Shield, Calendar, Users } from 'lucide-react';
import { CleaningServiceItem, CLEANZOE_NAP } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: CleaningServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (service: CleaningServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-lg shadow-xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#0084F4]">
              Prestation CleanZoe Marrakech
            </span>
            <h3 id="modal-title" className="text-xl font-bold text-[#0B192C]">
              {service.title}
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

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Service Image if available */}
          {service.image && (
            <div className="rounded overflow-hidden h-48 w-full bg-slate-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('images.unsplash.com/photo-1581578731548-c64695cc6952')) {
                    target.src = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80&fm=webp';
                  }
                }}
              />
            </div>
          )}

          {/* Full description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Présentation
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Inclusions list */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Ce que comprend l'intervention
            </h4>
            <div className="space-y-2.5">
              {service.inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <Check className="w-4 h-4 text-[#0084F4] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 block">Pour qui ?</span>
                <span>{service.audience}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 block">Fréquence recommandée</span>
                <span>{service.frequency}</span>
              </div>
            </div>
          </div>

          {/* Local intent notice */}
          <div className="bg-slate-50 p-3.5 rounded border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#0084F4] shrink-0" />
            <span>
              Intervention rapide avec personnel formé et produits certifiés dans tous les secteurs de Marrakech.
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20CleanZoe,%20je%20souhaite%20un%20devis%20pour%20le%20service%20:%20${encodeURIComponent(service.title)}%20%C3%A0%20Marrakech.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded transition-smooth"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Devis via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onSelectForQuote(service);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-smooth shadow-xs"
          >
            <span>Calculer dans le devis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
