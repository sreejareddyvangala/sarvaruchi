/** Shared shapes for the digital menu. Menu content lives in data files only. */

export type MenuItem = {
  name: string;
  /** Parenthetical detail printed in the menu, e.g. "(any soft drinks)" */
  note?: string;
  /** Description printed alongside the item (used by the mocktails page). */
  description?: string;
  /** The menu marks some items with a star: "Star Marked Extra Price". */
  starred?: boolean;
};

/** A labelled block of items inside a category, e.g. "PASTAS" within Italian Delights. */
export type MenuGroup = {
  title?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  /** Sub-heading printed under the title in the menu, where one exists. */
  subtitle?: string;
  /** Page of the source PDF this category is taken from. */
  page: number;
  /** Key into the food image registry. */
  image?: string;
  groups: MenuGroup[];
};

export type MenuSection = {
  id: string;
  title: string;
  categories: MenuCategory[];
};

/** Total number of dishes across a set of sections. */
export function countItems(sections: MenuSection[]): number {
  return sections.reduce(
    (total, section) =>
      total +
      section.categories.reduce(
        (c, cat) => c + cat.groups.reduce((g, grp) => g + grp.items.length, 0),
        0,
      ),
    0,
  );
}

export function countCategories(sections: MenuSection[]): number {
  return sections.reduce((n, s) => n + s.categories.length, 0);
}
