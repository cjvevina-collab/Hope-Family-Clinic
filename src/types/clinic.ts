export type TokenStatus = 'waiting' | 'in-consultation' | 'completed' | 'cancelled';

export interface PatientToken {
  id: string;
  tokenNumber: string; // e.g. "HF-042"
  patientName: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female' | 'Child' | 'Other';
  reason: string;
  category: 'General Checkup' | 'Fever & Infection' | 'Diabetes & Hypertension' | 'Pediatric Care' | 'Emergency Priority';
  date: string;
  bookingTime: string;
  estimatedTime: string;
  queuePosition: number;
  status: TokenStatus;
  notes?: string;
}

export interface QueueState {
  currentServingToken: string;
  currentPatientName?: string;
  totalTokensIssuedToday: number;
  estimatedWaitMinutes: number;
  doctorStatus: 'In Consultation' | 'In Clinic' | 'Break' | 'Clinic Closed';
  tokens: PatientToken[];
}

export interface ClinicService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  iconName: string;
  duration: string;
}

export interface DoctorProfile {
  name: string;
  designation: string;
  degrees: string[];
  rmpNumber: string;
  currentRole: string;
  hospitals: string[];
  specialties: string[];
  languages: string[];
}

export interface ClinicTiming {
  days: string;
  hours: string;
  isOpenToday: boolean;
  notes?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  area: string;
  feedback: string;
  rating: number;
  date: string;
  serviceReceived: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
