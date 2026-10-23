import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { CLEANZOE_NAP, SERVICES_LIST, CleaningServiceItem } from '../data/servicesData';

interface ContactSectionProps {
  initialService?: CleaningServiceItem | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Nettoyage Résidentiel (Maisons & Appartements)',
    quartier: 'Guéliz',
    propertyType: '',
    message: '',
  });

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
    setErrorMsg('');

    // Format comprehensive lead data for WhatsApp
    const messageLines = [
      '🧹 *NOUVELLE DEMANDE DE DEVIS - CLEANZOE MARRAKECH*',
      '─────────────────────────────',
      `👤 *Nom du client :* ${formState.name.trim()}`,
      `📱 *Téléphone :* ${formState.phone.trim()}`,
      formState.email.trim() ? `✉️ *Email :* ${formState.email.trim()}` : null,
      `✨ *Prestation :* ${formState.service}`,
      `📍 *Quartier à Marrakech :* ${formState.quartier}`,
      formState.propertyType.trim() ? `🏠 *Type de bien / Surface :* ${formState.propertyType.trim()}` : null,
      formState.message.trim() ? `📝 *Précisions :* ${formState.message.trim()}` : null,
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
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0084F4] mb-2">
            <span>Nous contacter</span>
            <span className="text-slate-300">/</span>
            <span>Marrakech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight text-balance">
            Demandez votre devis gratuit à Cleanzoe
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Remplissez ce formulaire : vos informations seront directement transmises sur WhatsApp à notre équipe pour une estimation rapide et sans engagement.
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
                  <div>• <strong>Quartier :</strong> {formState.quartier}</div>
                  {formState.propertyType && <div>• <strong>Bien / Surface :</strong> {formState.propertyType}</div>}
                  {formState.message && <div>• <strong>Précisions :</strong> {formState.message}</div>}
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
                        quartier: 'Guéliz',
                        propertyType: '',
                        message: '',
                      });
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
                      Quartier à Marrakech
                    </label>
                    <select
                      value={formState.quartier}
                      onChange={(e) => setFormState({ ...formState, quartier: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                    >
                      {CLEANZOE_NAP.serviceAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                      <option value="Autre secteur à Marrakech">Autre secteur à Marrakech</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Type de bien &amp; Surface estimée
                    </label>
                    <input
                      type="text"
                      placeholder="Ex : Villa 250m², Appartement 85m², Bureau..."
                      value={formState.propertyType}
                      onChange={(e) => setFormState({ ...formState, propertyType: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                    />
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
                    Précisions &amp; date d'intervention souhaitée
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Indiquez vos besoins particuliers, état des lieux, urgence ou disponibilités..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0084F4]"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0B192C] bg-[#fbd64a] hover:bg-[#f5c72b] rounded transition-smooth shadow-sm cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <span>Envoyer ma demande sur WhatsApp</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    ⚡ Vos informations seront automatiquement formatées et transmises sur WhatsApp (+212 6 64 69 64 70).
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
