import { featuredProducts } from "@/lib/data";
import { SectionHeading } from "./section-heading";

type ProductGridProps = {
  title: string;
  subtitle: string;
};

function ProductCard({
  name,
  description,
  image
}: (typeof featuredProducts)[number]) {
  return (
    <article className="premium-card reveal-up group rounded-[30px] border border-white/60 p-4 shadow-[0_30px_80px_rgba(24,24,28,0.08)]">
      <div className="relative overflow-hidden rounded-[24px]">
        <img
          src={image}
          alt={name}
          className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[255px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-white/10" />
      </div>
      <div className="pt-5 text-center">
        <h3 className="text-[17px] font-semibold tracking-[-0.04em] text-[color:var(--brand)]">
          {name}
        </h3>
        <p className="mt-3 text-[13px] leading-6 text-[color:var(--muted)]">{description}</p>
      </div>
    </article>
  );
}

export function ProductGrid({ title, subtitle }: ProductGridProps) {
  return (
    <section className="section-shell py-8 sm:py-12 lg:py-14">
      <SectionHeading eyebrow="Most Loved" title={title} subtitle={subtitle} />
      <div className="mt-8 grid gap-x-4 gap-y-5 sm:mt-12 sm:gap-x-6 sm:gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={`${title}-${product.name}`} {...product} />
        ))}
      </div>
    </section>
  );
}
