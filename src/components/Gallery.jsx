import { siteConfig } from "../config/site";
import Section from "./Section";

export default function Gallery() {
  const gallery = siteConfig.gallery;

  return (
    <>
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">{gallery.subtitle}</p>

            <h2 className="text-4xl font-bold tracking-tight">
              {gallery.title}
            </h2>
          </div>

          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
            {gallery.images.map((img, index) => (
              <div
                key={index}
                className="mb-8 break-inside-avoid rounded-3xl overflow-hidden shadow-md group"
              >
                <img
                  src={img}
                  alt={`Clinic ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
