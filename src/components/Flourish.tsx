import { cn } from "../lib/cn";

/**
 * Gold corner scrollwork, drawn to echo the ornamental frame printed on every
 * page of the Sarva Ruchi Kitchen menus. Purely decorative.
 */
export function CornerFlourish({
  className,
  position = "top-left",
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const flip = {
    "top-left": "",
    "top-right": "scale-x-[-1]",
    "bottom-left": "scale-y-[-1]",
    "bottom-right": "scale-[-1]",
  }[position];

  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("pointer-events-none select-none", flip, className)}
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M4 30C4 15.6 15.6 4 30 4h58" opacity=".85" />
        <path d="M9 38c0-16 13-29 29-29h44" opacity=".45" />
        <path d="M22 46c0-8.3 6.7-15 15-15 6 0 11 3.5 13.4 8.6 1.6 3.4-.3 7.1-3.8 7.9-3 .7-5.8-1.2-6.4-4.1" />
        <path d="M46 22c-8.3 0-15 6.7-15 15 0 6 3.5 11 8.6 13.4 3.4 1.6 7.1-.3 7.9-3.8.7-3-1.2-5.8-4.1-6.4" />
      </g>
      <g fill="currentColor">
        <path d="M62 8.6 65.4 12 62 15.4 58.6 12 62 8.6Z" opacity=".9" />
        <path d="M12 58.6 15.4 62 12 65.4 8.6 62 12 58.6Z" opacity=".9" />
        <ellipse cx="37" cy="37" rx="2.4" ry="2.4" opacity=".55" />
      </g>
    </svg>
  );
}

/** The thin gold double-rule that frames the menu pages. */
export function GoldFrame({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      <div className="absolute inset-3 rounded-[inherit] border border-gold/30 sm:inset-4" />
      <div className="absolute inset-[0.9rem] rounded-[inherit] border border-gold/15 sm:inset-[1.15rem]" />
    </div>
  );
}
