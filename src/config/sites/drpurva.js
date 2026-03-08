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
  clinicName: "Dr. Purva Dermatology Clinic",
  phone: "06517100880",

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
    title: "Best Dermatologist in Lalpur Ranchi | Dr. Purva Skin Specialist",
    description:
      "Dr. Purva Dermatology Clinic in Lalpur, Ranchi provides expert treatment for acne, pigmentation, skin allergies, hair loss and cosmetic dermatology procedures.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Dermatology Clinic",
    description:
      "Professional dermatology care and advanced skin treatments by dermatologist Dr. Purva in Ranchi.",

    trustIcon: Star,

    stats: {
      rating: "4.3",
      patients: "47+",
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
        "Advanced chemical peel procedures to reduce pigmentation and improve skin tone.",
      image: assets.services.hair,
      icon: Scissors,
    },
    {
      title: "Laser Skin Treatments",
      description:
        "Laser procedures for pigmentation, scar reduction and skin rejuvenation.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Dermatology",
      description:
        "Cosmetic procedures to enhance facial appearance and reduce signs of aging.",
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
        "Treatment for hair fall, scalp disorders and hair thinning problems.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Dr. Purva",
    title: "Dermatologist",
    experience: "Skin Specialist",
    rating: "4.3",
    reviews: "47+",
    about:
      "Dr. Purva is a dermatologist practicing in Lalpur, Ranchi, offering treatment for various skin, hair and cosmetic concerns. The clinic focuses on providing personalized dermatology care using modern medical techniques.",

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
      "Ground Floor, Orchid Medical Centre, Hazaribagh Rd, Lalpur, Ranchi, Jharkhand 834001",

    phone: "06517100880",
    whatsapp: "916517100880",

    areasServed: "Lalpur and nearby areas in Ranchi",

    rating: "4.3",
    totalReviews: "47",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Dr+Purva+Dermatologist+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "2:00 PM - 8:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=Orchid+Medical+Centre+Lalpur+Ranchi&output=embed",
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
    copyright: "© 2026 Dr. Purva Dermatology Clinic. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
