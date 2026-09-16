import { useCallback, useEffect } from "react";
import { useEscape, useScrollLock } from "../lib/useReveal";
import { CloseIcon } from "./Icons";

export type LightboxSlide = { src: string; alt: string; caption?: string };

/** Full-screen image viewer used by the food gallery. */
export function Lightbox({
  slides,
  index,
  onClose,
  onIndexChange,
}: {
  slides: LightboxSlide[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const open = index !== null;

  useEscape(open, onClose);
  useScrollLock(open);

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onIndexChange((index + delta + slides.length) % slides.length);
    },
    [index, slides.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  if (!open) return null;
  const slide = slides[index];

  return (
    <div
      className="fixed inset-0 z-[130] flex flex-col bg-maroon-deep/94 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={slide.caption ?? slide.alt}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="truncate font-heading text-[0.7rem] uppercase tracking-[0.18em] text-gold-light">
            {slide.caption ?? ""}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-heading text-[0.68rem] tracking-[0.14em] text-cream/55">
            {index + 1} / {slides.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition hover:border-gold-light hover:text-gold-light"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-2 pb-4 sm:px-16">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous"
          className="absolute left-1 z-10 flex size-11 items-center justify-center rounded-full border border-cream/20 bg-maroon-deep/60 text-cream/85 transition hover:border-gold-light hover:text-gold-light sm:left-4"
        >
          <span aria-hidden="true" className="text-xl leading-none">‹</span>
        </button>

        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="animate-scale-in max-h-full max-w-full rounded-lg object-contain shadow-lift"
        />

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next"
          className="absolute right-1 z-10 flex size-11 items-center justify-center rounded-full border border-cream/20 bg-maroon-deep/60 text-cream/85 transition hover:border-gold-light hover:text-gold-light sm:right-4"
        >
          <span aria-hidden="true" className="text-xl leading-none">›</span>
        </button>
      </div>
    </div>
  );
}
