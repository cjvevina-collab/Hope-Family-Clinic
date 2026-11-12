import React, { useRef, useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export const VideoTourSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="video-tour" className="py-14 bg-slate-50/60 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-6 pb-3 border-b border-slate-200">
          <div className="inline-block bg-blue-900 text-amber-300 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase mb-1 border border-amber-400">
            VIDEO TOUR
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-blue-950 uppercase">
            Inside Hope Family Clinic
          </h2>
        </div>

        {/* Video Player & Facility Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Video Frame */}
          <div className="lg:col-span-7">
            <div className="relative border-4 border-amber-400 bg-black rounded-3xl overflow-hidden shadow-xl">
              <video
                ref={videoRef}
                src={CLINIC_INFO.videoUrl}
                playsInline
                className="w-full h-auto max-h-[440px] object-contain mx-auto bg-black cursor-pointer"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Big Center Play Overlay */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 bg-blue-950/40 flex items-center justify-center cursor-pointer"
                >
                  <button className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-blue-950 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>
                </div>
              )}

              {/* Controls */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-3.5 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button onClick={togglePlay} className="p-1 hover:text-amber-400">
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button onClick={toggleMute} className="p-1 hover:text-amber-400">
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-[11px] font-bold text-amber-300 hidden sm:inline">
                    Hope Family Clinic Tour
                  </span>
                </div>

                <button onClick={handleFullScreen} className="p-1 hover:text-amber-400">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="bg-white p-4.5 rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 shadow-2xs">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">01. Consultation Room</span>
              <h3 className="text-sm font-bold text-blue-950">Dr. Chetan Kumar (MBBS DOW)</h3>
              <p className="text-xs text-slate-600 mt-0.5">Equipped with diagnostic instruments for blood pressure, sugar, and vitals.</p>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-slate-200 border-l-4 border-l-blue-900 shadow-2xs">
              <span className="text-[10px] font-bold text-blue-900 uppercase tracking-wider block">02. Organized Waiting Area</span>
              <h3 className="text-sm font-bold text-blue-950">Zero Waiting Room Rush</h3>
              <p className="text-xs text-slate-600 mt-0.5">Spacious, comfortable seating managed by our online digital token system.</p>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 shadow-2xs">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">03. Wilayatabad Location</span>
              <h3 className="text-sm font-bold text-blue-950">Plot D-228, Manghopir Road</h3>
              <p className="text-xs text-slate-600 mt-0.5">Convenient location near Bada Board, Pak Colony SITE Town, Karachi.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
