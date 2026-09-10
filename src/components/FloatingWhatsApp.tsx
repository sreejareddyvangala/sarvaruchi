import { CONTACT_LINES } from "../config/site";
import { whatsAppUrl, WHATSAPP_MESSAGES } from "../lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

/** Goes straight to WhatsApp on the first enquiry line — no picker in between. */
const HREF = whatsAppUrl(CONTACT_LINES[0].whatsapp, WHATSAPP_MESSAGES.floating);

/**
 * The site's only WhatsApp call-to-action: a plain icon pinned to the
 * bottom-right of the viewport.
 *
 * Deliberately static — no label, no state, no scroll listener. Every earlier
 * revision that reacted to what sat underneath it ended up moving or resizing
 * mid-scroll, which is the one thing it must never do. At 56px it also fits
 * inside the gutter beside the enquiry form on desktop, so holding still is
 * what keeps it clear of the fields.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 z-[90] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift ring-1 ring-black/5 transition-colors duration-300 hover:bg-[#1eb457] sm:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
