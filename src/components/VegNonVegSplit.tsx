import { Link } from "react-router-dom";
import { foodImage } from "../data/images";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./Icons";
import { cn } from "../lib/cn";

/**
 * The two menu experiences, presented as the pair of wide feature cards from
 * the home page reference — copy on the left, the dish bleeding off the right.
 */
export function VegNonVegSplit() {
  return (
    <section id="menu" className="bg-parchment-texture pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto grid w-full max-w-[84rem] gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <FeatureCard
            tone="veg"
            eyebrow="Pure Veg Delights"
            title="Vegetarian Menu"
            blurb="A wide range of traditional, regional and global vegetarian offerings for every occasion."
            cta="Explore Veg Menu"
            to="/menu/vegetarian"
            imageKey="veg-thali-ref"
          />
        </Reveal>

        <Reveal delay={110}>
          <FeatureCard
            tone="nonveg"
            eyebrow="Rich & Flavourful"
            title="Non-Vegetarian Menu"
            blurb="A premium selection of non-vegetarian delicacies including biryanis, starters and chef specials."
            cta="Explore Non-Veg Menu"
            to="/menu/non-vegetarian"
            imageKey="chicken-biryani"
          />
        </Reveal>
      </div>
    </section>
  );
}

function FeatureCard({
  tone,
  eyebrow,
  title,
  blurb,
  cta,
  to,
  imageKey,
}: {
  tone: "veg" | "nonveg";
  eyebrow: string;
  title: string;
  blurb: string;
  cta: string;
  to: string;
  imageKey: string;
}) {
  const image = foodImage(imageKey)!;
  const veg = tone === "veg";

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lift",
        veg ? "border-emerald/25 bg-[#eef2e4] hover:border-emerald/45" : "border-sand bg-cream hover:border-gold/55",
      )}
    >
      {/* the dish, bleeding off the right edge and blending into the card */}
      <div className="absolute inset-y-0 right-0 hidden w-[56%] sm:block" aria-hidden="true">
        <img
          src={image.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: veg
              ? "linear-gradient(90deg, #eef2e4 0%, rgba(238,242,228,0.95) 16%, rgba(238,242,228,0.45) 38%, rgba(238,242,228,0) 62%)"
              : "linear-gradient(90deg, #f8f1e2 0%, rgba(248,241,226,0.95) 16%, rgba(248,241,226,0.45) 38%, rgba(248,241,226,0) 62%)",
          }}
        />
      </div>

      <div className="relative flex flex-col p-6 sm:min-h-[15rem] sm:max-w-[52%] sm:p-7">
        <p
          className={cn(
            "font-heading text-[0.64rem] font-semibold uppercase tracking-[0.24em]",
            veg ? "text-emerald/85" : "text-gold-deep",
          )}
        >
          {eyebrow}
        </p>

        <h2
          className={cn(
            "mt-2 font-display text-[1.85rem] font-bold leading-tight sm:text-[2.15rem]",
            veg ? "text-emerald" : "text-maroon",
          )}
        >
          {title}
        </h2>

        <p className={cn("mt-3 text-[0.9rem] leading-relaxed", veg ? "text-ink-soft" : "text-ink-soft")}>
          {blurb}
        </p>

        <Link
          to={to}
          className={cn(
            "mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full px-5 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-cream shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
            veg ? "bg-emerald hover:bg-[#0f5238]" : "bg-maroon hover:bg-maroon-deep",
          )}
        >
          {cta}
          <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* on the narrowest screens the dish sits below the copy instead */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="block aspect-[2/1] w-full object-cover object-center sm:hidden"
      />
    </article>
  );
}
