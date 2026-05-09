import { categories } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function CategorySection() {
  return (
    <section id="services" className="section-shell py-8 sm:py-12 lg:py-14">
      <SectionHeading
        eyebrow="Shop By Category"
        title="Everyday essentials for every kind of wardrobe"
        subtitle="Browse the silhouettes customers love most, from clean classic tees to cozy hoodies and easy summer layers."
      />

      <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`premium-card reveal-up rounded-[30px] border border-white/60 px-4 py-6 text-center delay-${Math.min(index + 1, 4)}`}
          >
            <div className="mx-auto mb-5 h-[120px] w-[120px] overflow-hidden rounded-full border border-white/70 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-[18px] font-semibold tracking-[-0.04em] text-[color:var(--brand)]">
              {category.name}
            </h3>
            <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted-soft)]">
              {category.count} styles
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
