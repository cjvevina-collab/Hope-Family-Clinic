import { ClinicService, DoctorProfile, ClinicTiming, Testimonial, FAQItem, PatientToken } from '../types/clinic';

export const CLINIC_INFO = {
  name: "HOPE FAMILY CLINIC",
  tagline: "Quality Healthcare You Can Trust",
  doctor: "Dr. Chetan Kumar",
  qualifications: "M.B.B.S (DOW), R.M.P",
  specialty: "Specialist Family Physician & General Practitioner",
  currentPosition: "Medical Officer, Sindh Government Health Department",
  phone: "0329 8373400",
  whatsappNumber: "923298373400",
  formattedPhone: "+92 329 8373400",
  email: "chetan.rajani@hotmail.com",
  address: "Plot D-228, Wilayatabad, Manghopir Road, Pak Colony, SITE Town, Karachi",
  landmark: "Near Bada Board, Pak Colony SITE",
  googleMapsUrl: "https://maps.google.com/?q=Plot+D-228+Wilayatabad+Manghopir+Road+Pak+Colony+SITE+Town+Karachi",
  logoUrl: "https://i.postimg.cc/HkWfYvg0/Hope-Family-Clinic-Emblem.png",
  localLogoUrl: "/hope-logo.png",
  videoUrl: "https://menascotrader.com/wp-content/uploads/2026/11/WhatsApp-Video-2026-11-10-at-4.23.08-PM.mp4",
  images: {
    hero: "/src/assets/images/hero_clinic_interior_1794484414470.jpg",
    doctor: "/src/assets/images/doctor_portrait_clinical_1794484414625.jpg",
    reception: "/src/assets/images/clinic_reception_lounge_1794484414543.jpg",
    examination: "/src/assets/images/family_health_examination_1794484414868.jpg",
  }
};

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Chetan Kumar",
  designation: "Consultant Family Physician & General Practitioner",
  degrees: ["M.B.B.S - Dow University of Health Sciences", "R.M.P - Registered Medical Practitioner"],
  rmpNumber: "PMDC / PMC Registered",
  currentRole: "Medical Officer - Sindh Government Health Department",
  hospitals: [
    "Ziauddin Hospital Clifton",
    "Liaquat National Hospital",
    "The Kidney Centre",
    "Kutiyana Memon Hospital",
    "Sindh Govt Health Department"
  ],
  specialties: [
    "General Clinical Medicine",
    "Hypertension & Heart Health",
    "Diabetes & Metabolic Care",
    "Pediatric & Child Health",
    "Infectious Diseases & Fevers",
    "Preventative Family Wellness"
  ],
  languages: ["English", "Urdu", "Sindhi"]
};

export const CLINIC_TIMINGS: ClinicTiming[] = [
  {
    days: "Monday – Saturday",
    hours: "5:00 PM – 11:00 PM",
    isOpenToday: true,
    notes: "Evening consultation hours"
  },
  {
    days: "Sunday",
    hours: "5:00 PM – 8:00 PM",
    isOpenToday: false,
    notes: "Special weekend evening slot"
  }
];

export const CLINIC_SERVICES: ClinicService[] = [
  {
    id: "general-consultation",
    title: "General Medical Practice",
    tagline: "Comprehensive diagnostic evaluations",
    description: "Detailed primary consultation for acute illnesses, fevers, viral infections, gastrointestinal disorders, and routine medical checkups.",
    features: ["Physical Examination", "Symptom Diagnosis", "Prescription & Dosage Guidance", "Follow-up Planning"],
    iconName: "Stethoscope",
    duration: "10-15 mins"
  },
  {
    id: "chronic-management",
    title: "Diabetes & Hypertension Care",
    tagline: "Long-term metabolic & cardiac health",
    description: "Structured monitoring protocols for blood sugar, blood pressure stabilization, diet consultation, and organ damage prevention.",
    features: ["Digital BP Monitoring", "Blood Glucose Profiling", "Lifestyle & Diet Regimen", "Complication Screening"],
    iconName: "Activity",
    duration: "15-20 mins"
  },
  {
    id: "pediatric-health",
    title: "Pediatric & Child Wellness",
    tagline: "Gentle care for infants and children",
    description: "Specialized clinical attention for childhood fevers, respiratory issues, digestive complaints, and nutritional growth tracking.",
    features: ["Child Growth Vitals", "Seasonal Viral Care", "Nutrition Guidance", "Gentle Examination"],
    iconName: "Baby",
    duration: "10-15 mins"
  },
  {
    id: "preventative-screening",
    title: "Preventative & Family Health",
    tagline: "Early detection and family wellness",
    description: "Routine health screening, risk factor assessments, and personalized family preventive care to stop illness before it progresses.",
    features: ["Vital Signs Profiling", "Lab Test Recommendations", "Family Medical History", "Annual Checkups"],
    iconName: "ShieldCheck",
    duration: "15 mins"
  },
  {
    id: "minor-procedures",
    title: "Minor Surgical & First Aid",
    tagline: "Sterile outpatient procedures",
    description: "Safe, sterile on-site wound care, suture dressings, nebulization for acute asthma, and emergency medical triage.",
    features: ["Sterile Dressing", "Nebulizer Therapy", "Burn & Cut Management", "Injections & IV Drips"],
    iconName: "Bandage",
    duration: "15-25 mins"
  },
  {
    id: "digital-token-system",
    title: "Zero-Wait Token System",
    tagline: "No crowded waiting room hassle",
    description: "Eliminate long waits with automated digital queue tokens. Track your live turn from home and arrive right when your number is called.",
    features: ["Real-time Counter", "Live Position Tracking", "WhatsApp Token Slip", "Priority Emergency Access"],
    iconName: "Ticket",
    duration: "Instant"
  }
];

export const INITIAL_QUEUE_DATA: PatientToken[] = [
  {
    id: "tk-38",
    tokenNumber: "HF-038",
    patientName: "Muhammad Imran",
    phone: "0300-8291044",
    age: 42,
    gender: "Male",
    reason: "Blood Pressure Review",
    category: "Diabetes & Hypertension",
    date: "Today",
    bookingTime: "05:15 PM",
    estimatedTime: "Now Serving",
    queuePosition: 0,
    status: "in-consultation"
  },
  {
    id: "tk-39",
    tokenNumber: "HF-039",
    patientName: "Ayesha Bibi",
    phone: "0312-9844211",
    age: 28,
    gender: "Female",
    reason: "Seasonal Flu & Throat Infection",
    category: "Fever & Infection",
    date: "Today",
    bookingTime: "05:25 PM",
    estimatedTime: "5:45 PM",
    queuePosition: 1,
    status: "waiting"
  },
  {
    id: "tk-40",
    tokenNumber: "HF-040",
    patientName: "Rashid Ali",
    phone: "0333-2198755",
    age: 51,
    gender: "Male",
    reason: "Fasting Blood Sugar Consultation",
    category: "Diabetes & Hypertension",
    date: "Today",
    bookingTime: "05:35 PM",
    estimatedTime: "6:00 PM",
    queuePosition: 2,
    status: "waiting"
  },
  {
    id: "tk-41",
    tokenNumber: "HF-041",
    patientName: "Master Rayan",
    phone: "0345-3412099",
    age: 6,
    gender: "Child",
    reason: "High Fever & Cough",
    category: "Pediatric Care",
    date: "Today",
    bookingTime: "05:40 PM",
    estimatedTime: "6:15 PM",
    queuePosition: 3,
    status: "waiting"
  },
  {
    id: "tk-42",
    tokenNumber: "HF-042",
    patientName: "Zubair Ahmed",
    phone: "0321-7786432",
    age: 34,
    gender: "Male",
    reason: "Stomach Acidity & Gastric Pain",
    category: "General Checkup",
    date: "Today",
    bookingTime: "05:45 PM",
    estimatedTime: "6:30 PM",
    queuePosition: 4,
    status: "waiting"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    patientName: "Haji Abdul Sattar",
    area: "Pak Colony, Karachi",
    feedback: "Dr. Chetan Kumar is a gem for our Wilayatabad area. Extremely polite, thorough in listening, and his diagnosis was spot on for my severe chest congestion. The online token saved me 2 hours of waiting.",
    rating: 5,
    date: "November 2026",
    serviceReceived: "General Clinical Care"
  },
  {
    id: "rev-2",
    patientName: "Shahana Parveen",
    area: "SITE Area, Karachi",
    feedback: "I brought my 4-year-old child at 8 PM when the clinic was busy. Because we already took the digital token on WhatsApp, we sat comfortably at home and reached right when our number was coming. Excellent arrangement!",
    rating: 5,
    date: "November 2026",
    serviceReceived: "Pediatric Care"
  },
  {
    id: "rev-3",
    patientName: "Tariq Mehmood",
    area: "Manghopir Road, Karachi",
    feedback: "Having a doctor with background at Dow, Ziauddin, and Liaquat National right here at Bada Board is a blessing. Dr. Chetan explains the medicine in simple terms without unnecessary tests.",
    rating: 5,
    date: "October 2026",
    serviceReceived: "Hypertension Review"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why should I book a token online before visiting?",
    answer: "Hope Family Clinic receives a high patient rush in evening hours. Taking an online token secures your exact place in the queue and gives you an estimated time, preventing long standing hours at the clinic.",
    category: "Tokens"
  },
  {
    id: "faq-2",
    question: "What are the clinic days and consultation timings?",
    answer: "The clinic operates daily Monday through Saturday from 5:00 PM to 11:00 PM, and on Sundays from 5:00 PM to 8:00 PM.",
    category: "Timings"
  },
  {
    id: "faq-3",
    question: "How do I check my live position in the queue?",
    answer: "Simply open this website and click 'Check Token Status'. Enter your token number or registered mobile number to see real-time patients ahead of you.",
    category: "Tokens"
  },
  {
    id: "faq-4",
    question: "What if there is a severe medical emergency?",
    answer: "Critical emergencies are given immediate triage by Dr. Chetan Kumar. If you have an urgent medical condition, call us directly at 0329 8373400 or proceed directly to the clinic.",
    category: "Emergency"
  },
  {
    id: "faq-5",
    question: "Where is the clinic situated in SITE Town?",
    answer: "Hope Family Clinic is located at Plot D-228, Wilayatabad, on Manghopir Road, Pak Colony, SITE Town, Karachi, conveniently situated near Bada Board.",
    category: "Location"
  }
];
