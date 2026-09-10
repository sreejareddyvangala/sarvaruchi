import type { ReactNode } from "react";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";
import { cn } from "../lib/cn";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  as: Tag = "h2",
  className,
}: Props) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-3", tone === "light" && "text-gold-light")}>{eyebrow}</p>
      )}

      <Tag
        className={cn(
          "text-balance text-3xl sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-cream" : "text-maroon",
        )}
      >
        {title}
      </Tag>

      <Ornament className="mt-5" tone={tone === "light" ? "light" : "gold"} />

      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[0.975rem] leading-relaxed",
            tone === "light" ? "text-cream/75" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
