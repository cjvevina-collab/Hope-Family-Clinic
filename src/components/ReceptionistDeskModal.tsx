import React, { useState } from 'react';
import { PatientToken } from '../types/clinic';
import { CLINIC_INFO } from '../data/clinicData';
import { X, Play, ShieldCheck, UserPlus, Volume2 } from 'lucide-react';

interface ReceptionistDeskModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokens: PatientToken[];
  currentServingToken: string;
  onCallNext: () => void;
  onAddWalkIn: (name: string, phone: string, reason: string) => void;
}

export const ReceptionistDeskModal: React.FC<ReceptionistDeskModalProps> = ({
  isOpen,
  onClose,
  tokens,
  currentServingToken,
  onCallNext,
  onAddWalkIn,
}) => {
  const [walkInName, setWalkInName] = useState('');
  const [walkInPhone, setWalkInPhone] = useState('');
  const [walkInReason, setWalkInReason] = useState('General Consultation');
  const [announcementMsg, setAnnouncementMsg] = useState('');

  if (!isOpen) return null;

  const handleWalkInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!walkInName.trim()) return;
    onAddWalkIn(walkInName.trim(), walkInPhone.trim() || '0329-8373400', walkInReason);
    setWalkInName('');
    setWalkInPhone('');
  };

  const handleAudioCall = () => {
    setAnnouncementMsg(`Now Calling Token ${currentServingToken} to Doctor's Consultation Room.`);
    setTimeout(() => {
      setAnnouncementMsg('');
    }, 4000);
  };

  const waitingTokens = tokens.filter(t => t.status === 'waiting');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl border-2 border-blue-950 shadow-2xl max-w-lg w-full overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b-2 border-amber-400 bg-blue-950 text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider">Clinic Queue Reception Control</h3>
              <p className="text-[10px] text-amber-300">Dr. Chetan Kumar's Evening Clinic Desk</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          
          {/* Main Action Bar */}
          <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Now In Room</span>
              <div className="text-3xl font-black text-blue-950 font-mono">{currentServingToken}</div>
              <span className="text-xs text-slate-600 font-medium">Waiting in queue: {waitingTokens.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onCallNext}
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 border border-amber-400 transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Play className="w-3 h-3 fill-current" />
                Call Next
              </button>
              <button
                onClick={handleAudioCall}
                title="Announce token"
                className="p-2 rounded-lg text-blue-950 bg-white border border-slate-300 hover:bg-slate-100 shadow-2xs"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {announcementMsg && (
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-300 text-blue-950 text-xs flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{announcementMsg}</span>
            </div>
          )}

          {/* Walk-In Form */}
          <div className="border border-slate-300 rounded-2xl p-3.5 bg-slate-50">
            <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <UserPlus className="w-3.5 h-3.5 text-amber-600" />
              Issue Walk-In Token
            </h4>
            <form onSubmit={handleWalkInSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Patient Name"
                required
                value={walkInName}
                onChange={(e) => setWalkInName(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-xs bg-white border border-slate-300 text-slate-900"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                value={walkInPhone}
                onChange={(e) => setWalkInPhone(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-xs bg-white border border-slate-300 text-slate-900 font-mono"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 border border-amber-500 shadow-2xs"
              >
                + Add Token
              </button>
            </form>
          </div>

          {/* Patient Queue List */}
          <div>
            <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-2">
              Active Patient Queue
            </h4>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {tokens.map((t) => (
                <div
                  key={t.id}
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                    t.tokenNumber === currentServingToken
                      ? 'bg-amber-100/70 border-amber-400 font-bold text-blue-950'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono">{t.tokenNumber}</span>
                    <span>{t.patientName}</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">{t.estimatedTime}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
