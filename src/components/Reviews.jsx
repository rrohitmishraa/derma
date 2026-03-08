import { useEffect } from "react";
import { siteConfig } from "../config/site";
import Section from "../components/Section";

export default function Reviews() {
  const reviews = siteConfig.reviews;

  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = scriptId;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Section id="reviews" className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-3">{reviews.subtitle}</p>

            <h2 className="text-4xl font-bold tracking-tight">
              {reviews.title}
            </h2>

            <p className="text-gray-600 mt-2">{reviews.description}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <div
              className={`elfsight-app-${reviews.elfsightId}`}
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </Section>
    </>
  );
}
