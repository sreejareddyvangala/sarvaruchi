import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BRAND_ASSETS, BUSINESS_NAME } from "../config/site";
import { Ornament } from "./Ornament";
import { CornerFlourish } from "./Flourish";

/** The maroon banner that opens each page away from the home page. */
export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  breadcrumb?: { label: string; to: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-maroon-texture pb-12 pt-28 sm:pb-14 sm:pt-32 lg:pb-16 lg:pt-36">
      <CornerFlourish className="absolute -left-3 top-20 size-28 text-gold/25 sm:size-36" position="top-left" />
      <CornerFlourish className="absolute -right-3 top-20 size-28 text-gold/25 sm:size-36" position="top-right" />

      <div className="relative mx-auto flex w-full max-w-[84rem] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 font-heading text-[0.6rem] uppercase tracking-[0.18em] text-cream/45">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.to} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  <Link to={crumb.to} className="transition-colors hover:text-gold-light">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <img
          src={BRAND_ASSETS.emblem}
          alt=""
          width={479}
          height={578}
          className="h-[4.5rem] w-auto object-contain sm:h-20"
        />

        <p className="eyebrow mt-4 text-gold-light">{eyebrow}</p>

        <h1 className="mt-2.5 font-display text-4xl font-bold text-cream sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>

        <Ornament className="mt-5" tone="light" />

        {description && (
          <p className="mt-5 max-w-2xl text-[0.97rem] leading-relaxed text-cream/70">
            {description}
          </p>
        )}

        <p className="mt-4 font-heading text-[0.58rem] uppercase tracking-[0.26em] text-cream/35">
          {BUSINESS_NAME}
        </p>

        {actions && (
          <div className="mt-8 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}
