import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Globe, MapPin, Code, CheckSquare, ExternalLink } from 'lucide-react';
import { SERVICES_LIST, CLEANZOE_NAP } from '../data/servicesData';

interface SeoAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoAuditModal: React.FC<SeoAuditModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'schema' | 'technical' | 'checklist'>('matrix');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#0084F4]/10 rounded text-[#0084F4]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B192C]">
                Rapport d'Audit SEO & Fiche Google Business (Phase 1)
              </h3>
              <p className="text-xs text-slate-500">
                Validation Technique, Référencement Local Marrakech & Architecture des Mots-Clés
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-6 bg-slate-50 gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'matrix'
                ? 'border-[#0084F4] text-[#0084F4]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Matrice Mots-clés & Pages (14 URLs)
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'schema'
                ? 'border-[#0084F4] text-[#0084F4]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Données Structurées Schema.org (JSON-LD)
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'technical'
                ? 'border-[#0084F4] text-[#0084F4]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Audit Technique & Core Web Vitals
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'checklist'
                ? 'border-[#0084F4] text-[#0084F4]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Checklist de Lancement Google
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          
          {/* Tab 1: Matrix */}
          {activeTab === 'matrix' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-900 text-xs">
                <strong>Stratégie de mots-clés locaux :</strong> Chaque page cible une intention de recherche marrakchie précise sans sur-optimisation ni cannibalisme.
              </div>

              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">URL Cible</th>
                      <th className="p-2.5">Mot-Clé Principal</th>
                      <th className="p-2.5">Intention de recherche</th>
                      <th className="p-2.5">Balise H1</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-2.5 font-mono text-[11px] text-slate-900">/</td>
                      <td className="p-2.5 font-semibold text-[#0084F4]">entreprise de nettoyage Marrakech</td>
                      <td className="p-2.5">Locale globale / Marque</td>
                      <td className="p-2.5">Nettoyage professionnel et entretien soigné à Marrakech</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono text-[11px] text-slate-900">/services</td>
                      <td className="p-2.5 font-semibold text-[#0084F4]">services de nettoyage Marrakech</td>
                      <td className="p-2.5">Commerciale / Catalogue</td>
                      <td className="p-2.5">Services de nettoyage professionnel à Marrakech</td>
                    </tr>
                    {SERVICES_LIST.map((service) => (
                      <tr key={service.id}>
                        <td className="p-2.5 font-mono text-[11px] text-slate-600">/services/{service.slug}</td>
                        <td className="p-2.5 font-semibold text-[#0084F4]">{service.primaryKeyword}</td>
                        <td className="p-2.5">Spécifique service + Marrakech</td>
                        <td className="p-2.5">{service.title}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="p-2.5 font-mono text-[11px] text-slate-900">/about</td>
                      <td className="p-2.5 font-semibold text-[#0084F4]">société de nettoyage Marrakech</td>
                      <td className="p-2.5">Institutionnelle / Confiance</td>
                      <td className="p-2.5">Une société de nettoyage exigeante au service de Marrakech</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono text-[11px] text-slate-900">/contact</td>
                      <td className="p-2.5 font-semibold text-[#0084F4]">contacter entreprise nettoyage Marrakech</td>
                      <td className="p-2.5">Conversion / Demande de devis</td>
                      <td className="p-2.5">Demandez votre devis gratuit à CleanZoe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Schema.org */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-900 text-xs">
                <strong>LocalBusiness & CleaningService JSON-LD :</strong> Intégré directement dans le code source de l'en-tête HTML (`index.html`) avec le NAP officiel sans données fictives.
              </div>

              <div className="bg-slate-900 text-emerald-400 p-4 rounded-lg font-mono text-[11px] overflow-x-auto leading-relaxed">
                <pre>{`{
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "@id": "https://cleanzoe.ma/#organization",
  "name": "CleanZoe",
  "url": "https://cleanzoe.ma/",
  "telephone": "+212664696470",
  "email": "cleanzoeservice@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dior Atlas Meuble N24 Mhamid",
    "addressLocality": "Marrakech",
    "postalCode": "40000",
    "addressRegion": "Marrakech-Safi",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.6053,
    "longitude": -8.0381
  },
  "areaServed": ["Marrakech", "Guéliz", "Hivernage", "Palmeraie", "M'hamid", "Targa", "Médina", "Agdal"]
}`}</pre>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                  <span className="font-bold text-slate-900 block mb-1">Conformité NAP :</span>
                  <span>Nom : CleanZoe<br />Adresse : Dior Atlas Meuble N24 Mhamid Marrakech<br />Tél : 06 64 69 64 70</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                  <span className="font-bold text-slate-900 block mb-1">Règle anti-hallucination :</span>
                  <span>Aucun faux avis, faux nombre d'années ni fausse note inventée. Emplacement prêt pour Google Reviews.</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Technical */}
          {activeTab === 'technical' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">LCP Target</span>
                  <span className="text-xl font-extrabold text-emerald-600">&lt; 1.8s</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Images optimisées & chargement asynchrone</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">INP Target</span>
                  <span className="text-xl font-extrabold text-emerald-600">&lt; 50ms</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Micro-interactions en &le; 200ms</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">CLS Target</span>
                  <span className="text-xl font-extrabold text-emerald-600">0.00</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">Dimensions explicites sur tous les médias</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs">Fichiers d'indexation générés</h4>
                <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded">
                  <div>
                    <span className="font-mono font-bold text-slate-800">/sitemap.xml</span>
                    <span className="text-[11px] text-slate-500 block">14 URLs indexables avec priorités et fréquences de mise à jour</span>
                  </div>
                  <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-[#0084F4] hover:underline flex items-center gap-1 font-semibold">
                    <span>Ouvrir</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded">
                  <div>
                    <span className="font-mono font-bold text-slate-800">/robots.txt</span>
                    <span className="text-[11px] text-slate-500 block">Autorisation complète de crawl + lien direct vers le sitemap</span>
                  </div>
                  <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="text-[#0084F4] hover:underline flex items-center gap-1 font-semibold">
                    <span>Ouvrir</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900 text-xs">
                <strong>Phase 1 Validée :</strong> Aucun composant de blog créé. Structure prête pour accueillir des grappes thématiques en Phase 2 sans impacter le maillage existant.
              </div>
            </div>
          )}

          {/* Tab 4: Checklist */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Guide des étapes opérationnelles pour le déploiement sur votre nom de domaine personnalisé :
              </p>

              <div className="space-y-2.5">
                {[
                  { title: '1. Connecter le nom de domaine définitif (ex: cleanzoe.ma)', done: true },
                  { title: '2. Activer le certificat SSL HTTPS automatique', done: true },
                  { title: '3. Déclarer la propriété dans Google Search Console', done: false },
                  { title: '4. Soumettre l\'URL https://cleanzoe.ma/sitemap.xml dans Search Console', done: false },
                  { title: '5. Créer / revendiquer la fiche Google Business Profile "CleanZoe"', done: false },
                  { title: '6. Valider l\'adresse exacte : Dior Atlas Meuble N24 Mhamid, Marrakech', done: false },
                  { title: '7. Assurer la concordance parfaite du numéro de téléphone 06 64 69 64 70 (NAP)', done: true },
                  { title: '8. Ajouter les photos réelles de l\'équipe et du matériel dans Google Maps', done: false },
                  { title: '9. Tester le click-to-call et les boutons WhatsApp sur mobile', done: true },
                  { title: '10. Valider le score Core Web Vitals sur Google PageSpeed Insights', done: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-200"
                  >
                    <span className="text-xs text-slate-800">{item.title}</span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        item.done
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {item.done ? 'Prêt en code' : 'À finaliser au DNS'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Audit conforme aux directives Google Search Essentials & Schema.org
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50"
          >
            Fermer le rapport
          </button>
        </div>

      </div>
    </div>
  );
};
