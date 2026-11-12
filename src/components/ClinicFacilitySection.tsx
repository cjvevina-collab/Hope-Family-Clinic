import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, Sparkles, HeartPulse, Building } from 'lucide-react';

export const ClinicFacilitySection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
            <Building className="w-3.5 h-3.5 text-teal-600" />
            Modern Healthcare Facility
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Clean, Calm & Patient-First.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Engineered to provide a sterile, welcoming, and organized medical experience for families across Pak Colony and SITE Town.
          </p>
        </div>

        {/* 2-Image Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Reception & Queue */}
          <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={CLINIC_INFO.images.reception}
                alt="Hope Family Clinic Reception & Digital Queue Screen"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block">Queue Reception</span>
                <h3 className="text-lg font-bold">Digital Token Counter & Waiting Area</h3>
              </div>
            </div>

            <div className="p-5">
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear digital token display keeps every patient informed of their turn. Air-conditioned, sanitized seating prevents uncomfortable standing during peak evening hours.
              </p>
            </div>
          </div>

          {/* Card 2: Examination & Vitals */}
          <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={CLINIC_INFO.images.examination}
                alt="Physician examining patient blood pressure and vitals"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block">Diagnostic Care</span>
                <h3 className="text-lg font-bold">Comprehensive Physical & Vitals Check</h3>
              </div>
            </div>

            <div className="p-5">
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardized diagnostic instruments for immediate blood pressure, blood glucose, pulse oximetry, temperature, and child growth assessment.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
