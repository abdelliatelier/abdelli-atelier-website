import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abdelli Atelier" },
      { name: "description", content: "Let's talk about your project. Reach Abdelli Atelier by email or WhatsApp." },
      { property: "og:title", content: "Contact — Abdelli Atelier" },
      { property: "og:description", content: "Start a project with Abdelli Atelier." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const t = useT();
  const [sent, setSent] = useState(false);

  const fields = [
    { id: "name", label: t.contact.name, type: "text" },
    { id: "email", label: t.contact.email, type: "email" },
    { id: "subject", label: t.contact.subject, type: "text" },
  ];

  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-6">{t.contact.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1] max-w-4xl">
          {t.contact.h1a}<span className="italic text-accent">{t.contact.h1Italic}</span>{t.contact.h1b}
        </h1>
        <p className="mt-6 text-muted-foreground max-w-2xl">{t.contact.lead}</p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-32 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-8"
          >
            {fields.map((f) => (
              <div key={f.id} className="border-b border-border pb-3">
                <label htmlFor={f.id} className="block eyebrow mb-2">{f.label}</label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="w-full bg-transparent outline-none text-lg font-serif placeholder:text-muted-foreground/50"
                  placeholder="—"
                />
              </div>
            ))}
            <div className="border-b border-border pb-3">
              <label htmlFor="msg" className="block eyebrow mb-2">{t.contact.message}</label>
              <textarea
                id="msg"
                required
                rows={4}
                className="w-full bg-transparent outline-none text-lg font-serif placeholder:text-muted-foreground/50 resize-none"
                placeholder={t.contact.placeholder}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 border border-foreground/40 hover:border-accent hover:text-accent px-8 py-4 text-xs uppercase tracking-[0.25em] transition-colors"
            >
              {sent ? t.contact.sent : t.contact.send}
            </button>
          </form>
        </div>

        <aside className="md:col-span-5 space-y-10">
          <div>
            <p className="eyebrow mb-3">{t.contact.emailEyebrow}</p>
            <a href="mailto:contact@abdelliatelier.com" className="font-serif text-2xl hover:text-accent transition-colors">
              contact@abdelliatelier.com
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">{t.contact.studioEyebrow}</p>
            <p className="font-serif text-2xl">{t.contact.studioCity}</p>
            <p className="text-sm text-muted-foreground mt-2 inline-flex items-center gap-2">
              <MapPin size={14} /> {t.contact.studioAvail}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">{t.contact.directEyebrow}</p>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/97336111558" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 border border-border px-5 py-3 hover:border-accent hover:text-accent transition-colors">
                <MessageCircle size={16} />
                <span className="text-xs uppercase tracking-[0.2em]">WhatsApp</span>
              </a>
              <a href="mailto:contact@abdelliatelier.com"
                className="inline-flex items-center gap-3 border border-border px-5 py-3 hover:border-accent hover:text-accent transition-colors">
                <Mail size={16} />
                <span className="text-xs uppercase tracking-[0.2em]">contact@abdelliatelier.com</span>
              </a>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
