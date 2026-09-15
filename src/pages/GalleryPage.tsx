import { usePageMeta } from "../lib/usePageMeta";
import { BUSINESS_NAME } from "../config/site";
import { GALLERY } from "../data/gallery";
import { PageHeader } from "../components/PageHeader";
import { FoodGallery } from "../components/FoodGallery";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/Button";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ArrowRightIcon } from "../components/Icons";
import { Ornament } from "../components/Ornament";

export function GalleryPage() {
  usePageMeta(
    "Food Gallery | " + BUSINESS_NAME,
    "Photographs of catering and food — buffet service, live counters, wedding feasts, corporate catering and traditional Indian dishes.",
  );

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Gallery", to: "/gallery" },
        ]}
        eyebrow="Food Gallery"
        title="Our Food"
        description={
          GALLERY.length +
          " photographs of catering and food — buffet service, live counters, wedding feasts and traditional dishes. Filter by occasion, or tap any image to view it full size."
        }
        actions={
          <>
            <WhatsAppButton message="gallery" size="lg" label="Enquire on WhatsApp" />
            <ButtonLink
              to="/#contact"
              variant="outline-light"
              size="lg"
              iconRight={<ArrowRightIcon className="size-4" />}
            >
              Catering Enquiry
            </ButtonLink>
          </>
        }
      />

      <section className="bg-parchment-texture py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <FoodGallery />

          <Ornament className="mt-14" />

          <Reveal className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink to="/#contact" variant="primary" size="lg">
              Catering Enquiry
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
