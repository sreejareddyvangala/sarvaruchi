import { useEffect, useMemo, useState } from "react";
import { VEG_MENU, VEG_MENU_NOTE, VEG_FRUIT_NOTE } from "../data/vegMenu";
import { countCategories, countItems } from "../data/menuTypes";
import { filterMenu, categoryCount, totalCount } from "../lib/menuSearch";
import { usePageMeta } from "../lib/usePageMeta";
import { MENU_PDFS, BUSINESS_NAME } from "../config/site";
import { MenuPageHeader } from "../components/menu/MenuPageHeader";
import { MenuToolbar } from "../components/menu/MenuToolbar";
import { MenuCategoryPanel } from "../components/menu/MenuCategoryPanel";
import { MenuPageViewer } from "../components/menu/MenuPageViewer";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/Button";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { DocumentIcon, ArrowRightIcon } from "../components/Icons";
import { Ornament } from "../components/Ornament";

const TOTAL_DISHES = countItems(VEG_MENU);
const TOTAL_CATEGORIES = countCategories(VEG_MENU);

export function VegetarianMenu() {
  usePageMeta(
    "Premium Vegetarian Menu | " + BUSINESS_NAME,
    "Browse the full Sarva Ruchi Kitchen vegetarian catering menu — " +
      TOTAL_CATEGORIES +
      " categories across refreshments, starters, live counters, mains, breads, rice and desserts.",
  );

  const [term, setTerm] = useState("");
  const [activeSection, setActiveSection] = useState<string>(VEG_MENU[0].id);

  const searching = term.trim().length >= 2;
  const filtered = useMemo(() => filterMenu(VEG_MENU, term), [term]);
  const resultCount = useMemo(() => (searching ? totalCount(filtered) : 0), [filtered, searching]);

  // track which section is in view so the tab strip stays in step
  useEffect(() => {
    if (searching) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActiveSection(visible.target.id.replace("section-", ""));
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    for (const section of VEG_MENU) {
      const node = document.getElementById("section-" + section.id);
      if (node) observer.observe(node);
    }
    return () => observer.disconnect();
  }, [searching]);

  const goToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById("section-" + id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <MenuPageHeader
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Menu", to: "/menu" },
          { label: "Vegetarian", to: "/menu/vegetarian" },
        ]}
        eyebrow="Premium"
        title="Vegetarian Menu"
        description={
          TOTAL_CATEGORIES +
          " categories and more than " +
          TOTAL_DISHES +
          " dishes — from refreshments and live chaat counters to biryanis, gravies, breads and a full dessert parlour."
        }
        actions={
          <>
            <ButtonLink
              href={MENU_PDFS.vegetarian}
              external
              variant="gold"
              size="lg"
              icon={<DocumentIcon className="size-4" />}
            >
              View Full Menu PDF
            </ButtonLink>
            <WhatsAppButton message="vegetarian" size="lg" label="Enquire on WhatsApp" />
            <ButtonLink
              to="/menu/non-vegetarian"
              variant="outline-light"
              size="lg"
              iconRight={<ArrowRightIcon className="size-4" />}
            >
              Non-Veg Menu
            </ButtonLink>
          </>
        }
      />

      <MenuToolbar
        sections={VEG_MENU}
        activeId={searching ? null : activeSection}
        onSelect={goToSection}
        term={term}
        onTermChange={setTerm}
        resultCount={resultCount}
      />

      <div className="bg-parchment-texture py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-sand bg-parchment px-6 py-16 text-center">
              <p className="font-display text-2xl text-maroon">
                No dishes match &ldquo;{term}&rdquo;.
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Try a shorter word — paneer, biryani, dosa or jamun.
              </p>
              <button
                type="button"
                onClick={() => setTerm("")}
                className="mt-5 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-maroon underline underline-offset-4 hover:text-burgundy"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {filtered.map((section) => (
                <section key={section.id} id={"section-" + section.id} className="scroll-mt-44">
                  <div className="mb-5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                    <h2 className="font-display text-2xl font-bold text-maroon sm:text-3xl">
                      {section.title}
                    </h2>
                    <span className="hidden h-px flex-1 rule-gold sm:block" aria-hidden="true" />
                    <span className="shrink-0 font-heading text-[0.6rem] uppercase tracking-[0.16em] text-gold-deep">
                      {section.categories.length}{" "}
                      {section.categories.length === 1 ? "category" : "categories"}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    {section.categories.map((category) => (
                      <MenuCategoryPanel
                        key={category.id}
                        category={category}
                        count={categoryCount(category.groups)}
                        term={searching ? term.trim() : ""}
                        forceOpen={searching}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          <Reveal className="mt-12 rounded-2xl border border-sand bg-cream/60 px-5 py-5 text-center sm:px-8">
            <p className="text-[0.82rem] leading-relaxed text-ink-muted">
              <span className="text-gold-deep">*</span> {VEG_MENU_NOTE} {VEG_FRUIT_NOTE} Menu
              contents follow the printed Sarva Ruchi Kitchen vegetarian menu.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="bg-cream/55 py-18 sm:py-22">
        <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Printed Menu"
            title="Browse the Original Menu Pages"
            description="All twenty pages of the printed vegetarian menu, exactly as designed. Tap any page to view it full size."
          />

          <div className="mt-10">
            <MenuPageViewer variant="vegetarian" />
          </div>

          <Ornament className="mt-12" />

          <Reveal className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink
              href={MENU_PDFS.vegetarian}
              external
              variant="primary"
              size="lg"
              icon={<DocumentIcon className="size-4" />}
            >
              View Vegetarian Menu PDF
            </ButtonLink>
            <WhatsAppButton message="vegetarian" size="lg" label="Enquire on WhatsApp" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
