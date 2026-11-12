import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ChevronLeft, ChevronRight, Ticket, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onOpenBookingModal: () => void;
  currentServingToken: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenBookingModal,
  currentServingToken,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "DIGITAL CLINIC QUEUE SYSTEM",
      heading: "HOPE FAMILY CLINIC",
      highlight: "Zero Waiting Rush.",
      subtext: "Book your online consultation token and arrive at your scheduled turn.",
      image: CLINIC_INFO.images.hero,
      primaryBtn: "Book Token",
      secondaryBtn: "Check Queue",
      secondaryHref: "#live-queue"
    },
    {
      id: 2,
      tag: "CONSULTANT FAMILY PHYSICIAN",
      heading: "DR. CHETAN KUMAR",
      highlight: "M.B.B.S (DOW), R.M.P",
      subtext: "Medical Officer, Sindh Government Health Department. Premier clinical care.",
      image: CLINIC_INFO.images.doctor,
      primaryBtn: "Book Appointment",
      secondaryBtn: "Doctor Bio",
      secondaryHref: "#doctor"
    },
    {
      id: 3,
      tag: "COMPREHENSIVE MEDICAL PRACTICE",
      heading: "FAMILY HEALTHCARE",
      highlight: "Hypertension & Diabetes.",
      subtext: "Specialized chronic illness management, pediatric care, and diagnostic vitals.",
      image: CLINIC_INFO.images.examination,
      primaryBtn: "Book Checkup",
      secondaryBtn: "Our Services",
      secondaryHref: "#services"
    },
    {
      id: 4,
      tag: "WILAYATABAD, PAK COLONY SITE",
      heading: "MODERN CLINIC FACILITY",
      highlight: "Plot D-228 Manghopir Road.",
      subtext: "Evening consultation hours: Daily 5:00 PM – 11:00 PM, Sunday 5:00 PM – 8:00 PM.",
      image: CLINIC_INFO.images.reception,
      primaryBtn: "Book Token",
      secondaryBtn: "Location Map",
      secondaryHref: "#timings-location"
    }
  ];

  // Auto rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section id="overview" className="relative bg-white border-b border-amber-200/80 overflow-hidden">
      
      {/* Slide Viewport */}
      <div className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center">
        
        {/* Background Image with Light Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            key={active.id}
            src={active.image}
            alt={active.heading}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-slate-900/5 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            
            {/* Tagline / Subtitle */}
            <div className="inline-block bg-amber-500 text-blue-950 px-3 py-1 rounded-md text-[11px] font-extrabold tracking-widest uppercase border border-amber-600 shadow-2xs">
              {active.tag}
            </div>

            {/* Big Impact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 leading-[1.1] uppercase">
              {active.heading} <br />
              <span className="text-amber-600">{active.highlight}</span>
            </h1>

            {/* Short Minimalist Description */}
            <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed max-w-lg">
              {active.subtext}
            </p>

            {/* Live Token Status Strip */}
            <div className="p-3 bg-white/95 backdrop-blur-xs rounded-xl border-l-4 border-l-amber-500 border border-slate-200 shadow-sm max-w-md flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Live Queue Status</span>
                <span className="text-sm font-bold text-blue-950">
                  Serving Now: <strong className="font-mono text-amber-600 font-black">{currentServingToken}</strong>
                </span>
              </div>
              <span className="text-[11px] font-bold text-blue-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-300">
                Evening Session
              </span>
            </div>

            {/* Compact Action Buttons with subtle rounding */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenBookingModal}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-lg border border-amber-500 transition-all shadow-xs flex items-center gap-1.5 active:scale-98"
              >
                <Ticket className="w-3.5 h-3.5 text-amber-300" />
                {active.primaryBtn}
              </button>

              <a
                href={active.secondaryHref}
                className="px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 transition-colors shadow-2xs flex items-center gap-1"
              >
                <span>{active.secondaryBtn}</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>

          </div>
        </div>

        {/* Carousel Arrow Controls - Placed at the Bottom-Right Corner as requested! */}
        <div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-6 z-20 flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-10 h-10 rounded-lg bg-white/95 hover:bg-blue-950 hover:text-white text-slate-800 border border-slate-300 flex items-center justify-center transition-all shadow-md active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-10 h-10 rounded-lg bg-white/95 hover:bg-blue-950 hover:text-white text-slate-800 border border-slate-300 flex items-center justify-center transition-all shadow-md active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Slide Indicators Strip */}
      <div className="bg-slate-50/80 border-t border-slate-200 px-4 sm:px-8 py-2.5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-[11px] font-mono font-bold text-slate-500">
          Slide 0{currentSlide + 1} / 0{slides.length}
        </div>
      </div>

    </section>
  );
};
