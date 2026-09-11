import { CONTACT_LINES, type ContactLine } from "../config/site";

/**
 * Pre-written enquiry messages. Each entry point on the site sends a different
 * opening line so the kitchen knows what the customer was looking at.
 */
export const WHATSAPP_MESSAGES = {
  general:
    "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for my event.",
  header:
    "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for my event.",
  hero: "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for my event.",
  quote:
    "Hello Sarva Ruchi Kitchen, I would like to request a catering quote for my event.",
  gallery:
    "Hello Sarva Ruchi Kitchen, I saw your food gallery and would like to enquire about catering.",
  contact:
    "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for my event.",
  footer:
    "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for my event.",
  floating:
    "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for my event.",
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

/** Build a wa.me deep link for one of the business numbers. */
export function whatsAppUrl(whatsappNumber: string, message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Convenience: build the link from a message key. */
export function whatsAppUrlFor(
  line: ContactLine,
  key: WhatsAppMessageKey,
): string {
  return whatsAppUrl(line.whatsapp, WHATSAPP_MESSAGES[key]);
}

/** Click-to-call link — opens the dialer on mobile. */
export function telUrl(tel: string): string {
  return `tel:${tel}`;
}

/** The message a submitted enquiry form turns into. */
export type EnquiryDetails = {
  name: string;
  mobile: string;
  eventType: string;
  eventDate: string;
  guests: string;
  preference: string;
  location: string;
  requirements: string;
};

export function buildEnquiryMessage(d: EnquiryDetails): string {
  const line = (label: string, value: string) =>
    `${label}: ${value.trim() ? value.trim() : "-"}`;

  return [
    "Hello Sarva Ruchi Kitchen,",
    "",
    "I would like to enquire about catering.",
    "",
    line("Name", d.name),
    line("Mobile", d.mobile),
    line("Event Type", d.eventType),
    line("Event Date", d.eventDate),
    line("Guests", d.guests),
    line("Preference", d.preference),
    line("Location", d.location),
    line("Requirements", d.requirements),
    "",
    "Please share the catering details and quotation.",
    "",
    "Thank you.",
  ].join("\n");
}

export { CONTACT_LINES };
