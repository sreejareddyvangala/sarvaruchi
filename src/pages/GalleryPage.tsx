import { usePageMeta } from "../lib/usePageMeta";
import { BUSINESS_NAME } from "../config/site";
import { GALLERY } from "../data/gallery";
import { MenuPageHeader } from "../components/menu/MenuPageHeader";
import { FoodGallery } from "../components/FoodGallery";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/Button";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ArrowRightIcon } from "../components/Icons";
import { Ornament } from "../components/Ornament";

export function GalleryPage() {
  usePageMeta(
    "Food Gallery | " + BUSINESS_NAME,
    "A gallery of Sarva Ruchi Kitchen catering — biryanis, starters, live counters, South Indian dishes, breads and desserts.",
  );

  return (
    <>
      <MenuPageHeader
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Gallery", to: "/gallery" },
        ]}
        eyebrow="Food Gallery"
        title="Our Food"
        description={
          GALLERY.length +
          " dishes and spreads photographed for the Sarva Ruchi Kitchen menu — filter by course, or tap any image to view it full size."
        }
        actions={
          <>
            <WhatsAppButton message="gallery" size="lg" label="Enquire on WhatsApp" />
            <ButtonLink
              to="/menu"
              variant="outline-light"
              size="lg"
              iconRight={<ArrowRightIcon className="size-4" />}
            >
              Explore Our Menu
            </ButtonLink>
          </>
        }
      />

      <section className="bg-parchment-texture py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <FoodGallery />

          <Ornament className="mt-14" />

          <Reveal className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink to="/menu/vegetarian" variant="primary" size="lg">
              Vegetarian Menu
            </ButtonLink>
            <ButtonLink to="/menu/non-vegetarian" variant="outline" size="lg">
              Non-Vegetarian Menu
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
