import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import { assets } from "../config/assets";

export default function Navbar() {
  const navbar = siteConfig.navbar;
  const CallIcon = navbar.callButton.icon;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-md border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={assets.logo}
              alt={siteConfig.clinicName}
              className="h-10 hover:scale-110 transition"
            />

            <span className="font-semibold text-xl tracking-tight">
              {siteConfig.clinicName}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navbar.links.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Icon size={16} />
                  {item.name}
                </a>
              );
            })}

            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full text-sm shadow hover:shadow-lg hover:scale-105 transition"
            >
              <CallIcon size={16} />
              {navbar.callButton.text}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`w-6 h-[2px] bg-black transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-black transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <div className="flex flex-col py-6">
              {navbar.links.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-primary transition"
                  >
                    <Icon size={18} />
                    {item.name}
                  </a>
                );
              })}

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 px-6 py-4 text-primary font-medium hover:bg-gray-50 transition"
              >
                <CallIcon size={18} />
                {navbar.callButton.text}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
