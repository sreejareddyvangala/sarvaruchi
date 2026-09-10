/**
 * Food image registry.
 *
 * Every photograph here is taken from the Sarva Ruchi Kitchen menu material
 * supplied for this site — no stock photography is used. Each key maps to the
 * menu category the picture actually belongs to, so an image is never shown
 * next to food it does not depict.
 */

export type FoodImage = { src: string; alt: string };

const path = (key: string) => `/food/${key}.webp`;

const ALT: Record<string, string> = {
  "hero-celebration":
    "Indian wedding catering spread — biryani in hammered copper handis, raita, brass lamps and rose petals on a banana leaf, with a framed sign reading Good Food Brings People Together",
  "veg-thali-ref":
    "Premium Indian vegetarian thali — rice, dal, vegetable curries, sabzi, papad, raita, chutneys and a gulab jamun served in katoris on a banana leaf",
  "chicken-biryani":
    "Premium chicken biryani in a hammered copper handi with a bone-in chicken piece, fried onion and fresh coriander",
  "occasion-weddings": "Indian wedding ceremony beneath a floral mandap, the couple seated with their families",
  "occasion-engagements": "Engagement ring ceremony — hands with mehndi, gold bangles and red chooda",
  "occasion-receptions": "Long reception banquet table laid with flowers, glassware and place settings",
  "occasion-birthdays": "Birthday cake topped with rows of lit candles",
  "occasion-corporate": "Corporate catering buffet — chafing dishes and platters styled with white flowers",
  "occasion-house-warming": "Newly built modern Indian family home at golden hour, seen from the street over its boundary wall",
  "occasion-traditional": "Decorated puja thali with lit brass diyas, marigolds and rose petals",
  "occasion-special": "Guests raising a toast under festoon lights at a celebration dinner",
  "hero-catering-spread": "Vegetable biryani, paneer curry, naan and raita served in copper bowls",
  refreshments: "Tray of fresh juices, shakes, lassi and tea served in tall glasses",
  mocktails: "Row of colourful mocktails garnished with mint, lime and berries",
  "veg-soups": "Creamy tomato soup served in a gold-rimmed porcelain bowl",
  "crisps-fritters": "Golden mirchi bajji and assorted vegetable fritters in a brass kadai",
  "starters-twist": "Platter of paneer and vegetable starters with mint chutney",
  "corn-babycorn": "Crisp fried babycorn tossed with chilli and herbs",
  "cheese-fusion": "Cheese rolls, french fries and fusion bites with dips",
  "chaat-live-station": "Dahi chaat plated with sev, pomegranate and chutneys on a brass thali",
  "traditional-bites": "Samosas, vadas and traditional South Indian snacks on a platter",
  "delhi-fusion-chat": "Pani puri and dahi bhalla chaat with chutneys and sev",
  "tikkas-kebabs": "Chargrilled paneer tikka skewers with peppers and onion",
  "frankie-sandwich": "Paneer frankie wraps served with green chutney and onion",
  "street-feast": "Pav bhaji with butter and toasted pav, samosas alongside",
  "south-indian": "Dosa, idli and medu vada with sambar, chutneys and pongal",
  "punjabi-dhaba": "Sarson da saag, dal makhani, chole and stuffed kulcha",
  "pan-asian": "Wok-tossed vegetable noodles with peppers and broccoli",
  italian: "Vegetarian pizza with peppers, olives, corn and basil",
  mexican: "Loaded vegetarian tacos with salsa, lettuce and lime",
  continental: "Mini sliders, wraps and dip on a wooden board",
  "bread-basket": "Basket of naan, parotta, poori, roti and kulcha",
  biryani: "Hyderabadi vegetable dum biryani with paneer and fried onion in a copper handi",
  "veg-pulao": "Vegetable pulao with cashew, peas and whole spices",
  "veg-gravies": "Paneer butter masala in a copper kadai with coriander",
  "mixed-veg-fry": "Mixed vegetable dry fry with babycorn, okra and cauliflower",
  "brinjal-curry": "Bagara baingan brinjal curry in a copper serving bowl",
  dals: "Tempered yellow dal in a copper handi with curry leaves",
  "sambar-rasam": "Drumstick sambar and tomato rasam in copper bowls",
  raita: "Assorted raitas — onion, tomato, boondi, cucumber and pineapple",
  pickles: "Andhra pickles and pachadis in glass jars on a brass tray",
  chutneys: "Fresh ground pudina, tomato and coconut chutneys",
  powders: "Andhra spice podis and karam powders in brass bowls",
  salads: "Garden fresh salad with greens, tomato, olives and paneer",
  papad: "Roast papad, masala papad, vadiyalu and crispy frymes",
  "heritage-desserts": "Gulab jamun, boondi laddoo and jalebi in brass bowls",
  "mysore-pak": "Silver-leafed Mysore pak squares on a brass plate",
  "kheer-phirni": "Creamy rice phirni topped with pistachio and saffron in a clay pot",
  "shahi-tukda": "Nawabi shahi tukda with rabdi, almond and pistachio",
  "falooda-shots": "Layered falooda dessert shots topped with saffron and rose",
  "rabdi-luxe": "Rabdi luxe dessert tray with dry fruit and saffron",
  "dessert-row": "Ras malai, gulab jamun cake, khubani, jalebi rabdi and phirni",
  "dry-fruit-luxe": "Badam katli, kaju katli and dry fruit laddoos on a brass platter",
  "live-dessert-theatre": "Live dessert counter — halwa, mango trifle, rasgulla and jalebi",
  "bengali-treats": "Bengali sandesh, cham cham and petha sweets with fruit trifle",
  "global-desserts": "Tiramisu, creme brulee and churros with chocolate",
  "pastry-couture": "Layered fresh fruit and chocolate pastries",
  "pull-me-up-cakes": "Pull-me-up cake cups with cream, fruit and chocolate",
  "pudding-indulgence": "Jewel fruit trifle pudding layered in a glass bowl",
  "mousse-fantasies": "Chocolate, strawberry and mango mousse glasses",
  cheesecakes: "Blueberry cloud cheesecake slice with fresh berries",
  cupcakes: "Vanilla, chocolate and mango frosted cupcakes",
  donuts: "Glazed and chocolate-topped donuts on a plate",
  chocolates: "Handcrafted almond, cashew and white chocolate pralines",
  cookies: "Butter and choco chip cookies with cashew and badam",
  "classic-cakes": "Rich fruit crown cake topped with nuts on a cake stand",
  "brownies-tarts": "Chocolate tarts, brownies and fudge bars",
  "ice-cream-classic": "Vanilla, strawberry and mango ice cream scoops in a bowl",
  "ice-cream-signature": "Signature pistachio, berry and butterscotch scoops",
  "ice-cream-bars": "Choco bars, cones and fruit ice pops",
  sundaes: "Layered ice cream sundaes with cherries and chocolate sauce",
  breakfast: "South Indian breakfast thali with idli, vada, dosa and chutney",
  "indian-fruits": "Cut fruit platter with watermelon, papaya, grapes and pomegranate",
  "kids-kitchen": "Mini pizza, smiley fries, sliders, popcorn and milkshake",
  "cream-stone": "Cream Stone ice cream cups — Willy Wonka, Nuts Overloaded and more",
  "kulfi-frozen": "Matka kulfi, kulfi sticks and black forest ice cream cake",
};

export const FOOD_IMAGES: Record<string, FoodImage> = Object.fromEntries(
  Object.entries(ALT).map(([key, alt]) => [key, { src: path(key), alt }]),
);

/** Look up an image by key. Returns undefined when a category has no photograph. */
export function foodImage(key?: string): FoodImage | undefined {
  return key ? FOOD_IMAGES[key] : undefined;
}

export const MENU_PAGE_IMAGES = {
  vegetarian: Array.from({ length: 20 }, (_, i) => ({
    src: `/menu-pages/veg-${String(i + 1).padStart(2, "0")}.webp`,
    alt: `Sarva Ruchi Kitchen premium vegetarian menu, page ${i + 1} of 20`,
    page: i + 1,
  })),
  nonVegetarian: Array.from({ length: 4 }, (_, i) => ({
    src: `/menu-pages/nonveg-${String(i + 1).padStart(2, "0")}.webp`,
    alt: `Sarva Ruchi Kitchen premium non-vegetarian menu, page ${i + 1} of 4`,
    page: i + 1,
  })),
} as const;
