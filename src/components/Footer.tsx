import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Ticket } from 'lucide-react';

interface FooterProps {
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <footer className="bg-slate-50 border-t-2 border-amber-400 text-slate-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
          
          {/* Col 1: Clean Emblem Logo ALONE (No text next to it) */}
          <div className="space-y-3">
            <a href="#" className="inline-block">
              <img 
                src={CLINIC_INFO.logoUrl} 
                alt="Hope Family Clinic Emblem" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = CLINIC_INFO.localLogoUrl;
                }}
              />
            </a>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              Specialist family medical care and real-time patient queue tokens in Wilayatabad, Pak Colony, Karachi.
            </p>
          </div>

          {/* Col 2: Timings */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block">
              Consultation Hours
            </span>
            <div className="space-y-1 text-xs text-slate-600">
              <p className="flex justify-between">
                <span>Mon – Sat:</span>
                <span className="font-mono font-bold text-blue-950">5:00 PM – 11:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-mono font-bold text-amber-700">5:00 PM – 8:00 PM</span>
              </p>
              <p className="text-[11px] text-amber-700 font-medium pt-1">
                Evening Clinical Sessions
              </p>
            </div>
          </div>

          {/* Col 3: Address */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block">
              Location
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              {CLINIC_INFO.address} (Near Bada Board)
            </p>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xs font-bold text-blue-900 hover:text-amber-700 underline"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Col 4: Contact & Book */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block">
              Helpline
            </span>
            <div className="space-y-1 text-xs text-slate-700 font-mono">
              <p>Phone: <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-blue-950 hover:underline">{CLINIC_INFO.phone}</a></p>
              <p>Email: <a href={`mailto:${CLINIC_INFO.email}`} className="text-slate-600 hover:underline">{CLINIC_INFO.email}</a></p>
            </div>

            <button
              onClick={onOpenBookingModal}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 border border-amber-400 transition-colors shadow-2xs flex items-center gap-1.5 active:scale-98"
            >
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              Book Token
            </button>
          </div>

        </div>

        {/* Bottom copyright in light theme */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© 2026 HOPE FAMILY CLINIC. All rights reserved.</p>
          <p className="font-medium text-slate-600">
            Dr. Chetan Kumar · MBBS (Dow), RMP · Medical Officer Sindh Govt
          </p>
        </div>

      </div>
    </footer>
  );
};
