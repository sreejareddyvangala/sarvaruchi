import { useState } from "react";
import { MENU_PAGE_IMAGES } from "../../data/images";
import { Lightbox, type LightboxSlide } from "../Lightbox";
import { Reveal } from "../Reveal";
import { ZoomIcon } from "../Icons";

/**
 * Browse the original menu artwork, page by page, without leaving the site.
 * The full PDF stays available alongside it for anyone who wants the document.
 */
export function MenuPageViewer({ variant }: { variant: "vegetarian" | "nonVegetarian" }) {
  const pages = MENU_PAGE_IMAGES[variant];
  const [open, setOpen] = useState<number | null>(null);

  const slides: LightboxSlide[] = pages.map((page) => ({
    src: page.src,
    alt: page.alt,
    caption: `Page ${page.page} of ${pages.length}`,
  }));

  return (
    <>
      <ul className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {pages.map((page, i) => (
          <Reveal as="li" key={page.src} delay={(i % 5) * 60}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View menu page ${page.page}`}
              className="group relative block w-full overflow-hidden rounded-lg border border-sand bg-parchment shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift"
            >
              <div className="aspect-[595/842] overflow-hidden">
                <img
                  src={page.src}
                  alt={page.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-maroon-deep/90 to-transparent px-2.5 pb-2 pt-8">
                <span className="font-heading text-[0.58rem] uppercase tracking-[0.16em] text-gold-light">
                  Page {page.page}
                </span>
                <span className="flex size-6 items-center justify-center rounded-full border border-cream/30 text-cream opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <ZoomIcon className="size-3" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      <Lightbox slides={slides} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}
