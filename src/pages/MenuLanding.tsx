import { usePageMeta } from "../lib/usePageMeta";
import { BUSINESS_NAME } from "../config/site";
import { VegNonVegSplit } from "../components/VegNonVegSplit";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ButtonLink } from "../components/Button";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ArrowRightIcon } from "../components/Icons";

export function MenuLanding() {
  usePageMeta(
    "Our Menu | " + BUSINESS_NAME,
    "Browse the Sarva Ruchi Kitchen catering menus — an extensive premium vegetarian menu and a premium non-vegetarian catering package.",
  );

  return (
    <>
      {/* The very pair from the home page, rendered as-is — same cards, images,
          type and hover behaviour, so the two places cannot drift apart. The
          page opens straight onto them; the top padding is what clears the
          fixed site header, which the banner above used to provide. */}
      <div className="bg-parchment-texture pt-28 sm:pt-32 lg:pt-36">
        <VegNonVegSplit />
      </div>

      {/* Enquiry band */}
      <section className="bg-cream/55 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Need Help Choosing?"
            title="We'll Build the Menu With You"
            description="Tell us the occasion and guest count, and we will put together a menu across both sides of the kitchen."
          />
          <Reveal className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <WhatsAppButton message="menu" size="lg" label="Ask About the Menu" />
            <ButtonLink
              to="/#contact"
              variant="outline"
              size="lg"
              iconRight={<ArrowRightIcon className="size-4" />}
            >
              Send an Enquiry
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
