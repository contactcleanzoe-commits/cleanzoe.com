import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_LIST } from '../data/servicesData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0084F4] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Foire aux questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
            Questions fréquentes sur nos prestations
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Retrouvez les réponses essentielles concernant nos interventions de nettoyage à Marrakech.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-smooth"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0084F4]"
                >
                  <span className="text-sm font-bold text-[#0B192C]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'transform rotate-180 text-[#0084F4]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
