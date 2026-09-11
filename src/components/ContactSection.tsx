import { CONTACT_LINES } from "../config/site";
import { telUrl } from "../lib/whatsapp";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { EnquiryForm } from "./EnquiryForm";
import { PhoneIcon } from "./Icons";
import { CornerFlourish } from "./Flourish";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-parchment-texture py-18 sm:py-22 lg:py-26"
    >
      <CornerFlourish
        className="absolute -left-4 bottom-6 size-32 text-gold/30 lg:size-44"
        position="bottom-left"
      />
      <CornerFlourish
        className="absolute -right-4 bottom-6 size-32 text-gold/30 lg:size-44"
        position="bottom-right"
      />

      <div className="relative mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Let&rsquo;s Make Your Celebration Delicious.</>}
          description="Send us the details of your event and we will come back with catering options and a quotation."
        />

        {/* Call us; the enquiry form carries the rest of the section. */}
        <Reveal className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={telUrl(CONTACT_LINES[0].tel)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-maroon bg-maroon px-6 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cream shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-deep hover:shadow-lift"
          >
            <PhoneIcon className="size-4" />
            Call Us
          </a>
        </Reveal>

        <div className="mx-auto mt-10 w-full max-w-3xl lg:mt-12">
          {/* Enquiry form */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-sand bg-parchment p-5 shadow-card sm:p-7">
              <h3 className="font-display text-2xl font-semibold text-maroon">
                Catering Enquiry
              </h3>
              <p className="mt-1.5 text-sm text-ink-muted">
                Fill in your event details and send them straight to us on WhatsApp.
              </p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
