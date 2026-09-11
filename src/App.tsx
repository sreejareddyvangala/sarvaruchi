import { useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { WhatsAppProvider } from "./components/WhatsAppProvider";
import { Home } from "./pages/Home";
import { BlogArticle } from "./pages/BlogArticle";
import { GalleryPage } from "./pages/GalleryPage";
import { NotFound } from "./pages/NotFound";

/**
 * Drives scrolling on navigation.
 *
 * A few things this has to get right:
 *  - clicking the same nav link twice must scroll again, so the effect keys off
 *    location.key (which changes on every navigation) rather than the URL alone;
 *  - arriving at a hash from another route means the target may not be laid out
 *    for a frame or two, so it retries before giving up;
 *  - on mobile the drawer's scroll lock is released in the same commit as the
 *    navigation, and scrolling while body is locked silently does nothing, so it
 *    waits for the lock to lift.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const changedPage = previousPath.current !== null && previousPath.current !== pathname;
    previousPath.current = pathname;

    let cancelled = false;
    let attempts = 0;
    let timer = 0;
    let guard = 0;

    /**
     * A smooth scroll is an animation, and an animation can decline to run —
     * the tab is not being painted, the compositor drops it, something
     * interrupts it. When that happens the visitor stays exactly where they
     * were and the navigation looks broken. So every glide is checked shortly
     * afterwards: if the page has not budged at all, go there outright.
     */
    const ensureArrival = (before: number, jump: () => void) => {
      guard = window.setTimeout(() => {
        if (!cancelled && window.scrollY === before) jump();
      }, 420);
    };

    if (!hash) {
      // a different page starts at the top instantly; going "home" from the
      // home page itself glides back up
      const before = window.scrollY;
      const instant = changedPage || reduced;
      window.scrollTo({ top: 0, behavior: instant ? "instant" : "smooth" } as ScrollToOptions);
      if (!instant && before !== 0) {
        ensureArrival(before, () =>
          window.scrollTo({ top: 0, behavior: "instant" } as ScrollToOptions),
        );
      }
      return () => {
        cancelled = true;
        window.clearTimeout(guard);
      };
    }

    const id = decodeURIComponent(hash.slice(1));

    const run = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      const locked = document.body.style.overflow === "hidden";
      if (el && !locked) {
        const before = window.scrollY;
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
        if (!reduced) {
          ensureArrival(before, () =>
            el.scrollIntoView({ behavior: "instant", block: "start" } as ScrollIntoViewOptions),
          );
        }
        return;
      }
      // retry on a timer rather than only on animation frames: rAF is starved
      // while the tab is in the background, which would drop the scroll entirely
      if (attempts++ < 25) timer = window.setTimeout(run, 24);
    };
    timer = window.setTimeout(run, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.clearTimeout(guard);
    };
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <WhatsAppProvider>
      <ScrollManager />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* the blog itself is a section of the home page; each article has its own page */}
          <Route path="/blog" element={<Navigate to="/#blog" replace />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
