/**
 * Client testimonials shown on the home page. The first entry is featured in the
 * tall card; the grid is laid out for five.
 */

export type TestimonialEvent =
  | "Wedding Celebration"
  | "House Warming"
  | "Reception"
  | "Corporate Event"
  | "Family Celebration";

export type Testimonial = {
  name: string;
  eventType: TestimonialEvent;
  review: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya R.",
    eventType: "Wedding Celebration",
    review:
      "The food was absolutely delicious, and the presentation was beautiful. Every dish was fresh, flavourful, and enjoyed by all our guests. Truly a wonderful catering experience.",
  },
  {
    name: "Rahul K.",
    eventType: "House Warming",
    review:
      "We were extremely happy with the catering for our house warming. The food had authentic flavours, the service was excellent, and everything was managed perfectly.",
  },
  {
    name: "Sneha M.",
    eventType: "Reception",
    review:
      "From the quality of the food to the professional service, everything was excellent. Our guests loved the variety of dishes, and the entire experience was smooth and memorable.",
  },
  {
    name: "Arjun S.",
    eventType: "Corporate Event",
    review:
      "Sarva Ruchi Kitchen delivered an amazing catering experience for our corporate event. The food was fresh, delicious, and beautifully presented. Highly recommended!",
  },
  {
    name: "Lakshmi P.",
    eventType: "Family Celebration",
    review:
      "The food was one of the highlights of our family celebration. The flavours were authentic, the portions were generous, and everything was served with great care. We loved it!",
  },
];
