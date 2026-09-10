/**
 * Curated food gallery. Every entry points at an image taken from the Sarva
 * Ruchi Kitchen menu material, captioned with the menu section it belongs to.
 */

export const GALLERY_FILTERS = [
  "All",
  "Catering Spreads",
  "Starters",
  "Live Counters",
  "Biryani & Rice",
  "Curries & Mains",
  "Breads",
  "South Indian",
  "Global",
  "Desserts",
  "Drinks",
] as const;

export type GalleryFilter = (typeof GALLERY_FILTERS)[number];

export type GalleryItem = {
  image: string;
  caption: string;
  filter: Exclude<GalleryFilter, "All">;
};

export const GALLERY: GalleryItem[] = [
  { image: "hero-catering-spread", caption: "Wedding Catering Spread", filter: "Catering Spreads" },
  { image: "biryani", caption: "Hyderabadi Veg Dum Biryani", filter: "Biryani & Rice" },
  { image: "chaat-live-station", caption: "Live Station · Chat Couture", filter: "Live Counters" },
  { image: "tikkas-kebabs", caption: "Tikkas & Kebabs", filter: "Starters" },
  { image: "veg-gravies", caption: "Classic Paneer Butter Masala", filter: "Curries & Mains" },
  { image: "bread-basket", caption: "Indian Bread Basket", filter: "Breads" },
  { image: "south-indian", caption: "South Indian Selection", filter: "South Indian" },
  { image: "heritage-desserts", caption: "Heritage Indian Desserts", filter: "Desserts" },
  { image: "mocktails", caption: "Mocktails", filter: "Drinks" },
  { image: "delhi-fusion-chat", caption: "Delhi Fusion Chat", filter: "Live Counters" },
  { image: "starters-twist", caption: "Staters With A Twist", filter: "Starters" },
  { image: "corn-babycorn", caption: "Corn & Babycorn Specials", filter: "Starters" },
  { image: "cheese-fusion", caption: "Cheese & Fusion Delights", filter: "Starters" },
  { image: "crisps-fritters", caption: "Veg Crisps & Fritters", filter: "Starters" },
  { image: "frankie-sandwich", caption: "Frankie & Sandwich", filter: "Starters" },
  { image: "street-feast", caption: "Street Feast Classics", filter: "Live Counters" },
  { image: "traditional-bites", caption: "Traditional & Regional Bites", filter: "Starters" },
  { image: "punjabi-dhaba", caption: "Punjabi Dhaba Specials", filter: "Curries & Mains" },
  { image: "mixed-veg-fry", caption: "Special Veg Gravies", filter: "Curries & Mains" },
  { image: "brinjal-curry", caption: "Stir Fried Veggies", filter: "Curries & Mains" },
  { image: "dals", caption: "Dals", filter: "Curries & Mains" },
  { image: "sambar-rasam", caption: "Sambar & Rasam", filter: "South Indian" },
  { image: "raita", caption: "Raita Collection", filter: "Curries & Mains" },
  { image: "veg-pulao", caption: "Heritage Pulaos", filter: "Biryani & Rice" },
  { image: "pan-asian", caption: "Pan Asian · Wok & Roll", filter: "Global" },
  { image: "italian", caption: "Italian Delights", filter: "Global" },
  { image: "mexican", caption: "Maxican Fiesta", filter: "Global" },
  { image: "continental", caption: "Continental", filter: "Global" },
  { image: "veg-soups", caption: "Veg. Soups", filter: "Starters" },
  { image: "breakfast", caption: "Breakfast Selection", filter: "South Indian" },
  { image: "pickles", caption: "Pickles & Pachadis", filter: "Curries & Mains" },
  { image: "chutneys", caption: "Fresh Ground Chutneys", filter: "Curries & Mains" },
  { image: "powders", caption: "Live Podi Station", filter: "Live Counters" },
  { image: "papad", caption: "Papad & Vadiyalu", filter: "Curries & Mains" },
  { image: "salads", caption: "Salad Collection", filter: "Curries & Mains" },
  { image: "indian-fruits", caption: "Exotic Fruit Bar", filter: "Desserts" },
  { image: "dry-fruit-luxe", caption: "Dry Fruit Luxe Collection", filter: "Desserts" },
  { image: "live-dessert-theatre", caption: "Live Dessert Theatre", filter: "Live Counters" },
  { image: "bengali-treats", caption: "Bengali Fancy Treats", filter: "Desserts" },
  { image: "rabdi-luxe", caption: "Royal Fusion & Signature", filter: "Desserts" },
  { image: "shahi-tukda", caption: "Nawabi Shahi Tukda", filter: "Desserts" },
  { image: "kheer-phirni", caption: "Creamy Rice Phirni Pot", filter: "Desserts" },
  { image: "mysore-pak", caption: "Heritage Mysore Pak Gold", filter: "Desserts" },
  { image: "falooda-shots", caption: "Rabdi Luxe Shots", filter: "Desserts" },
  { image: "pastry-couture", caption: "Pastry Couture", filter: "Desserts" },
  { image: "pull-me-up-cakes", caption: "Pull-Me-Up Cake Temptations", filter: "Desserts" },
  { image: "cheesecakes", caption: "Cheesecake Jewels", filter: "Desserts" },
  { image: "mousse-fantasies", caption: "Mousse Fantasies", filter: "Desserts" },
  { image: "pudding-indulgence", caption: "Pudding Indulgence", filter: "Desserts" },
  { image: "cupcakes", caption: "Cupcake Affair", filter: "Desserts" },
  { image: "donuts", caption: "Donut Indulgence", filter: "Desserts" },
  { image: "chocolates", caption: "Handcrafted Chocolates", filter: "Desserts" },
  { image: "cookies", caption: "Cookie Treasures", filter: "Desserts" },
  { image: "classic-cakes", caption: "Classic Cakes", filter: "Desserts" },
  { image: "brownies-tarts", caption: "Tarts, Brownies & Fudges", filter: "Desserts" },
  { image: "ice-cream-classic", caption: "Ice Cream Parlour", filter: "Desserts" },
  { image: "ice-cream-signature", caption: "Signature Scoops", filter: "Desserts" },
  { image: "ice-cream-bars", caption: "Sticks & Bars", filter: "Desserts" },
  { image: "sundaes", caption: "Sundaes & Specials", filter: "Desserts" },
  { image: "kulfi-frozen", caption: "Kulfi & Frozen Delights", filter: "Desserts" },
  { image: "cream-stone", caption: "Cream Stone Concept", filter: "Desserts" },
  { image: "global-desserts", caption: "Global Affairs", filter: "Desserts" },
  { image: "dessert-row", caption: "Royal Fusion Desserts", filter: "Desserts" },
  { image: "kids-kitchen", caption: "The Kid's Kitchen", filter: "Global" },
  { image: "refreshments", caption: "Refreshments", filter: "Drinks" },
];

/** A short, hand-picked set used for the gallery preview on the home page. */
export const GALLERY_HIGHLIGHTS = [
  "biryani",
  "tikkas-kebabs",
  "chaat-live-station",
  "veg-gravies",
  "bread-basket",
  "heritage-desserts",
  "south-indian",
  "mocktails",
];
