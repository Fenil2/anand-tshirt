import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = ["New Arrivals", "Best Sellers", "Men", "Women", "Contact"];

export function SiteFooter() {
  return (
    <footer id="contact" className="pb-6 pt-8 sm:pb-8 sm:pt-12">
      <div className="section-shell premium-card reveal-up rounded-[30px] border border-white/60 px-4 py-8 sm:rounded-[36px] sm:px-8 sm:py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" className="flex items-center gap-4">
            <img
              src="/spotdot-logo.jpeg"
              alt="SpotDot logo"
              className="h-14 w-14 rounded-full border border-[color:var(--line)] object-cover"
            />
            <p className="text-[24px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
              SpotDot
            </p>
          </a>

          <p className="max-w-[540px] text-[14px] leading-7 text-[color:var(--muted)]">
            Premium t-shirts, everyday essentials, and fresh seasonal drops designed for effortless style.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[color:var(--muted)]">
            {quickLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-[color:var(--brand)]">
                {link}
              </a>
            ))}
          </div>

          <div className="w-full max-w-[420px]">
            <p className="mb-4 text-[13px] text-[color:var(--muted)]">
              Subscribe for new drops and first access to fresh releases.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-full border border-[color:var(--line)] bg-white/80 px-5 py-4 text-[14px] text-[color:var(--brand)] outline-none placeholder:text-[color:var(--muted-soft)]"
              />
              <button className="btn-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.16em]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell reveal-up delay-2 flex flex-col items-center justify-between gap-3 px-2 py-5 text-center text-[13px] text-[color:var(--muted)] sm:gap-4 sm:py-7 sm:flex-row sm:text-left">
        <p>&copy; 2025 SpotDot. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {[Twitter, Facebook, Instagram, Youtube].map((Icon, index) => (
            <a key={index} href="#" aria-label="Social link" className="text-[color:var(--muted)] transition hover:text-[color:var(--brand)]">
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
