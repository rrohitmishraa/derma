import { siteConfig } from "../config/site";
import { assets } from "../config/assets";
import Section from "../components/Section";

export default function Doctor() {
  const doctor = siteConfig.doctor;

  return (
    <>
      <Section id="doctor" className="py-16 md:py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Doctor Card */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute w-full h-full bg-primary/20 blur-[140px] rounded-full -z-10" />

              {/* Card */}
              <div className="relative w-[320px] h-[380px] sm:w-[400px] sm:h-[450px] lg:w-[460px] lg:h-[520px] rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Background Image */}
                <img
                  src={assets.doctor.imgDoc}
                  alt={doctor.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Floating Stats */}
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 grid grid-cols-3 gap-2 lg:gap-4 text-center">
                  <div className="bg-white/90 backdrop-blur rounded-xl py-2 lg:py-3 px-2">
                    <p className="text-sm lg:text-lg font-semibold">
                      {doctor.rating}
                    </p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>

                  <div className="bg-white/90 backdrop-blur rounded-xl py-2 lg:py-3 px-2">
                    <p className="text-sm lg:text-lg font-semibold">
                      {doctor.reviews}
                    </p>
                    <p className="text-xs text-gray-500">Reviews</p>
                  </div>

                  <div className="bg-white/90 backdrop-blur rounded-xl py-2 lg:py-3 px-2">
                    <p className="text-sm lg:text-lg font-semibold">
                      {doctor.experience}
                    </p>
                    <p className="text-xs text-gray-500">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-3">Meet the Specialist</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6 tracking-tight">
              {doctor.name}
            </h2>

            <p className="text-lg text-gray-600 mb-4 lg:mb-6">{doctor.title}</p>

            <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
              {doctor.about}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-md mx-auto lg:mx-0">
              {doctor.highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white px-3 lg:px-4 py-3 rounded-xl shadow-sm border border-gray-100"
                  >
                    <Icon size={18} className="text-primary shrink-0" />
                    <span className="text-gray-700 text-xs lg:text-sm">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
