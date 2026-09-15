/**
 * The food gallery. Every photograph shows catering or food — buffet service,
 * live counters and dishes — never venues, décor or the events themselves.
 * Photographs are filed under the occasion of one of the blog articles, so the
 * gallery and the blog tell the same story. They are free stock (Unsplash and
 * Pexels) and credited in the gallery viewer and in CREDITS.md.
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
  { image: "wedding-buffet-service", caption: "Buffet Service", filter: "Wedding Catering" },
  { image: "wedding-service-staff", caption: "Serving at the Buffet", filter: "Wedding Catering" },
  { image: "wedding-live-counter", caption: "Live Counter", filter: "Wedding Catering" },
  { image: "wedding-buffet-vegetables", caption: "Stir-Fried Vegetables", filter: "Wedding Catering" },

  // Best Catering Ideas for House Warming Celebrations
  { image: "housewarming-idli-breakfast", caption: "Breakfast for Early Guests", filter: "House Warming" },
  { image: "housewarming-tiffin", caption: "Morning Tiffin", filter: "House Warming" },
  { image: "housewarming-banana-leaf-meal", caption: "Vegetarian Banana-Leaf Meal", filter: "House Warming" },
  { image: "housewarming-sweets-box", caption: "Sweets for Return Gifts", filter: "House Warming" },

  // Planning the Perfect Indian Wedding Menu
  { image: "weddingfood-thali-spread", caption: "Thali Spread", filter: "Wedding Food" },
  { image: "weddingfood-biryani", caption: "Biryani for the Feast", filter: "Wedding Food" },
  { image: "weddingfood-palak-paneer", caption: "Palak Paneer & Paratha", filter: "Wedding Food" },
  { image: "weddingfood-paneer-tikka", caption: "Paneer Tikka Starters", filter: "Wedding Food" },

  // Catering Ideas for Corporate Events
  { image: "corporate-office-buffet", caption: "Office Event Buffet", filter: "Corporate Events" },
  { image: "corporate-plated-lunch", caption: "Working Lunch", filter: "Corporate Events" },
  { image: "corporate-canapes", caption: "Canapés & Finger Food", filter: "Corporate Events" },
  { image: "corporate-lunch-buffet", caption: "Team Lunch Buffet", filter: "Corporate Events" },

  // Traditional Indian Flavours for Modern Celebrations
  { image: "traditions-banana-leaf-feast", caption: "Banana-Leaf Feast", filter: "Traditions" },
  { image: "traditions-clay-pot-biryani", caption: "Clay-Pot Biryani", filter: "Traditions" },
  { image: "traditions-clay-bowl-thali", caption: "Thali in Clay Bowls", filter: "Traditions" },
  { image: "traditions-masala-dosa", caption: "Masala Dosa", filter: "Traditions" },
];

/**
 * The home page preview: two rows of four that cover every blog topic, ordered
 * so light and dark photographs form a checkerboard across the two rows.
 */
export const GALLERY_HIGHLIGHTS = [
  "housewarming-banana-leaf-meal",
  "wedding-service-staff",
  "corporate-office-buffet",
  "weddingfood-paneer-tikka",
  "wedding-live-counter",
  "wedding-buffet-vegetables",
  "traditions-clay-pot-biryani",
  "corporate-plated-lunch",
];
