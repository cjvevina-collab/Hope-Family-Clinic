import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Menu, X, Ticket, Search } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: () => void;
  onOpenLiveQueue: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookingModal,
  onOpenLiveQueue,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Pure Brand Logo Emblem */}
          <a href="#" className="flex items-center shrink-0">
            <img 
              src={CLINIC_INFO.logoUrl} 
              alt="Hope Family Clinic Emblem" 
              className="h-14 w-auto object-contain transition-transform duration-200 hover:scale-102"
              onError={(e) => {
                (e.target as HTMLImageElement).src = CLINIC_INFO.localLogoUrl;
              }}
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-slate-700">
            <a href="#overview" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              Home
            </a>
            <a href="#doctor" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              About Doctor
            </a>
            <a href="#services" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#live-queue" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Live Tokens
            </a>
            <a href="#video-tour" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              Clinic Tour
            </a>
            <a href="#timings-location" className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: Very Compact Small Action Buttons with gentle rounding */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenLiveQueue}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-950 hover:bg-slate-100 border border-slate-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 shadow-2xs"
            >
              <Search className="w-3 h-3 text-amber-600" />
              Track Turn
            </button>
            <button
              onClick={onOpenBookingModal}
              className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 border border-amber-400 transition-all shadow-xs whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-98"
            >
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              Book Token
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBookingModal}
              className="px-2.5 py-1 rounded-md text-xs font-bold text-white bg-blue-900 border border-amber-400"
            >
              Book Token
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-slate-800 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-amber-400 px-5 py-4 space-y-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 hover:text-amber-700"
          >
            Home
          </a>
          <a
            href="#doctor"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 hover:text-amber-700"
          >
            Dr. Chetan Kumar (MBBS DOW)
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 hover:text-amber-700"
          >
            Services
          </a>
          <a
            href="#live-queue"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 hover:text-amber-700 flex items-center justify-between"
          >
            <span>Live Tokens</span>
            <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">Online</span>
          </a>
          <a
            href="#video-tour"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 hover:text-amber-700"
          >
            Clinic Video
          </a>
          <a
            href="#timings-location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-amber-700"
          >
            Contact & Location
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-2 rounded-lg text-xs font-bold text-white bg-blue-900 border border-amber-400 text-center shadow-xs"
            >
              Book Token Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
