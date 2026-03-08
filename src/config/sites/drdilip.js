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
  clinicName: "Dr Dilip N Prasad Dermatology Clinic",
  phone: "08249854511",

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
      "Best Dermatologist near Karbala Chowk Ranchi | Dr Dilip N Prasad Skin Specialist",
    description:
      "Dr Dilip N Prasad Dermatology Clinic in Ranchi provides treatment for acne, pigmentation, skin allergies, hair loss and other dermatological conditions.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Dermatology Clinic",
    description:
      "Professional dermatology care and advanced skin treatments by Dr Dilip N Prasad in Ranchi.",

    trustIcon: Star,

    stats: {
      rating: "4.3",
      patients: "16+",
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
        "Advanced chemical peel procedures to improve skin tone and reduce pigmentation.",
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
        "Cosmetic skin procedures to enhance appearance and reduce signs of aging.",
      image: assets.services.cosmetic,
      icon: HeartPulse,
    },
    {
      title: "Skin Allergy Treatment",
      description:
        "Diagnosis and treatment for skin allergies, infections and chronic skin conditions.",
      image: assets.services.electrocautery,
      icon: ShieldCheck,
    },
    {
      title: "Hair Loss Treatment",
      description:
        "Treatment for hair fall, scalp disorders and hair thinning problems.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Dr Dilip N Prasad",
    title: "Dermatologist",
    experience: "Skin Specialist",
    rating: "4.3",
    reviews: "16+",
    about:
      "Dr Dilip N Prasad is a dermatologist in Ranchi offering treatment for acne, pigmentation, hair loss and other skin conditions. The clinic focuses on personalized dermatology care using modern medical treatments.",

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
      "C/O Rajdhani Traders Gun Shop, Konka Road, Near Karbala Chowk, Ranchi, Jharkhand 834001",

    phone: "08249854511",
    whatsapp: "918249854511",

    areasServed: "Karbala Chowk and nearby areas in Ranchi",

    rating: "4.3",
    totalReviews: "16",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Dr+Dilip+N+Prasad+Dermatologist+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "9:00 AM - 7:30 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed: "https://www.google.com/maps?q=Karbala+Chowk+Ranchi&output=embed",
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
      "© 2026 Dr Dilip N Prasad Dermatology Clinic. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
