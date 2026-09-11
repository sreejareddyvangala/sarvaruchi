import { useMemo, useState } from "react";
import { GALLERY, GALLERY_FILTERS, type GalleryFilter } from "../data/gallery";
import { foodImage } from "../data/images";
import { Reveal } from "./Reveal";
import { Lightbox, type LightboxSlide } from "./Lightbox";
import { ZoomIcon } from "./Icons";
import { cn } from "../lib/cn";

/**
 * The curated food gallery. Images keep their own proportions inside a fixed
 * tile via object-cover, so nothing is ever stretched.
 */
export function FoodGallery({
  items = GALLERY,
  showFilters = true,
  columns = "four",
}: {
  items?: typeof GALLERY;
  showFilters?: boolean;
  columns?: "three" | "four";
}) {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.filter === filter)),
    [items, filter],
  );

  const slides: LightboxSlide[] = useMemo(
    () =>
      visible.map((item) => {
        const image = foodImage(item.image);
        return {
          src: image?.src ?? "",
          alt: image?.alt ?? item.caption,
          caption: item.caption,
          credit: image?.credit,
        };
      }),
    [visible],
  );

  const availableFilters = useMemo(
    () => GALLERY_FILTERS.filter((f) => f === "All" || items.some((i) => i.filter === f)),
    [items],
  );

  return (
    <>
      {showFilters && (
        <Reveal className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Filter gallery"
            className="no-scrollbar -mx-4 flex max-w-full gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {availableFilters.map((option) => (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={filter === option}
                onClick={() => {
                  setFilter(option);
                  setOpen(null);
                }}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 font-heading text-[0.66rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300",
                  filter === option
                    ? "border-maroon bg-maroon text-cream shadow-card"
                    : "border-sand bg-parchment text-ink-soft hover:border-gold/60 hover:text-maroon",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      <ul
        className={cn(
          "mt-8 grid gap-3.5 sm:gap-4",
          columns === "four"
            ? "grid-cols-2 lg:grid-cols-4"
            : "grid-cols-2 lg:grid-cols-3",
        )}
      >
        {visible.map((item, i) => {
          const image = foodImage(item.image);
          if (!image) return null;

          return (
            <Reveal as="li" key={item.image + item.caption} delay={(i % 4) * 70}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-xl border border-sand bg-beige shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold/55 hover:shadow-lift"
                aria-label={`View ${item.caption}`}
              >
                <div className="aspect-square overflow-hidden sm:aspect-[4/3]">
                  <img
                    src={image.src}
                    srcSet={image.srcSet}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 23vw, 46vw"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-t from-maroon-deep/85 via-maroon-deep/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                  aria-hidden="true"
                />

                <span className="absolute right-2.5 top-2.5 flex size-8 items-center justify-center rounded-full border border-cream/30 bg-maroon-deep/40 text-cream opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:opacity-100">
                  <ZoomIcon className="size-4" />
                </span>

                <span className="absolute inset-x-0 bottom-0 p-3 text-left sm:p-3.5">
                  <span className="block font-display text-[0.95rem] font-semibold leading-tight text-cream sm:text-base">
                    {item.caption}
                  </span>
                  <span className="mt-1 block font-heading text-[0.55rem] uppercase tracking-[0.18em] text-gold-light/85">
                    {item.filter}
                  </span>
                </span>
              </button>
            </Reveal>
          );
        })}
      </ul>

      <Lightbox slides={slides} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}
