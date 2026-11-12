/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PatientToken } from './types/clinic';
import { INITIAL_QUEUE_DATA, CLINIC_INFO } from './data/clinicData';
import { TopMarquee } from './components/TopMarquee';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { LiveQueueBoard } from './components/LiveQueueBoard';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { ServicesSection } from './components/ServicesSection';
import { VideoTourSection } from './components/VideoTourSection';
import { TimingsAndLocationSection } from './components/TimingsAndLocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TokenBookingModal } from './components/TokenBookingModal';
import { ReceptionistDeskModal } from './components/ReceptionistDeskModal';
import { TokenCardView } from './components/TokenCardView';
import { X } from 'lucide-react';

export default function App() {
  const [tokens, setTokens] = useState<PatientToken[]>(() => {
    try {
      const saved = localStorage.getItem('hfc_tokens_queue');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {}
    return INITIAL_QUEUE_DATA;
  });

  const [currentServingToken, setCurrentServingToken] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('hfc_serving_token');
      if (saved) return saved;
    } catch (e) {}
    return 'HF-038';
  });

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isReceptionDeskOpen, setIsReceptionDeskOpen] = useState(false);
  const [activeViewToken, setActiveViewToken] = useState<PatientToken | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hfc_tokens_queue', JSON.stringify(tokens));
    } catch (e) {}
  }, [tokens]);

  useEffect(() => {
    try {
      localStorage.setItem('hfc_serving_token', currentServingToken);
    } catch (e) {}
  }, [currentServingToken]);

  // Next sequential token number
  const nextNumber = tokens.length > 0 
    ? Math.max(...tokens.map(t => {
        const num = parseInt(t.tokenNumber.replace(/\D/g, ''), 10);
        return isNaN(num) ? 0 : num;
      })) + 1
    : 43;

  const handleTokenGenerated = (newToken: PatientToken) => {
    setTokens(prev => [...prev, newToken]);
  };

  const handleCallNext = () => {
    setTokens(prev => {
      const updated = [...prev];
      const currentIndex = updated.findIndex(t => t.tokenNumber === currentServingToken);
      if (currentIndex !== -1) {
        updated[currentIndex] = { ...updated[currentIndex], status: 'completed' };
      }

      const nextWaiting = updated.find(t => t.status === 'waiting');
      if (nextWaiting) {
        nextWaiting.status = 'in-consultation';
        setCurrentServingToken(nextWaiting.tokenNumber);
      }
      return updated;
    });
  };

  const handleAddWalkIn = (name: string, phone: string, reason: string) => {
    const formattedNum = `HF-${String(nextNumber).padStart(3, '0')}`;
    const now = new Date();
    const estTime = new Date(now.getTime() + 15 * 60000);

    const newToken: PatientToken = {
      id: `tk-${Date.now()}`,
      tokenNumber: formattedNum,
      patientName: name,
      phone,
      age: 30,
      gender: 'Male',
      reason,
      category: 'General Checkup',
      date: 'Today',
      bookingTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      estimatedTime: `${estTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (walk-in)`,
      queuePosition: tokens.filter(t => t.status === 'waiting').length + 1,
      status: 'waiting'
    };

    setTokens(prev => [...prev, newToken]);
  };

  const scrollToQueue = () => {
    const el = document.getElementById('live-queue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-blue-950">
      
      {/* Top Running Marquee Announcement Bar */}
      <TopMarquee />

      {/* Main Top Navigation */}
      <Navbar 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        onOpenLiveQueue={scrollToQueue}
      />

      {/* Main Content Sections with streamlined flow */}
      <main className="flex-1">
        {/* Hero Banner Carousel Slider with left-right animations */}
        <HeroSlider 
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
          currentServingToken={currentServingToken}
        />

        {/* 100% Light-Theme Real-Time Token & Queue Management Board */}
        <LiveQueueBoard 
          tokens={tokens}
          currentServingToken={currentServingToken}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
          onOpenReceptionDesk={() => setIsReceptionDeskOpen(true)}
          onViewTokenCard={(token) => setActiveViewToken(token)}
        />

        {/* Doctor Profile Section - Dr. Chetan Kumar (MBBS DOW, RMP) */}
        <DoctorProfileSection 
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
        />

        {/* Medical Capabilities Slider */}
        <ServicesSection 
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
        />

        {/* Clinic Video Tour Walkthrough */}
        <VideoTourSection />

        {/* Timings, Schedule & Interactive Map */}
        <TimingsAndLocationSection />
      </main>

      {/* 100% Light Theme Footer with Clean Emblem Logo */}
      <Footer 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Fixed WhatsApp Helpline Button */}
      <FloatingWhatsApp 
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Token Booking Modal */}
      <TokenBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onTokenGenerated={handleTokenGenerated}
        currentServingToken={currentServingToken}
        nextAvailableNumber={nextNumber}
      />

      {/* Receptionist / Staff Desk Modal */}
      <ReceptionistDeskModal 
        isOpen={isReceptionDeskOpen}
        onClose={() => setIsReceptionDeskOpen(false)}
        tokens={tokens}
        currentServingToken={currentServingToken}
        onCallNext={handleCallNext}
        onAddWalkIn={handleAddWalkIn}
      />

      {/* Standalone View Token Slip Modal */}
      {activeViewToken && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-md w-full">
            <button
              onClick={() => setActiveViewToken(null)}
              className="absolute -top-10 right-0 text-white hover:text-amber-300 p-1.5 rounded-full bg-slate-800/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <TokenCardView 
              token={activeViewToken}
              currentServingToken={currentServingToken}
              onClose={() => setActiveViewToken(null)}
            />
          </div>
        </div>
      )}

    </div>
  );
}
