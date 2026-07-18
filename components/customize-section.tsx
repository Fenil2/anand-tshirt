import { customCards } from "@/lib/data";

export function CustomizeSection() {
  return (
    <section className="py-6 sm:py-8 sm:pt-10">
      <div className="section-shell grid gap-5 sm:gap-6 lg:grid-cols-[1.2fr_1fr]">
        {customCards.map((card, index) => (
          <article
            key={card.title}
            className={`premium-card ${index === 0 ? "reveal-left" : "reveal-right"} cinematic-panel ${card.panel} overflow-hidden rounded-[34px] border border-white/60 ${
              index === 0 ? "grid min-h-[245px] lg:grid-cols-[0.9fr_1.1fr]" : "grid min-h-[245px] lg:grid-cols-[1fr_0.9fr]"
            }`}
          >
            <div className="flex flex-col justify-center px-6 py-8 sm:px-8">
              <h3 className="max-w-[280px] text-[30px] font-semibold leading-[1.02] tracking-[-0.05em] text-[color:var(--brand)] sm:text-[38px]">
                {card.title}
              </h3>
              <p className="mt-4 max-w-[260px] text-[14px] leading-7 text-[color:var(--muted)]">
                {card.copy}
              </p>
              <a
                href="#showcase"
                className="btn-primary mt-6 w-fit px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em]"
              >
                {card.action}
              </a>
            </div>
            <img
              src={card.image}
              alt={card.title}
              className="aspect-[4/5] w-full object-cover object-center lg:aspect-auto lg:h-full"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
