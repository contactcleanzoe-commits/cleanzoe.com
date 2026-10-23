import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { CLEANZOE_NAP, CleaningServiceItem } from '../data/servicesData';

interface ContactSectionProps {
  initialService?: CleaningServiceItem | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Nettoyage Résidentiel',
    message: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormState((prev) => ({
        ...prev,
        service: initialService.title,
        message: prev.message || `Demande pour prestation : ${initialService.title}`,
      }));
    }
  }, [initialService]);

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) {
      setErrorMsg('Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);

    const message = `*Nouvelle Demande de Devis - Cleanzoe Marrakech*
----------------------------------
👤 *Nom :* ${formState.name.trim()}
📱 *Téléphone :* ${formState.phone.trim()}
${formState.email.trim() ? `✉️ *Email :* ${formState.email.trim()}\n` : ''}🧹 *Prestation :* ${formState.service}
📍 *Détails & Quartier :* ${formState.message.trim() || 'Non précisé'}
----------------------------------
Merci de me recontacter avec votre estimation de devis.`;

    const whatsappUrl = `${CLEANZOE_NAP.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0084F4] mb-2">
            <span>Nous contacter</span>
            <span className="text-slate-300">/</span>
            <span>Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Demandez votre devis gratuit à Cleanzoe
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Par téléphone, WhatsApp ou via notre formulaire : nous répondons avec précision et réactivité à toute demande d'intervention à Marrakech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0B192C] text-white rounded-lg p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5B82E]">
                Contact direct
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                Cleanzoe Marrakech
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Disponible du lundi au samedi de 08h à 19h (7j/7 pour les urgences Airbnb).
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
              <a
                href={`tel:${CLEANZOE_NAP.phone}`}
                className="flex items-start gap-3 p-3 rounded bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#0084F4] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="font-bold text-white block">Par téléphone :</span>
                  <span className="text-sm font-semibold text-[#F5B82E] tabular-nums">
                    {CLEANZOE_NAP.formattedPhone}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Appel direct</span>
                </div>
              </a>

              <a
                href={`${CLEANZOE_NAP.whatsappUrl}?text=Bonjour%20Cleanzoe,%20je%20souhaite%20un%20devis%20de%20nettoyage%20%C3%A0%20Marrakech.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="font-bold text-emerald-300 block">Sur WhatsApp :</span>
                  <span className="text-xs text-emerald-100">Réponse rapide garantie</span>
                  <span className="text-[11px] text-emerald-400 block mt-0.5">Cliquez pour ouvrir la discussion</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded bg-white/5">
                <MapPin className="w-4 h-4 text-[#0084F4] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Adresse physique :</span>
                  <span className="text-slate-200">{CLEANZOE_NAP.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded bg-white/5">
                <Mail className="w-4 h-4 text-[#0084F4] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Email :</span>
                  <span className="text-slate-200">{CLEANZOE_NAP.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-slate-200 rounded-lg p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B192C]">
                  Demande envoyée sur WhatsApp !
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Merci {formState.name}. Votre message a été préparé et transmis sur WhatsApp (+212 6 64 69 64 70). Notre équipe vous répond immédiatement.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: '',
                      phone: '',
                      email: '',
                      service: 'Nettoyage Résidentiel',
                      message: '',
                    });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Votre Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex : Youssef Mansouri"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Téléphone portable <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 XX XX XX XX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Adresse email (optionnel)
                    </label>
                    <input
                      type="email"
                      placeholder="nom@exemple.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Type de prestation
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                    >
                      <option value="Nettoyage Résidentiel">Nettoyage Résidentiel (Villas & Appartements)</option>
                      <option value="Nettoyage de Bureaux">Nettoyage de Bureaux & Locaux Pro</option>
                      <option value="Nettoyage Airbnb">Nettoyage & Ménage Airbnb</option>
                      <option value="Après Chantier">Remise en état après travaux / fin de chantier</option>
                      <option value="Cristallisation des Sols">Cristallisation & Décapage des Sols</option>
                      <option value="Nettoyage Vitres">Nettoyage Vitres & Baies Vitrées</option>
                      <option value="Nettoyage Tapis">Nettoyage Tapis & Canapés</option>
                      <option value="Entretien Copropriété">Entretien d'Immeubles & Copropriétés</option>
                      <option value="Autre prestation">Autre demande spécifique</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Détails de votre demande (quartier à Marrakech, surface, particularités)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez votre quartier (Guéliz, Hivernage, Palmeraie, etc.) et vos disponibilités souhaitées..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-smooth shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#0B192C]" />
                  <span>Envoyer ma demande de devis sur WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
