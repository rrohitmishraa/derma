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
  clinicName: "Derma",
  phone: "9431508010",

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
    title: "Best Dermatologist in Bariatu Ranchi | Dr Sankesh Kumar Singh",
    description:
      "Dr Sankesh Kumar Singh is a trusted dermatologist in Bariatu Ranchi providing treatment for skin, hair and nail problems.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Dermatology Clinic",
    description:
      "Professional treatment for skin, hair and nail problems using modern dermatology techniques.",

    trustIcon: Star,

    stats: {
      rating: "4.9",
      patients: "200+",
    },

    cta: {
      primary: "Book Appointment",
      secondary: "Call Clinic",
    },
  },

  services: [
    {
      title: "General Dermatology",
      description:
        "Diagnosis and treatment of common skin conditions like acne, infections and rashes.",
      image: assets.services.dermatology,
      icon: Sparkles,
    },
    {
      title: "Hair Problems",
      description:
        "Advanced treatment for hair fall, dandruff and scalp disorders.",
      image: assets.services.hair,
      icon: Scissors,
    },
    {
      title: "Laser Treatment",
      description:
        "Modern laser procedures for pigmentation, scars and hair removal.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Dermatology",
      description:
        "Skin rejuvenation treatments to improve skin health and appearance.",
      image: assets.services.cosmetic,
      icon: HeartPulse,
    },
    {
      title: "Electrocautery",
      description: "Safe removal of skin tags, warts and benign growths.",
      image: assets.services.electrocautery,
      icon: ShieldCheck,
    },
    {
      title: "Nail Disorders",
      description:
        "Expert diagnosis and treatment of nail infections and deformities.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Dr. Sankesh Kumar Singh",
    title: "Dermatologist",
    experience: "10+ Years",
    rating: "4.9",
    reviews: "220+",
    about:
      "Dr. Sankesh Kumar Singh is a trusted dermatologist in Bariatu, Ranchi. He specializes in diagnosing and treating a wide range of skin, hair, and nail conditions using modern dermatology techniques.",

    highlights: [
      {
        text: "Skin Diseases Treatment",
        icon: CheckCircle,
      },
      {
        text: "Hair Fall Treatment",
        icon: CheckCircle,
      },
      {
        text: "Laser Procedures",
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
      "Booty Rd, near Balpan Hospital and Medica Hospital, Deepatoli, Bariatu, Ranchi, Jharkhand 834012",

    phone: "9431508010",
    whatsapp: "919431508010",

    areasServed: "Karamtoli and nearby areas",

    rating: "4.9",
    totalReviews: "220",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Dr+Sankesh+Kumar+Singh+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "10:00 AM - 9:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=Booty+Rd+Bariatu+Ranchi&output=embed",
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
    elfsightId: "5b588b75-148b-40e4-b4b6-f19f12327e1e",
  },

  footer: {
    copyright: "© 2026 Derma. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
