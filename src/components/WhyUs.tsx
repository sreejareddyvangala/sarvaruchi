import { WHY_US } from "../data/catering";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { LotusMark } from "./Ornament";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-maroon-texture py-18 sm:py-22 lg:py-26">
      <div className="mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Difference"
          title="Why Choose Sarva Ruchi Kitchen?"
          tone="light"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 90}>
              <article className="group h-full rounded-2xl border border-cream/12 bg-cream/[0.045] p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/[0.075]">
                <LotusMark className="h-5 w-auto text-gold transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-xl font-semibold text-cream">{item.title}</h3>
                <span className="mt-3 block h-px w-9 bg-gold/60 transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                <p className="mt-3.5 text-[0.86rem] leading-relaxed text-cream/65">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
