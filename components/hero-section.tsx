import { CirclePlay, Star } from "lucide-react";
import { heroChecklist } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="section-shell grid gap-6 overflow-hidden pb-12 pt-2 sm:gap-8 sm:pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
      <div className="reveal-up delay-1 relative overflow-hidden rounded-[32px] border border-white/60 shadow-[0_30px_80px_rgba(24,24,28,0.16)]">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
          alt="Fashion hero"
          className="h-full min-h-[260px] w-full object-cover sm:min-h-[420px] lg:min-h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/0 to-white/10" />
        <div className="premium-card float-slow absolute bottom-4 left-4 max-w-[calc(100%-32px)] rounded-[20px] border border-white/70 px-3 py-3 shadow-[0_24px_50px_rgba(24,24,28,0.16)] sm:bottom-8 sm:left-8 sm:max-w-none sm:rounded-[24px] sm:px-5 sm:py-4">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-soft)] sm:text-[11px] sm:tracking-[0.28em]">
            New Season
          </p>
          <div className="mt-2 flex items-center gap-3 sm:mt-3">
            <img
              src="/spotdot-logo.jpeg"
              alt="SpotDot mark"
              className="h-10 w-10 rounded-full border border-[color:var(--line)] object-cover sm:h-12 sm:w-12"
            />
            <div>
              <p className="text-[13px] font-semibold text-[color:var(--brand)] sm:text-[15px]">SpotDot Collection</p>
              <p className="text-[11px] text-[color:var(--muted)] sm:text-[12px]">Fresh fits. Premium feel. Everyday wear.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[560px] text-center lg:pl-2 lg:text-left">
        <div className="reveal-up delay-2 mb-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <span className="rounded-full border border-[color:var(--line)] bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--brand)] backdrop-blur-xl sm:text-[12px] sm:tracking-[0.12em]">
            Premium T-Shirt Sales
          </span>
          <div className="flex items-center gap-1 text-[color:var(--brand)]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>

        <h1 className="reveal-up delay-2 mx-auto max-w-[12ch] text-[32px] font-semibold leading-[1.02] tracking-[-0.07em] text-[color:var(--brand)] sm:max-w-[12ch] sm:text-[48px] lg:mx-0 lg:max-w-[13ch] lg:text-[74px]">
          <span className="block">Shop premium</span>
          <span className="block">t-shirts, essentials,</span>
          <span className="block">and fresh seasonal</span>
          <span className="block">fits</span>
        </h1>

        <p className="reveal-up delay-3 mx-auto mt-5 max-w-[520px] text-[14px] leading-7 text-[color:var(--muted)] sm:mt-6 sm:text-[16px] sm:leading-8 lg:mx-0">
          SpotDot is built around stylish everyday wear: clean staples, standout graphics,
          soft cotton fabrics, and elevated silhouettes designed for effortless shopping.
        </p>

        <div className="reveal-up delay-3 mt-8 space-y-4">
          {heroChecklist.map((item) => (
            <div key={item} className="flex items-center justify-center gap-3 text-left text-[14px] font-medium text-[color:var(--brand)] lg:justify-start">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/80 text-[color:var(--brand)] shadow-[0_10px_25px_rgba(23,23,26,0.08)]">
                +
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="reveal-up delay-4 mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start lg:gap-5">
          <a
            href="#showcase"
            className="btn-primary cinematic-panel px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] sm:text-[13px]"
          >
            Shop Collection
          </a>
          <a
            href="#process"
            className="btn-secondary gap-3 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] backdrop-blur-xl sm:text-[13px]"
          >
            <span>Browse New In</span>
            <CirclePlay className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
