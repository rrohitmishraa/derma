import { siteConfig } from "../config/site";
import Section from "./Section";

export default function Services() {
  const services = siteConfig.services;

  return (
    <>
      <Section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">Our Services</p>

            <h2 className="text-4xl font-bold tracking-tight">
              Dermatology Treatments
            </h2>

            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Advanced dermatology care for healthy skin, hair and nails.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group bg-white"
                >
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Curved Corner Icon */}
                  <div className="absolute top-0 right-0 bg-white w-20 h-20 rounded-bl-[32px] flex items-center justify-center shadow-md">
                    <Icon size={28} className="text-primary" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
