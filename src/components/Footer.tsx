import { Link } from "react-router-dom";
import { BRAND_ASSETS, BUSINESS_NAME, MENU_PDFS, NAV_LINKS, TAGLINE } from "../config/site";
import { Ornament } from "./Ornament";
import { DocumentIcon } from "./Icons";
import { useWhatsApp } from "./WhatsAppProvider";
import { WHATSAPP_MESSAGES } from "../lib/whatsapp";

const MENU_LINKS = [
  { label: "Menu Overview", to: "/menu" },
  { label: "Vegetarian Menu", to: "/menu/vegetarian" },
  { label: "Non-Vegetarian Menu", to: "/menu/non-vegetarian" },
  { label: "Food Gallery", to: "/gallery" },
];

export function Footer() {
  const { openWhatsApp } = useWhatsApp();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon-texture text-cream/80">
      <div className="mx-auto w-full max-w-[84rem] px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <img
              src={BRAND_ASSETS.emblem}
              alt=""
              width={512}
              height={434}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-4 font-display text-3xl font-bold leading-none text-gold-foil">
              {BUSINESS_NAME}
            </p>
            <p className="mt-3 font-display text-[0.95rem] italic tracking-wide text-cream/70">
              {TAGLINE}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              Premium catering for weddings, celebrations, corporate events and every special
              occasion — built around an extensive vegetarian and non-vegetarian menu.
            </p>

          </div>

          {/* Links */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h3 className="font-heading text-[0.72rem] uppercase tracking-[0.22em] text-gold-light">
                Explore
              </h3>
              <ul className="mt-3 flex flex-col gap-0.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="inline-block py-1.5 text-sm text-cream/65 transition-colors duration-300 hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-[0.72rem] uppercase tracking-[0.22em] text-gold-light">
                Our Menu
              </h3>
              <ul className="mt-3 flex flex-col gap-0.5">
                {MENU_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="inline-block py-1.5 text-sm text-cream/65 transition-colors duration-300 hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={MENU_PDFS.vegetarian}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1.5 text-sm text-cream/65 transition-colors duration-300 hover:text-gold-light"
                  >
                    <DocumentIcon className="size-3.5" />
                    Veg Menu PDF
                  </a>
                </li>
                <li>
                  <a
                    href={MENU_PDFS.nonVegetarian}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1.5 text-sm text-cream/65 transition-colors duration-300 hover:text-gold-light"
                  >
                    <DocumentIcon className="size-3.5" />
                    Non-Veg Menu PDF
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-[0.72rem] uppercase tracking-[0.22em] text-gold-light">
              Catering Enquiries
            </h3>
            <button
              type="button"
              onClick={() => openWhatsApp(WHATSAPP_MESSAGES.quote)}
              className="mt-4 w-full rounded-full border border-gold/45 bg-gold/10 py-2.5 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-light transition hover:bg-gold/20"
            >
              Get a Catering Quote
            </button>
          </div>
        </div>

        <Ornament className="mt-14" tone="light" />

        <div className="mt-7 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-cream/45">
            © {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="font-heading text-[0.62rem] uppercase tracking-[0.24em] text-cream/30">
            {TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  );
}
