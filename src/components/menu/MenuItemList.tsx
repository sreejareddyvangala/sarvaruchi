import type { MenuGroup } from "../../data/menuTypes";
import { LotusMark } from "../Ornament";
import { cn } from "../../lib/cn";

/** Highlights the part of a dish name that matched the search term. */
function Highlight({ text, term }: { text: string; term: string }) {
  if (!term) return <>{text}</>;
  const at = text.toLowerCase().indexOf(term.toLowerCase());
  if (at === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, at)}
      <mark className="rounded-[3px] bg-gold-light/60 px-0.5 text-maroon">
        {text.slice(at, at + term.length)}
      </mark>
      {text.slice(at + term.length)}
    </>
  );
}

/**
 * Dish list for one category. Falls into two, three or four columns as space
 * allows; items that carry a description get a wider card layout.
 */
export function MenuItemList({ groups, term = "" }: { groups: MenuGroup[]; term?: string }) {
  const hasDescriptions = groups.some((g) => g.items.some((i) => i.description));

  return (
    <div className="flex flex-col gap-7">
      {groups.map((group, gi) => (
        <div key={group.title ?? gi}>
          {group.title && (
            <h4 className="mb-3.5 flex items-center gap-2 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
              <LotusMark className="h-3 w-auto text-gold" />
              {group.title}
            </h4>
          )}

          <ul
            className={cn(
              hasDescriptions
                ? "grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
                : "grid gap-x-6 gap-y-0.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
            )}
          >
            {group.items.map((item) => (
              <li
                key={item.name}
                className={cn(
                  "group/item flex gap-2.5 border-b border-dotted border-sand/70 py-2 last:border-b-0",
                  hasDescriptions && "flex-col rounded-lg border-b-0 bg-cream/45 p-3.5",
                )}
              >
                {!hasDescriptions && (
                  <LotusMark className="mt-[0.3rem] h-2.5 w-auto shrink-0 text-gold/75 transition-colors duration-300 group-hover/item:text-gold" />
                )}

                <div className="min-w-0">
                  <p
                    className={cn(
                      "font-display leading-snug text-ink",
                      hasDescriptions
                        ? "text-lg font-semibold text-maroon"
                        : "text-[1.02rem] font-medium",
                    )}
                  >
                    <Highlight text={item.name} term={term} />
                    {item.starred && (
                      <span
                        className="ml-1 align-super text-[0.7em] text-gold-deep"
                        title="Charged extra"
                      >
                        *
                      </span>
                    )}
                  </p>

                  {item.note && (
                    <p className="mt-0.5 text-[0.76rem] italic leading-snug text-ink-muted">
                      ({item.note})
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
