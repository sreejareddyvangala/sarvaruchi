import { ButtonLink } from "../components/Button";
import { Ornament } from "../components/Ornament";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { BRAND_ASSETS } from "../config/site";

export function NotFound() {
  return (
    <section className="bg-parchment-texture px-4 py-32 text-center sm:px-6">
      <div className="mx-auto flex max-w-lg flex-col items-center">
        <img src={BRAND_ASSETS.emblem} alt="" className="h-16 w-auto object-contain opacity-80" />
        <p className="eyebrow mt-6">Page Not Found</p>
        <h1 className="mt-3 font-display text-4xl text-maroon">We couldn't find that page</h1>
        <Ornament className="mt-5" />
        <p className="mt-5 text-ink-muted">
          The page you were looking for has moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
          <ButtonLink to="/" variant="primary">Back to Home</ButtonLink>
          <ButtonLink to="/#contact" variant="outline">Catering Enquiry</ButtonLink>
          <WhatsAppButton message="general" />
        </div>
      </div>
    </section>
  );
}
