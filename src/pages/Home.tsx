import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { CateringCards } from "../components/CateringCards";
import { Testimonials } from "../components/Testimonials";
import { BlogSection } from "../components/BlogSection";
import { GalleryPreview } from "../components/GalleryPreview";
import { ContactSection } from "../components/ContactSection";
import { usePageMeta } from "../lib/usePageMeta";
import { SEO } from "../config/site";

export function Home() {
  usePageMeta(SEO.title, SEO.description);

  return (
    <>
      {/* hero, about, catering, testimonials, blog, gallery, contact — the same
          order the header lists, so scrolling down walks through the nav left to right */}
      <Hero />
      <AboutSection />
      <CateringCards />
      <Testimonials />
      <BlogSection />
      <GalleryPreview />
      <ContactSection />
    </>
  );
}
