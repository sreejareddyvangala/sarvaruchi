/**
 * Testimonials shown on the home page.
 *
 * SAMPLE ENTRIES: these were written to lay out the section and are not the
 * words of real customers. Replace each one with a genuine review (with the
 * customer's permission) and delete its `sample` flag. While the flag is set,
 * the card is labelled "Sample review" on the page, so placeholder text is
 * never presented as a real customer's review.
 */

export type TestimonialEvent =
  | "Wedding"
  | "Reception"
  | "House Warming"
  | "Corporate Event"
  | "Family Celebration";

export type Testimonial = {
  name: string;
  eventType: TestimonialEvent;
  review: string;
  sample?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Lakshmi & Venkat",
    eventType: "Wedding",
    review:
      "From the welcome drinks to the last dessert, every course felt considered. The biryani and the live chaat counter were the talk of the evening.",
    sample: true,
  },
  {
    name: "Arjun R.",
    eventType: "Reception",
    review:
      "The starters kept guests happy all evening, and the copper handis made the buffet look beautiful.",
    sample: true,
  },
  {
    name: "Padma S.",
    eventType: "House Warming",
    review:
      "Homestyle food that tasted just right for our gruhapravesam, and we could spend the day with our guests.",
    sample: true,
  },
  {
    name: "Meera K.",
    eventType: "Corporate Event",
    review:
      "A thoughtful mix of Indian and Continental dishes for our team, neatly laid out and easy to plan.",
    sample: true,
  },
  {
    name: "The Reddy Family",
    eventType: "Family Celebration",
    review:
      "Every family favourite we asked for was on the table, and the desserts disappeared first.",
    sample: true,
  },
];
