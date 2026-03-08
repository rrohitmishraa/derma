import { siteConfig } from "../config/site";
import { assets } from "../config/assets";
import Section from "../components/Section";

export default function Hero() {
  const hero = siteConfig.hero;
  const TrustIcon = hero.trustIcon;
  const PhoneIcon = siteConfig.contact.icons.phone;

  return (
    <>
      <Section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-white to-blue-100">
        <div className="max-w-7xl mx-auto mt-[40px] sm:mt-[0px]  px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-4">{hero.subtitle}</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              {hero.title}
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              {hero.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 mb-8">
              <a
                href="#contact"
                className="bg-primary text-white px-7 py-3 rounded-full font-medium shadow-lg hover:scale-[1.04] transition"
              >
                {hero.cta.primary}
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
                  <PhoneIcon size={18} />
                </span>

                {hero.cta.secondary}
              </a>
            </div>

            {/* TRUST */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
              <TrustIcon size={18} className="text-yellow-500" />
              {hero.stats.rating} rating • {hero.stats.patients} happy patients
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            {/* PREMIUM GLOW (desktop only) */}
            <div className="hidden lg:block absolute w-[420px] h-[420px] bg-primary/20 blur-[120px] rounded-full" />

            {/* BACK IMAGE */}
            <div className="hidden sm:block absolute right-6 top-6 w-52 md:w-64 h-72 md:h-80 rounded-3xl overflow-hidden opacity-30">
              <img
                src={assets.hero}
                alt="Dermatology"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* MAIN IMAGE */}
            <div className="relative w-72 sm:w-80 md:w-[360px] lg:w-[420px] h-[380px] sm:h-[420px] md:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white">
              <img
                src={assets.hero}
                alt="Dermatology Clinic"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 text-sm animate-bounce">
          <span className="mb-1">Scroll</span>↓
        </div>
      </Section>
    </>
  );
}
