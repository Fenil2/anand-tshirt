import { showcaseItems } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function CollectionsStrip() {
  return (
    <section id="showcase" className="section-shell py-8 sm:py-10">
      <SectionHeading
        eyebrow="Collection Edit"
        title="The SpotDot campaign gallery"
        subtitle="Four signature drops, shot the way they are meant to be worn — clean, structural, and built to last."
      />

      <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {showcaseItems.map((item, index) => (
          <article
            key={item.id}
            className={`cinematic-panel reveal-scale group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/50 shadow-[0_30px_80px_rgba(24,24,28,0.14)] delay-${Math.min(index + 1, 4)}`}
          >
            <img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/25 to-black/5" />

            <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
              <span className="inline-flex rounded-full border border-white/30 bg-white/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-[11px]">
                {item.tag}
              </span>
              <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.05em] text-white sm:text-[26px]">
                {item.label}
              </h3>
              <p className="mt-1.5 max-w-[34ch] text-[12px] leading-6 text-white/75 sm:text-[13px]">
                {item.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
