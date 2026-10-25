import React, { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { CLEANZOE_NAP, SERVICES_LIST, CleaningServiceItem } from '../data/servicesData';
import { LegalNoticeModal } from './LegalNoticeModal';

interface ContactSectionProps {
  initialService?: CleaningServiceItem | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Nettoyage Résidentiel (Maisons & Appartements)',
    message: '',
  });

  const [acceptedConsent, setAcceptedConsent] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormState((prev) => ({
        ...prev,
        service: initialService.title,
        message: prev.message || `Demande pour prestation : ${initialService.title}`,
      }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) {
      setErrorMsg('Veuillez renseigner votre nom complet et votre numéro de téléphone.');
      return;
    }
    if (!acceptedConsent) {
      setErrorMsg('Veuillez cocher la case d\'acceptation de la politique de confidentialité (Loi marocaine n° 09-08).');
      return;
    }
    setErrorMsg('');

    // Format comprehensive lead data for WhatsApp
    const messageLines = [
      '🧹 *NOUVELLE DEMANDE DE DEVIS - CLEANZOE MARRAKECH*',
      '─────────────────────────────',
      `👤 *Nom du client :* ${formState.name.trim()}`,
      `📱 *Téléphone :* ${formState.phone.trim()}`,
      formState.email.trim() ? `✉️ *Email :* ${formState.email.trim()}` : null,
      `✨ *Prestation :* ${formState.service}`,
      formState.message.trim() ? `📝 *Quartier & Précisions :* ${formState.message.trim()}` : null,
      '─────────────────────────────',
      'Merci de me confirmer la faisabilité et le devis estimatif.',
    ].filter(Boolean).join('\n');

    const whatsappUrl = `${CLEANZOE_NAP.whatsappUrl}?text=${encodeURIComponent(messageLines)}`;
    setGeneratedUrl(whatsappUrl);
    setSubmitted(true);

    // Redirect user to WhatsApp with pre-filled lead info
    try {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto mb-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-medium text-[#0084F4] mb-2">
            <span>Nous contacter</span>
            <span className="text-slate-300">/</span>
            <span>Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight text-balance">
            Demandez votre devis gratuit à Cleanzoe
          </h2>
        </div>

        {/* Centered Form Container */}
        <div className="max-w-3xl mx-auto -mt-[38px] -mb-[28px] pt-[23px] pb-[24px] pl-[24px] pr-[23px] sm:p-8 md:p-10 bg-[#FAFAFA] border border-slate-200 rounded-xl shadow-sm">
          {submitted ? (
              <div className="text-center py-8 px-4 space-y-4 bg-emerald-50/60 border border-emerald-200 rounded-lg">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0B192C]">
                  Demande prête pour WhatsApp !
                </h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto">
                  Merci <strong className="text-slate-900">{formState.name}</strong>. Vos coordonnées et détails d'intervention ont été préparés pour notre équipe WhatsApp au <strong className="text-emerald-700">{CLEANZOE_NAP.formattedPhone}</strong>.
                </p>

                {/* Direct Action Link in case automatic click was intercepted */}
                <div className="pt-2">
                  <a
                    href={generatedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-md transition-all hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-5 h-5 text-white" />
                    <span>Continuer sur WhatsApp maintenant</span>
                  </a>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Si WhatsApp ne s'est pas ouvert automatiquement, cliquez sur le bouton vert ci-dessus.
                  </p>
                </div>

                {/* Summary card */}
                <div className="mt-4 p-4 bg-white border border-slate-200 rounded text-left text-xs text-slate-700 max-w-md mx-auto space-y-1.5 shadow-xs">
                  <div className="font-semibold text-slate-900 border-b pb-1">Détails transmis :</div>
                  <div>• <strong>Client :</strong> {formState.name} ({formState.phone})</div>
                  <div>• <strong>Prestation :</strong> {formState.service}</div>
                  {formState.message && <div>• <strong>Quartier &amp; Précisions :</strong> {formState.message}</div>}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Nettoyage Résidentiel (Maisons & Appartements)',
                        message: '',
                      });
                      setAcceptedConsent(false);
                    }}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                  >
                    Remplir un autre formulaire
                  </button>
                </div>
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
                      Téléphone portable WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex : 06 64 69 64 70"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Type de prestation
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="Autre prestation sur mesure">Autre prestation sur mesure</option>
                    </select>
                  </div>

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
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Quartier, précisions &amp; date d'intervention souhaitée
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Quartier à Marrakech (Guéliz, Hivernage...), date souhaitée ou précisions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full h-[43.4px] bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4] resize-none"
                  />
                </div>

                {/* Consentement Données Personnelles (Loi marocaine n° 09-08 / CNDP) */}
                <div className="-mt-[13px] pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-left select-none">
                    <input
                      type="checkbox"
                      required
                      checked={acceptedConsent}
                      onChange={(e) => {
                        setAcceptedConsent(e.target.checked);
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#0084F4] focus:ring-[#0084F4] cursor-pointer shrink-0"
                    />
                    <span className="text-[9px] font-bold text-left text-slate-700 leading-snug">
                      J'ai lu et j'accepte la{' '}
                      <button
                        type="button"
                        onClick={() => setLegalModalOpen(true)}
                        className="font-bold text-[#0084F4] hover:underline cursor-pointer"
                      >
                        politique de confidentialité
                      </button>{' '}
                      et les{' '}
                      <button
                        type="button"
                        onClick={() => setLegalModalOpen(true)}
                        className="font-bold text-[#0084F4] hover:underline cursor-pointer"
                      >
                        mentions légales
                      </button>{' '}
                      relatives à la protection des données personnelles (Loi marocaine n° 09-08 - CNDP). <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>
                )}

                <div className="-mt-[14px] pt-2 flex flex-col items-center">
                  <button
                    type="submit"
                    className="w-full max-w-[267px] h-[38.1px] inline-flex items-center justify-center gap-2 px-3 text-[9px] font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-smooth shadow-sm cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[13px] font-bold">Envoyer ma demande sur WhatsApp</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    Vos informations seront automatiquement formatées et transmises sur WhatsApp (+212 6 64 69 64 70).
                  </p>
                </div>
              </form>
            )}
          </div>

      </div>

      {/* Modal Mentions Légales & Confidentialité (Loi 09-08) */}
      <LegalNoticeModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />
    </section>
  );
};
