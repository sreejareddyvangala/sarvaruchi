import { Link } from "react-router-dom";
import { CONTACT_LINES } from "../config/site";
import { foodImage } from "../data/images";
import { telUrl } from "../lib/whatsapp";
import { PhoneIcon, CutleryIcon } from "./Icons";

const HERO = foodImage("hero-banana-leaf-feast")!;

/**
 * Home hero: copy on the ivory ground at the left and the banana-leaf feast
 * beside it. The photograph is always shown whole, at its own proportions —
 * nothing cropped and nothing faded — so every dish on the leaf stays in view.
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

      <div className="relative mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:grid lg:min-h-[calc(100vh-6.75rem)] lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:px-8 xl:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] xl:gap-14">
        <div className="flex flex-col justify-center pb-10 pt-[7.5rem] sm:pt-[8.75rem] lg:pb-8 lg:pt-[9.75rem]">
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
              to="/#contact"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-gold/45 bg-parchment/85 px-3.5 font-heading text-[0.63rem] font-semibold uppercase tracking-[0.12em] text-maroon backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-parchment hover:shadow-card"
            >
              <CutleryIcon className="size-4 text-gold-deep" />
              Catering Enquiry
            </Link>
          </div>
        </div>

        {/* the whole photograph beside the copy — large screens. The column
            carries the same top and bottom padding as the copy, so the two
            centre on the same line below the fixed header. */}
        <div className="hidden lg:block lg:pb-8 lg:pt-[9.75rem]">
          <img
            src={HERO.src}
            alt={HERO.alt}
            width={1900}
            height={1095}
            fetchPriority="high"
            decoding="sync"
            className="h-auto w-full rounded-2xl border border-gold/30 shadow-lift"
          />
        </div>
      </div>

      {/* the same photograph, whole, as a full-width band — small and medium screens */}
      <div className="relative lg:hidden">
        <div className="h-px rule-gold" aria-hidden="true" />
        <img
          src={HERO.src}
          alt={HERO.alt}
          width={1900}
          height={1095}
          fetchPriority="high"
          decoding="sync"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
