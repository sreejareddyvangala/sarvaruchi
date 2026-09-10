import { cn } from "../lib/cn";

/**
 * The gold rule with a small emerald diamond, echoing the dividers printed
 * throughout the Sarva Ruchi Kitchen menu pages.
 */
export function Ornament({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light";
}) {
  const line =
    tone === "gold"
      ? "from-transparent via-gold to-transparent"
      : "from-transparent via-gold-light/70 to-transparent";

  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
      <span className={cn("h-px w-14 bg-gradient-to-r sm:w-20", line)} />
      <span className="size-1.5 rotate-45 bg-emerald" />
      <span className={cn("h-px w-14 bg-gradient-to-r sm:w-20", line)} />
    </div>
  );
}

/** A small lotus glyph used as a bullet, drawn to match the menu's motif. */
export function LotusMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={cn("shrink-0", className)} aria-hidden="true" fill="none">
      <path d="M12 1.5c1.5 2 2.2 4.2 2.2 6.4 0 2-.8 4-2.2 5.6-1.4-1.6-2.2-3.6-2.2-5.6 0-2.2.7-4.4 2.2-6.4Z" fill="currentColor" />
      <path d="M12 13.5C10 12.2 7.4 11.6 4.7 11.9c.6-2.4 2.2-4.4 4.4-5.4 1.3 2.2 2.2 4.6 2.9 7Z" fill="currentColor" opacity=".78" />
      <path d="M12 13.5c2-1.3 4.6-1.9 7.3-1.6-.6-2.4-2.2-4.4-4.4-5.4-1.3 2.2-2.2 4.6-2.9 7Z" fill="currentColor" opacity=".78" />
      <path d="M12 14c-2.4-.9-5-.9-7.6-.1 1.5 1.6 3.6 2.6 5.9 2.6h3.4c2.3 0 4.4-1 5.9-2.6-2.6-.8-5.2-.8-7.6.1Z" fill="currentColor" opacity=".55" />
    </svg>
  );
}
