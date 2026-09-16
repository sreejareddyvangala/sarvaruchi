import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BRAND_ASSETS, BUSINESS_NAME, HEADER_NAV_LINKS, TAGLINE } from "../config/site";
import { cn } from "../lib/cn";
import { useScrollLock } from "../lib/useReveal";
import { HamburgerIcon, CloseIcon } from "./Icons";
import { Ornament } from "./Ornament";

/** The home-page sections the header links to, taken from the links themselves. */
const SECTION_IDS = HEADER_NAV_LINKS.filter((link) => link.to.startsWith("/#")).map((link) =>
  link.to.slice(2),
);

/**
 * Which of those sections the visitor is currently in, or null while they are
 * still above the first one — which is what makes Home the active item at the
 * top of the page.
 *
 * A section counts as reached once its top passes under the sticky header, so
 * the highlight changes on arrival rather than early. Of the sections that have
 * passed that line, the one nearest to it wins, so the answer does not depend
 * on the order of the links.
 */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    let frame = 0;

    const measure = () => {
      frame = 0;
      // Detect against the very offset the browser anchors to, so a section
      // clicked in the header counts as reached the instant it lands; taking
      // the header's own height as a floor keeps the highlight from changing
      // while the heading is still tucked behind it.
      const root = document.documentElement;
      const anchor = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
      const header = document.querySelector("header");
      const line = Math.max(anchor, header?.getBoundingClientRect().height ?? 0) + 2;
      let current: string | null = null;
      let nearest = -Infinity;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, height } = el.getBoundingClientRect();
        // a section that is not laid out reports a zero rect, which would
        // otherwise read as "already reached" and steal the highlight
        if (!height) continue;
        if (top <= line && top > nearest) {
          nearest = top;
          current = id;
        }
      }
      setActive((previous) => (previous === current ? previous : current));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [enabled]);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // the reference header treatment applies to the home page only
  const isHome = location.pathname === "/";

  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash, location.key]);

  // On the home page the highlight follows what is actually on screen, so it
  // keeps up with plain scrolling as well as with clicks. The URL hash is not
  // consulted: it goes stale the moment the visitor scrolls away from whatever
  // they last clicked.
  const activeSection = useActiveSection(isHome);

  const isActive = (to: string) => {
    if (to.startsWith("/#")) return isHome && activeSection === to.slice(2);
    if (to === "/") return isHome && activeSection === null;
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-maroon focus:px-5 focus:py-2.5 focus:font-heading focus:text-xs focus:uppercase focus:tracking-widest focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-out",
          scrolled
            ? "border-b border-gold/25 bg-ivory/94 shadow-header backdrop-blur-md"
            : "border-b border-transparent bg-ivory/80 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-[84rem] items-center justify-between gap-4 px-4 transition-[height] duration-500 ease-out sm:px-6 lg:px-8",
            scrolled ? "h-[3.75rem] sm:h-[4.25rem]" : "h-[4.75rem] sm:h-[5.5rem]",
          )}
        >
          <Link
            to="/"
            className="flex shrink-0 flex-col items-start transition-transform duration-500 hover:scale-[1.015]"
            aria-label={BUSINESS_NAME + " — home"}
          >
            <img
              src={BRAND_ASSETS.logoTransparent}
              alt={BUSINESS_NAME + " logo"}
              width={900}
              height={874}
              className={cn(
                "w-auto object-contain transition-all duration-500 ease-out",
                scrolled ? "h-11 sm:h-[3.25rem]" : "h-[3.4rem] sm:h-[4rem]",
              )}
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 min-[1024px]:flex">
            {HEADER_NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={cn(
                  "relative rounded-full px-3.5 py-2 font-heading text-[0.74rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300",
                  "after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive(link.to) ? "text-maroon after:scale-x-100" : "text-ink-soft hover:text-maroon",
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-maroon transition hover:border-gold hover:bg-beige/60 min-[1024px]:hidden"
          >
            <HamburgerIcon className="size-5" />
          </button>
        </div>

        <div
          className={cn(
            "h-px rule-gold transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        />
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[110] min-[1024px]:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-maroon-deep/55 backdrop-blur-[2px] transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(21rem,88vw)] flex-col bg-parchment shadow-lift transition-transform duration-500 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-sand px-5 py-4">
            <img
              src={BRAND_ASSETS.logoTransparent}
              alt={BUSINESS_NAME + " logo"}
              className="h-12 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              tabIndex={open ? 0 : -1}
              className="flex size-10 items-center justify-center rounded-full border border-sand text-maroon transition hover:bg-beige"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {HEADER_NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center rounded-xl px-4 py-3.5 font-display text-xl font-semibold transition-colors",
                      isActive(link.to)
                        ? "bg-beige/80 text-maroon"
                        : "text-ink-soft hover:bg-beige/60 hover:text-maroon",
                    )}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Ornament className="my-7" />

            <p className="px-1 text-center text-xs leading-relaxed text-ink-muted">{TAGLINE}</p>
          </nav>
        </div>
      </div>
    </>
  );
}
