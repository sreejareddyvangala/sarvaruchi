/**
 * The food gallery, arranged around the blog: every photograph belongs to the
 * occasion of one of the articles, so the gallery and the blog tell the same
 * story. The photographs are openly licensed (Unsplash) and credited in the
 * gallery viewer and in CREDITS.md.
 */

export const GALLERY_FILTERS = [
  "All",
  "Wedding Catering",
  "House Warming",
  "Wedding Food",
  "Corporate Events",
  "Traditions",
] as const;

export type GalleryFilter = (typeof GALLERY_FILTERS)[number];

export type GalleryItem = {
  image: string;
  caption: string;
  filter: Exclude<GalleryFilter, "All">;
};

export const GALLERY: GalleryItem[] = [
  // How to Choose the Right Catering for Your Wedding
  { image: "wedding-reception-canopy", caption: "Wedding Reception Setting", filter: "Wedding Catering" },
  { image: "wedding-buffet-service", caption: "Buffet Service", filter: "Wedding Catering" },
  { image: "wedding-live-counter", caption: "Live Counter", filter: "Wedding Catering" },
  { image: "wedding-mandap-hall", caption: "Mandap & Banquet Hall", filter: "Wedding Catering" },

  // Best Catering Ideas for House Warming Celebrations
  { image: "housewarming-entrance", caption: "Decorated Home Entrance", filter: "House Warming" },
  { image: "housewarming-kalash", caption: "Kalash for the Puja", filter: "House Warming" },
  { image: "housewarming-rangoli-diyas", caption: "Rangoli & Diyas", filter: "House Warming" },
  { image: "housewarming-idli-breakfast", caption: "Breakfast for Early Guests", filter: "House Warming" },

  // Planning the Perfect Indian Wedding Menu
  { image: "weddingfood-thali-spread", caption: "Thali Spread", filter: "Wedding Food" },
  { image: "weddingfood-biryani", caption: "Biryani for the Feast", filter: "Wedding Food" },
  { image: "weddingfood-palak-paneer", caption: "Palak Paneer & Paratha", filter: "Wedding Food" },
  { image: "weddingfood-live-jalebi", caption: "Jalebi, Fresh From the Kadai", filter: "Wedding Food" },

  // Catering Ideas for Corporate Events
  { image: "corporate-office-buffet", caption: "Office Event Buffet", filter: "Corporate Events" },
  { image: "corporate-plated-lunch", caption: "Working Lunch", filter: "Corporate Events" },
  { image: "corporate-tea-break", caption: "Samosa & Chai Break", filter: "Corporate Events" },
  { image: "corporate-snack-platter", caption: "Snacks for the Breaks", filter: "Corporate Events" },

  // Traditional Indian Flavours for Modern Celebrations
  { image: "traditions-banana-leaf-feast", caption: "Banana-Leaf Feast", filter: "Traditions" },
  { image: "traditions-chaat-counter", caption: "Live Chaat Counter", filter: "Traditions" },
  { image: "traditions-diyas", caption: "Festive Diyas", filter: "Traditions" },
  { image: "traditions-barfi", caption: "Festive Barfi", filter: "Traditions" },
];

/** The home page preview: a hand-picked set that covers every blog topic. */
export const GALLERY_HIGHLIGHTS = [
  "wedding-reception-canopy",
  "wedding-live-counter",
  "housewarming-entrance",
  "housewarming-kalash",
  "weddingfood-thali-spread",
  "weddingfood-live-jalebi",
  "corporate-office-buffet",
  "traditions-chaat-counter",
];
