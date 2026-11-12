import React, { useState } from 'react';
import { FAQ_LIST } from '../data/clinicData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const PatientFaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Everything You Need To Know.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Answers to patient queries regarding appointment tokens, evening timings, and clinic protocols.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-lg text-slate-400 bg-slate-100 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4.5 pb-4.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
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
