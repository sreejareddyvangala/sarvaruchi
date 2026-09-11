import { TESTIMONIALS, type Testimonial } from "../data/testimonials";
import { cn } from "../lib/cn";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CornerFlourish } from "./Flourish";
import { LotusMark } from "./Ornament";

/**
 * Customer testimonials on the maroon ground: the first review is featured in a
 * tall card on the left, the rest sit two by two beside it. Tablets give the
 * featured card the full row; phones stack them all.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-maroon-texture py-18 sm:py-22 lg:py-26"
    >
      <CornerFlourish
        className="absolute -left-3 top-6 size-28 text-gold/20 sm:size-36"
        position="top-left"
      />
      <CornerFlourish
        className="absolute -right-3 top-6 size-28 text-gold/20 sm:size-36"
        position="top-right"
      />

      <div className="relative mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="Kind Words From Our Clients" tone="light" />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal
              as="li"
              key={testimonial.name}
              delay={i === 0 ? 0 : ((i - 1) % 2) * 90 + 60}
              className={cn(i === 0 && "sm:col-span-2 lg:col-span-1 lg:row-span-2")}
            >
              <TestimonialCard testimonial={testimonial} featured={i === 0} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  featured,
}: {
  testimonial: Testimonial;
  featured: boolean;
}) {
  return (
    <figure
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500 ease-out hover:-translate-y-1 sm:p-7",
        featured
          ? "border-gold/30 bg-gradient-to-br from-cream/[0.1] via-cream/[0.05] to-cream/[0.02] hover:border-gold/55 lg:p-9"
          : "border-cream/12 bg-cream/[0.045] hover:border-gold/40 hover:bg-cream/[0.075]",
      )}
    >
      {featured && (
        <CornerFlourish
          className="absolute -right-2 -top-2 size-20 text-gold/25 lg:size-24"
          position="top-right"
        />
      )}

      <div className="flex items-center gap-3" aria-hidden="true">
        <span
          className={cn(
            "font-display leading-[0.7] text-gold",
            featured ? "text-[5rem] lg:text-[6rem]" : "text-[3.6rem]",
          )}
        >
          &ldquo;
        </span>
        {featured && <LotusMark className="mt-2 h-4 w-auto text-gold/70" />}
      </div>

      <blockquote className={cn("flex-1", featured ? "mt-5 lg:mt-7" : "mt-3")}>
        <p
          className={cn(
            "font-display italic text-cream/90",
            featured
              ? "text-[1.45rem] leading-[1.45] sm:text-[1.6rem] lg:text-[1.85rem]"
              : "text-[1.15rem] leading-relaxed",
          )}
        >
          {testimonial.review}
        </p>
      </blockquote>

      <span
        className="mt-6 block h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-16"
        aria-hidden="true"
      />

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5">
        <span
          className={cn(
            "font-heading font-semibold uppercase tracking-[0.14em] text-gold-light",
            featured ? "text-[0.86rem]" : "text-[0.76rem]",
          )}
        >
          {testimonial.name}
        </span>
        <span className="rounded-full border border-gold/35 bg-maroon-deep/30 px-3 py-1 font-heading text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-cream/75">
          {testimonial.eventType}
        </span>
      </figcaption>

      {testimonial.sample && (
        <p className="mt-3 font-heading text-[0.55rem] uppercase tracking-[0.22em] text-cream/35">
          Sample review
        </p>
      )}
    </figure>
  );
}
