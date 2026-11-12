import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, Clock, MapPin, Phone, ShieldCheck, Ticket } from 'lucide-react';

export const TopMarquee: React.FC = () => {
  const marqueeItems = [
    { text: "HOPE FAMILY CLINIC", icon: Sparkles },
    { text: "DR. CHETAN KUMAR · MBBS (DOW), RMP", icon: ShieldCheck },
    { text: "MEDICAL OFFICER · SINDH GOVT HEALTH DEPT", icon: ShieldCheck },
    { text: "DAILY: 5:00 PM – 11:00 PM · SUN: 5:00 PM – 8:00 PM", icon: Clock },
    { text: "ONLINE PATIENT TOKEN SYSTEM · ZERO WAITING RUSH", icon: Ticket },
    { text: "PLOT D-228, WILAYATABAD, MANGHOPIR ROAD, PAK COLONY SITE", icon: MapPin },
    { text: "HELPLINE / WHATSAPP: 0329 8373400", icon: Phone },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-amber-300 py-2 border-b-2 border-amber-500 overflow-hidden select-none">
      <div className="animate-marquee-continuous whitespace-nowrap flex items-center">
        {/* Render 2 identical sets for seamless continuous loop */}
        {[...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center mx-6 text-[11px] font-bold tracking-widest uppercase">
              <Icon className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0" />
              <span className="text-white hover:text-amber-300 transition-colors">{item.text}</span>
              <span className="text-amber-500/70 ml-6 text-xs">◆</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
