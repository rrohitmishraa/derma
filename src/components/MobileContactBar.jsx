import { siteConfig } from "../config/site";

export default function MobileContactBar() {
  const contact = siteConfig.contact;

  const PhoneIcon = contact.icons.phone;
  const WhatsAppIcon = contact.icons.whatsapp;

  return (
    <>
      {/* Mobile Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-xl z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-2">
          {/* Call Button */}
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center justify-center gap-2 py-4 text-white bg-gradient-to-r from-primary to-secondary font-semibold"
          >
            <PhoneIcon size={18} />
            Call
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-4 text-white bg-green-500 font-semibold"
          >
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
