import type { MenuSection } from "../data/menuTypes";

const norm = (s: string) => s.toLowerCase().trim();

/**
 * Filters the menu down to what matches a search term.
 *
 * A category whose own title matches keeps all of its dishes; otherwise only
 * the dishes that match are kept. Sections that end up empty are dropped.
 */
export function filterMenu(sections: MenuSection[], rawTerm: string): MenuSection[] {
  const term = norm(rawTerm);
  if (term.length < 2) return sections;

  const result: MenuSection[] = [];

  for (const section of sections) {
    const categories = [];

    for (const category of section.categories) {
      const titleHit =
        norm(category.title).includes(term) ||
        (category.subtitle ? norm(category.subtitle).includes(term) : false);

      if (titleHit) {
        categories.push(category);
        continue;
      }

      const groups = category.groups
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              norm(item.name).includes(term) ||
              (item.note ? norm(item.note).includes(term) : false) ||
              (item.description ? norm(item.description).includes(term) : false) ||
              (group.title ? norm(group.title).includes(term) : false),
          ),
        }))
        .filter((group) => group.items.length > 0);

      if (groups.length > 0) categories.push({ ...category, groups });
    }

    if (categories.length > 0) result.push({ ...section, categories });
  }

  return result;
}

/** Number of dishes in a single category. */
export function categoryCount(groups: { items: unknown[] }[]): number {
  return groups.reduce((n, g) => n + g.items.length, 0);
}

/** Total dishes across the (possibly filtered) sections. */
export function totalCount(sections: MenuSection[]): number {
  return sections.reduce(
    (n, s) => n + s.categories.reduce((c, cat) => c + categoryCount(cat.groups), 0),
    0,
  );
}
