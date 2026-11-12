import React, { useState } from 'react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { Stethoscope, Activity, Baby, ShieldCheck, Bandage, Ticket, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBookingModal: (category?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookingModal,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-blue-900" />;
      case 'Activity': return <Activity className="w-5 h-5 text-amber-700" />;
      case 'Baby': return <Baby className="w-5 h-5 text-blue-800" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Bandage': return <Bandage className="w-5 h-5 text-blue-900" />;
      case 'Ticket': return <Ticket className="w-5 h-5 text-amber-700" />;
      default: return <Stethoscope className="w-5 h-5 text-blue-900" />;
    }
  };

  const nextServices = () => {
    setStartIndex((prev) => (prev + 3 >= CLINIC_SERVICES.length ? 0 : prev + 3));
  };

  const prevServices = () => {
    setStartIndex((prev) => (prev - 3 < 0 ? Math.max(0, CLINIC_SERVICES.length - 3) : prev - 3));
  };

  const visibleServices = CLINIC_SERVICES.slice(startIndex, startIndex + 3);

  return (
    <section id="services" className="py-14 bg-white border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-block bg-blue-900 text-amber-300 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase mb-1 border border-amber-400">
              SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-blue-950 uppercase">
              Clinical Specialties
            </h2>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevServices}
              aria-label="Previous Services"
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-900 hover:text-white border border-slate-300 text-slate-800 flex items-center justify-center transition-colors shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextServices}
              aria-label="Next Services"
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-900 hover:text-white border border-slate-300 text-slate-800 flex items-center justify-center transition-colors shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Card Slider View */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-50/70 border-t-4 border-t-amber-500 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-400 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    0{startIndex + index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-blue-950 uppercase tracking-tight mb-1">
                  {service.title}
                </h3>
                <p className="text-[11px] font-bold text-amber-700 mb-2">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {service.description}
                </p>

                <ul className="space-y-1.5 pt-2.5 border-t border-slate-200 text-[11px] text-slate-700">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compact Button */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">{service.duration}</span>
                <button
                  onClick={() => onOpenBookingModal(service.title)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 border border-amber-400 transition-colors flex items-center gap-1 shadow-2xs active:scale-98"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
