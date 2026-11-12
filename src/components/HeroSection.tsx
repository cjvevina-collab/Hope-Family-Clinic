import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Ticket, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookingModal: () => void;
  currentServingToken: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  currentServingToken,
}) => {
  return (
    <section id="overview" className="relative bg-gradient-to-b from-white via-slate-50/60 to-white pt-6 pb-14 border-b border-slate-200 overflow-hidden">
      
      {/* Subtle ambient blur backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Kicker: Unboxed Clean Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mb-5">
          <span className="font-bold text-blue-900 uppercase tracking-wider">{CLINIC_INFO.name}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Wilayatabad, Pak Colony SITE</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-teal-700 font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3" /> Daily 5 PM – 11 PM
          </span>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold short headings & High-intent CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Headline: Large, impact, balanced */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.12] text-balance">
              Expert Family Healthcare. Zero Waiting Rush.
            </h1>

            {/* Concise Clinical Subtext */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Led by <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctor}</strong> ({CLINIC_INFO.qualifications}), Medical Officer, Sindh Government Health Department. Book an online token now and arrive comfortably when your turn is called.
            </p>

            {/* Quick Doctor Credentials Pillless Strip */}
            <div className="pt-2 pb-1 border-y border-slate-200/80 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium text-slate-800">
                <ShieldCheck className="w-4 h-4 text-teal-600" /> MBBS (Dow University)
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Ex-Ziauddin Clifton
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Liaquat National & Kidney Centre
              </span>
            </div>

            {/* Compact Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-xl transition-all shadow-md active:scale-98 flex items-center gap-2"
              >
                <Ticket className="w-4 h-4 text-teal-300" />
                Book Consultation Token
              </button>

              <a
                href="#live-queue"
                className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <span>Live Serving: <strong className="font-mono text-teal-700">{currentServingToken}</strong></span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Quiet reassurance text */}
            <p className="text-[11px] text-slate-500">
              Plot D-228, Wilayatabad, Manghopir Road, Pak Colony, SITE Town, Karachi
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
              <img
                src={CLINIC_INFO.images.hero}
                alt="Hope Family Clinic Interior Consultation Room"
                className="w-full h-[380px] sm:h-[430px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Floating Token Status Callout inside banner */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Live Queue Counter</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xl font-black text-blue-950 font-mono">{currentServingToken}</span>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">Now Consulting</span>
                  </div>
                </div>

                <button
                  onClick={onOpenBookingModal}
                  className="px-3.5 py-1.5 text-xs font-bold bg-blue-900 hover:bg-blue-950 text-white rounded-lg transition-colors shadow-xs"
                >
                  Get Token
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
