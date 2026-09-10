import { Hero } from "../components/Hero";
import { VegNonVegSplit } from "../components/VegNonVegSplit";
import { CateringCards } from "../components/CateringCards";
import { AboutSection } from "../components/AboutSection";
import { WhyUs } from "../components/WhyUs";
import { HowItWorks } from "../components/HowItWorks";
import { GalleryPreview } from "../components/GalleryPreview";
import { ContactSection } from "../components/ContactSection";
import { usePageMeta } from "../lib/usePageMeta";
import { SEO } from "../config/site";

export function Home() {
  usePageMeta(SEO.title, SEO.description);

  return (
    <>
      {/* hero, about, catering, menu, … gallery, contact — the same order the
          header lists, so scrolling down walks through the nav left to right */}
      <Hero />
      <AboutSection />
      <CateringCards />
      <VegNonVegSplit />
      <WhyUs />
      <HowItWorks />
      <GalleryPreview />
      <ContactSection />
    </>
  );
}
