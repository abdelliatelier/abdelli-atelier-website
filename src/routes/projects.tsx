import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Abdelli Atelier" },
      { name: "description", content: "Selected residential and hospitality projects by Abdelli Atelier, presented as full-screen image galleries." },
      { property: "og:title", content: "Projects — Abdelli Atelier" },
      { property: "og:description", content: "Full-screen project sheets — residential, hospitality, architecture & interior." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const { lang, t } = useLang();

  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-6">{t.projects.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1] max-w-4xl">
          {t.projects.h1a}<span className="italic text-accent">{t.projects.h1Italic}</span>
        </h1>
        <p className="mt-6 text-muted-foreground max-w-xl">{t.projects.lead}</p>
      </section>

      <div className="space-y-32 md:space-y-48 pb-16">
        {projects.map((p, i) => (
          <article key={p.slug} className="space-y-8">
            {p.sectionLabel && (
              <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-8 border-t border-border">
                <p className="eyebrow text-accent">{p.sectionLabel[lang]}</p>
                {p.sectionNote && (
                  <p className="mt-3 font-serif italic text-sm text-muted-foreground max-w-3xl">
                    {p.sectionNote[lang]}
                  </p>
                )}
              </div>
            )}
            <header className="mx-auto max-w-[1600px] px-6 md:px-12 md:grid md:grid-cols-12 gap-6 items-baseline">
              <div className="flex items-baseline gap-4 md:contents">
                <div className="md:col-span-1 font-serif text-4xl md:text-6xl leading-none text-accent shrink-0">0{i + 1}</div>
                <div className="md:col-span-7 min-w-0">
                  <h2 className="font-serif text-4xl md:text-6xl leading-none">{p.title[lang]}</h2>
                  {p.subtitle && (
                    <p className="mt-3 font-serif italic text-xl md:text-2xl text-accent">{p.subtitle[lang]}</p>
                  )}
                </div>
              </div>
              <div className="md:col-span-4 space-y-1 text-sm text-muted-foreground mt-4 md:mt-0">
                <p>{p.category[lang]}</p>
                <p>{p.location[lang]} · {p.year}</p>
              </div>
            </header>

            {!p.hideCover && (
              <div className="hover-zoom">
                <img
                  src={p.cover}
                  alt={p.title[lang]}
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className={`w-full ${p.coverFit === "cover" ? "aspect-video overflow-hidden md:aspect-auto md:h-[calc(100svh-5rem)] object-cover h-full" : "max-h-[calc(100svh-5rem)] object-contain bg-muted"}`}
                />
              </div>
            )}

            <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-4">
                <p className="eyebrow">{t.projects.notes}</p>
              </div>
              <div className="md:col-span-7">
                <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
                  {p.description[lang]}
                </p>
              </div>
            </div>

            {p.layout === "single-main" ? (
              <div className="mx-auto max-w-[1400px] px-6 md:px-12">
                {(() => {
                  const item = p.gallery[0];
                  const caption = item.caption?.[lang];
                  const fit = item.fit ?? "cover";
                  const italic = item.captionItalic;
                  return (
                    <figure className="space-y-4">
                      <div className="hover-zoom">
                        <img
                          src={item.src}
                          alt={caption ?? `${p.title[lang]} — concept`}
                          loading="lazy"
                          width={1600}
                          height={1067}
                          className={`w-full ${fit === "contain" ? "object-contain bg-muted max-h-[80vh]" : "object-cover"}`}
                        />
                      </div>
                      {caption && (
                        <figcaption
                          className={
                            italic
                              ? "font-serif italic text-sm text-muted-foreground text-center"
                              : "eyebrow text-muted-foreground"
                          }
                        >
                          {caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                })()}
              </div>
            ) : (
              <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-2 gap-4 md:gap-6">
                {p.gallery.map((item, idx) => {
                  const caption = item.caption?.[lang];
                  const fit = item.fit ?? "cover";
                  return (
                    <figure key={idx} className="space-y-3">
                      <div className="hover-zoom">
                        <img
                          src={item.src}
                          alt={caption ?? `${p.title[lang]} — view ${idx + 1}`}
                          loading="lazy"
                          width={1600}
                          height={1067}
                          className={`w-full aspect-[4/3] ${fit === "contain" ? "object-contain bg-muted" : "object-cover"}`}
                        />
                      </div>
                      {caption && (
                        <figcaption className="eyebrow text-muted-foreground">{caption}</figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
