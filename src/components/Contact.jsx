import { siteConfig } from "../config/site";
import Section from "../components/Section";

export default function Contact() {
  const contact = siteConfig.contact;

  const RatingIcon = contact.icons.rating;
  const AddressIcon = contact.icons.address;
  const PhoneIcon = contact.icons.phone;
  const HoursIcon = contact.icons.hours;

  return (
    <>
      <Section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-primary font-medium mb-3">Visit Our Clinic</p>

            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              Contact & Location
            </h2>

            {/* Rating */}
            <div className="mb-6 text-gray-700 flex items-center gap-2">
              <RatingIcon size={18} className="text-yellow-500" />
              {contact.rating} Google Rating • {contact.totalReviews} Reviews
            </div>

            <div className="space-y-6 text-gray-700">
              <div className="flex gap-3">
                <AddressIcon className="text-primary mt-1" size={18} />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p>{contact.address}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <PhoneIcon className="text-primary mt-1" size={18} />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-primary font-medium"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Areas Served</h4>
                <p>{contact.areasServed}</p>
              </div>

              <div className="flex gap-3">
                <HoursIcon className="text-primary mt-1" size={18} />
                <div className="w-full">
                  <h4 className="font-semibold mb-2">Clinic Hours</h4>

                  {contact.hours.map((h, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href={`tel:${contact.phone}`}
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full"
              >
                Call Clinic
              </a>

              <a
                href={contact.googleReviewsLink}
                target="_blank"
                rel="noreferrer"
                className="border px-6 py-3 rounded-full"
              >
                View Reviews
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg border">
            <iframe
              src={contact.mapEmbed}
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
              title="Clinic Location"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
