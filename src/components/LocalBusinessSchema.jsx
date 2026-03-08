import { siteConfig } from "../config/site";

export default function LocalBusinessSchema() {
  const contact = siteConfig.contact;
  const doctor = siteConfig.doctor;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    image: "/logo.png",
    telephone: contact.phone,

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Booty Rd, near Balpan Hospital and Medica Hospital, Deepatoli",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      postalCode: "834012",
      addressCountry: "IN",
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "220",
    },

    medicalSpecialty: "Dermatology",

    areaServed: {
      "@type": "City",
      name: "Ranchi",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
