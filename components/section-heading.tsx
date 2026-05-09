type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} reveal-up`}>
      {eyebrow && (
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-soft)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[30px] font-semibold leading-[1] tracking-[-0.05em] text-[color:var(--brand)] sm:text-[44px]">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-[14px] leading-7 text-[color:var(--muted)]">{subtitle}</p>}
    </div>
  );
}
