import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  const navItems = [
    { to: "/" as const, label: t.nav.home },
    { to: "/about" as const, label: t.nav.about },
    { to: "/projects" as const, label: t.nav.projects },
    { to: "/services" as const, label: t.nav.services },
    { to: "/contact" as const, label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl leading-tight">
            {t.footer.tagline1}<br />{t.footer.tagline2}
          </p>
        </div>
        <div className="space-y-3">
          <p className="eyebrow">{t.footer.studio}</p>
          <p className="text-sm text-muted-foreground">{t.footer.city}<br />{t.footer.avail}</p>
          <p className="text-sm text-muted-foreground">contact@abdelliatelier.com</p>
        </div>
        <div className="space-y-4">
          <p className="eyebrow">{t.footer.connect}</p>
          <div className="flex gap-3">
            <a href="https://wa.me/97336111558" target="_blank" rel="noreferrer" aria-label="WhatsApp"
              className="w-10 h-10 grid place-items-center border border-border hover:border-accent hover:text-accent transition-colors">
              <MessageCircle size={16} />
            </a>
            <a href="mailto:contact@abdelliatelier.com" aria-label="Email"
              className="w-10 h-10 grid place-items-center border border-border hover:border-accent hover:text-accent transition-colors">
              <Mail size={16} />
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
            {navItems.map((it) => (
              <Link key={it.to} to={it.to}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Abdelli Atelier. {t.footer.copy}</p>
          <p>{t.footer.meta}</p>
        </div>
      </div>
    </footer>
  );
}
