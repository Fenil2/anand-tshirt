"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR =
  ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-clip, [data-reveal]";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reduced motion: leave everything visible, run nothing.
    if (prefersReduced) return;

    // Hide reveal targets. This runs after this subtree has committed, so it
    // only toggles a class on <html> — no child DOM is touched yet (touching
    // children mid-hydration triggers mismatches that wipe the reveal class).
    root.classList.add("reveal-ready");

    // Read-only query; safe even while siblings are still hydrating.
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      // threshold 0 = fire as soon as any pixel enters. A ratio threshold is
      // unreliable for elements taller than the viewport (a full-height hero
      // image can never reach, say, 12% on a short screen).
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    // Start revealing only once the preloader curtain begins lifting, with a
    // fallback. By then hydration is long finished, so adding `is-visible` to
    // children never races React.
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      const viewportBottom = window.innerHeight * 0.92;
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        // Anything already on screen reveals immediately — this guarantees
        // above-the-fold content (the hero) always shows. Everything below is
        // handed to the observer to reveal as it scrolls into view.
        if (rect.top < viewportBottom && rect.bottom > 0) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      }
    };

    window.addEventListener("spotdot:reveal", start, { once: true });
    const fallback = window.setTimeout(start, 2400);

    // ---- Scroll progress bar + parallax ----
    // Mutations happen only inside scroll/resize handlers, i.e. always after
    // hydration — never synchronously in this effect body.
    const progress = root.querySelector<HTMLElement>(".scroll-progress");
    const parallax = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        if (progress) {
          const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
          progress.style.transform = `scaleX(${pct})`;
        }
        for (const el of parallax) {
          const speed = Number.parseFloat(el.dataset.parallax || "0.1");
          const rect = el.getBoundingClientRect();
          const offset =
            (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("spotdot:reveal", start);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(fallback);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
