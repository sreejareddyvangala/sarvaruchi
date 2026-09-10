import { useEffect, useRef, useState } from "react";

/**
 * Backstop for the reveal observers below.
 *
 * IntersectionObserver callbacks are only delivered while the page is actually
 * being rendered — a backgrounded or occluded tab receives none. If a visitor
 * scrolls (or drags the scrollbar) through a stretch of the page in that state,
 * whole sections would stay parked at opacity 0 for good, which reads as the
 * page having run out of content. One shared, throttled listener sweeps up
 * anything the observers have not reported and shows it.
 */
type Pending = { node: HTMLElement; show: () => void };
const pending = new Set<Pending>();
let listening = false;
let queued = false;

function flush() {
  queued = false;
  const height = window.innerHeight;
  for (const item of [...pending]) {
    const rect = item.node.getBoundingClientRect();
    if (rect.top < height && rect.bottom > 0) {
      pending.delete(item);
      item.show();
    }
  }
  if (pending.size === 0) stopSweeping();
}

function schedule() {
  if (queued) return;
  queued = true;
  setTimeout(flush, 120);
}

function startSweeping() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
}

function stopSweeping() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
}

/**
 * Adds a gentle fade-and-rise the first time an element scrolls into view.
 * Falls back to "already visible" when IntersectionObserver is unavailable or
 * the visitor prefers reduced motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string } = {},
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  // Fire on the first sliver of the element rather than on a share of its area:
  // several of these wrappers are whole sections taller than the viewport, and
  // an area threshold leaves them sitting at opacity 0 well after they are on
  // screen — which reads as the page having stopped scrolling.
  const { threshold = 0, rootMargin = "0px 0px -64px 0px" } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const item: Pending = { node, show: () => setVisible(true) };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            pending.delete(item);
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    pending.add(item);
    startSweeping();

    return () => {
      observer.disconnect();
      pending.delete(item);
      if (pending.size === 0) stopSweeping();
    };
  }, [threshold, rootMargin]);

  return { ref, visible };
}

/** Locks body scroll while a modal or mobile menu is open. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [locked]);
}

/** Closes something when Escape is pressed. */
export function useEscape(active: boolean, onClose: () => void) {
  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, onClose]);
}
