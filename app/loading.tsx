const WORDMARK = "SPOTDOT";

export default function Loading() {
  return (
    <div className="pl-root fixed inset-0 z-[200]">
      <div className="pl-panel pl-panel-top" />
      <div className="pl-panel pl-panel-bottom" />

      <div className="pl-content">
        <p className="pl-eyebrow">Premium Essentials</p>

        <div className="pl-mark" aria-label={WORDMARK}>
          {WORDMARK.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="pl-letter"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="pl-bar">
          <div className="pl-bar-fill pl-bar-indeterminate" />
        </div>

        <div className="pl-meta">
          <span>Loading the collection</span>
        </div>
      </div>
    </div>
  );
}
