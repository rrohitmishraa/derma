import {
  Sparkles,
  Scissors,
  Zap,
  HeartPulse,
  ShieldCheck,
  Pill,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Star,
  Stethoscope,
  Home,
  User,
  MessageCircle,
} from "lucide-react";

import { assets } from "../assets";

export const siteConfig = {
  clinicName: "ISHAAN Skin Care Hospital",
  phone: "09431992950",

  navbar: {
    links: [
      {
        name: "Services",
        link: "#services",
        icon: Stethoscope,
      },
      {
        name: "Reviews",
        link: "#reviews",
        icon: Star,
      },
      {
        name: "Contact",
        link: "#contact",
        icon: MapPin,
      },
    ],

    callButton: {
      text: "Call Now",
      icon: Phone,
    },
  },

  seo: {
    title:
      "Best Dermatologist in Bariatu Ranchi | Dr. Saroj Rai | ISHAAN Skin Care Hospital",
    description:
      "ISHAAN Skin Care Hospital by Dr. Saroj Rai in Bariatu, Ranchi provides advanced dermatology and cosmetic treatments including acne care, pigmentation treatment, laser procedures and skin rejuvenation.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Dermatology & Skin Care Hospital",
    description:
      "Advanced dermatology and skin care treatments by experienced dermatologist Dr. Saroj Rai in Ranchi.",

    trustIcon: Star,

    stats: {
      rating: "4.5",
      patients: "1300+",
    },

    cta: {
      primary: "Book Appointment",
      secondary: "Call Clinic",
    },
  },

  services: [
    {
      title: "Acne & Skin Treatments",
      description:
        "Advanced treatments for acne, pimples, scars and other skin conditions.",
      image: assets.services.dermatology,
      icon: Sparkles,
    },
    {
      title: "Chemical Peels",
      description:
        "Professional chemical peel procedures to reduce pigmentation, acne scars and uneven skin tone.",
      image: assets.services.hair,
      icon: Scissors,
    },
    {
      title: "Laser Treatments",
      description:
        "Modern laser procedures for skin rejuvenation, pigmentation and scar reduction.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Dermatology",
      description:
        "Cosmetic procedures including Botox, dermal fillers and anti-aging treatments.",
      image: assets.services.cosmetic,
      icon: HeartPulse,
    },
    {
      title: "Skin Allergy Treatment",
      description:
        "Diagnosis and treatment of skin allergies, infections and chronic skin diseases.",
      image: assets.services.electrocautery,
      icon: ShieldCheck,
    },
    {
      title: "Hair & Scalp Treatments",
      description:
        "Hair fall treatment, scalp care and medical solutions for hair related conditions.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Dr. Saroj Rai",
    title: "Dermatologist",
    experience: "Skin Care Specialist",
    rating: "4.5",
    reviews: "1347+",
    about:
      "Dr. Saroj Rai is a well known dermatologist in Ranchi and founder of ISHAAN Skin Care Hospital. The clinic offers modern dermatology treatments for various skin, hair and cosmetic concerns using advanced technology and medical expertise.",

    highlights: [
      {
        text: "Acne & Skin Treatments",
        icon: CheckCircle,
      },
      {
        text: "Chemical Peels",
        icon: CheckCircle,
      },
      {
        text: "Laser Skin Treatments",
        icon: CheckCircle,
      },
      {
        text: "Cosmetic Dermatology",
        icon: CheckCircle,
      },
    ],
  },

  contact: {
    address:
      "2nd Floor, Orchid Mall, Bariatu Rd, Medical Chowk, Opp. RIMS Circle, Opposite Durga Mandir, Bariatu, Ranchi, Jharkhand 834009",

    phone: "09431992950",
    whatsapp: "919431992950",

    areasServed: "Bariatu, RIMS area and nearby locations in Ranchi",

    rating: "4.5",
    totalReviews: "1347",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Ishaan+Skin+Care+Hospital+Dr+Saroj+Rai+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "8:30 AM - 8:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=Orchid+Mall+Bariatu+Ranchi&output=embed",
  },

  gallery: {
    title: "Our Clinic",
    subtitle: "Clinic Gallery",

    images: [
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
      assets.services.cosmetic,
    ],
  },

  reviews: {
    title: "Google Reviews",
    subtitle: "Patient Reviews",
    description: "Real reviews from our patients",
    elfsightId: "",
  },

  footer: {
    copyright: "© 2026 ISHAAN Skin Care Hospital. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
