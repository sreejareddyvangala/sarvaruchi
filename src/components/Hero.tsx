import { Link } from "react-router-dom";
import { CONTACT_LINES } from "../config/site";
import { foodImage } from "../data/images";
import { telUrl } from "../lib/whatsapp";
import { PhoneIcon, CutleryIcon } from "./Icons";

const HERO = foodImage("hero-celebration")!;

/**
 * Home hero: copy on the ivory ground at the left, the celebration spread
 * running full-bleed off the right edge, the two blending through a soft
 * gradient rather than sitting in a framed card.
 */
export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-parchment-texture"
      aria-labelledby="hero-title"
    >
      {/* botanical motif, far left */}
      <img
        src="/brand/botanical.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 bottom-0 top-0 hidden h-full w-auto select-none opacity-80 md:block"
      />

      {/* the celebration spread down the right-hand side — large screens.
          The photograph is a 3:1 panorama and the panel it sits in runs about
          2.1–3.2:1 depending on viewport, so it fills the panel and is anchored
          right: that keeps the sign and the main biryani in frame and trims only
          the far left of the table, which the fade covers anyway. Fitting it
          instead would leave bands of empty ivory above and below. It fades out
          through a mask rather than a colour overlay, so it blends into the
          ivory ground with no seam at any width. */}
      <div className="absolute inset-y-0 right-0 hidden w-[92%] lg:block" aria-hidden="true">
        <img
          src={HERO.src}
          alt=""
          width={1750}
          height={583}
          fetchPriority="high"
          decoding="sync"
          className="size-full object-cover object-right"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 27%, rgba(0,0,0,0.1) 37%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.88) 45%, #000 48%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 27%, rgba(0,0,0,0.1) 37%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.88) 45%, #000 48%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center pb-10 pt-[6.5rem] sm:pt-[7.5rem] lg:min-h-[calc(100vh-5.5rem)] lg:max-w-[37rem] lg:pb-8 lg:pt-[8.5rem]">
          {/* PREMIUM CATERING, flanked by gold rules */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" aria-hidden="true" />
            <span className="size-1.5 rotate-45 bg-gold" aria-hidden="true" />
            <p className="eyebrow !tracking-[0.3em]">Premium Catering</p>
            <span className="size-1.5 rotate-45 bg-gold" aria-hidden="true" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold" aria-hidden="true" />
          </div>

          <h1
            id="hero-title"
            className="animate-rise mt-3.5 font-display text-[2.3rem] font-bold leading-[1.08] text-maroon sm:text-[2.85rem] lg:text-[2.95rem]"
          >
            Every Occasion.
            <br />
            Every Flavor.
            <br />
            <span className="text-gold-foil">One Experience.</span>
          </h1>

          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink-soft">
            Premium catering crafted for weddings, celebrations, corporate events and every
            special occasion.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
            <a
              href={telUrl(CONTACT_LINES[0].tel)}
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-maroon bg-maroon px-3.5 font-heading text-[0.63rem] font-semibold uppercase tracking-[0.12em] text-cream shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-deep hover:shadow-lift"
            >
              <PhoneIcon className="size-4" />
              Call Us
            </a>

            <Link
              to="/menu"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-gold/45 bg-parchment/85 px-3.5 font-heading text-[0.63rem] font-semibold uppercase tracking-[0.12em] text-maroon backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-parchment hover:shadow-card"
            >
              <CutleryIcon className="size-4 text-gold-deep" />
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>

      {/* the same photograph as a full-width band — small and medium screens */}
      <div className="relative lg:hidden">
        <div className="h-px rule-gold" aria-hidden="true" />
        <img
          src={HERO.src}
          alt={HERO.alt}
          width={1750}
          height={643}
          fetchPriority="high"
          decoding="sync"
          className="aspect-[16/9] w-full object-cover object-center sm:aspect-[21/9]"
        />
      </div>
    </section>
  );
}
