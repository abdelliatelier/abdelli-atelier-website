import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdelli Atelier — Architecture & Interior Design · Bahrain" },
      { name: "description", content: "Noureddine Abdelli — Architect & Interior Designer. 15+ years between Algeria and Bahrain. Hospitality, residential and commercial projects." },
    ],
  }),
  component: Index,
});

function Index() {
  const { lang, t } = useLang();
  const featured = projects.slice(0, 3);
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt={t.home.h1Italic}
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col justify-end pb-24">
          <p className="eyebrow mb-6">{t.home.eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
            {t.home.h1a}<span className="italic text-accent">{t.home.h1Italic}</span>{t.home.h1b}
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
            {t.home.heroSub}
          </p>
          <div className="mt-10 flex items-center gap-6">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 border border-foreground/40 hover:border-accent hover:text-accent px-6 py-3 text-xs uppercase tracking-[0.25em] transition-colors"
            >
              {t.home.ctaProjects}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
              {t.home.ctaStart}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-12 py-32 md:py-48 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">{t.home.philosophyEyebrow}</p>
        </div>
        <div className="md:col-span-8">
          <p className="font-serif text-3xl md:text-5xl leading-[1.15]">
            {t.home.philosophyLead}
            <span className="text-muted-foreground">{t.home.philosophyMuted}</span>
          </p>
        </div>
      </section>

      <section className="space-y-32 pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-3">{t.home.selectedWork}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t.home.recent}</h2>
          </div>
          <Link to="/projects" className="hidden md:inline text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
            {t.home.allProjects}
          </Link>
        </div>

        {featured.map((p, idx) => (
          <Link key={p.slug} to="/projects" className="block group">
            <div className={`grid md:grid-cols-12 gap-8 md:gap-12 px-6 md:px-12 mx-auto max-w-[1600px] ${idx % 2 ? "md:[&>:first-child]:order-2" : ""}`}>
              <div className="md:col-span-8 hover-zoom">
                <img
                  src={p.cover}
                  alt={p.title[lang]}
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="md:col-span-4 flex flex-col justify-end pb-4">
                <p className="eyebrow mb-3">{p.category[lang]}</p>
                <h3 className="font-serif text-3xl md:text-4xl mb-2 group-hover:text-accent transition-colors">{p.title[lang]}</h3>
                <p className="text-sm text-muted-foreground">{p.location[lang]} — {p.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
