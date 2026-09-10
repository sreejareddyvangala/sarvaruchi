import { BUSINESS_NAME, TAGLINE } from "../config/site";
import { countCategories, countItems } from "../data/menuTypes";
import { VEG_MENU } from "../data/vegMenu";
import { FoodImage } from "./FoodImage";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { ArrowRightIcon } from "./Icons";

const FACTS = [
  { value: `${countCategories(VEG_MENU)}`, label: "Vegetarian Categories" },
  { value: `${countItems(VEG_MENU)}+`, label: "Dishes to Choose From" },
  { value: "2", label: "Premium Menus" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-parchment-texture py-18 sm:py-22 lg:py-26">
      <div className="mx-auto grid w-full max-w-[84rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Imagery */}
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            {/* The stacked pair on the right is taller than this 3/4 frame, so
                the grid stretches this cell and the photograph used to stop
                short, stranding an empty band inside the card. size-full pins
                it to the cell; h-full alone would let aspect-[3/4] derive the
                width from the height and overflow sideways. */}
            <div className="group overflow-hidden rounded-2xl border border-sand shadow-card">
              <FoodImage imageKey="veg-gravies" ratio="3/4" rounded="rounded-none" className="size-full" sizes="(min-width: 1024px) 23vw, 45vw" />
            </div>
            <div className="flex flex-col gap-3.5 sm:gap-4">
              <div className="group overflow-hidden rounded-2xl border border-sand shadow-card">
                <FoodImage imageKey="south-indian" ratio="4/3" rounded="rounded-none" sizes="(min-width: 1024px) 23vw, 45vw" />
              </div>
              <div className="group overflow-hidden rounded-2xl border border-sand shadow-card">
                <FoodImage imageKey="heritage-desserts" ratio="4/3" rounded="rounded-none" sizes="(min-width: 1024px) 23vw, 45vw" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 font-display text-3xl text-maroon sm:text-4xl lg:text-[2.75rem]">
              {BUSINESS_NAME}
            </h2>
            <div className="mt-5 h-px w-32 rule-gold" aria-hidden="true" />

            <p className="mt-6 text-[1.02rem] leading-relaxed text-ink-soft">
              {BUSINESS_NAME} is a premium Indian catering kitchen built around one idea —
              that a single caterer should be able to cover every flavour a celebration calls for.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
              Our menu runs from Andhra and Telangana home cooking to Punjabi dhaba classics,
              South Indian breakfasts, live chaat and podi counters, Pan Asian and Continental
              courses, and a dessert list that stretches from heritage Indian sweets to pastry,
              cheesecake and an ice cream parlour. Both a full vegetarian menu and a premium
              non-vegetarian catering package are available, and every event menu is assembled
              course by course with you.
            </p>

            <p className="mt-6 font-display text-xl italic text-maroon">{TAGLINE}</p>

            <Ornament className="mt-7 !justify-start" />

            <dl className="mt-8 grid grid-cols-3 gap-4">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col-reverse rounded-xl border border-sand bg-cream/70 px-3 py-4 text-center"
                >
                  <dt className="mt-1 font-heading text-[0.58rem] uppercase leading-tight tracking-[0.14em] text-gold-deep">
                    {fact.label}
                  </dt>
                  <dd className="font-display text-2xl font-bold text-maroon sm:text-3xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <ButtonLink
              to="/menu"
              variant="outline"
              className="mt-8"
              iconRight={<ArrowRightIcon className="size-4" />}
            >
              Browse the Full Menu
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
