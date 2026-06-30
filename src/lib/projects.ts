import p1a from "@/assets/project-1-a.jpg";
import p2a from "@/assets/project-2-a.jpg";
import p3a from "@/assets/project-3-a.jpg";
import hEntrance1 from "@/assets/hilton-entrance-1.jpg";
import hEntrance2 from "@/assets/hilton-entrance-2.jpg";
import hDining1 from "@/assets/hilton-dining-1.jpg";
import hDining2 from "@/assets/hilton-dining-2.jpg";
import hSunken1 from "@/assets/hilton-sunken-1.jpg";
import hSunken2 from "@/assets/hilton-sunken-2.jpg";
import hSalle1 from "@/assets/hilton-salle-1.jpg";
import hSalle2 from "@/assets/hilton-salle-2.jpg";
import hSpa1 from "@/assets/hilton-spa-1.jpg";
import hSpa2 from "@/assets/hilton-spa-2.jpg";
import hChambres1 from "@/assets/hilton-chambres-1.jpg";
import hChambres2 from "@/assets/hilton-chambres-2.jpg";
import hSport1 from "@/assets/hilton-sport-1.jpg";
import hSport2 from "@/assets/hilton-sport-2.jpg";
import hLatino1 from "@/assets/hilton-latino-1.jpg";
import hLatino2 from "@/assets/hilton-latino-2.jpg";
import wEntrance1 from "@/assets/wyndham-entrance-1.jpg";
import wEntrance2 from "@/assets/wyndham-entrance-2.jpg";
import wDining1 from "@/assets/wyndham-dining-1.jpg";
import wDining2 from "@/assets/wyndham-dining-2.jpg";
import wSunken1 from "@/assets/wyndham-sunken-1.jpg";
import wSunken2 from "@/assets/wyndham-sunken-2.jpg";
import wSalle1 from "@/assets/wyndham-salle-1.jpg";
import wSalle2 from "@/assets/wyndham-salle-2.jpg";
import wSpa1 from "@/assets/wyndham-spa-1.jpg";
import wSpa2 from "@/assets/wyndham-spa-2.jpg";
import wChambres1 from "@/assets/wyndham-chambres-1.jpg";
import wChambres2 from "@/assets/wyndham-chambres-2.jpg";
import wSport1 from "@/assets/wyndham-sport-1.jpg";
import wSport2 from "@/assets/wyndham-sport-2.jpg";
import villaEntrance from "@/assets/villa-entrance.jpg";
import villaLiving from "@/assets/villa-living.jpg";
import villaDining from "@/assets/villa-dining.jpg";
import villaKitchen from "@/assets/villa-kitchen.jpg";
import villaBedroom from "@/assets/villa-bedroom.jpg";
import villaBathroom from "@/assets/villa-bathroom.jpg";
import villaRooftop from "@/assets/villa-rooftop.jpg";
import villaPool from "@/assets/villa-pool.jpg";
import execLiving from "@/assets/exec-living.jpg";
import execBedroom from "@/assets/exec-bedroom.jpg";
import execKitchen from "@/assets/exec-kitchen.jpg";
import execBathroom from "@/assets/exec-bathroom.jpg";
import sabinaStorefront from "@/assets/sabina-storefront.jpg";
import sabinaMall from "@/assets/sabina-mall.webp";
import sabinaCounter from "@/assets/sabina-counter.jpg";
import sabinaInterior from "@/assets/sabina-interior.jpg";
import showroomConceptPlan from "@/assets/showroom-concept-plan.jpg";

export type L = { en: string; fr: string };

export type GalleryItem = {
  src: string;
  caption?: L;
  fit?: "cover" | "contain";
  captionItalic?: boolean;
};

export type Project = {
  slug: string;
  title: L;
  subtitle?: L;
  location: L;
  year: string;
  category: L;
  sectionLabel?: L;
  sectionNote?: L;
  description: L;
  cover: string;
  hideCover?: boolean;
  coverFit?: "cover" | "contain";
  layout?: "feature-grid" | "single-main";
  gallery: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "hilton-bahrain",
    title: { en: "Hilton Bahrain", fr: "Hilton Bahrain" },
    location: { en: "Juffair, Bahrain", fr: "Juffair, Bahrain" },
    year: "2022",
    category: { en: "Hospitality · Architecture & Interior", fr: "Hôtellerie · Architecture & Intérieur" },
    description: {
      en: "A landmark project on the Juffair skyline. A glazed façade in dialogue with Gulf light, a sculptural double-height lobby, exclusive dining venues and panoramic suites — a complete architectural vision from floor to ceiling.",
      fr: "Un projet phare qui marque la skyline de Juffair. Façade vitrée dialoguant avec la lumière du Golfe, lobby sculptural à double hauteur, espaces de restauration exclusifs et suites panoramiques — une vision architecturale complète du sol au plafond.",
    },
    cover: p1a,
    coverFit: "cover",
    gallery: [
      { src: hEntrance1, caption: { en: "Entrance Lobby & Reception", fr: "Hall d'Accueil & Réception" } },
      { src: hEntrance2, caption: { en: "Entrance Lobby & Reception", fr: "Hall d'Accueil & Réception" } },
      { src: hDining1, caption: { en: "All Day Dining", fr: "Restauration & Gastronomie" } },
      { src: hDining2, caption: { en: "All Day Dining", fr: "Restauration & Gastronomie" } },
      { src: hSunken1, caption: { en: "Sunken Lounge", fr: "Lounge Extérieur" } },
      { src: hSunken2, caption: { en: "Sunken Lounge", fr: "Lounge Extérieur" } },
      { src: hSalle1, caption: { en: "Meeting & Event Hall", fr: "Salle de Réunion et d'Événements" } },
      { src: hSalle2, caption: { en: "Meeting & Event Hall", fr: "Salle de Réunion et d'Événements" } },
      { src: hSpa1, caption: { en: "Wellness & Spa Center", fr: "Centre de Bien-être & Spa" } },
      { src: hSpa2, caption: { en: "Wellness & Spa Center", fr: "Centre de Bien-être & Spa" } },
      { src: hChambres1, caption: { en: "Premium Suites & Rooms", fr: "SUITES & CHAMBRES PREMIUM" } },
      { src: hChambres2, caption: { en: "Premium Studio", fr: "PREMIUM STUDIO" } },
      { src: hLatino1, caption: { en: "Sport Bar & Entertainment", fr: "Bar Sportif & Divertissement" } },
      { src: hLatino2, caption: { en: "Sport Bar & Entertainment", fr: "Bar Sportif & Divertissement" } },
      { src: hSport1, caption: { en: "Resto Bar Latino", fr: "Resto Bar Latino" } },
      { src: hSport2, caption: { en: "Resto Bar Latino", fr: "Resto Bar Latino" } },
    ],
  },
  {
    slug: "wyndham-garden-bahrain",
    title: { en: "Wyndham Garden Bahrain", fr: "Wyndham Garden Bahrain" },
    location: { en: "Bahrain", fr: "Bahrain" },
    year: "2017",
    category: { en: "Hospitality · Interior Design", fr: "Hôtellerie · Design d'Intérieur" },
    description: {
      en: "A professional address where contemporary elegance meets functionality — from the warm lobby to rooms designed for the discerning business traveller. A calming palette, refined materials, and a memorable atmosphere from the very first moments.",
      fr: "Une adresse professionnelle où élégance contemporaine et fonctionnalité se conjuguent — du lobby chaleureux aux chambres pensées pour le voyageur d'affaires exigeant. Palette apaisante, matériaux raffinés, atmosphère mémorable dès les premiers instants.",
    },
    cover: p2a,
    coverFit: "cover",
    gallery: [
      { src: wEntrance1, caption: { en: "Entrance Lobby & Reception", fr: "Hall d'Accueil & Réception" } },
      { src: wEntrance2, caption: { en: "Entrance Lobby & Reception", fr: "Hall d'Accueil & Réception" } },
      { src: wDining1, caption: { en: "All Day Dining", fr: "Restauration & Gastronomie" } },
      { src: wDining2, caption: { en: "All Day Dining", fr: "Restauration & Gastronomie" } },
      { src: wSunken1, caption: { en: "BAR \u0026\u00A0Terrace ROOFTOP", fr: "Bar & Terrasse Rooftop" } },
      { src: wSunken2, caption: { en: "BAR \u0026\u00A0Terrace ROOFTOP", fr: "Bar & Terrasse Rooftop" } },
      { src: wSalle1, caption: { en: "Meeting & Event Hall", fr: "Salle de Réunion et d'Événements" } },
      { src: wSalle2, caption: { en: "Meeting & Event Hall", fr: "Salle de Réunion et d'Événements" } },
      { src: wSpa1, caption: { en: "Executive Lounge", fr: "Salon Exécutif" } },
      { src: wSpa2, caption: { en: "Executive Lounge", fr: "Salon Exécutif" } },
      { src: wChambres1, caption: { en: "DELUXE ROOM", fr: "CHAMBRE DE LUXE" } },
      { src: wChambres2, caption: { en: "DELUXE TWIN ROOM", fr: "CHAMBRE TWIN DELUXE" } },
      { src: wSport1, caption: { en: "DELUXE ROOM", fr: "CHAMBRE DE LUXE" } },
      { src: wSport2, caption: { en: "DELUXE ROOM - BATHROOM", fr: "CHAMBRE DELUXE - SALLE DE BAIN " } },
    ],
  },
  {
    slug: "villa-privee-vue-mer",
    title: { en: "Private Sea-View Villa", fr: "Villa Privée Vue Mer" },
    location: { en: "Bahrain", fr: "Bahrain" },
    year: "2025",
    category: { en: "Residential · Architecture & Interior", fr: "Résidentiel · Architecture & Intérieur" },
    description: {
      en: "A contemporary residence where every space is in dialogue with the sea horizon. Noble materials, double height, controlled light — a way of living thought through to the smallest detail, from the master bedroom to the panoramic rooftop bar.",
      fr: "Une résidence contemporaine où chaque espace dialogue avec l'horizon marin. Matériaux nobles, double hauteur, lumière maîtrisée — une expérience de vie pensée dans ses moindres détails, de la chambre principale au rooftop bar panoramique.",
    },
    cover: p3a,
    coverFit: "cover",
    gallery: [
      { src: villaEntrance, caption: { en: "Entrance Hall", fr: "Hall d'Entrée" } },
      { src: villaLiving, caption: { en: "Double-Height Living Room", fr: "Salon Double Hauteur" } },
      { src: villaDining, caption: { en: "Upper Floor Lounge", fr: "Séjour Secondaire de l'Étage" } },
      { src: villaKitchen, caption: { en: "Kitchen", fr: "Cuisine" } },
      { src: villaBedroom, caption: { en: "Master Suite — Intimate Dining", fr: "Suite Principale — Dining Privé" } },
      { src: villaBathroom, caption: { en: "Master Suite", fr: "Suite Principale" } },
      { src: villaRooftop, caption: { en: "Sky Lounge & Entertaining Terrace", fr: "Sky Lounge & Terrasse de Réception" } },
      { src: villaPool, caption: { en: "Sky Lounge & Entertaining Terrace", fr: "Sky Lounge & Terrasse de Réception" } },
    ],
  },
  {
    slug: "appartements-executifs",
    title: { en: "Executive Apartments", fr: "Appartements Exécutifs" },
    subtitle: {
      en: "Urban Refinement & Timeless Elegance",
      fr: "Raffinement Urbain & Élégance Intemporelle",
    },
    location: { en: "Bahrain", fr: "Bahrain" },
    year: "2025",
    category: { en: "Residential Projects", fr: "Projets Résidentiels" },
    description: {
      en: "An apartment designed for those who demand excellence every day — where discreet luxury, panoramic views over the Gulf and high-end finishes compose a singular setting.",
      fr: "Un appartement pensé pour ceux qui exigent l'excellence au quotidien — où luxe discret, vues panoramiques sur le Golfe et finitions haut de gamme composent un cadre de vie unique.",
    },
    cover: execLiving,
    coverFit: "cover",
    gallery: [
      { src: execBedroom, caption: { en: "Master Bedroom", fr: "Chambre Principale" } },
      { src: execKitchen, caption: { en: "Kitchen", fr: "Cuisine & Coin Repas" } },
      { src: execBathroom, caption: { en: "Signature Marble Bathroom", fr: "Salle de Bain Marbre de Prestige" } },
    ],
  },
  {
    slug: "magasin-sabina",
    title: { en: "Lingerie Boutique — Sabina", fr: "Magasin de Sous-Vêtements — Sabina" },
    subtitle: {
      en: "Contemporary Design · Simple and Sophisticated",
      fr: "Design Contemporain · Simple et Sophistiqué",
    },
    location: { en: "Bahrain", fr: "Bahrain" },
    year: "2024",
    category: { en: "Commercial Projects", fr: "Projets Commerciaux" },
    description: {
      en: "A feminine and modern retail space where elegant minimalism meets carefully measured pops of colour — an intuitive, luminous and desirable shopping experience.",
      fr: "Un espace commercial féminin et moderne où le minimalisme élégant se mêle à des touches colorées soigneusement dosées — une expérience shopping intuitive, lumineuse et désirable.",
    },
    cover: sabinaStorefront,
    coverFit: "cover",
    gallery: [
      { src: sabinaMall, caption: { en: "Built Façade — Shopping Mall", fr: "Façade Réelle — Centre Commercial" } },
      { src: sabinaCounter, caption: { en: "Reception Counter & Neon Sign", fr: "Comptoir d'Accueil & Enseigne Néon" } },
      { src: sabinaInterior, caption: { en: "Interior & Product Display", fr: "Espace Intérieur & Présentation Produits" } },
    ],
  },
  {
    slug: "showroom-materiaux-concept",
    title: {
      en: "Building Materials Showroom",
      fr: "Showroom de Matériaux de Construction",
    },
    subtitle: {
      en: "Hard & Rough Concept — When Industry Becomes Art",
      fr: "Concept Hard & Rough — Quand l'Industriel Devient Art",
    },
    location: { en: "Concept", fr: "Concept" },
    year: "2024",
    category: { en: "Concept Design · 2024", fr: "Concept Design · 2024" },
    sectionLabel: { en: "Conceptual Projects", fr: "Projets Conceptuels" },
    sectionNote: {
      en: "Conceptual projects illustrate my research and exploration — an architectural vision pushed to its final logic, awaiting realisation.",
      fr: "Les projets conceptuels illustrent ma démarche de recherche et d'exploration — une vision architecturale portée jusqu'à sa logique finale, en attente de réalisation.",
    },
    description: {
      en: "A conceptual project that reinvents how building materials are presented — turning a commercial space into a contemporary industrial gallery, where each material becomes an object of contemplation. The Hard & Rough concept celebrates the raw beauty of concrete, steel and wood in their most honest state.",
      fr: "Un projet conceptuel qui réinvente la présentation des matériaux de construction — transformer un espace commercial en galerie industrielle contemporaine, où chaque matériau devient objet de contemplation. Le concept Hard & Rough célèbre la beauté brute du béton, de l'acier et du bois à l'état pur.",
    },
    cover: showroomConceptPlan,
    hideCover: true,
    layout: "single-main",
    gallery: [
      {
        src: showroomConceptPlan,
        fit: "contain",
        caption: {
          en: "Conceptual project — Layout plan & concept design",
          fr: "Projet conceptuel — Plan d'aménagement & concept design",
        },
        captionItalic: true,
      },
    ],
  },
];
