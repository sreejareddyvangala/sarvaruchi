import { useState } from "react";
import { foodImage } from "../data/images";
import { cn } from "../lib/cn";
import { LotusMark } from "./Ornament";

type Ratio = "square" | "4/3" | "3/2" | "16/9" | "5/4" | "3/4" | "21/9";

const RATIO: Record<Ratio, string> = {
  square: "aspect-square",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-[16/9]",
  "5/4": "aspect-[5/4]",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
};

/**
 * A photograph from the menu material, cropped by the browser with
 * object-cover so it is never stretched or squashed, and faded in on load.
 *
 * When a category has no accurate photograph, `imageKey` is omitted and an
 * elegant typography plate is rendered instead of an unrelated food picture.
 */
export function FoodImage({
  imageKey,
  fallbackLabel,
  ratio = "4/3",
  className,
  imgClassName,
  zoomOnHover = true,
  priority = false,
  sizes,
  rounded = "rounded-xl",
}: {
  imageKey?: string;
  fallbackLabel?: string;
  ratio?: Ratio;
  className?: string;
  imgClassName?: string;
  zoomOnHover?: boolean;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
}) {
  const image = foodImage(imageKey);
  const [loaded, setLoaded] = useState(false);

  if (!image) {
    return <TypographyPlate label={fallbackLabel} ratio={ratio} className={cn(rounded, className)} />;
  }

  return (
    <div className={cn("relative overflow-hidden bg-beige", RATIO[ratio], rounded, className)}>
      <img
        src={image.src}
        alt={image.alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        // A cached image can finish loading before React attaches onLoad, in
        // which case that event never fires and the picture would stay at
        // opacity-0 forever. Catch that case on mount from the element itself.
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setLoaded(true);
        }}
        className={cn(
          "size-full object-cover transition-[opacity,transform] duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          zoomOnHover && "group-hover:scale-[1.045]",
          imgClassName,
        )}
      />
    </div>
  );
}

/**
 * Used wherever the supplied menu material has no matching photograph —
 * notably the non-vegetarian courses, which are not pictured in either PDF.
 */
export function TypographyPlate({
  label,
  ratio = "4/3",
  className,
}: {
  label?: string;
  ratio?: Ratio;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden border border-gold/25 bg-gradient-to-br from-cream via-parchment to-beige",
        RATIO[ratio],
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-2.5 rounded-[inherit] border border-gold/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[0.55rem] rounded-[inherit] border border-gold/12"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-2.5 px-6 text-center">
        <LotusMark className="h-5 w-auto text-gold" />
        {label && (
          <p className="font-display text-lg font-semibold leading-snug text-maroon sm:text-xl">
            {label}
          </p>
        )}
        <span className="h-px w-12 bg-gold/60" aria-hidden="true" />
      </div>
    </div>
  );
}
