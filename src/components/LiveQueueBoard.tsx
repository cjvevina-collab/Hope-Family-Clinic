import React, { useState } from 'react';
import { PatientToken } from '../types/clinic';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Clock, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Ticket, 
  AlertCircle,
  Settings
} from 'lucide-react';

interface LiveQueueBoardProps {
  tokens: PatientToken[];
  currentServingToken: string;
  onOpenBookingModal: () => void;
  onOpenReceptionDesk: () => void;
  onViewTokenCard: (token: PatientToken) => void;
}

export const LiveQueueBoard: React.FC<LiveQueueBoardProps> = ({
  tokens,
  currentServingToken,
  onOpenBookingModal,
  onOpenReceptionDesk,
  onViewTokenCard,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<PatientToken | null | 'not-found'>(null);

  const currentServingPatient = tokens.find(t => t.tokenNumber === currentServingToken) || tokens[0];
  const waitingTokens = tokens.filter(t => t.status === 'waiting' && t.tokenNumber !== currentServingToken);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchResult(null);
      return;
    }

    const found = tokens.find(
      t => t.tokenNumber.toLowerCase() === query || 
           t.phone.replace(/\D/g, '').includes(query.replace(/\D/g, '')) ||
           t.patientName.toLowerCase().includes(query)
    );

    if (found) {
      setSearchResult(found);
    } else {
      setSearchResult('not-found');
    }
  };

  return (
    <section id="live-queue" className="py-14 bg-white border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-block bg-blue-900 text-amber-300 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase border border-amber-400 mb-2">
              REAL-TIME CLINIC QUEUE
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-blue-950 uppercase">
              Live Token System
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-lg">
              Check live consultations in real-time. Arrive at Wilayatabad clinic right at your turn.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenBookingModal}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 border border-amber-400 transition-colors shadow-xs flex items-center gap-1.5 active:scale-98"
            >
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              Book Token
            </button>
            <button
              onClick={onOpenReceptionDesk}
              title="Staff Control Desk"
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center gap-1"
            >
              <Settings className="w-3 h-3 text-slate-600" />
              Staff Desk
            </button>
          </div>
        </div>

        {/* Light Theme Live Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Serving Card (7 Cols) */}
          <div className="lg:col-span-7 bg-amber-50/40 border-2 border-amber-400/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-amber-200/80">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-950">
                  Current Token in Room
                </span>
                <span className="text-[11px] font-bold text-blue-900 bg-amber-200/80 px-2.5 py-0.5 rounded-full border border-amber-400">
                  Dr. Chetan Kumar Active
                </span>
              </div>

              {/* Massive Serving Token Display */}
              <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Token Number</span>
                  <div className="text-6xl sm:text-7xl font-black text-blue-950 font-mono tracking-tight">
                    {currentServingToken}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-amber-300 max-w-xs w-full shadow-2xs">
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">Patient</span>
                  <span className="text-sm font-bold text-slate-900 block">{currentServingPatient?.patientName || 'Patient Consultation'}</span>
                  <span className="text-xs text-slate-500 block mt-0.5">{currentServingPatient?.category || 'General Consultation'}</span>
                </div>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-amber-200/80 text-center">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">In Line</span>
                <span className="text-lg font-black text-blue-950 font-mono tabular-nums">{waitingTokens.length}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Avg Turn</span>
                <span className="text-lg font-black text-amber-700 font-mono tabular-nums">~12 min</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">Evening Hours</span>
                <span className="text-sm font-bold text-slate-800 font-mono mt-1 block">5 - 11 PM</span>
              </div>
            </div>
          </div>

          {/* Right: Search & Upcoming (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Search Token Card */}
            <div className="bg-white border border-slate-300 rounded-2xl p-4 shadow-2xs">
              <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block mb-2">
                Check My Token Position
              </span>

              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Token (e.g. HF-040) or Phone"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-blue-900 hover:bg-blue-950 text-white rounded-xl border border-amber-400 shrink-0"
                >
                  Search
                </button>
              </form>

              {searchResult && searchResult !== 'not-found' && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-950 font-mono text-sm">{searchResult.tokenNumber}</span>
                    <span className="text-[11px] font-bold text-amber-800">
                      {searchResult.status === 'in-consultation' ? 'Now In Room' : `${searchResult.queuePosition} Ahead in line`}
                    </span>
                  </div>
                  <p className="text-slate-700">Patient: <strong>{searchResult.patientName}</strong></p>
                  <p className="text-slate-600 text-[11px]">Reporting Window: {searchResult.estimatedTime}</p>
                  <button
                    onClick={() => onViewTokenCard(searchResult)}
                    className="text-xs text-blue-900 font-bold underline mt-1"
                  >
                    View Official Token Slip
                  </button>
                </div>
              )}

              {searchResult === 'not-found' && (
                <div className="mt-3 p-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-700 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>No matching token found. Book a token anytime.</span>
                </div>
              )}
            </div>

            {/* Upcoming Queue List */}
            <div className="bg-white border border-slate-300 rounded-2xl p-4 shadow-2xs">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Next In Line Today
              </span>

              <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                {waitingTokens.slice(0, 4).map((t, idx) => (
                  <div
                    key={t.id}
                    onClick={() => onViewTokenCard(t)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200 flex items-center justify-between text-xs cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-900 text-amber-300 font-mono font-bold text-[10px] flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="font-bold font-mono text-blue-950">{t.tokenNumber}</span>
                      <span className="text-[11px] text-slate-600 truncate max-w-[120px]">{t.patientName}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">{t.estimatedTime}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
