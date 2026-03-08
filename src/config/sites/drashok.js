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
  clinicName: "Dr Ashok Kumar Singh Dermatologist Clinic",
  phone: "09572654019",

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
      "Best Dermatologist in Morabadi Ranchi | Dr Ashok Kumar Singh Dermatologist Clinic",
    description:
      "Dr Ashok Kumar Singh Dermatologist Clinic in Morabadi, Ranchi provides professional treatment for acne, skin allergies, pigmentation and cosmetic dermatology procedures.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Dermatology Clinic",
    description:
      "Expert dermatology treatments for skin, hair and cosmetic concerns by Dr Ashok Kumar Singh in Ranchi.",

    trustIcon: Star,

    stats: {
      rating: "2.8",
      patients: "85+",
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
        "Effective treatments for acne, pimples and acne scars using modern dermatology methods.",
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
      description:
        "Laser procedures for scar reduction, pigmentation treatment and skin rejuvenation.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Dermatology",
      description:
        "Non-surgical cosmetic procedures including anti-aging and skin rejuvenation treatments.",
      image: assets.services.cosmetic,
      icon: HeartPulse,
    },
    {
      title: "Skin Allergy Treatment",
      description:
        "Diagnosis and treatment for various skin allergies, infections and chronic skin conditions.",
      image: assets.services.electrocautery,
      icon: ShieldCheck,
    },
    {
      title: "Hair Loss Treatment",
      description:
        "Medical treatment for hair fall, scalp issues and hair thinning problems.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Dr Ashok Kumar Singh",
    title: "Dermatologist",
    experience: "Skin Specialist",
    rating: "2.8",
    reviews: "5+",
    about:
      "Dr Ashok Kumar Singh is a dermatologist based in Ranchi offering treatment for various skin and hair conditions. The clinic focuses on diagnosing and treating dermatological issues with modern medical techniques.",

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
      "18/9 New Area Morabadi, New Area, Morabadi, Ranchi, Jharkhand 834008",

    phone: "09572654019",
    whatsapp: "919572654019",

    areasServed: "Morabadi and nearby areas in Ranchi",

    rating: "2.8",
    totalReviews: "5",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Dr+Ashok+Kumar+Singh+Dermatologist+Clinic+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "9:00 AM - 7:30 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=Morabadi+New+Area+Ranchi&output=embed",
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
      "© 2026 Dr Ashok Kumar Singh Dermatologist Clinic. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
