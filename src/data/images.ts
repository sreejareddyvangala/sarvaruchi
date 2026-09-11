/**
 * Food image registry.
 *
 * ALT lists the images supplied with the site under /food — the home page hero,
 * the occasion cards and the original food artwork. PHOTOS lists the gallery
 * and About photographs under /gallery: openly licensed Unsplash photographs
 * chosen to match the blog's topics, each with a smaller rendition for tiles
 * and its photographer's credit (all listed in CREDITS.md).
 */

export type FoodImage = {
  src: string;
  alt: string;
  /** smaller rendition for tiles, where one exists */
  srcSet?: string;
  /** photographer credit, shown in the gallery viewer */
  credit?: string;
};

const path = (key: string) => `/food/${key}.webp`;

const ALT: Record<string, string> = {
  "hero-banana-leaf-feast":
    "A traditional feast on a banana leaf — biryani in a clay pot, dal, fish curry, chicken fry, steamed rice, ghee, pickles, chutney in a stone mortar, sweets and pesarattu with upma",
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
  "occasion-house-warming": "Gruhapravesam housewarming ritual — milk boiling over in a brass pot on the new stove, with marigold garlands, a brass lamp and rangoli",
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

/** 4:3 photographs come as 1600 and 800 wide; the portrait one as 1200 and 600. */
const photo = (key: string, alt: string, photographer: string, portrait = false): [string, FoodImage] => [
  key,
  {
    src: `/gallery/${key}.webp`,
    srcSet: portrait
      ? `/gallery/${key}-sm.webp 600w, /gallery/${key}.webp 1200w`
      : `/gallery/${key}-sm.webp 800w, /gallery/${key}.webp 1600w`,
    alt,
    credit: `Photo: ${photographer} / Unsplash`,
  },
];

const PHOTOS: Record<string, FoodImage> = Object.fromEntries([
  // wedding catering
  photo("wedding-reception-canopy", "Outdoor wedding reception under white draped canopies with chandeliers, round dining tables and a buffet counter along the lawn", "Vidit Goswami"),
  photo("wedding-buffet-service", "Buffet counter of steel chafing dishes with hot dishes and plates set out, beside an arrangement of red roses and white orchids", "Edwin Petrus"),
  photo("wedding-live-counter", "Chef in whites and gloves preparing food at a live counter under brass heat lamps at an evening wedding", "Charanjeet Dhiman"),
  photo("wedding-mandap-hall", "Banquet hall with a grand chandelier and golden drapes around a flower-decked wedding mandap", "Amish Thakkar"),
  // house warming
  photo("housewarming-entrance", "Painted entrance of a traditional Indian home with a marigold toran over the doorway and potted plants on either side", "Rishi2001 Chhapia"),
  photo("housewarming-kalash", "Coconut tied with red thread on mango leaves over a copper kalash, set out for a puja", "Happy Films"),
  photo("housewarming-rangoli-diyas", "Flower-petal rangoli on the floor, ringed with lit clay diyas", "Suchandra Roy Chowdhury"),
  photo("housewarming-idli-breakfast", "Idlis with sambar and chutneys in white bowls, laid out on a banana leaf", "Mayur Roxan"),
  // wedding food
  photo("weddingfood-thali-spread", "Steel thalis with katoris of dal, curries, vegetables and raita, with bowls of rice and a chicken fry", "Zoshua Colah"),
  photo("weddingfood-biryani", "Vegetable biryani with peas and fresh coriander in a large steel catering pan", "Rashpal Singh"),
  photo("weddingfood-palak-paneer", "Palak paneer finished with cream, served with layered paratha, whole spices, shallots and dried chillies", "Chetanya Sharma"),
  photo("weddingfood-live-jalebi", "Jalebi being piped into hot oil in a wide kadai at a live sweet counter", "fuseviews"),
  // corporate events
  photo("corporate-office-buffet", "Catering spread of croissants, tarts, dips and small bites laid out beside a window high above the city", "Culinarissimo"),
  photo("corporate-plated-lunch", "Makhani curry with a cream swirl, saffron rice, naan, kebabs and a second curry served on white plates", "Snappr"),
  photo("corporate-tea-break", "Samosas with green chutney beside a glass of masala chai", "prajakta bagade"),
  photo("corporate-snack-platter", "Platter of samosas, spring rolls, pakoras, chana and a slice of cake for a tea break", "Mohammad Fahim"),
  // traditions
  photo("traditions-banana-leaf-feast", "A regional feast on a banana leaf — onion uttapam, idlis, chicken fry and mutton, with podis and ghee in steel cups", "Anil Sharma"),
  photo("traditions-chaat-counter", "Chaat counter with bowls of sev, chopped onion and tomato, green chutney and spice mixes", "Zoshua Colah"),
  photo("traditions-diyas", "Lit clay diyas on a brass plate surrounded by rose petals and marigolds", "Udayaditya Barua"),
  photo("traditions-barfi", "Pistachio-topped milk barfi on a black leaf-shaped plate beside a lotus diya", "VD Photography"),
  // about section
  photo("about-biryani-handi", "Biryani topped with fried onions and mint in a clay handi, on a red cloth", "Anil Sharma", true),
  photo("about-idli-spices", "Idlis topped with curry leaves on a banana leaf, with sambar and chutneys in clay pots and whole spices around", "Prateek Jaiswal"),
  photo("about-indian-sweets", "A bowl of assorted Indian sweets — motichoor laddu, gulab jamun, coconut laddu, rasgulla, cham cham and barfi", "Rimsha Noor"),
]);

export const FOOD_IMAGES: Record<string, FoodImage> = {
  ...Object.fromEntries(Object.entries(ALT).map(([key, alt]) => [key, { src: path(key), alt }])),
  ...PHOTOS,
};

/** Look up an image by key. Returns undefined when a category has no photograph. */
export function foodImage(key?: string): FoodImage | undefined {
  return key ? FOOD_IMAGES[key] : undefined;
}
