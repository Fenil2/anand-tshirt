import { categories } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function CategorySection() {
  return (
    <section id="services" className="section-shell py-8 sm:py-12 lg:py-14">
      <SectionHeading
        eyebrow="Shop By Category"
        title="Everyday essentials for every kind of wardrobe"
        subtitle="Browse the silhouettes customers love most, from clean classic tees to oversized fits and fresh limited drops."
      />

      <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category, index) => (
          <a
            key={category.name}
            href="#showcase"
            className={`premium-card cinematic-panel reveal-up group flex flex-col justify-between rounded-[30px] border border-white/60 px-5 py-7 delay-${Math.min(index + 1, 4)}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-soft)]">
                {category.tag}
              </span>
              <span className="text-[13px] font-semibold text-[color:var(--muted-soft)]">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-10 text-[22px] font-semibold tracking-[-0.05em] text-[color:var(--brand)] transition group-hover:translate-x-1 sm:text-[26px]">
              {category.name}
            </h3>
            <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted-soft)]">
              {category.count} styles
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
