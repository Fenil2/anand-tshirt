type MarqueeHeadingProps = {
  text: string;
};

export function MarqueeHeading({ text }: MarqueeHeadingProps) {
  const parts = text
    .split("*")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div className="py-5 sm:py-8">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-center uppercase leading-[1.12] sm:gap-x-6 lg:gap-x-8">
        {parts.map((part, index) => (
          <div key={`${part}-${index}`} className="flex items-center justify-center gap-x-4 sm:gap-x-6 lg:gap-x-8">
            <span className="marquee-copy text-[22px] font-light tracking-[0.12em] sm:text-[34px] sm:tracking-[0.14em] lg:text-[52px] lg:tracking-[0.18em]">
              {part}
            </span>
            {index < parts.length - 1 && (
              <span className="marquee-copy text-[22px] font-light tracking-[0.12em] sm:text-[34px] sm:tracking-[0.14em] lg:text-[52px] lg:tracking-[0.18em]">
                *
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
