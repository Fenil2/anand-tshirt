import { Globe, Headphones, RefreshCcw, WalletCards } from "lucide-react";
import { features } from "@/lib/data";
import { TestimonialCarousel } from "./testimonial-carousel";

const featureIcons = [Globe, RefreshCcw, Headphones, WalletCards];

export function TestimonialFeatures() {
  return (
    <section className="section-shell py-8 sm:py-12">
      <TestimonialCarousel />

      <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = featureIcons[index];
          return (
            <div
              key={feature.title}
              className={`premium-card reveal-up rounded-[28px] border border-white/60 px-5 py-7 text-center delay-${Math.min(index + 1, 4)}`}
            >
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--brand)] shadow-[0_14px_28px_rgba(23,23,26,0.08)]">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.03em] text-[color:var(--brand)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-[color:var(--muted)]">{feature.copy}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
