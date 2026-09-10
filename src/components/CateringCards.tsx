import type { ReactNode } from "react";
import { OCCASIONS, type OccasionIcon } from "../data/catering";
import { foodImage } from "../data/images";
import { Reveal } from "./Reveal";
import { useWhatsApp } from "./WhatsAppProvider";
import {
  RingsIcon, HeartIcon, CutleryIcon, CakeIcon,
  BriefcaseIcon, HouseIcon, DiyaIcon, GlassesIcon,
} from "./Icons";
import { LotusMark } from "./Ornament";

const ICONS: Record<OccasionIcon, ReactNode> = {
  rings: <RingsIcon className="size-5" />,
  heart: <HeartIcon className="size-5" />,
  cutlery: <CutleryIcon className="size-5" />,
  cake: <CakeIcon className="size-5" />,
  briefcase: <BriefcaseIcon className="size-5" />,
  house: <HouseIcon className="size-5" />,
  diya: <DiyaIcon className="size-5" />,
  glasses: <GlassesIcon className="size-5" />,
};

export function CateringCards() {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section id="catering" className="bg-parchment-texture py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        {/* heading with gold rules either side, as in the reference */}
        <Reveal className="flex flex-col items-center text-center">
          <LotusMark className="h-4 w-auto text-gold" />
          <div className="mt-2.5 flex w-full items-center justify-center gap-4 sm:gap-6">
            <span className="hidden h-px max-w-[13rem] flex-1 bg-gradient-to-r from-transparent to-gold/70 sm:block" aria-hidden="true" />
            <h2 className="font-display text-[2rem] font-bold leading-tight text-maroon sm:text-[2.5rem]">
              Made for Every Occasion
            </h2>
            <span className="hidden h-px max-w-[13rem] flex-1 bg-gradient-to-l from-transparent to-gold/70 sm:block" aria-hidden="true" />
          </div>
          <p className="mt-2.5 text-[0.95rem] text-ink-muted">
            Delicious food for life&rsquo;s most beautiful moments.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {OCCASIONS.map((occasion, i) => {
            const image = foodImage(occasion.image);
            return (
              <Reveal as="li" key={occasion.id} delay={(i % 4) * 60}>
                <button
                  type="button"
                  onClick={() => openWhatsApp(occasion.enquiry)}
                  aria-label={`Enquire about ${occasion.title} catering on WhatsApp`}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-sand/80 bg-parchment shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold/55 hover:shadow-lift"
                >
                  {/* The photograph gets the top of the card to itself, in a
                      box matching the 3:2 of the source files so nothing is
                      cropped and nothing is stretched. */}
                  <span className="block aspect-[3/2] w-full overflow-hidden bg-beige">
                    {image && (
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 23vw, 46vw"
                        className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                      />
                    )}
                  </span>

                  <span className="flex flex-1 flex-col items-center gap-2.5 border-t border-sand/70 px-2.5 pb-4 pt-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-parchment text-maroon shadow-card transition-colors duration-500 group-hover:border-gold group-hover:text-burgundy">
                      {ICONS[occasion.icon]}
                    </span>
                    <span className="text-balance text-center font-display text-[1.05rem] font-semibold leading-tight text-maroon">
                      {occasion.title}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
