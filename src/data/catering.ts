/** Occasions Sarva Ruchi Kitchen caters for, shown as cards on the home page. */

export type OccasionIcon =
  | "rings" | "heart" | "cutlery" | "cake"
  | "briefcase" | "house" | "diya" | "glasses";

export type Occasion = {
  id: string;
  title: string;
  description: string;
  /** Key into the food image registry. */
  image: string;
  /** Badge shown on the occasion card. */
  icon: OccasionIcon;
  /** Pre-filled WhatsApp enquiry for this occasion. */
  enquiry: string;
};

export const OCCASIONS: Occasion[] = [
  {
    id: "weddings",
    title: "Weddings",
    description:
      "Full wedding catering built around a menu you choose yourself — from welcome drinks to the last dessert.",
    image: "occasion-weddings",
    icon: "rings",
    enquiry:
      "Hello Sarva Ruchi Kitchen, I would like to enquire about wedding catering.",
  },
  {
    id: "engagements",
    title: "Engagements",
    description:
      "Live counters, chaat stations and a starter spread that keeps guests grazing through the evening.",
    image: "occasion-engagements",
    icon: "heart",
    enquiry:
      "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for an engagement.",
  },
  {
    id: "receptions",
    title: "Receptions",
    description:
      "Tikkas, kebabs and a wide starter selection served alongside a full main course.",
    image: "occasion-receptions",
    icon: "cutlery",
    enquiry:
      "Hello Sarva Ruchi Kitchen, I would like to enquire about reception catering.",
  },
  {
    id: "birthdays",
    title: "Birthday Celebrations",
    description:
      "Cakes, desserts and a dedicated kid's menu, with mains to suit the whole family.",
    image: "occasion-birthdays",
    icon: "cake",
    enquiry:
      "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for a birthday celebration.",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "Continental, Pan Asian and Indian menus suited to conferences, offsites and office celebrations.",
    image: "occasion-corporate",
    icon: "briefcase",
    enquiry:
      "Hello Sarva Ruchi Kitchen, I would like to enquire about corporate event catering.",
  },
  {
    id: "house-warming",
    title: "House Warming",
    description:
      "Homestyle South Indian and regional cooking for gatherings at home, at any scale.",
    image: "occasion-house-warming",
    icon: "house",
    enquiry:
      "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for a house warming.",
  },
  {
    id: "traditional",
    title: "Traditional Functions",
    description:
      "Biryanis, pulusus, podis and traditional sweets prepared the way the occasion calls for.",
    image: "occasion-traditional",
    icon: "diya",
    enquiry:
      "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for a traditional function.",
  },
  {
    id: "special",
    title: "Special Celebrations",
    description:
      "Anniversaries, naming ceremonies, housewarmings — the menu is put together around your event.",
    image: "occasion-special",
    icon: "glasses",
    enquiry:
      "Hello Sarva Ruchi Kitchen, I would like to enquire about catering for a special celebration.",
  },
];

export const EVENT_TYPES = [
  "Wedding",
  "Engagement",
  "Reception",
  "Birthday Celebration",
  "Corporate Event",
  "House Function",
  "Traditional Function",
  "Special Celebration",
  "Other",
] as const;

export const PREFERENCES = ["Vegetarian", "Non-Vegetarian", "Both"] as const;
