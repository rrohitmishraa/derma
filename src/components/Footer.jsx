import { siteConfig } from "../config/site";
import { assets } from "../config/assets";

export default function Footer() {
  const contact = siteConfig.contact;
  const footer = siteConfig.footer;

  const PhoneIcon = contact.icons.phone;

  return (
    <>
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={assets.logo}
                alt={siteConfig.clinicName}
                className="h-10"
              />

              <span className="text-xl font-semibold">
                {siteConfig.clinicName}
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Professional dermatology care for skin, hair and nail problems.
              Trusted by patients in Ranchi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              {footer.quickLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="flex items-center gap-2 hover:text-white transition"
                    >
                      <Icon size={16} />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <div className="text-gray-400 text-sm space-y-3">
              <p>{contact.address}</p>

              <p className="flex items-center gap-2">
                <PhoneIcon size={16} />

                <a href={`tel:${contact.phone}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
            {footer.copyright}
          </div>
        </div>
      </footer>
    </>
  );
}
