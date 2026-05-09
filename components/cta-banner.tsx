export function CtaBanner() {
  return (
    <section className="mt-6 sm:mt-8">
      <div className="section-shell premium-card reveal-up relative grid gap-6 overflow-hidden rounded-[30px] border border-white/60 px-5 py-8 sm:gap-8 sm:rounded-[40px] sm:px-6 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-14 lg:py-14">
        <div className="absolute left-[-50px] top-6 h-40 w-40 rounded-full bg-[color:var(--accent)]/28 blur-2xl" />
        <div className="absolute bottom-[-70px] right-[6%] h-56 w-56 rounded-full bg-[color:var(--brand)]/8 blur-3xl" />

        <div className="relative z-10 max-w-[450px]">
          <h2 className="text-[36px] font-semibold leading-[0.96] tracking-[-0.06em] text-[color:var(--brand)] sm:text-[48px] lg:text-[58px]">
            Refresh your wardrobe with the latest SpotDot collection
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-[color:var(--muted)]">
            From clean essentials to statement pieces, every drop is built to feel easy,
            wearable, and premium from the first try-on.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#showcase"
              className="btn-primary px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Shop Collection
            </a>
            <a
              href="#services"
              className="btn-secondary px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Browse Categories
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <img
            src="/spotdot-logo.jpeg"
            alt="SpotDot brand mark"
            className="mx-auto w-full max-w-[420px] rounded-[32px] border border-white/70 bg-white p-6 shadow-[0_34px_70px_rgba(24,24,28,0.14)]"
          />
        </div>
      </div>
    </section>
  );
}
