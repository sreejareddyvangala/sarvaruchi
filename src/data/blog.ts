/**
 * Blog articles, shown as cards on the home page and read at /blog/:slug.
 *
 * The articles are general planning advice and make no claims about the
 * business — no figures, awards or promises. Their photographs are free stock
 * from Unsplash and Pexels, not the kitchen's own food, and each is credited on
 * its article page and in CREDITS.md.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type BlogPhoto = {
  /** 960x640 rendition for the cards */
  card: string;
  /** 1920x1280 rendition of the same 3:2 crop, for the article page */
  wide: string;
  alt: string;
  /** CSS object-position, when the subject is off-centre */
  position?: string;
  /** `site` is the library the photograph came from, named in the caption */
  credit: { author: string; licence: string; licenceUrl: string; source: string; site: string };
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  photo: BlogPhoto;
  body: BlogBlock[];
};

const photo = (slug: string, alt: string, credit: BlogPhoto["credit"], position?: string): BlogPhoto => ({
  card: `/blog/${slug}-card.webp`,
  wide: `/blog/${slug}.webp`,
  alt,
  position,
  credit,
});

const unsplash = (author: string, id: string): BlogPhoto["credit"] => ({
  author,
  licence: "Unsplash License",
  licenceUrl: "https://unsplash.com/license",
  source: `https://unsplash.com/photos/${id}`,
  site: "Unsplash",
});

const pexels = (author: string, url: string): BlogPhoto["credit"] => ({
  author,
  licence: "Pexels License",
  licenceUrl: "https://www.pexels.com/license/",
  source: url,
  site: "Pexels",
});

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wedding-catering-guide",
    title: "How to Choose the Right Catering for Your Wedding",
    category: "Weddings",
    excerpt:
      "Guest count, cuisine, service style and tastings — the questions worth settling before you choose a wedding caterer.",
    photo: photo(
      "wedding-catering-guide",
      "Dishes served in terracotta clay pots — a vegetable fry, curry and rice — with marigold petals and baskets of salad and rice on a catering table",
      unsplash("Adil Murshed", "6QNkA7P3EhI"),
    ),
    body: [
      {
        type: "p",
        text: "Your caterer shapes more of the wedding than almost any other choice. Guests may forget the décor, but they remember whether the food was hot, plentiful and served without long queues. A little groundwork makes the decision far easier.",
      },
      { type: "h2", text: "Start with the numbers" },
      {
        type: "p",
        text: "Settle an approximate guest count and a per-plate budget before you speak to caterers. Both drive everything else — the number of dishes, live counters and serving staff — and they let you compare quotations on equal terms.",
      },
      { type: "h2", text: "Match the food to your guests" },
      {
        type: "p",
        text: "Think about who is coming. A family with strong regional roots may expect a traditional spread, while a mixed crowd may enjoy a few North Indian or Continental dishes alongside it. Decide early whether you need vegetarian, non-vegetarian or both, and whether any guests follow Jain or other dietary practices.",
      },
      { type: "h2", text: "Questions to ask every caterer" },
      {
        type: "list",
        items: [
          "Can we taste the dishes before they are finalised?",
          "How many service staff will there be for our guest count?",
          "How is the food kept hot, and for how long?",
          "What is included — counters, crockery, water and clearing up?",
          "What are the payment and cancellation terms?",
        ],
      },
      { type: "h2", text: "Choose a service style" },
      {
        type: "p",
        text: "A buffet suits a large reception, plated or banana-leaf service feels more formal, and live counters — dosa, chaat or tandoor — add theatre while easing queues. Many weddings combine two, such as a seated lunch after the ceremony and a buffet for the reception.",
      },
      { type: "h2", text: "Put it in writing" },
      {
        type: "p",
        text: "Once you have decided, confirm the dishes, quantities, timings, staff and costs in writing. Share the venue's kitchen and power arrangements early, and agree on one point of contact for the day itself.",
      },
    ],
  },
  {
    slug: "house-warming-catering",
    title: "Best Catering Ideas for House Warming Celebrations",
    category: "House Warming",
    excerpt:
      "Traditional dishes, easy service at home and a relaxed flow of guests — ideas for a gruhapravesam feast that stays simple.",
    photo: photo(
      "house-warming-catering",
      "Idlis with sambar and chutneys in white bowls, laid out on a banana leaf",
      unsplash("Mayur Roxan", "V0pCYv4_ZZ0"),
    ),
    body: [
      {
        type: "p",
        text: "A house warming — a gruhapravesam — usually happens at home, with guests arriving through the day after the morning puja. The food needs to feel traditional, suit a home setting and be ready the moment the rituals end.",
      },
      { type: "h2", text: "Begin with tradition" },
      {
        type: "p",
        text: "Many families serve a vegetarian meal on the day, often on banana leaves. Pulihora, sambar, rasam, a couple of dry curries, curd rice and a sweet such as payasam are familiar favourites. Check with elders for any customs your family follows.",
      },
      { type: "h2", text: "Ideas that work well at home" },
      {
        type: "list",
        items: [
          "A banana-leaf meal for close family after the puja",
          "A simple breakfast of idli, vada and upma for early guests",
          "Buttermilk, panakam or fresh juices through the afternoon",
          "Sweets and fruit packed as return gifts",
        ],
      },
      { type: "h2", text: "Plan for space and timing" },
      {
        type: "p",
        text: "Homes rarely have room for a full buffet. Ask how the food will arrive and stay warm, where the serving tables will stand and how many staff are needed to keep things moving. Staggered meal times help when guests arrive in waves.",
      },
      { type: "h2", text: "Keep the day relaxed" },
      {
        type: "p",
        text: "The best house warming feasts let the hosts spend time with their guests. Settle quantities and timings in advance, and leave the serving and clearing to your caterer so the new home stays calm.",
      },
    ],
  },
  {
    slug: "indian-wedding-menu",
    title: "Planning the Perfect Indian Wedding Menu",
    category: "Weddings",
    excerpt:
      "From welcome drinks to dessert, how to build a balanced wedding spread with something for every guest.",
    photo: photo(
      "indian-wedding-menu",
      "A hand in gold bangles serving from a copper handi of curry, surrounded by more curries in copper bowls, naan, lime wedges and a plate of noodles",
      unsplash("Perspective Studio", "DUOpUlw4uLY"),
      "50% 40%",
    ),
    body: [
      {
        type: "p",
        text: "A good wedding spread feels generous without being overwhelming. The secret is balance — of courses, flavours, textures and dietary needs — so that every guest finds something to love.",
      },
      { type: "h2", text: "Build it course by course" },
      {
        type: "list",
        items: [
          "Welcome drinks: something cooling, such as buttermilk, fresh juice or a mocktail",
          "Starters: a mix of fried, grilled and chaat-style bites",
          "Mains: a biryani or pulao, two or three curries, a dal and fresh breads",
          "Accompaniments: raita, salad, pickles and papad",
          "Desserts: one traditional sweet and one lighter or chilled option",
        ],
      },
      { type: "h2", text: "Balance the flavours" },
      {
        type: "p",
        text: "Pair a rich gravy with a lighter dry vegetable, and a spicy curry with something cooling. Variety of colour and texture matters as much as the number of dishes — a shorter, well-chosen spread usually beats a long list.",
      },
      { type: "h2", text: "Think about every guest" },
      {
        type: "p",
        text: "Label vegetarian and non-vegetarian dishes clearly and serve them from separate counters where you can. Mild options help children and older guests, and it is worth asking in advance about Jain, vegan or allergy requirements.",
      },
      { type: "h2", text: "Consider the season and the hour" },
      {
        type: "p",
        text: "Summer weddings call for lighter dishes and plenty of drinks, while winter receptions can carry richer food. A lunch can be simpler than a late-evening reception, when guests have waited longer to eat.",
      },
      { type: "h2", text: "Taste before you finalise" },
      {
        type: "p",
        text: "A tasting lets you adjust spice levels, portions and presentation well before the day. Confirm the final list of dishes and quantities in writing.",
      },
    ],
  },
  {
    slug: "corporate-catering",
    title: "Catering Ideas for Corporate Events",
    category: "Corporate Events",
    excerpt:
      "Conferences, offsites and office celebrations — food that keeps the day on schedule and suits a varied team.",
    photo: photo(
      "corporate-catering",
      "Guests in suits and ties serving themselves from a line of steel chafing dishes of curries, rice and vegetables, with a chef in whites standing by",
      pexels("Mick Latter", "https://www.pexels.com/photo/men-in-suits-choosing-food-from-table-18749086/"),
      "50% 70%",
    ),
    body: [
      {
        type: "p",
        text: "Food at a corporate event has a job to do: keep people energised, fit the schedule and please a group with many different tastes. Planning it around the agenda makes all the difference.",
      },
      { type: "h2", text: "Plan around the agenda" },
      {
        type: "p",
        text: "Map out the day first. Tea and coffee breaks need to be quick to serve, and lunch should leave enough time to return to sessions without a rush. Evening events and celebrations can be far more leisurely.",
      },
      { type: "h2", text: "Ideas by type of event" },
      {
        type: "list",
        items: [
          "Conferences and training days: working lunches, a light breakfast and snacks for the breaks",
          "Offsites: a buffet that mixes Indian dishes with Continental or Pan Asian options",
          "Office celebrations and festivals: festive sweets, a chaat counter and regional favourites",
          "Client meetings: neat food that is easy to eat while you talk",
        ],
      },
      { type: "h2", text: "Cater for a varied team" },
      {
        type: "p",
        text: "Offer clearly labelled vegetarian and non-vegetarian choices, with mild dishes alongside spicier ones. Collect dietary requirements in advance through registration or a short email.",
      },
      { type: "h2", text: "Keep the day running smoothly" },
      {
        type: "p",
        text: "Heavy meals can slow down afternoon sessions, so a lighter lunch often works better. Confirm numbers a few days ahead, allow a small margin for extra guests, and agree set-up and clearing times with the venue.",
      },
    ],
  },
  {
    slug: "traditional-indian-flavours",
    title: "Traditional Indian Flavours for Modern Celebrations",
    category: "Traditions",
    excerpt:
      "How regional recipes, whole spices and time-honoured sweets can give today's celebrations a sense of heritage.",
    photo: photo(
      "traditional-indian-flavours",
      "Whole and ground spices on a dark surface — dried red chillies, cloves, cinnamon, cardamom, turmeric roots, chilli powder and turmeric in silver spoons — with a sprig of curry leaves",
      unsplash("Anju Ravindranath", "Nihdo084Yos"),
    ),
    body: [
      {
        type: "p",
        text: "Celebrations have changed — smaller guest lists, new kinds of venue, modern presentation — yet many hosts still want food that tastes of home. Traditional flavours can sit comfortably at the heart of a contemporary event.",
      },
      { type: "h2", text: "Start with regional roots" },
      {
        type: "p",
        text: "Indian cooking changes every few hundred kilometres. Andhra pulusu and podis, Hyderabadi biryani, Punjabi dals and South Indian tiffin each bring their own character, and choosing dishes from your family's region makes a celebration feel personal.",
      },
      { type: "h2", text: "Let the spices lead" },
      {
        type: "p",
        text: "Whole spices, freshly ground masalas and a well-judged tempering in ghee or oil build the depth that people remember. Balanced spicing — not simply heat — is what makes traditional food so satisfying.",
      },
      { type: "h2", text: "Modern ways to serve tradition" },
      {
        type: "list",
        items: [
          "Live counters for dosa, chaat or jalebi, made fresh in front of guests",
          "Small tasting portions of classic dishes",
          "Traditional sweets served alongside lighter, chilled desserts",
          "Buttermilk, panakam or rose sherbet in place of soft drinks",
        ],
      },
      { type: "h2", text: "Keep the balance" },
      {
        type: "p",
        text: "Mix a few well-loved classics with one or two surprises, and keep spice levels comfortable for every age. When the flavours are right, a modern celebration still feels rooted in tradition.",
      },
    ],
  },
];

export function findBlogPost(slug?: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/** Rough reading time at about 200 words a minute, never under two minutes. */
export function readingMinutes(post: BlogPost): number {
  const words = post.body
    .flatMap((block) => (block.type === "list" ? block.items : [block.text]))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}
