export function SaleBanner() {
  return (
    <section id="process" className="section-shell py-8 sm:py-12 lg:py-14">
      <div className="premium-card reveal-up grid gap-6 rounded-[30px] border border-white/60 px-5 py-8 sm:gap-8 sm:rounded-[36px] sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-14">
        <div className="max-w-[420px]">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-soft)]">
            New In
          </p>
          <h3 className="text-[34px] font-semibold tracking-[-0.06em] text-[color:var(--brand)] sm:text-[46px]">
            Fresh drops, easy fits, and standout pieces for every day
          </h3>
          <p className="mt-5 text-[15px] leading-8 text-[color:var(--muted)]">
            Shop the latest SpotDot edits with premium cotton staples, elevated hoodies,
            and wardrobe-friendly layers designed to move from casual to statement.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-[color:var(--brand)] sm:grid-cols-4">
            {["New", "Best", "Soft", "Fast"].map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-white/80 bg-white/80 px-4 py-5 text-center shadow-[0_20px_40px_rgba(24,24,28,0.05)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-soft)]">
                  0{index + 1}
                </p>
                <p className="mt-2 text-[18px] font-semibold tracking-[-0.04em]">{step}</p>
              </div>
            ))}
          </div>
          <a
            href="#showcase"
            className="btn-primary mt-8 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em]"
          >
            Shop New Arrivals
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-end">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
            alt="New arrival outfit"
            className="h-[280px] w-full rounded-[30px] object-cover shadow-[0_20px_50px_rgba(24,24,28,0.12)] sm:h-[360px]"
          />
          <div className="relative">
            <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/20 bg-[color:var(--brand)] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:left-[-18px] sm:top-1/2 sm:h-[88px] sm:w-[88px] sm:-translate-y-1/2 sm:items-center sm:justify-center sm:px-0 sm:py-0 sm:text-[14px] sm:leading-tight">
              New
              <br className="hidden sm:block" />
              drop
            </span>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
              alt="SpotDot hoodie"
              className="h-[280px] w-full rounded-[30px] object-cover shadow-[0_20px_50px_rgba(24,24,28,0.12)] sm:h-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
