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
  clinicName: "Dr. M. S. Ali Dermatology Clinic",
  phone: "08603020202",

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
      "Best Dermatologist in Kantatoli Ranchi | Dr. M. S. Ali Dermatologist",
    description:
      "Dr. M. S. Ali Dermatology Clinic in Kantatoli, Ranchi provides expert treatment for acne, skin allergies, pigmentation, hair loss and cosmetic dermatology procedures.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Dermatology Clinic",
    description:
      "Professional dermatology care and advanced skin treatments by experienced dermatologist Dr. M. S. Ali in Ranchi.",

    trustIcon: Star,

    stats: {
      rating: "4.8",
      patients: "1000+",
    },

    cta: {
      primary: "Book Appointment",
      secondary: "Call Clinic",
    },
  },

  services: [
    {
      title: "Acne & Pimple Treatment",
      description:
        "Medical treatment for acne, pimples and acne scars using modern dermatology techniques.",
      image: assets.services.dermatology,
      icon: Sparkles,
    },
    {
      title: "Chemical Peels",
      description:
        "Advanced chemical peel procedures to reduce pigmentation, scars and uneven skin tone.",
      image: assets.services.hair,
      icon: Scissors,
    },
    {
      title: "Laser Skin Treatments",
      description:
        "Laser procedures for skin rejuvenation, scar reduction and pigmentation treatment.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Dermatology",
      description:
        "Botox, fillers and anti-aging cosmetic procedures to enhance facial appearance.",
      image: assets.services.cosmetic,
      icon: HeartPulse,
    },
    {
      title: "Skin Allergy Treatment",
      description:
        "Diagnosis and treatment for skin allergies, infections and chronic dermatological conditions.",
      image: assets.services.electrocautery,
      icon: ShieldCheck,
    },
    {
      title: "Hair Loss Treatment",
      description:
        "Medical solutions for hair fall, scalp conditions and hair thinning problems.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Dr. M. S. Ali",
    title: "Dermatologist",
    experience: "Skin Specialist",
    rating: "4.8",
    reviews: "19+",
    about:
      "Dr. M. S. Ali is a dermatologist based in Ranchi providing treatment for a wide range of skin and hair conditions. The clinic offers modern dermatology care with personalized treatment plans for healthier skin.",

    highlights: [
      {
        text: "Acne & Pimple Treatments",
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
        text: "Hair Loss Treatment",
        icon: CheckCircle,
      },
    ],
  },

  contact: {
    address:
      "Ali Kothi, Purulia Rd, Opp. Canaya Banquet Hall, KGN Colony, Kantatoli, Kathartoli, Ranchi, Jharkhand 834001",

    phone: "08603020202",
    whatsapp: "918603020202",

    areasServed: "Kantatoli and nearby areas in Ranchi",

    rating: "4.8",
    totalReviews: "19",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Dr+M+S+Ali+Dermatologist+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "7:00 AM - 8:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=Ali+Kothi+Purulia+Road+Ranchi&output=embed",
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
    copyright: "© 2026 Dr. M. S. Ali Dermatology Clinic. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
