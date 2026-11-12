import React from 'react';
import { PatientToken } from '../types/clinic';
import { CLINIC_INFO } from '../data/clinicData';
import { Printer, Share2, Check, Clock, MapPin, Phone, User, QrCode, MessageSquare, Send } from 'lucide-react';

interface TokenCardViewProps {
  token: PatientToken;
  currentServingToken: string;
  onClose?: () => void;
}

export const TokenCardView: React.FC<TokenCardViewProps> = ({
  token,
  currentServingToken,
  onClose
}) => {
  const handlePrint = () => {
    window.print();
  };

  const clinicWhatsAppMessage = encodeURIComponent(
    `🏥 *HOPE FAMILY CLINIC - APPOINTMENT TOKEN CONFIRMATION*\n\n` +
    `Salam Dr. Chetan Kumar,\n` +
    `I have generated a new consultation token on your website:\n\n` +
    `*Token Number:* ${token.tokenNumber}\n` +
    `*Patient Name:* ${token.patientName}\n` +
    `*Phone Number:* ${token.phone}\n` +
    `*Age & Gender:* ${token.age} Years · ${token.gender}\n` +
    `*Reason / Category:* ${token.category}\n` +
    (token.notes ? `*Symptoms/Notes:* ${token.notes}\n` : '') +
    `*Reporting Window:* ${token.estimatedTime}\n` +
    `*Date:* ${token.date} (Evening Session)\n\n` +
    `*Clinic:* Plot D-228, Wilayatabad, Manghopir Road, Pak Colony SITE Town, Karachi.\n\n` +
    `_Please confirm my token in the clinic queue. Thank you!_`
  );

  const handleSendToClinicWhatsApp = () => {
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${clinicWhatsAppMessage}`, '_blank');
  };

  const handleSharePatientWhatsApp = () => {
    window.open(`https://wa.me/?text=${clinicWhatsAppMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-blue-950 shadow-2xl max-w-md w-full mx-auto overflow-hidden" id="printable-token">
      
      {/* Top Banner in Blue & Gold */}
      <div className="bg-blue-950 text-white p-4 text-center border-b-4 border-amber-400 relative">
        <div className="flex justify-center mb-1.5">
          <img 
            src={CLINIC_INFO.logoUrl} 
            alt="Hope Family Clinic Emblem" 
            className="w-13 h-13 object-contain drop-shadow"
            onError={(e) => {
              (e.target as HTMLImageElement).src = CLINIC_INFO.localLogoUrl;
            }}
          />
        </div>
        <h3 className="text-lg font-black tracking-widest uppercase">{CLINIC_INFO.name}</h3>
        <p className="text-xs text-amber-300 font-bold">{CLINIC_INFO.doctor} · {CLINIC_INFO.qualifications}</p>
        <p className="text-[11px] text-slate-300">{CLINIC_INFO.currentPosition}</p>
      </div>

      {/* Token Number Display */}
      <div className="p-5 text-center border-b-2 border-dashed border-slate-200 bg-amber-50/50">
        <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-500">Official Queue Token</span>
        <div className="my-1">
          <span className="text-5xl font-black text-blue-950 font-mono tracking-tight">
            {token.tokenNumber}
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-blue-950 border border-amber-400">
          <Check className="w-3.5 h-3.5 text-blue-950" />
          Confirmed For Today
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-left bg-white p-2.5 rounded-xl border border-slate-300 text-xs shadow-2xs">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Now Serving</span>
            <span className="font-black text-blue-950 font-mono text-sm">{currentServingToken || 'HF-038'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Expected Time</span>
            <span className="font-black text-amber-700 text-sm flex items-center gap-1">
              <Clock className="w-3 h-3" /> {token.estimatedTime}
            </span>
          </div>
        </div>
      </div>

      {/* Patient Specific Details */}
      <div className="p-5 space-y-2 text-xs text-slate-800 bg-white">
        <div className="flex justify-between items-center py-1 border-b border-slate-100">
          <span className="text-slate-500 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-amber-600" /> Patient Name
          </span>
          <span className="font-bold text-blue-950">{token.patientName}</span>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-slate-100">
          <span className="text-slate-500 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-amber-600" /> Mobile Number
          </span>
          <span className="font-mono font-bold text-slate-900">{token.phone}</span>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-slate-100">
          <span className="text-slate-500">Age & Gender</span>
          <span className="font-semibold text-slate-900">{token.age} Yrs · {token.gender}</span>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-slate-100">
          <span className="text-slate-500">Category</span>
          <span className="font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded text-[11px] border border-blue-200">{token.category}</span>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-600" /> Clinic Address
          </span>
          <span className="font-medium text-slate-800 text-right max-w-[200px] leading-tight text-[11px]">
            Plot D-228, Wilayatabad, Pak Colony SITE
          </span>
        </div>

        {/* Verification Strip */}
        <div className="pt-2 border-t border-slate-200 flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white border border-slate-300 rounded-lg">
              <QrCode className="w-8 h-8 text-blue-950" />
            </div>
            <div>
              <p className="text-[9px] text-slate-500 uppercase font-bold">Verification ID</p>
              <p className="font-mono text-xs font-bold text-blue-950">HFC-{token.tokenNumber}</p>
            </div>
          </div>
          <span className="text-[10px] text-slate-600 text-right font-medium">
            Evening Session Only
          </span>
        </div>

        {/* Direct Send to Clinic WhatsApp Callout Box */}
        <div className="mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-300 flex items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-[11px] font-bold text-emerald-950 leading-tight">Send to Clinic Desk</p>
            <p className="text-[10px] text-emerald-700">Send token details to 0329 8373400</p>
          </div>
          <button
            onClick={handleSendToClinicWhatsApp}
            className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold shadow-xs flex items-center gap-1 shrink-0"
          >
            <Send className="w-3 h-3" /> Send to Doctor
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-wrap gap-2 items-center justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-2xs"
        >
          <Printer className="w-3.5 h-3.5 text-slate-600" /> Print Slip
        </button>
        <button
          onClick={handleSharePatientWhatsApp}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 border border-amber-500 transition-colors shadow-2xs"
        >
          <Share2 className="w-3.5 h-3.5" /> Share Token
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Done
          </button>
        )}
      </div>

    </div>
  );
};
