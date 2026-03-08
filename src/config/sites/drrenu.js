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
  clinicName: "Shree Renu Skin & Cosmetic Clinic",
  phone: "09153272110",

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
      "Best Skin & Cosmetic Clinic in Lalpur Ranchi | Shree Renu Skin & Cosmetic Clinic",
    description:
      "Shree Renu Skin & Cosmetic Clinic in Lalpur, Ranchi specializes in skincare and cosmetic treatments including facials, laser resurfacing, Botox, and dermal fillers.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Skin & Cosmetic Clinic",
    description:
      "Professional skincare and cosmetic treatments to improve the health and appearance of your skin.",

    trustIcon: Star,

    stats: {
      rating: "4.9",
      patients: "441+",
    },

    cta: {
      primary: "Book Appointment",
      secondary: "Call Clinic",
    },
  },

  services: [
    {
      title: "Facials & Skin Care",
      description:
        "Rejuvenating facial treatments to cleanse, hydrate and improve your skin's health.",
      image: assets.services.dermatology,
      icon: Sparkles,
    },
    {
      title: "Chemical Peels",
      description:
        "Advanced chemical peel treatments to reduce pigmentation, acne scars and uneven skin tone.",
      image: assets.services.hair,
      icon: Scissors,
    },
    {
      title: "Laser Resurfacing",
      description:
        "Modern laser procedures for pigmentation, scars and skin rejuvenation.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Treatments",
      description:
        "Botox injections and dermal fillers to enhance facial features and reduce signs of aging.",
      image: assets.services.cosmetic,
      icon: HeartPulse,
    },
    {
      title: "Microdermabrasion",
      description:
        "Non-invasive skin resurfacing to improve texture, tone and overall skin appearance.",
      image: assets.services.electrocautery,
      icon: ShieldCheck,
    },
    {
      title: "Non-Surgical Procedures",
      description:
        "A range of non-surgical cosmetic procedures tailored to your skin goals.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Shree Renu Skin & Cosmetic Clinic",
    title: "Skin & Cosmetic Specialist",
    experience: "Expert Care",
    rating: "4.9",
    reviews: "441+",
    about:
      "Shree Renu Skin & Cosmetic Clinic is a trusted skin and cosmetic clinic located in Lalpur, Ranchi. The clinic specializes in providing high-quality skincare and cosmetic treatments using modern techniques to help patients achieve healthy, glowing skin.",

    highlights: [
      {
        text: "Facials & Skin Treatments",
        icon: CheckCircle,
      },
      {
        text: "Chemical Peels",
        icon: CheckCircle,
      },
      {
        text: "Laser Resurfacing",
        icon: CheckCircle,
      },
      {
        text: "Botox & Dermal Fillers",
        icon: CheckCircle,
      },
    ],
  },

  contact: {
    address:
      "1st Floor, RS Tower, Opposite KC Roy Memorial Hospital, Lalpur, Ranchi, Jharkhand 834001",

    phone: "09153272110",
    whatsapp: "919153272110",

    areasServed: "Lalpur and nearby areas",

    rating: "4.9",
    totalReviews: "441",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Shree+Renu+Skin+Cosmetic+Clinic+Lalpur+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "10:00 AM - 9:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=RS+Tower+Lalpur+Ranchi&output=embed",
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
    copyright: "© 2026 Shree Renu Skin & Cosmetic Clinic. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
