import { siteConfig } from "../config/site";

export default function FloatingCall() {
  const PhoneIcon = siteConfig.contact.icons.phone;

  return (
    <>
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="
        hidden md:flex
        items-center gap-2
        fixed bottom-6 right-6
        bg-gradient-to-r from-primary to-secondary
        text-white
        px-6 py-3
        rounded-full
        shadow-xl
        z-50
        hover:scale-105 hover:shadow-2xl
        transition-all duration-300
        "
      >
        <PhoneIcon size={18} />
        Call Clinic
      </a>
    </>
  );
}
