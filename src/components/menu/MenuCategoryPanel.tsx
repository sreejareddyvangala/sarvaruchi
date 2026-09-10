import { useEffect, useRef, useState } from "react";
import type { MenuCategory } from "../../data/menuTypes";
import { FoodImage } from "../FoodImage";
import { MenuItemList } from "./MenuItemList";
import { ChevronDownIcon } from "../Icons";
import { cn } from "../../lib/cn";

/**
 * One menu category, presented as an expandable panel.
 *
 * The vegetarian menu carries well over a thousand dishes, so categories stay
 * collapsed until asked for — on every screen size — rather than presenting a
 * single enormous wall of text. Searching opens the matching panels.
 */
export function MenuCategoryPanel({
  category,
  count,
  term = "",
  forceOpen = false,
  defaultOpen = false,
}: {
  category: MenuCategory;
  count: number;
  term?: string;
  forceOpen?: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelRef = useRef<HTMLDivElement>(null);

  // a live search decides what is open; clearing it restores manual control
  useEffect(() => {
    if (forceOpen) setOpen(true);
  }, [forceOpen]);

  const expanded = forceOpen || open;

  return (
    <section
      id={`category-${category.id}`}
      className={cn(
        "scroll-mt-40 overflow-hidden rounded-2xl border bg-parchment transition-all duration-500",
        expanded ? "border-gold/45 shadow-card" : "border-sand hover:border-gold/40",
      )}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={expanded}
          aria-controls={`panel-${category.id}`}
          className="group flex w-full items-center gap-4 p-3.5 text-left transition-colors duration-300 hover:bg-cream/50 sm:p-4"
        >
          {category.image ? (
            <span className="hidden shrink-0 overflow-hidden rounded-xl sm:block">
              <FoodImage
                imageKey={category.image}
                ratio="square"
                rounded="rounded-xl"
                zoomOnHover={false}
                className="size-16 lg:size-[4.5rem]"
                sizes="80px"
              />
            </span>
          ) : (
            <span className="hidden size-16 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-cream sm:flex lg:size-[4.5rem]">
              <span className="font-display text-2xl font-bold text-gold-deep/70">
                {category.title.charAt(0)}
              </span>
            </span>
          )}

          <span className="min-w-0 flex-1">
            <span className="block font-display text-xl font-semibold leading-tight text-maroon sm:text-2xl">
              {category.title}
            </span>
            {category.subtitle && (
              <span className="mt-0.5 block font-display text-[0.88rem] italic text-ink-muted">
                {category.subtitle}
              </span>
            )}
            <span className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-gold-deep">
                {count} {count === 1 ? "item" : "items"}
              </span>
              <span className="text-sand" aria-hidden="true">·</span>
              <span className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-ink-muted/70">
                Menu page {category.page}
              </span>
            </span>
          </span>

          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-400",
              expanded
                ? "rotate-180 border-maroon bg-maroon text-cream"
                : "border-sand text-maroon group-hover:border-gold",
            )}
            aria-hidden="true"
          >
            <ChevronDownIcon className="size-4" />
          </span>
        </button>
      </h3>

      <div
        id={`panel-${category.id}`}
        ref={panelRef}
        hidden={!expanded}
        className={cn(expanded && "animate-fade-in")}
      >
        <div className="border-t border-sand/80 px-4 pb-5 pt-4 sm:px-5">
          {category.image && (
            <div className="mb-5 overflow-hidden rounded-xl border border-sand sm:hidden">
              <FoodImage
                imageKey={category.image}
                ratio="16/9"
                rounded="rounded-none"
                zoomOnHover={false}
                sizes="92vw"
              />
            </div>
          )}
          <MenuItemList groups={category.groups} term={term} />
        </div>
      </div>
    </section>
  );
}
