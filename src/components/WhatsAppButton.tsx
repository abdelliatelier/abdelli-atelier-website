import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/97336111558?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Abdelli%20Atelier."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-[0_15px_40px_-10px_oklch(0_0_0/0.5)] hover:scale-105 transition-transform"
    >
      <MessageCircle size={18} />
      <span className="text-xs uppercase tracking-[0.2em] hidden sm:inline">WhatsApp</span>
    </a>
  );
}
