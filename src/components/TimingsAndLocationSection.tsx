import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Clock, MapPin, Phone, Mail, Navigation } from 'lucide-react';

export const TimingsAndLocationSection: React.FC = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay();
  
  const isOpenNow = currentDay === 0 
    ? (currentHour >= 17 && currentHour < 20) 
    : (currentHour >= 17 && currentHour < 23);

  return (
    <section id="timings-location" className="py-14 bg-white border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 pb-3 border-b border-slate-200">
          <div className="inline-block bg-blue-900 text-amber-300 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase mb-1 border border-amber-400">
            VISIT & TIMINGS
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-blue-950 uppercase">
            Schedule & Location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Timings & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Banner */}
            <div className={`p-4 rounded-2xl border-l-4 shadow-2xs ${
              isOpenNow 
                ? 'bg-amber-50 border-amber-500 text-blue-950' 
                : 'bg-slate-100 border-slate-400 text-slate-800'
            }`}>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isOpenNow ? 'Clinic Currently Open' : 'Evening Clinic Opens at 5:00 PM'}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                {isOpenNow 
                  ? 'Dr. Chetan Kumar is consulting patients at Wilayatabad.' 
                  : 'Pre-book your digital token online anytime to secure your turn.'}
              </p>
            </div>

            {/* Operating Hours */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-2.5 shadow-2xs">
              <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block">
                Consultation Hours
              </span>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200 text-xs">
                <span className="font-semibold text-slate-800">Monday – Saturday</span>
                <span className="font-mono font-bold text-blue-950">5:00 PM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-1.5 text-xs">
                <span className="font-semibold text-slate-800">Sunday</span>
                <span className="font-mono font-bold text-amber-700">5:00 PM – 8:00 PM</span>
              </div>
            </div>

            {/* Helpline details */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-2 text-xs shadow-2xs">
              <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block">
                Direct Contact
              </span>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-200">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-600" /> Phone & WhatsApp
                </span>
                <a href={`tel:${CLINIC_INFO.phone}`} className="font-mono font-bold text-blue-950 hover:underline">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-600" /> Email
                </span>
                <a href={`mailto:${CLINIC_INFO.email}`} className="font-medium text-slate-700 hover:text-blue-950">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block">Address</span>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">{CLINIC_INFO.address}</p>
                  <p className="text-[11px] text-slate-500">Landmark: Near Bada Board, Pak Colony SITE</p>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-900 bg-white border border-slate-300 hover:bg-slate-100 flex items-center gap-1 shrink-0 shadow-2xs"
                >
                  <Navigation className="w-3 h-3 text-amber-600" />
                  Map
                </a>
              </div>

              <div className="relative border-2 border-slate-300 bg-slate-200 rounded-2xl overflow-hidden h-64 sm:h-72">
                <iframe
                  title="Hope Family Clinic Location Map"
                  src="https://maps.google.com/maps?q=Wilayatabad+Manghopir+Road+Pak+Colony+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="mt-3.5 pt-3 border-t border-slate-200 flex justify-between text-[11px] text-slate-500">
              <span>Manghopir Road artery access</span>
              <a href={CLINIC_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="text-blue-900 font-bold underline">
                Get Driving Directions
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
