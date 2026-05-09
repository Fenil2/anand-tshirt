export default function Loading() {
  return (
    <div className="loader-screen flex min-h-screen items-center justify-center px-6">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="loader-ring absolute h-[220px] w-[220px] rounded-full border border-white/40 sm:h-[280px] sm:w-[280px]" />
        <div className="loader-ring absolute h-[280px] w-[280px] rounded-full border border-black/6 [animation-delay:220ms] sm:h-[360px] sm:w-[360px]" />

        <div className="loader-orb relative flex h-28 w-28 items-center justify-center rounded-full border border-white/70 bg-white/90 p-3 backdrop-blur-xl sm:h-36 sm:w-36">
          <img
            src="/spotdot-logo.jpeg"
            alt="SpotDot logo"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div className="loader-copy mt-8">
          <p className="text-[28px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)] sm:text-[40px]">
            SpotDot
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.34em] text-[color:var(--muted-soft)] sm:text-[12px]">
            Curating premium t-shirt essentials
          </p>
        </div>

        <div className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-black/8 sm:w-56">
          <div className="h-full w-1/2 animate-[cinematicSweep_1.8s_ease-in-out_infinite] rounded-full bg-[color:var(--brand)]" />
        </div>
      </div>
    </div>
  );
}
