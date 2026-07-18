import { Instagram } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://www.instagram.com/spotdot"
      target="_blank"
      rel="noreferrer"
      aria-label="Follow SpotDot on Instagram"
      className="whatsapp-float"
    >
      <span className="group flex items-center gap-3 rounded-full border border-white/60 bg-[linear-gradient(135deg,#feda75,#fa7e1e_28%,#d62976_58%,#962fbf_82%,#4f5bd5)] px-4 py-3 text-white shadow-[0_18px_40px_rgba(214,41,118,0.34)] transition hover:translate-y-[-2px] hover:shadow-[0_22px_46px_rgba(214,41,118,0.42)] sm:px-5">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
          <Instagram className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <span className="hidden pr-1 text-[12px] font-semibold uppercase tracking-[0.14em] sm:block">
          Instagram
        </span>
      </span>
    </a>
  );
}
