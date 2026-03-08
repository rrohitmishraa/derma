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
  clinicName: "Madhuri Nursing Home & Sumitra Skin Clinic",
  phone: "09835149252",

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
      "Dermatologist in Kantatoli Ranchi | Madhuri Nursing Home & Sumitra Skin Clinic",
    description:
      "Madhuri Nursing Home & Sumitra Skin Clinic in Kantatoli, Ranchi provides dermatology treatments for acne, pigmentation, skin allergies and other skin conditions.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Dermatology Clinic",
    description:
      "Professional dermatology treatments for various skin conditions at Madhuri Nursing Home & Sumitra Skin Clinic.",

    trustIcon: Star,

    stats: {
      rating: "3.0",
      patients: "113+",
    },

    cta: {
      primary: "Book Appointment",
      secondary: "Call Clinic",
    },
  },

  services: [
    {
      title: "Acne & Skin Treatment",
      description:
        "Treatment for acne, pimples and common skin problems using modern dermatology methods.",
      image: assets.services.dermatology,
      icon: Sparkles,
    },
    {
      title: "Chemical Peels",
      description:
        "Professional chemical peel procedures to improve skin tone and reduce pigmentation.",
      image: assets.services.hair,
      icon: Scissors,
    },
    {
      title: "Laser Skin Treatments",
      description: "Laser procedures for skin rejuvenation and scar reduction.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Skin Treatments",
      description:
        "Cosmetic dermatology procedures for improving skin appearance and texture.",
      image: assets.services.cosmetic,
      icon: HeartPulse,
    },
    {
      title: "Skin Allergy Treatment",
      description:
        "Diagnosis and treatment of skin allergies, infections and chronic dermatological issues.",
      image: assets.services.electrocautery,
      icon: ShieldCheck,
    },
    {
      title: "Hair & Scalp Treatment",
      description:
        "Medical treatments for hair fall, scalp disorders and hair thinning.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Madhuri Nursing Home & Sumitra Skin Clinic",
    title: "Dermatology Clinic",
    experience: "Skin Care Services",
    rating: "3.0",
    reviews: "113+",
    about:
      "Madhuri Nursing Home & Sumitra Skin Clinic in Ranchi provides treatment for various skin and hair related conditions. The clinic focuses on dermatology care for common skin problems and cosmetic skin treatments.",

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
        text: "Hair Loss Treatment",
        icon: CheckCircle,
      },
    ],
  },

  contact: {
    address:
      "Purulia Rd, Beside Syndicate Bank, Kantatoli Chowk, Lalpur, Ranchi, Jharkhand 834001",

    phone: "09835149252",
    whatsapp: "919835149252",

    areasServed: "Kantatoli, Lalpur and nearby areas in Ranchi",

    rating: "3.0",
    totalReviews: "113",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Madhuri+Nursing+Home+Sumitra+Skin+Clinic+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "9:00 AM - 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=Kantatoli+Purulia+Road+Ranchi&output=embed",
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
    copyright:
      "© 2026 Madhuri Nursing Home & Sumitra Skin Clinic. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
