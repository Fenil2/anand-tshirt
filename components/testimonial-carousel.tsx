"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

const INTERVAL = 5000;

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="premium-card reveal-scale rounded-[30px] border border-white/60 px-5 py-10 text-center sm:rounded-[34px] sm:px-6 sm:py-14">
      {/* All slides share one grid cell so the card sizes to the tallest quote
          and crossfades without any layout shift. */}
      <div className="grid">
        {testimonials.map((item, index) => (
          <figure
            key={item.name}
            aria-hidden={index !== active}
            className={`col-start-1 row-start-1 m-0 transition-opacity duration-700 ease-out ${
              index === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--brand)] text-[22px] font-semibold text-white ring-8 ring-white/60 shadow-[0_18px_34px_rgba(24,24,28,0.08)]">
              {item.name.charAt(0)}
            </div>
            <blockquote className="mx-auto mt-8 max-w-[760px] text-[20px] font-medium leading-9 tracking-[-0.03em] text-[color:var(--brand)] sm:text-[26px] sm:leading-11">
              &quot;{item.quote}&quot;
            </blockquote>
            <figcaption className="mt-5 text-[14px] font-semibold text-[color:var(--brand)]">
              {item.name}
              <span className="font-medium text-[color:var(--muted)]">, {item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Non-interactive progress dots reflecting the active slide. */}
      <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
        {testimonials.map((item, index) => (
          <span
            key={item.name}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === active
                ? "w-6 bg-[color:var(--brand)]"
                : "w-1.5 bg-[color:var(--line)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
