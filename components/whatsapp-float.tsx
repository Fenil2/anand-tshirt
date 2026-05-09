import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919000000000?text=Hi%20SpotDot%2C%20I%20want%20to%20shop%20your%20t-shirt%20collection."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float"
    >
      <span className="group flex items-center gap-3 rounded-full border border-white/60 bg-[#25D366] px-4 py-3 text-white shadow-[0_18px_40px_rgba(37,211,102,0.34)] transition hover:translate-y-[-2px] hover:shadow-[0_22px_46px_rgba(37,211,102,0.42)] sm:px-5">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
          <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <span className="hidden pr-1 text-[12px] font-semibold uppercase tracking-[0.14em] sm:block">
          WhatsApp
        </span>
      </span>
    </a>
  );
}
