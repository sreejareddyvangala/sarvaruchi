import { useEffect, useRef } from "react";
import type { MenuSection } from "../../data/menuTypes";
import { SearchIcon, CloseIcon } from "../Icons";
import { cn } from "../../lib/cn";

/**
 * Sticky search and section navigation for the vegetarian menu.
 * The tab strip scrolls horizontally on small screens and keeps the active
 * section in view.
 */
export function MenuToolbar({
  sections,
  activeId,
  onSelect,
  term,
  onTermChange,
  resultCount,
}: {
  sections: MenuSection[];
  activeId: string | null;
  onSelect: (id: string) => void;
  term: string;
  onTermChange: (value: string) => void;
  resultCount: number;
}) {
  const stripRef = useRef<HTMLDivElement>(null);

  // keep the highlighted tab visible as the reader scrolls the page
  useEffect(() => {
    if (!activeId || !stripRef.current) return;
    const tab = stripRef.current.querySelector<HTMLElement>(`[data-tab="${activeId}"]`);
    tab?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeId]);

  return (
    <div className="sticky top-[3.75rem] z-40 border-y border-gold/25 bg-ivory/95 backdrop-blur-md sm:top-[4.25rem]">
      <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2.5 py-3">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-gold-deep" />
            <input
              type="search"
              value={term}
              onChange={(e) => onTermChange(e.target.value)}
              placeholder="Search dishes — paneer, biryani, jamun…"
              aria-label="Search the vegetarian menu"
              className="h-11 w-full rounded-full border border-sand bg-white/85 pl-10 pr-10 text-[0.88rem] text-ink placeholder:text-ink-muted/55 transition-colors focus:border-gold-deep focus:bg-white focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {term && (
              <button
                type="button"
                onClick={() => onTermChange("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted transition hover:bg-beige hover:text-maroon"
              >
                <CloseIcon className="size-3.5" />
              </button>
            )}
          </div>

          {term.trim().length >= 2 ? (
            <p className="px-1 font-heading text-[0.65rem] uppercase tracking-[0.16em] text-gold-deep">
              {resultCount} {resultCount === 1 ? "dish" : "dishes"} found
            </p>
          ) : (
            <div
              ref={stripRef}
              className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:px-0"
              role="tablist"
              aria-label="Menu sections"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  data-tab={section.id}
                  aria-selected={activeId === section.id}
                  onClick={() => onSelect(section.id)}
                  className={cn(
                    "shrink-0 rounded-full border px-3.5 py-2 font-heading text-[0.64rem] font-semibold uppercase tracking-[0.13em] transition-all duration-300",
                    activeId === section.id
                      ? "border-maroon bg-maroon text-cream shadow-card"
                      : "border-sand bg-parchment text-ink-soft hover:border-gold/60 hover:text-maroon",
                  )}
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
