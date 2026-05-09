import { articles } from "@/lib/data";

export function ArticlesSection() {
  return (
    <section id="stories" className="section-shell py-8 sm:py-12 lg:py-14">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="reveal-up max-w-[290px]">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-soft)]">
            Journal
          </p>
          <h2 className="text-[38px] font-semibold leading-[0.96] tracking-[-0.06em] text-[color:var(--brand)] sm:text-[52px]">
            Style notes, drop updates, and wardrobe inspiration
          </h2>
          <p className="mt-5 text-[14px] leading-7 text-[color:var(--muted)]">
            Read what is new, what is trending, and how to style the latest SpotDot pieces.
          </p>
          <a href="#" className="mt-7 inline-flex text-[13px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand)]">
            Read latest stories
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`premium-card reveal-up overflow-hidden rounded-[30px] border border-white/60 p-4 delay-${Math.min(index + 1, 3)}`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-[190px] w-full rounded-[24px] object-cover"
              />
              <div className="mt-4 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted-soft)]">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="mt-3 text-[22px] font-semibold leading-7 tracking-[-0.04em] text-[color:var(--brand)]">
                {article.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
