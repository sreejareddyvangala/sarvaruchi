import { HOW_IT_WORKS } from "../data/catering";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { useWhatsApp } from "./WhatsAppProvider";
import { WHATSAPP_MESSAGES } from "../lib/whatsapp";

export function HowItWorks() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section className="bg-cream/55 py-18 sm:py-22 lg:py-26">
      <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="Three Steps to Your Table" />

        <ol className="relative mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {/* connecting rule on desktop */}
          <div
            className="pointer-events-none absolute inset-x-[16%] top-9 hidden h-px rule-gold lg:block"
            aria-hidden="true"
          />

          {HOW_IT_WORKS.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 130} className="relative">
              <div className="flex h-full flex-col items-center rounded-2xl border border-sand bg-parchment px-6 py-8 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/55 hover:shadow-lift">
                <span className="flex size-[4.5rem] items-center justify-center rounded-full border border-gold/45 bg-gradient-to-b from-cream to-beige font-display text-2xl font-bold text-maroon shadow-inner">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-maroon">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex justify-center" delay={120}>
          <Button
            variant="gold"
            size="lg"
            onClick={() => openWhatsApp(WHATSAPP_MESSAGES.quote)}
          >
            Start Your Catering Enquiry
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
