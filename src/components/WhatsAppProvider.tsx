import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { CONTACT_LINES } from "../config/site";
import { whatsAppUrl, telUrl, WHATSAPP_MESSAGES, type WhatsAppMessageKey } from "../lib/whatsapp";
import { useEscape, useScrollLock } from "../lib/useReveal";
import { WhatsAppIcon, PhoneIcon, CloseIcon } from "./Icons";
import { Ornament } from "./Ornament";

type Mode = "whatsapp" | "call";
type DialogState = { mode: Mode; message: string } | null;

type WhatsAppContextValue = {
  /** Open the number picker for a WhatsApp enquiry. */
  openWhatsApp: (message: string) => void;
  /** Open the number picker for a phone call. */
  openCall: () => void;
};

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null);

/**
 * Both business numbers accept enquiries, so every WhatsApp and call action on
 * the site routes through one picker instead of hard-coding a single number.
 */
export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState<DialogState>(null);

  const openWhatsApp = useCallback((message: string) => {
    setDialog({ mode: "whatsapp", message });
  }, []);

  const openCall = useCallback(() => {
    setDialog({ mode: "call", message: "" });
  }, []);

  const close = useCallback(() => setDialog(null), []);

  useEscape(dialog !== null, close);
  useScrollLock(dialog !== null);

  const value = useMemo(() => ({ openWhatsApp, openCall }), [openWhatsApp, openCall]);

  const isCall = dialog?.mode === "call";

  return (
    <WhatsAppContext.Provider value={value}>
      {children}

      {dialog && (
        <div
          className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-dialog-title"
        >
          <button
            type="button"
            className="absolute inset-0 animate-fade-in bg-maroon-deep/55 backdrop-blur-[2px]"
            onClick={close}
            aria-label="Close"
          />

          <div className="animate-scale-in relative w-full max-w-md overflow-hidden rounded-2xl border border-gold/35 bg-parchment shadow-lift">
            <div className="bg-maroon-texture px-6 py-5 text-center">
              <p className="eyebrow text-gold-light">Sarva Ruchi Kitchen</p>
              <h2 id="wa-dialog-title" className="mt-1.5 font-display text-2xl text-cream">
                {isCall ? "Call Us" : "Choose a WhatsApp Number"}
              </h2>
              <button
                type="button"
                onClick={close}
                className="absolute right-3 top-3 rounded-full p-2 text-cream/70 transition hover:bg-cream/10 hover:text-cream"
                aria-label="Close"
              >
                <CloseIcon className="size-4" />
              </button>
            </div>

            <div className="px-5 py-5 sm:px-6">
              <p className="text-center text-sm text-ink-muted">
                {isCall
                  ? "Both lines take catering enquiries — pick either one."
                  : "Your message is ready. Pick a line to send it on."}
              </p>

              <Ornament className="my-4" />

              <ul className="flex flex-col gap-2.5">
                {CONTACT_LINES.map((line) => (
                  <li key={line.id}>
                    <a
                      href={isCall ? telUrl(line.tel) : whatsAppUrl(line.whatsapp, dialog.message)}
                      target={isCall ? undefined : "_blank"}
                      rel={isCall ? undefined : "noopener noreferrer"}
                      onClick={close}
                      className="group flex items-center gap-3.5 rounded-xl border border-sand bg-white/70 px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-white hover:shadow-card"
                    >
                      <span
                        className={
                          "flex size-10 shrink-0 items-center justify-center rounded-full text-white transition group-hover:scale-105 " +
                          (isCall ? "bg-maroon" : "bg-[#25D366]")
                        }
                      >
                        {isCall ? <PhoneIcon className="size-5" /> : <WhatsAppIcon className="size-5" />}
                      </span>
                      {/* the line is named rather than numbered: the numbers stay
                          in the configuration for the wa.me link, but are never
                          shown anywhere in the interface */}
                      <span className="min-w-0">
                        <span className="block font-display text-lg font-semibold text-maroon">
                          {line.label}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp(): WhatsAppContextValue {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) throw new Error("useWhatsApp must be used inside <WhatsAppProvider>");
  return ctx;
}

/** Convenience for the common case of opening a pre-written enquiry. */
export function useWhatsAppMessage() {
  const { openWhatsApp } = useWhatsApp();
  return useCallback(
    (key: WhatsAppMessageKey) => openWhatsApp(WHATSAPP_MESSAGES[key]),
    [openWhatsApp],
  );
}
