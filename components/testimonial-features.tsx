import { Globe, Headphones, RefreshCcw, WalletCards } from "lucide-react";
import { featuredProducts, features } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const featureIcons = [Globe, RefreshCcw, Headphones, WalletCards];

export function TestimonialFeatures() {
  return (
    <section className="section-shell py-8 sm:py-12">
      <SectionHeading
        eyebrow="New In"
        title="Fresh arrivals picked for your next wardrobe update"
        subtitle="Easy-to-wear drops, premium basics, and statement pieces that keep the collection feeling current."
      />

      <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.slice(0, 4).map((product, index) => (
          <article
            key={`explore-${product.name}`}
            className={`premium-card reveal-up rounded-[30px] border border-white/60 p-4 delay-${Math.min(index + 1, 4)}`}
          >
            <div className="overflow-hidden rounded-[24px]">
              <img src={product.image} alt={product.name} className="h-[255px] w-full object-cover" />
            </div>
            <div className="pt-4 text-center">
              <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-[color:var(--brand)]">{product.name}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[color:var(--muted)]">{product.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="premium-card reveal-up mt-10 rounded-[30px] border border-white/60 px-5 py-10 text-center sm:mt-14 sm:rounded-[34px] sm:px-6 sm:py-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-full ring-8 ring-white/60 shadow-[0_18px_34px_rgba(24,24,28,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"
            alt="Mary"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mx-auto mt-8 max-w-[760px] text-[20px] font-medium leading-9 tracking-[-0.03em] text-[color:var(--brand)] sm:text-[26px] sm:leading-11">
          &quot;SpotDot makes shopping feel elevated. The tees fit beautifully, the
          hoodies feel premium, and every drop has that fresh look you want to wear right away.&quot;
        </p>
        <p className="mt-5 text-[14px] font-semibold text-[color:var(--brand)]">
          Mary <span className="font-medium text-[color:var(--muted)]">, Verified Customer</span>
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = featureIcons[index];
          return (
            <div key={feature.title} className="premium-card reveal-up rounded-[28px] border border-white/60 px-5 py-7 text-center">
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
