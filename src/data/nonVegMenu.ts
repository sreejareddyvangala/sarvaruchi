/**
 * Premium Non-Veg Menu — Sarva Ruchi Kitchen.
 *
 * Transcribed from the supplied "Premium Non Veg Menu" PDF (4 pages).
 * This menu is a PACKAGE: the numbers printed beside each line are the number
 * of SELECTIONS included, never a price. The structure below preserves the
 * printed grouping and counts exactly.
 *
 * Image policy: only blocks whose food is actually pictured in the supplied
 * menu material carry a photograph. Non-vegetarian courses have no photograph
 * in either PDF, so they are presented as typography cards rather than being
 * illustrated with vegetarian food.
 */

export type NonVegLine = {
  name: string;
  /** Number of selections the package includes for this line. */
  selections?: number;
  /** Descriptive line printed without a count, e.g. "Hot & live with pure ghee". */
  detail?: string;
};

export type NonVegBlock = {
  id: string;
  title: string;
  page: number;
  /** Badge printed on the block, e.g. "Any One". */
  badge?: string;
  /** Count printed against the block title itself. */
  selections?: number;
  /** Key into the food image registry — omitted where no accurate image exists. */
  image?: string;
  /** Whether this block is highlighted as a feature in the printed menu. */
  feature?: boolean;
  lines: NonVegLine[];
};

export const NON_VEG_MENU: NonVegBlock[] = [
  {
    id: "refreshments",
    title: "Refreshments",
    page: 2,
    selections: 3,
    image: "refreshments",
    lines: [],
  },
  {
    id: "welcome-starters",
    title: "Welcome Starters",
    page: 2,
    lines: [
      { name: "Non Veg", selections: 2 },
      { name: "Veg", selections: 2 },
    ],
  },
  {
    id: "live-station",
    title: "Live Station",
    page: 2,
    badge: "Any One",
    feature: true,
    image: "chaat-live-station",
    lines: [
      { name: "Chaat / South Indian", selections: 5 },
      { name: "Continental", selections: 5 },
      { name: "Chinese / Mongolian", selections: 5 },
    ],
  },
  {
    id: "roti-basket",
    title: "Indian Roti Basket",
    page: 2,
    selections: 3,
    image: "bread-basket",
    lines: [],
  },
  {
    id: "non-veg-mains",
    title: "Non Veg Mains",
    page: 2,
    lines: [
      { name: "Mutton Biryani & Chicken Biryani" },
      { name: "Chicken Dishes", selections: 2 },
      { name: "Mutton Dish", selections: 1 },
      { name: "Fish or Prawn", selections: 1 },
      { name: "Egg Dish", selections: 1 },
    ],
  },
  {
    id: "veg-mains",
    title: "Veg Mains",
    page: 3,
    image: "veg-gravies",
    lines: [
      { name: "Spl Veg Rices", selections: 2 },
      { name: "Special Wet Gravies", selections: 2 },
      { name: "Regular Wet Gravies", selections: 2 },
      { name: "Stir Fried Veggies", selections: 2 },
      { name: "Dal", selections: 1 },
    ],
  },
  {
    id: "live-podi-station",
    title: "Live Podi Station",
    page: 3,
    image: "powders",
    lines: [
      { name: "6 varieties of podis" },
      { name: "Hot & live with pure ghee" },
    ],
  },
  {
    id: "standard-accompaniments",
    title: "Standard Accompaniments",
    page: 3,
    image: "raita",
    lines: [
      { name: "Plain Steamed Rice" },
      { name: "Mirchi Ka Salan" },
      { name: "Fresh Ground Chutneys", selections: 3 },
      { name: "Papads, Vadiyalu, etc." },
      { name: "Raita" },
      { name: "Matka Yogurt" },
      { name: "Special & Regular Salad Bar with Dressing" },
      { name: "250 ml branded water bottles" },
    ],
  },
  {
    id: "live-paan-station",
    title: "Live Paan Station",
    page: 4,
    feature: true,
    lines: [
      { name: "Calcutta Meenakshi" },
      { name: "Royal Ram Pyaari" },
      { name: "Special Sweet" },
      { name: "Signature Saadha" },
      { name: "With choice of Mukhwas &" },
      { name: "Mouth Fresheners" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    page: 4,
    selections: 4,
    image: "heritage-desserts",
    lines: [{ name: "Continental & Indian" }],
  },
  {
    id: "ice-creams",
    title: "Ice Creams",
    page: 4,
    selections: 4,
    image: "ice-cream-classic",
    lines: [{ name: "4 flavours" }],
  },
  {
    id: "exotic-fruit-bar",
    title: "Exotic Fruit Bar",
    page: 4,
    image: "indian-fruits",
    lines: [
      { name: "Exotic", selections: 4 },
      { name: "Indian Selection", selections: 4 },
    ],
  },
];

/** Shown alongside the package so the counts are never mistaken for prices. */
export const NON_VEG_PACKAGE_NOTE =
  "Numbers shown are the selections included in the package — they are not prices.";
