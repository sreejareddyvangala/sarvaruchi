import { cn } from "../../lib/cn";

/**
 * The numbers printed on the non-veg menu are package SELECTIONS, never prices.
 * This badge always says so in words so the two can't be confused.
 */
export function SelectionBadge({
  count,
  tone = "light",
  size = "md",
}: {
  count: number;
  tone?: "light" | "dark";
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border font-heading font-semibold uppercase tracking-[0.12em]",
        size === "sm" ? "px-2.5 py-1 text-[0.58rem]" : "px-3 py-1.5 text-[0.62rem]",
        tone === "dark"
          ? "border-gold-light/45 bg-cream/10 text-gold-light"
          : "border-gold/45 bg-gold/12 text-gold-deep",
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center rounded-full font-display font-bold leading-none",
          size === "sm" ? "size-4 text-[0.68rem]" : "size-5 text-[0.78rem]",
          tone === "dark" ? "bg-gold-light text-maroon-deep" : "bg-gold text-maroon-deep",
        )}
        aria-hidden="true"
      >
        {count}
      </span>
      <span className="sr-only">{count} </span>
      {count === 1 ? "Selection" : "Selections"}
    </span>
  );
}

/** The "Any One" badge printed on the live-station block. */
export function ChoiceBadge({ label, tone = "dark" }: { label: string; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-3.5 py-1.5 font-heading text-[0.62rem] font-semibold uppercase tracking-[0.16em]",
        tone === "dark"
          ? "border-gold-light bg-gold-light/95 text-maroon-deep"
          : "border-gold bg-gold/15 text-gold-deep",
      )}
    >
      {label}
    </span>
  );
}
