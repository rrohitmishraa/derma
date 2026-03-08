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
  clinicName: "Dr M J Azad Skin Care Clinic",
  phone: "06299335270",

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
    title: "Best Skin Specialist in Ranchi | Dr M J Azad Skin Care Clinic",
    description:
      "Dr M J Azad Skin Care Clinic in Ranchi provides expert treatment for acne, pigmentation, skin allergies, hair loss and cosmetic dermatology procedures.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Skin Care Clinic",
    description:
      "Professional dermatology treatments for skin and hair conditions by experienced skin specialist Dr M J Azad.",

    trustIcon: Star,

    stats: {
      rating: "4.8",
      patients: "33+",
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
        "Effective medical treatments for acne, pimples and acne scars.",
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
        "Modern laser procedures for skin rejuvenation and scar reduction.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Dermatology",
      description:
        "Cosmetic skin treatments to enhance appearance and reduce signs of aging.",
      image: assets.services.cosmetic,
      icon: HeartPulse,
    },
    {
      title: "Skin Allergy Treatment",
      description:
        "Diagnosis and treatment of skin allergies, infections and chronic skin conditions.",
      image: assets.services.electrocautery,
      icon: ShieldCheck,
    },
    {
      title: "Hair Loss Treatment",
      description:
        "Medical solutions for hair fall, scalp disorders and hair thinning.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Dr M J Azad",
    title: "Skin Specialist",
    experience: "Dermatology Expert",
    rating: "4.8",
    reviews: "33+",
    about:
      "Dr M J Azad is a well known skin specialist in Ranchi providing treatment for acne, pigmentation, hair fall and various dermatological conditions with modern medical techniques.",

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
      "Das Gupta Old Clinic, Behind Anjuman Plaza, Tiwari Street Road, Mahatma Gandhi Main Rd, Opposite Hotel Arham Inn, Ranchi, Jharkhand 834001",

    phone: "06299335270",
    whatsapp: "916299335270",

    areasServed: "Ranchi and nearby areas",

    rating: "4.8",
    totalReviews: "33",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Dr+M+J+Azad+Skin+Specialist+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "9:00 AM - 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=Mahatma+Gandhi+Main+Road+Ranchi&output=embed",
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
    copyright: "© 2026 Dr M J Azad Skin Care Clinic. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
