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
  clinicName: "Shanti Skin and Laser Center",
  phone: "09939330777",

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
      "Best Skin Specialist in Hinoo Ranchi | Shanti Skin and Laser Center | Vitiligo Treatment",
    description:
      "Shanti Skin and Laser Center in Hinoo, Ranchi provides expert dermatology treatments including vitiligo (leucoderma) treatment, laser procedures, acne care and advanced skin treatments.",
  },

  hero: {
    title: "Healthy Skin Starts Here",
    subtitle: "Skin & Laser Treatment Center",
    description:
      "Advanced dermatology and laser treatments for healthy and beautiful skin.",

    trustIcon: Star,

    stats: {
      rating: "4.2",
      patients: "250+",
    },

    cta: {
      primary: "Book Appointment",
      secondary: "Call Clinic",
    },
  },

  services: [
    {
      title: "Vitiligo Treatment",
      description:
        "Specialized treatment for vitiligo (leucoderma / safed daag) using modern dermatology techniques.",
      image: assets.services.dermatology,
      icon: Sparkles,
    },
    {
      title: "Chemical Peels",
      description:
        "Professional chemical peel treatments to reduce pigmentation, acne scars and uneven skin tone.",
      image: assets.services.hair,
      icon: Scissors,
    },
    {
      title: "Laser Skin Treatments",
      description:
        "Advanced laser procedures for pigmentation, scars and skin rejuvenation.",
      image: assets.services.laser,
      icon: Zap,
    },
    {
      title: "Cosmetic Dermatology",
      description:
        "Cosmetic procedures to improve skin texture, tone and overall appearance.",
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
      title: "Hair & Scalp Treatment",
      description:
        "Medical treatment for hair fall, scalp disorders and hair thinning.",
      image: assets.services.nails,
      icon: Pill,
    },
  ],

  doctor: {
    name: "Shanti Skin and Laser Center",
    title: "Dermatology & Laser Clinic",
    experience: "Skin Specialist",
    rating: "4.2",
    reviews: "258+",
    about:
      "Shanti Skin and Laser Center in Hinoo, Ranchi is a specialized dermatology clinic offering treatments for vitiligo (leucoderma), acne, pigmentation, hair loss and cosmetic skin procedures using modern laser technology.",

    highlights: [
      {
        text: "Vitiligo Treatment",
        icon: CheckCircle,
      },
      {
        text: "Laser Skin Treatments",
        icon: CheckCircle,
      },
      {
        text: "Chemical Peels",
        icon: CheckCircle,
      },
      {
        text: "Acne & Skin Treatments",
        icon: CheckCircle,
      },
    ],
  },

  contact: {
    address:
      "1st Floor, Laxmi Tower, Near HDFC Bank, Kilburn Colony, Shivpuri Colony, Hinoo, Ranchi, Jharkhand 834002",

    phone: "09939330777",
    whatsapp: "919939330777",

    areasServed: "Hinoo and nearby areas in Ranchi",

    rating: "4.2",
    totalReviews: "258",

    icons: {
      rating: Star,
      address: MapPin,
      phone: Phone,
      hours: Clock,
      whatsapp: MessageCircle,
    },

    googleReviewsLink:
      "https://www.google.com/search?q=Shanti+Skin+and+Laser+Center+Ranchi+reviews",

    hours: [
      { day: "Monday - Saturday", time: "9:00 AM - 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],

    mapEmbed:
      "https://www.google.com/maps?q=Laxmi+Tower+Hinoo+Ranchi&output=embed",
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
    copyright: "© 2026 Shanti Skin and Laser Center. All rights reserved.",

    quickLinks: [
      { name: "Home", link: "#", icon: Home },
      { name: "Services", link: "#services", icon: Stethoscope },
      { name: "Doctor", link: "#doctor", icon: User },
      { name: "Contact", link: "#contact", icon: MapPin },
    ],
  },
};
