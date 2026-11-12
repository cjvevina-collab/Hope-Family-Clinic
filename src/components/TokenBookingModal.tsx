import React, { useState } from 'react';
import { PatientToken } from '../types/clinic';
import { TokenCardView } from './TokenCardView';
import { CLINIC_INFO } from '../data/clinicData';
import { X, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TokenBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTokenGenerated: (token: PatientToken) => void;
  currentServingToken: string;
  nextAvailableNumber: number;
}

export const TokenBookingModal: React.FC<TokenBookingModalProps> = ({
  isOpen,
  onClose,
  onTokenGenerated,
  currentServingToken,
  nextAvailableNumber,
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Child' | 'Other'>('Male');
  const [category, setCategory] = useState<PatientToken['category']>('General Checkup');
  const [notes, setNotes] = useState('');
  const [sendToWhatsAppOnConfirm, setSendToWhatsAppOnConfirm] = useState(true);
  const [createdToken, setCreatedToken] = useState<PatientToken | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!patientName.trim()) {
      setError('Please enter patient name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 11-digit mobile number.');
      return;
    }
    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge <= 0 || parsedAge > 115) {
      setError('Please enter a valid age.');
      return;
    }

    setIsSubmitting(true);

    const formattedNum = `HF-${String(nextAvailableNumber).padStart(3, '0')}`;
    const now = new Date();
    const estTime = new Date(now.getTime() + (nextAvailableNumber - 38) * 12 * 60000);
    const estTimeString = estTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newToken: PatientToken = {
      id: `tk-${Date.now()}`,
      tokenNumber: formattedNum,
      patientName: patientName.trim(),
      phone: phone.trim(),
      age: parsedAge,
      gender,
      reason: notes.trim() || category,
      category,
      date: 'Today',
      bookingTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      estimatedTime: `${estTimeString} (approx)`,
      queuePosition: nextAvailableNumber - 38,
      status: 'waiting',
      notes: notes.trim()
    };

    setTimeout(() => {
      onTokenGenerated(newToken);
      setCreatedToken(newToken);
      setIsSubmitting(false);

      // If user checked send to WhatsApp, auto-trigger WhatsApp share
      if (sendToWhatsAppOnConfirm) {
        const text = encodeURIComponent(
          `🏥 *HOPE FAMILY CLINIC - ONLINE APPOINTMENT TOKEN*\n\n` +
          `Salam Dr. Chetan Kumar,\n` +
          `A new appointment token has been booked:\n\n` +
          `*Token Number:* ${formattedNum}\n` +
          `*Patient Name:* ${patientName.trim()}\n` +
          `*Contact:* ${phone.trim()}\n` +
          `*Age & Gender:* ${parsedAge} Yrs · ${gender}\n` +
          `*Category:* ${category}\n` +
          (notes.trim() ? `*Notes:* ${notes.trim()}\n` : '') +
          `*Estimated Time:* ${estTimeString}\n\n` +
          `*Clinic:* Plot D-228, Wilayatabad, Manghopir Road, Pak Colony SITE Town, Karachi.`
        );
        window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
      }

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          colors: ['#1e3a8a', '#d4af37', '#b8860b']
        });
      } catch (err) {}
    }, 350);
  };

  const handleReset = () => {
    setCreatedToken(null);
    setPatientName('');
    setPhone('');
    setAge('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b-2 border-amber-400 bg-blue-950 text-white">
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              {createdToken ? 'Token Confirmed' : 'Book Consultation Token'}
            </h3>
            <p className="text-[11px] text-amber-300">
              {createdToken ? 'Present this token at Wilayatabad clinic reception' : 'Online zero-wait queue reservation'}
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5">
          {createdToken ? (
            <div>
              <TokenCardView 
                token={createdToken} 
                currentServingToken={currentServingToken}
                onClose={handleReset}
              />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {error && (
                <div className="p-2.5 bg-rose-50 border border-rose-300 text-rose-800 text-xs rounded-xl flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{error}</span>
                </div>
              )}

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Aslam"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Mobile & Age */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0329-8373400"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl text-slate-900 bg-white font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="115"
                    placeholder="35"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                  Category / Gender
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['Male', 'Female', 'Child', 'Other'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`py-1.5 text-xs font-bold rounded-lg uppercase transition-all ${
                        gender === g
                          ? 'bg-blue-900 text-amber-300 border border-amber-400 shadow-2xs'
                          : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                  Consultation Reason
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as PatientToken['category'])}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="General Checkup">General Medical Checkup</option>
                  <option value="Fever & Infection">Fever, Flu & Viral Infection</option>
                  <option value="Diabetes & Hypertension">Blood Pressure & Diabetes Review</option>
                  <option value="Pediatric Care">Child / Pediatric Consultation</option>
                  <option value="Emergency Priority">Urgent Emergency Consultation</option>
                </select>
              </div>

              {/* WhatsApp notification toggle */}
              <label className="flex items-center gap-2 p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sendToWhatsAppOnConfirm}
                  onChange={(e) => setSendToWhatsAppOnConfirm(e.target.checked)}
                  className="w-4 h-4 text-emerald-600 rounded border-emerald-300"
                />
                <span className="text-xs font-semibold text-emerald-950">
                  Send token details to Clinic WhatsApp (0329 8373400) upon issue
                </span>
              </label>

              {/* Next Token Callout */}
              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-300 flex items-center justify-between text-xs text-blue-950">
                <span className="font-bold">Next Available Token: <strong>HF-{String(nextAvailableNumber).padStart(3, '0')}</strong></span>
                <span className="text-[10px] uppercase font-bold text-amber-800">Evening Clinic</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-xl border border-amber-400 transition-all shadow-xs active:scale-98"
                >
                  {isSubmitting ? 'Generating...' : 'Get Token'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
