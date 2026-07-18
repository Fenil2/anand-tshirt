"use client";

import { useEffect, useState } from "react";

const WORDMARK = "SPOTDOT";
const MIN_DURATION = 1800;

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let frame = 0;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    const start = Date.now();
    let loaded = document.readyState === "complete";

    const markLoaded = () => {
      loaded = true;
    };
    if (!loaded) window.addEventListener("load", markLoaded, { once: true });

    const loop = () => {
      if (!mounted) return;
      const elapsed = Date.now() - start;
      let pct = (elapsed / MIN_DURATION) * 100;
      if (!loaded) pct = Math.min(pct, 92);
      pct = Math.min(pct, 100);
      setProgress(Math.floor(pct));

      if (pct >= 100 && loaded) {
        setIsHiding(true);
        // Cue the page reveal as the curtain begins to lift.
        window.dispatchEvent(new Event("spotdot:reveal"));
        hideTimer = setTimeout(() => {
          if (mounted) setIsVisible(false);
        }, 950);
        return;
      }
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => {
      mounted = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("load", markLoaded);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pl-root fixed inset-0 z-[200]">
      <div className={`pl-panel pl-panel-top ${isHiding ? "pl-open" : ""}`} />
      <div className={`pl-panel pl-panel-bottom ${isHiding ? "pl-open" : ""}`} />

      <div className={`pl-content ${isHiding ? "pl-content-out" : ""}`}>
        <p className="pl-eyebrow">Premium Essentials</p>

        <div className="pl-mark" aria-label={WORDMARK}>
          {WORDMARK.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="pl-letter"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="pl-bar">
          <div className="pl-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="pl-meta">
          <span>Loading the collection</span>
          <span className="pl-count">{progress.toString().padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
