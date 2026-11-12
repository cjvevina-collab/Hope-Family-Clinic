import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageSquare, X, Ticket, MapPin, Clock, Phone, Send } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenBookingModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenBookingModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getWhatsAppUrl = (customMessage: string) => {
    return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 print:hidden">
      
      {/* Expanded Quick Chat Box (Rounded & Clean) */}
      {isOpen && (
        <div className="mb-3 w-76 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          {/* Header in authentic WhatsApp dark green */}
          <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                <img 
                  src={CLINIC_INFO.logoUrl} 
                  alt="Hope Family Clinic" 
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = CLINIC_INFO.localLogoUrl;
                  }}
                />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">HOPE FAMILY CLINIC</h4>
                <p className="text-[10px] text-emerald-200">0329 8373400 · Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="p-3.5 space-y-2 bg-[#ECE5DD]/40 text-xs">
            <p className="text-[11px] text-slate-600 mb-1">
              Salam! Select an option to chat directly with clinic reception on WhatsApp:
            </p>

            <a
              href={getWhatsAppUrl(`Salam Dr. Chetan Kumar, I want to book an evening appointment token at Hope Family Clinic Wilayatabad.`)}
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 bg-white hover:bg-emerald-50 rounded-xl border border-slate-200 hover:border-emerald-400 transition-colors font-medium text-slate-800 text-left flex items-center justify-between shadow-2xs"
            >
              <span className="text-xs">Book Appointment Token</span>
              <Ticket className="w-3.5 h-3.5 text-emerald-600" />
            </a>

            <a
              href={getWhatsAppUrl(`Salam, please confirm today's evening doctor consultation timings and token rush.`)}
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 bg-white hover:bg-emerald-50 rounded-xl border border-slate-200 hover:border-emerald-400 transition-colors font-medium text-slate-800 text-left flex items-center justify-between shadow-2xs"
            >
              <span className="text-xs">Inquire Timings & Rush</span>
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
            </a>

            <a
              href={getWhatsAppUrl(`Salam, please share the exact clinic location at Bada Board Manghopir Road.`)}
              target="_blank"
              rel="noreferrer"
              className="block p-2.5 bg-white hover:bg-emerald-50 rounded-xl border border-slate-200 hover:border-emerald-400 transition-colors font-medium text-slate-800 text-left flex items-center justify-between shadow-2xs"
            >
              <span className="text-xs">Location & Directions</span>
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            </a>
          </div>

          <div className="p-2.5 bg-white border-t border-slate-100 text-center">
            <span className="text-[11px] font-mono text-slate-500">
              Dr. Chetan Kumar · {CLINIC_INFO.phone}
            </span>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button: Authentic Round WhatsApp Green */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-108 active:scale-95 group relative ring-4 ring-white/80"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full"></span>
        <MessageSquare className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};
