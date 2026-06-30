import { createFileRoute, Link } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.png.asset.json";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abdelli Atelier" },
      { name: "description", content: "Noureddine Abdelli, architect and interior designer with 15+ years between Algeria and Bahrain." },
      { property: "og:title", content: "About — Abdelli Atelier" },
      { property: "og:description", content: "The studio, the founder, and the philosophy behind Abdelli Atelier." },
    ],
  }),
  component: About,
});

function About() {
  const t = useT();
  return (
    <>
      <section className="pt-40 pb-24 mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-6">{t.about.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1] max-w-4xl">
          {t.about.h1a}<span className="italic text-accent">{t.about.h1Italic}</span>{t.about.h1b}
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12 pb-32">
        <div className="md:col-span-5">
          <img
            src={portraitAsset.url}
            alt={t.about.portraitCaption}
            loading="lazy"
            width={1200}
            height={1500}
            className="w-full aspect-[4/5] object-cover"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {t.about.portraitCaption}
          </p>
        </div>
        <div className="md:col-span-7 md:pt-12 space-y-8 text-muted-foreground leading-relaxed">
          <p className="font-serif text-2xl text-foreground leading-snug">{t.about.quote}</p>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <p className="font-serif text-4xl text-foreground" translate="no">15+</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-1">{t.about.stat1}</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-foreground" translate="no">20+</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-1">{t.about.stat2}</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-foreground" translate="no">2</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-1">{t.about.stat3}</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-foreground/40 hover:border-accent hover:text-accent px-6 py-3 text-xs uppercase tracking-[0.25em] transition-colors mt-6"
          >
            {t.about.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
