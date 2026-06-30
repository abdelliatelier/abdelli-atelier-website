import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/projects", label: t.nav.projects },
    { to: "/services", label: t.nav.services },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] ${className}`}>
      <button
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        className={`transition-colors ${lang === "en" ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </button>
      <span className="text-muted-foreground/50">|</span>
      <button
        onClick={() => setLang("fr")}
        aria-label="Passer en français"
        className={`transition-colors ${lang === "fr" ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
      >
        FR
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl tracking-wider text-foreground">
            ABDELLI ATELIER
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
            {t.nav.tagline}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <LangSwitch className="pl-6 border-l border-border" />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LangSwitch />
          <button
            aria-label="Menu"
            className="text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
