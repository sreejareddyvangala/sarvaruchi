import { NON_VEG_MENU, NON_VEG_PACKAGE_NOTE, type NonVegBlock } from "../data/nonVegMenu";
import { usePageMeta } from "../lib/usePageMeta";
import { BUSINESS_NAME, MENU_PDFS } from "../config/site";
import { MenuPageHeader } from "../components/menu/MenuPageHeader";
import { MenuPageViewer } from "../components/menu/MenuPageViewer";
import { SelectionBadge, ChoiceBadge } from "../components/menu/SelectionBadge";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/Button";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { FoodImage } from "../components/FoodImage";
import { LotusMark, Ornament } from "../components/Ornament";
import { DocumentIcon, ArrowRightIcon } from "../components/Icons";
import { cn } from "../lib/cn";

export function NonVegetarianMenu() {
  usePageMeta(
    "Premium Non-Vegetarian Menu | " + BUSINESS_NAME,
    "The Sarva Ruchi Kitchen premium non-vegetarian catering package — welcome starters, live stations, biryanis, non-veg and veg mains, live podi and paan stations, desserts and an exotic fruit bar.",
  );

  return (
    <>
      <MenuPageHeader
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Menu", to: "/menu" },
          { label: "Non-Vegetarian", to: "/menu/non-vegetarian" },
        ]}
        eyebrow="Premium"
        title="Non-Vegetarian Menu"
        description="A complete catering package — welcome starters, a live station of your choice, biryanis and non-veg mains, a full vegetarian side, live podi and paan counters, desserts and an exotic fruit bar."
        actions={
          <>
            <ButtonLink
              href={MENU_PDFS.nonVegetarian}
              external
              variant="gold"
              size="lg"
              icon={<DocumentIcon className="size-4" />}
            >
              View Full Menu PDF
            </ButtonLink>
            <WhatsAppButton message="nonVegetarian" size="lg" label="Enquire on WhatsApp" />
            <ButtonLink
              to="/menu/vegetarian"
              variant="outline-light"
              size="lg"
              iconRight={<ArrowRightIcon className="size-4" />}
            >
              Vegetarian Menu
            </ButtonLink>
          </>
        }
      />

      <section className="bg-parchment-texture py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl rounded-xl border border-gold/35 bg-gold/8 px-5 py-4 text-center">
            <p className="font-heading text-[0.62rem] uppercase tracking-[0.18em] text-gold-deep">
              How to read this menu
            </p>
            <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-soft">
              {NON_VEG_PACKAGE_NOTE}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {NON_VEG_MENU.map((block, i) => (
              <PackageBlock key={block.id} block={block} delay={(i % 2) * 90} />
            ))}
          </div>

          <Reveal className="mt-10 rounded-2xl border border-sand bg-cream/60 px-5 py-5 text-center sm:px-8">
            <p className="text-[0.82rem] leading-relaxed text-ink-muted">
              Package contents follow the printed Sarva Ruchi Kitchen premium non-vegetarian menu.
              Dish choices within each course are finalised with you when you book.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream/55 py-18 sm:py-22">
        <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Printed Menu"
            title="Browse the Original Menu Pages"
            description="All four pages of the printed non-vegetarian menu, exactly as designed. Tap any page to view it full size."
          />

          <div className="mx-auto mt-10 max-w-3xl">
            <MenuPageViewer variant="nonVegetarian" />
          </div>

          <Ornament className="mt-12" />

          <Reveal className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink
              href={MENU_PDFS.nonVegetarian}
              external
              variant="primary"
              size="lg"
              icon={<DocumentIcon className="size-4" />}
            >
              View Non-Vegetarian Menu PDF
            </ButtonLink>
            <WhatsAppButton message="nonVegetarian" size="lg" label="Enquire on WhatsApp" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

/**
 * One course of the package. Feature blocks (Live Station, Live Paan Station)
 * are printed on a maroon panel in the original menu, and keep that treatment.
 */
function PackageBlock({ block, delay }: { block: NonVegBlock; delay: number }) {
  const dark = Boolean(block.feature);

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lift",
          dark
            ? "border-gold/40 bg-maroon-texture hover:border-gold/70"
            : "border-sand bg-parchment hover:border-gold/55",
        )}
      >
        {block.image && (
          <div className="group overflow-hidden">
            <FoodImage
              imageKey={block.image}
              ratio="21/9"
              rounded="rounded-none"
              sizes="(min-width: 1024px) 46vw, 92vw"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2
              className={cn(
                "flex items-center gap-2.5 font-display text-2xl font-bold",
                dark ? "text-cream" : "text-maroon",
              )}
            >
              <LotusMark className={cn("h-4 w-auto", dark ? "text-gold-light" : "text-gold")} />
              {block.title}
            </h2>

            <div className="flex items-center gap-2">
              {block.badge && <ChoiceBadge label={block.badge} tone={dark ? "dark" : "light"} />}
              {block.selections !== undefined && (
                <SelectionBadge count={block.selections} tone={dark ? "dark" : "light"} />
              )}
            </div>
          </div>

          <span
            className={cn("mt-3.5 block h-px w-full", dark ? "bg-gold-light/25" : "bg-sand")}
            aria-hidden="true"
          />

          {block.lines.length > 0 && (
            <ul className="mt-4 flex flex-1 flex-col gap-0.5">
              {block.lines.map((line) => (
                <li
                  key={line.name}
                  className={cn(
                    "flex items-center gap-3 border-b border-dotted py-2.5 last:border-b-0",
                    dark ? "border-cream/15" : "border-sand/70",
                  )}
                >
                  <LotusMark
                    className={cn(
                      "h-2.5 w-auto shrink-0",
                      dark ? "text-gold-light/70" : "text-gold/70",
                    )}
                  />
                  <span
                    className={cn(
                      "min-w-0 flex-1 font-display text-[1.05rem] font-medium leading-snug",
                      dark ? "text-cream/90" : "text-ink",
                    )}
                  >
                    {line.name}
                  </span>
                  {line.selections !== undefined && (
                    <SelectionBadge
                      count={line.selections}
                      tone={dark ? "dark" : "light"}
                      size="sm"
                    />
                  )}
                </li>
              ))}
            </ul>
          )}

          <p
            className={cn(
              "mt-4 font-heading text-[0.56rem] uppercase tracking-[0.18em]",
              dark ? "text-cream/35" : "text-ink-muted/60",
            )}
          >
            Menu page {block.page}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
