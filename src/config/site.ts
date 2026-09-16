/**
 * Central configuration for Sarva Ruchi Kitchen.
 * Every phone number, WhatsApp link and piece of business copy lives here —
 * nothing is hard-coded anywhere else in the application.
 */

export const BUSINESS_NAME = "Sarva Ruchi Kitchen";
export const TAGLINE = "Every Occasion . Every Flavor . One Experience";

export const PHONE_NUMBER_1 = "+91 9494222493";
export const PHONE_NUMBER_2 = "+91 9246583155";

/** Digits only, in international format — required by wa.me deep links. */
export const WHATSAPP_NUMBER_1 = "919494222493";
export const WHATSAPP_NUMBER_2 = "919246583155";

export type ContactLine = {
  id: "line-1" | "line-2";
  /** Display form, e.g. "+91 9494222493" */
  display: string;
  /** tel: form, e.g. "+919494222493" */
  tel: string;
  /** wa.me form, digits only */
  whatsapp: string;
};

export const CONTACT_LINES: ContactLine[] = [
  {
    id: "line-1",
    display: PHONE_NUMBER_1,
    tel: PHONE_NUMBER_1.replace(/\s/g, ""),
    whatsapp: WHATSAPP_NUMBER_1,
  },
  {
    id: "line-2",
    display: PHONE_NUMBER_2,
    tel: PHONE_NUMBER_2.replace(/\s/g, ""),
    whatsapp: WHATSAPP_NUMBER_2,
  },
];

export const SEO = {
  title: `${BUSINESS_NAME} | Premium Catering`,
  description:
    "Premium catering by Sarva Ruchi Kitchen for weddings, celebrations, corporate events and special occasions.",
} as const;

/** Primary navigation. `to` values starting with "/#" scroll to a section on the home page. */
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Catering", to: "/#catering" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Blog", to: "/#blog" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Contact", to: "/#contact" },
] as const;

/** What the header shows: the same sections, in the order they appear on the home page. */
export const HEADER_NAV_LINKS = NAV_LINKS;

export const BRAND_ASSETS = {
  logo: "/brand/logo.png",
  logoTransparent: "/brand/logo-transparent.png",
  emblem: "/brand/emblem.png",
} as const;
