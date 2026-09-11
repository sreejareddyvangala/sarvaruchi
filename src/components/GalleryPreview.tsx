import { Link } from "react-router-dom";
import { GALLERY, GALLERY_HIGHLIGHTS } from "../data/gallery";
import { foodImage } from "../data/images";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { ArrowRightIcon } from "./Icons";

const HIGHLIGHTS = GALLERY_HIGHLIGHTS.map((key) =>
  GALLERY.find((item) => item.image === key),
).filter((item): item is (typeof GALLERY)[number] => Boolean(item));

export function GalleryPreview() {
  return (
    <section id="gallery" className="bg-parchment-texture py-18 sm:py-22 lg:py-26">
      <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Food Gallery"
          title="Straight From Our Menu"
        />

        <ul className="mt-12 grid grid-cols-2 gap-3.5 sm:gap-4 lg:mt-14 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => {
            const image = foodImage(item.image);
            if (!image) return null;

            return (
              <Reveal as="li" key={item.image} delay={(i % 4) * 80}>
                <Link
                  to="/gallery"
                  className="group relative block overflow-hidden rounded-xl border border-sand bg-beige shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold/55 hover:shadow-lift"
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
                    className="absolute inset-0 bg-gradient-to-t from-maroon-deep/85 via-maroon-deep/10 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
                    <span className="block font-display text-[0.95rem] font-semibold leading-tight text-cream sm:text-base">
                      {item.caption}
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex justify-center" delay={100}>
          <ButtonLink
            to="/gallery"
            variant="outline"
            size="lg"
            iconRight={<ArrowRightIcon className="size-4" />}
          >
            View Full Gallery
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
