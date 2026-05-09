"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="home"
      className="section-shell reveal-up py-2 sm:py-3 lg:py-4"
    >
      <div className="flex items-center justify-between gap-3 md:gap-5">
        <a href="#home" className="flex items-center gap-3 sm:gap-4">
          <img
            src="/spotdot-logo.jpeg"
            alt="SpotDot logo"
            className="h-12 w-12 rounded-full border border-[color:var(--line)] bg-white object-cover shadow-[0_10px_30px_rgba(23,23,26,0.12)] sm:h-14 sm:w-14 lg:h-18 lg:w-18"
          />
          <p className="text-[16px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand)] sm:text-[20px] sm:tracking-[0.18em] lg:text-[28px] lg:tracking-[0.24em]">
            SpotDot
          </p>
        </a>

        <nav className="premium-card hidden flex-1 items-center justify-center gap-x-4 gap-y-3 rounded-full border border-[color:var(--line)] px-4 py-3 md:flex lg:gap-7 lg:px-5 lg:py-4">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[12px] font-medium uppercase tracking-[0.1em] transition lg:text-[13px] lg:tracking-[0.12em] ${
                index === 0 ? "text-[color:var(--brand)]" : "text-[color:var(--muted)] hover:text-[color:var(--brand)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-primary hidden px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] md:inline-flex lg:px-5 lg:py-3 lg:text-[13px] lg:tracking-[0.16em]"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/85 text-[color:var(--brand)] shadow-[0_10px_24px_rgba(23,23,26,0.08)] md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="premium-card mt-3 rounded-[28px] border border-[color:var(--line)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-[12px] font-medium uppercase tracking-[0.14em] transition ${
                  index === 0
                    ? "bg-[color:var(--brand)] text-white"
                    : "text-[color:var(--brand)] hover:bg-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-2 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em]"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
