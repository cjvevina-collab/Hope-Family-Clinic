import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5 text-teal-600" />
            Patient Experiences
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Trusted by Families in SITE Town.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Real feedback from Wilayatabad, Pak Colony, and Manghopir residents on Dr. Chetan Kumar's medical care and zero-wait queue system.
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{t.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.patientName}</h4>
                    <p className="text-[11px] text-slate-500">{t.area}</p>
                  </div>
                  <span className="text-[10px] text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded">
                    {t.serviceReceived}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
