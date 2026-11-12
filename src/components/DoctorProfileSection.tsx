import React from 'react';
import { CLINIC_INFO, DOCTOR_PROFILE } from '../data/clinicData';
import { Building2, Stethoscope, Ticket } from 'lucide-react';

interface DoctorProfileSectionProps {
  onOpenBookingModal: () => void;
}

export const DoctorProfileSection: React.FC<DoctorProfileSectionProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <section id="doctor" className="py-14 bg-slate-50/60 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Doctor Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="border-4 border-amber-400 bg-white rounded-3xl overflow-hidden shadow-lg relative">
              <img
                src={CLINIC_INFO.images.doctor}
                alt="Dr. Chetan Kumar"
                className="w-full h-[410px] object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="bg-blue-950 text-white p-3.5 border-t-2 border-amber-400">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Lead Consultant</span>
                <p className="text-base font-black uppercase tracking-tight">{DOCTOR_PROFILE.name}</p>
                <p className="text-xs text-amber-200 font-mono mt-0.5">{DOCTOR_PROFILE.degrees.join(' · ')}</p>
              </div>
            </div>
          </div>

          {/* Doctor Bio & Hospital Experience */}
          <div className="lg:col-span-7 space-y-4">
            
            <div>
              <div className="inline-block bg-amber-500 text-blue-950 px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-widest uppercase mb-2">
                QUALIFIED PHYSICIAN
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-blue-950 uppercase">
                Dr. Chetan Kumar
              </h2>
              <p className="text-xs sm:text-sm font-bold text-amber-700 mt-0.5">
                {DOCTOR_PROFILE.currentRole}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              M.B.B.S graduate from Dow University of Health Sciences and Medical Officer in the Sindh Government Health Department. Dr. Chetan Kumar has extensive clinical training across Karachi’s foremost medical hospitals.
            </p>

            {/* Past Hospital Affiliations */}
            <div>
              <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block mb-2">
                Hospital Experience
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DOCTOR_PROFILE.hospitals.map((hosp) => (
                  <div key={hosp} className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">{hosp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="pt-1">
              <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block mb-1.5">
                Clinical Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {DOCTOR_PROFILE.specialties.map((spec) => (
                  <span key={spec} className="text-[11px] font-medium text-slate-800 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button: Compact & Simple */}
            <div className="pt-2">
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 border border-amber-400 transition-all shadow-xs flex items-center gap-1.5 active:scale-98"
              >
                <Ticket className="w-3.5 h-3.5 text-amber-300" />
                Book Appointment
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
