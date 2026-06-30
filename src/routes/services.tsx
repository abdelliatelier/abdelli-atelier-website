import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Abdelli Atelier" },
      { name: "description", content: "Architecture, interior design, outdoor design and turnkey delivery for residential, hospitality and commercial projects." },
      { property: "og:title", content: "Services — Abdelli Atelier" },
      { property: "og:description", content: "Architecture, interior design and turnkey delivery." },
    ],
  }),
  component: Services,
});

type L = { en: string; fr: string };

const services: Array<{ n: string; title: L; desc: L }> = [
  {
    n: "01",
    title: { en: "Architecture", fr: "Architecture" },
    desc: {
      en: "From feasibility to delivery — new builds or renovations of all project types, primarily in large-scale hospitality.",
      fr: "De la faisabilité à la livraison — constructions neuves ou rénovations de tout types de projets principalement dans l'hospitalité hôteliers d'envergure.",
    },
  },
  {
    n: "02",
    title: { en: "Interior Design", fr: "Design d'Intérieur" },
    desc: {
      en: "Spatial planning, materials, lighting, bespoke furniture — delivered as a coherent and memorable atmosphere.",
      fr: "Planification spatiale, matériaux, éclairage, mobilier sur-mesure — livrés comme une atmosphère cohérente et mémorable.",
    },
  },
  {
    n: "03",
    title: { en: "Outdoor Design", fr: "Aménagement Extérieur" },
    desc: {
      en: "Outdoor spaces conceived as a natural extension of the architecture, in harmony with landscape and climate.",
      fr: "Des espaces extérieurs pensés comme une extension naturelle de l'architecture, en harmonie avec le paysage et le climat.",
    },
  },
  {
    n: "04",
    title: { en: "Turnkey Delivery", fr: "Livraison Clé en Main" },
    desc: {
      en: "End-to-end project management, coordinating teams and craftsmen — handed over ready to live in.",
      fr: "Gestion de projet de bout en bout, coordination des équipes et des artisans — remis prêt à vivre.",
    },
  },
];

const process: Array<{ n: string; title: L; desc: L; img: string; alt: L }> = [
  { n: "01", title: { en: "Discovery", fr: "Découverte" }, desc: { en: "I begin with an in-depth conversation to understand your needs, your environment and your constraints. This phase informs my entire design approach.", fr: "Je commence par une conversation approfondie pour comprendre vos besoins, votre environnement et vos contraintes. Cette phase oriente toute ma démarche de conception." }, img: "/process-01.jpg", alt: { en: "Client meeting with sketches", fr: "Réunion client avec croquis" } },
  { n: "02", title: { en: "Conceptualisation", fr: "Conceptualisation" }, desc: { en: "Mood boards, sketches and scenarios — I translate your ideas into first visual representations that capture the essence of your project.", fr: "Planches d'inspiration, croquis et scénarios — je traduis vos idées en premières représentations visuelles qui capturent l'essence de votre projet." }, img: "/process-02.jpg", alt: { en: "Architectural sketches and mood board", fr: "Croquis d'architecture et mood board" } },
  { n: "03", title: { en: "Schematic Design", fr: "Conception Schématique" }, desc: { en: "I refine the concept by optimising spaces, circulation and the first choices of materials, furniture and finishes.", fr: "J'affine le concept en optimisant les espaces, la circulation et les premiers choix de matériaux, mobilier et finitions." }, img: "/process-03.jpg", alt: { en: "Architectural floor plan", fr: "Plan architectural" } },
  { n: "04", title: { en: "Design Development", fr: "Développement du Design" }, desc: { en: "Detailed planning, selection of furniture, lighting and materials — every decision aims to optimise experience and operational efficiency.", fr: "Planification détaillée, sélection du mobilier, de l'éclairage et des matériaux — chaque décision vise à optimiser l'expérience et l'efficacité opérationnelle." }, img: "/process-04.jpg", alt: { en: "Material samples and 3D render", fr: "Échantillons de matériaux et rendu 3D" } },
  { n: "05", title: { en: "Technical Documentation", fr: "Documentation Technique" }, desc: { en: "Detailed drawings and complete specifications — a precise roadmap that ensures every element will be executed with rigour.", fr: "Plans détaillés et spécifications complètes — une feuille de route précise qui garantit que chaque élément sera exécuté avec rigueur." }, img: "/process-05.png", alt: { en: "Technical blueprints", fr: "Dessins techniques / blueprints" } },
  { n: "06", title: { en: "Site Management", fr: "Gestion de Chantier" }, desc: { en: "I supervise execution, coordinate contractors and ensure the quality of finishes at every stage of construction.", fr: "Je supervise la mise en œuvre, coordonne les entrepreneurs et veille à la qualité des finitions à chaque étape de la construction." }, img: "/process-06.jpg", alt: { en: "Construction site in progress", fr: "Chantier en cours" } },
  { n: "07", title: { en: "Delivery & Reveal", fr: "Livraison & Révélation" }, desc: { en: "I hand over a space that is perfect in its smallest details, exceeding your expectations and bringing your initial vision to life.", fr: "Je vous remets un espace parfait dans ses moindres détails, qui dépasse vos attentes et concrétise votre vision initiale." }, img: "/process-07.jpg", alt: { en: "Delivered luxury interior", fr: "Intérieur de luxe livré et décoré" } },
];

const references: Array<{ label: L; items: Array<{ name: L; meta: L }> }> = [
  {
    label: { en: "Luxury Hospitality", fr: "Hôtellerie Luxe" },
    items: [
      { name: { en: "Hilton Bahrain", fr: "Hilton Bahrain" }, meta: { en: "★★★★★ · Business & Leisure", fr: "★★★★★ · Business & Leisure" } },
      { name: { en: "Wyndham Garden Bahrain", fr: "Wyndham Garden Bahrain" }, meta: { en: "★★★★ · Business", fr: "★★★★ · Business" } },
      { name: { en: "Ramada Amwaj Islands", fr: "Ramada Amwaj Islands" }, meta: { en: "★★★★ · Resort & Leisure", fr: "★★★★ · Resort & Leisure" } },
    ],
  },
  {
    label: { en: "Residential", fr: "Résidentiel" },
    items: [
      { name: { en: "Private Clients", fr: "Clients Privés" }, meta: { en: "Luxury villas and apartments", fr: "Villas et appartements de prestige" } },
      { name: { en: "Executive Apartments", fr: "Appartements Exécutifs" }, meta: { en: "", fr: "" } },
      { name: { en: "Bahrain & International", fr: "Bahrain & International" }, meta: { en: "", fr: "" } },
    ],
  },
  {
    label: { en: "Commercial", fr: "Commercial" },
    items: [
      { name: { en: "Boutiques & Showrooms", fr: "Boutiques & Showrooms" }, meta: { en: "", fr: "" } },
      { name: { en: "Restaurants & F&B Spaces", fr: "Restaurants & Espaces F&B" }, meta: { en: "", fr: "" } },
      { name: { en: "Offices & Workspaces", fr: "Bureaux & Espaces de Travail" }, meta: { en: "", fr: "" } },
      { name: { en: "Industrial & Public Projects", fr: "Projets Industriels & Publics" }, meta: { en: "", fr: "" } },
    ],
  },
];

function pick(v: L, lang: Lang) { return v[lang]; }

function Services() {
  const { lang, t } = useLang();
  return (
    <>
      <section className="pt-40 pb-24 mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-6">{t.services.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1] max-w-4xl">
          {t.services.h1a}<span className="italic text-accent">{t.services.h1Italic}</span>{t.services.h1b}
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24">
        <ul className="border-t border-border">
          {services.map((s) => (
            <li key={s.n} className="grid md:grid-cols-12 gap-6 py-12 border-b border-border group hover:bg-card/40 transition-colors px-2">
              <div className="md:col-span-1 font-serif text-3xl text-accent">{s.n}</div>
              <div className="md:col-span-4">
                <h2 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors">{pick(s.title, lang)}</h2>
              </div>
              <div className="md:col-span-7 text-muted-foreground leading-relaxed">{pick(s.desc, lang)}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24">
        <div className="mb-12">
          <p className="eyebrow mb-6 text-accent">{t.services.processEyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            {t.services.processTitleA}<span className="italic text-accent">{t.services.processTitleItalic}</span>
          </h2>
        </div>
        <ul className="border-t border-border">
          {process.map((s) => (
            <li key={s.n} className="grid md:grid-cols-12 gap-6 py-10 border-b border-border group hover:bg-card/40 transition-colors px-2 items-center">
              <div className="md:col-span-1 font-serif text-3xl text-accent">{s.n}</div>
              <div className="md:col-span-3 overflow-hidden">
                <img
                  src={s.img}
                  alt={pick(s.alt, lang)}
                  loading="lazy"
                  className={`w-full aspect-[4/3] ${["01", "02", "03", "04", "05", "06", "07"].includes(s.n) ? "object-contain bg-card" : "object-cover"} grayscale group-hover:grayscale-0 transition-all duration-500`}
                />

              </div>
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">{pick(s.title, lang)}</h3>
              </div>
              <div className="md:col-span-5 text-muted-foreground leading-relaxed text-sm md:text-base">{pick(s.desc, lang)}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-32">
        <div className="border border-border p-10 md:p-16 text-center bg-card/40">
          <p className="eyebrow mb-4">{t.services.ctaEyebrow}</p>
          <h3 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">{t.services.ctaTitle}</h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-foreground/40 hover:border-accent hover:text-accent px-8 py-4 text-xs uppercase tracking-[0.25em] transition-colors mt-10"
          >
            {t.services.ctaButton}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-32">
        <div className="mb-12">
          <p className="eyebrow mb-6 text-accent">{t.services.refsEyebrow}</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            {t.services.refsTitleA}<span className="italic text-accent">{t.services.refsTitleItalic}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 border-t border-border pt-12">
          {references.map((col, i) => (
            <div key={col.label.en} className={`px-6 md:px-10 py-4 ${i > 0 ? "md:border-l md:border-accent/40" : ""}`}>
              <p className="eyebrow mb-8 text-accent">{pick(col.label, lang)}</p>
              <ul className="space-y-6">
                {col.items.map((it) => (
                  <li key={it.name.en}>
                    <p className="font-serif text-2xl text-foreground leading-tight">{pick(it.name, lang)}</p>
                    {pick(it.meta, lang) && (
                      <p className="text-sm text-muted-foreground mt-1">{pick(it.meta, lang)}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
