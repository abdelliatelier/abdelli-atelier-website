import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

type Dict = typeof translations.en;

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      tagline: "Architecture & Interior Design",
    },
    home: {
      eyebrow: "Abdelli Atelier — Est. 2010",
      h1a: "Architecture as ",
      h1Italic: "intention",
      h1b: ", design as narrative.",
      heroSub: "Noureddine Abdelli — Architect & Interior Designer · Bahrain · 15+ years of experience",
      ctaProjects: "View projects",
      ctaStart: "Start a project →",
      philosophyEyebrow: "Philosophy",
      philosophyLead: "We design architecture that gives meaning to spaces —",
      philosophyMuted: " places shaped by natural light, noble materials, and a careful listening to those who inhabit them.",
      selectedWork: "Selected Work",
      recent: "Recent Projects",
      allProjects: "All projects →",
    },
    about: {
      title: "About — Abdelli Atelier",
      eyebrow: "About the Studio",
      h1a: "A practice built on ",
      h1Italic: "passion",
      h1b: ", rigor, and the constant pursuit of the essential.",
      portraitCaption: "Abdelli Noureddine — Architect & Interior Designer",
      quote: "“Architecture is not about decorating, but about giving meaning to spaces.”",
      p1: "Hello, I am Noureddine Abdelli, architect and interior designer with over 15 years of experience working with private and professional clients. I accompany you at every stage, from initial vision to final delivery.",
      p2: "My work draws from a restrained palette — wood, marble, metal, glass — assembled with patience and an obsession for the right proportions. I blend refined design and narrative elements to create bespoke environments that capture the essence of a place.",
      stat1: "Years of Experience",
      stat2: "Projects Completed",
      stat3: "Countries · Algeria & Bahrain",
      cta: "Work with us →",
    },
    projects: {
      eyebrow: "Portfolio",
      h1a: "Selected ",
      h1Italic: "works",
      lead: "A curated selection of residences and retreats completed between 2018 and 2024.",
      notes: "Project Notes",
    },
    services: {
      eyebrow: "What we do",
      h1a: "A complete practice — from the ",
      h1Italic: "first sketch",
      h1b: " to the final key.",
      processEyebrow: "Our process",
      processTitleA: "A rigorous 7-step method — ",
      processTitleItalic: "from brief to delivery.",
      ctaEyebrow: "Process",
      ctaTitle: "Every project begins with a conversation. Tell me about your place, your way of living, and your ambitions.",
      ctaButton: "Start a conversation →",
      refsEyebrow: "They trusted us",
      refsTitleA: "References that speak ",
      refsTitleItalic: "for themselves.",
    },
    contact: {
      eyebrow: "Contact",
      h1a: "Let's talk about your ",
      h1Italic: "project",
      h1b: ".",
      lead: "Whether you have a piece of land, a space to transform, or simply an idea — I'd be glad to hear from you. Every great realisation begins with a conversation.",
      name: "Name",
      email: "Email",
      subject: "Project type",
      message: "Message",
      placeholder: "Tell me about your project…",
      send: "Send a message →",
      sent: "Message sent ✓",
      emailEyebrow: "Email",
      studioEyebrow: "Studio",
      studioCity: "Bahrain",
      studioAvail: "Available for local and international projects",
      directEyebrow: "Direct",
    },
    footer: {
      tagline1: "Architecture as intention,",
      tagline2: "design as narrative.",
      studio: "Studio",
      city: "Bahrain",
      avail: "Available internationally",
      connect: "Connect",
      copy: "All rights reserved.",
      meta: "Architecture · Interior Design",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      projects: "Projets",
      services: "Services",
      contact: "Contact",
      tagline: "Architecture & Design d'Intérieur",
    },
    home: {
      eyebrow: "Abdelli Atelier — Est. 2010",
      h1a: "L'architecture comme ",
      h1Italic: "intention",
      h1b: ", le design comme récit.",
      heroSub: "Noureddine Abdelli — Architecte & Designer d'Intérieur · Bahrain · 15 ans et plus d'expérience",
      ctaProjects: "Voir les projets",
      ctaStart: "Commencer un projet →",
      philosophyEyebrow: "Philosophie",
      philosophyLead: "Nous concevons une architecture qui donne du sens aux espaces —",
      philosophyMuted: " des lieux façonnés par la lumière naturelle, des matériaux nobles, et une écoute attentive de ceux qui les habitent.",
      selectedWork: "Sélection",
      recent: "Projets Récents",
      allProjects: "Tous les projets →",
    },
    about: {
      title: "About — Abdelli Atelier",
      eyebrow: "À Propos du Studio",
      h1a: "Une pratique fondée sur la ",
      h1Italic: "passion",
      h1b: ", la rigueur, et la recherche constante de l'essentiel.",
      portraitCaption: "Abdelli Noureddine — Architecte & Designer d'Intérieur",
      quote: "« L'architecture ne consiste pas à décorer, mais à donner du sens aux espaces. »",
      p1: "Bonjour, je suis Noureddine Abdelli, architecte et designer d'intérieur avec plus de 15 ans d'expérience auprès de clients particuliers et professionnels. Je vous accompagne à chaque étape, de la vision initiale à la livraison finale.",
      p2: "Mon travail puise dans une palette sobre — bois, marbre, métal, verre — assemblés avec patience et une obsession pour les proportions justes. Je marie design raffiné et éléments narratifs pour des environnements sur mesure qui capturent l'essence d'un lieu.",
      stat1: "Années d'expérience",
      stat2: "Projets réalisés",
      stat3: "Pays · Algérie & Bahrain",
      cta: "Travailler ensemble →",
    },
    projects: {
      eyebrow: "Portfolio",
      h1a: "Projets ",
      h1Italic: "sélectionnés",
      lead: "Une sélection de résidences et de projets hôteliers réalisés entre 2018 et 2024.",
      notes: "Notes de Projet",
    },
    services: {
      eyebrow: "Nos Services",
      h1a: "Une pratique complète — du ",
      h1Italic: "premier trait",
      h1b: " jusqu'à la remise des clés.",
      processEyebrow: "Notre Processus",
      processTitleA: "Une méthode rigoureuse en 7 étapes — ",
      processTitleItalic: "de la vision à la livraison.",
      ctaEyebrow: "Processus",
      ctaTitle: "« Chaque projet commence par une conversation. Parlez-moi de votre lieu, de votre façon de vivre, et de vos ambitions. »",
      ctaButton: "Commencer une conversation →",
      refsEyebrow: "Ils nous ont fait confiance",
      refsTitleA: "Des références qui parlent ",
      refsTitleItalic: "d'elles-mêmes.",
    },
    contact: {
      eyebrow: "Contact",
      h1a: "Parlons de votre ",
      h1Italic: "projet",
      h1b: ".",
      lead: "Que vous ayez un terrain, un espace à transformer, ou simplement une idée — je serais ravi d'échanger avec vous. Chaque grande réalisation commence par une conversation.",
      name: "Nom",
      email: "Email",
      subject: "Type de projet",
      message: "Message",
      placeholder: "Parlez-moi de votre projet…",
      send: "Envoyer un message →",
      sent: "Message envoyé ✓",
      emailEyebrow: "Email",
      studioEyebrow: "Studio",
      studioCity: "Bahrain",
      studioAvail: "Disponible pour projets locaux et internationaux",
      directEyebrow: "Direct",
    },
    footer: {
      tagline1: "L'architecture comme intention,",
      tagline2: "le design comme récit.",
      studio: "Studio",
      city: "Bahrain",
      avail: "Disponible à l'international",
      connect: "Connect",
      copy: "Tous droits réservés.",
      meta: "Architecture · Design d'Intérieur",
    },
  },
} as const;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "fr") setLangState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = translations[lang] as Dict;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div
        key={lang}
        className={ready ? "animate-in fade-in duration-500" : undefined}
      >
        {children}
      </div>
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}

/** Pick a localized value: accepts plain string or {en, fr} object. */
export function pick<T>(value: T | { en: T; fr: T }, lang: Lang): T {
  if (value && typeof value === "object" && "en" in (value as object) && "fr" in (value as object)) {
    return (value as { en: T; fr: T })[lang];
  }
  return value as T;
}
