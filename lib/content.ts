import { images, type SiteImage } from "@/lib/images";
import { links, type LinkSet } from "@/lib/links";

/** Etichetta di uno store: link se `href` esiste, altrimenti testo semplice. */
export type StoreEntry = { label: string; href: string | null };

export type Project = {
  id: string;
  name: string;
  /** Riga breve per il linktree. */
  tagline: string;
  kind: string;
  description: string;
  role: string;
  stack: string[];
  stores: StoreEntry[];
  links: LinkSet;
  shots: SiteImage[];
  /** Testo al posto degli store quando il progetto non è pubblicato. */
  status?: string;
};

export const barks: Project = {
  id: "barks",
  name: "Barks",
  tagline: "Parchi e servizi per chi ha un cane.",
  kind: "App mobile · su App Store e Google Play",
  description:
    "App basata sulla posizione per chi ha un cane: aree cani, servizi e luoghi pet-friendly vicino a te, su una mappa.",
  role: "Founder e programmatore",
  stack: [
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "tRPC",
    "Mapbox",
    "Better Auth",
    "AWS S3",
  ],
  stores: [
    { label: "App Store", href: links.barks.appStore },
    { label: "Google Play", href: links.barks.playStore },
  ],
  links: links.barks,
  shots: [images.barksMappa, images.barksScheda, images.barksRecinto],
};

export const calendarioRifiuti: Project = {
  id: "calendario-rifiuti",
  name: "Calendario Rifiuti",
  tagline: "La raccolta del tuo Comune, anche offline.",
  kind: "App mobile · su App Store e Google Play",
  description:
    "Il calendario della raccolta rifiuti del tuo Comune, consultabile anche offline, con promemoria locali. In italiano, inglese, tedesco e francese.",
  role: "Sviluppo dell'app",
  stack: ["React Native", "Expo", "TanStack Query", "Zustand", "i18next", "Zod"],
  stores: [
    { label: "App Store", href: links.calendarioRifiuti.appStore },
    { label: "Google Play", href: links.calendarioRifiuti.playStore },
  ],
  links: links.calendarioRifiuti,
  shots: [images.crHome, images.crSettimana, images.crNotifiche],
};

export const parsum: Project = {
  id: "parsum",
  name: "Parsum",
  tagline: "",
  kind: "App mobile · in sviluppo",
  description:
    "App di finanza personale in italiano: saldo, risparmi accantonati, quanto resta disponibile, scadenze ricorrenti e analisi. I movimenti si inseriscono a mano, senza collegamenti alle banche.",
  role: "Founder e programmatore",
  stack: ["React Native", "Expo", "tRPC", "Better Auth", "Prisma", "PostgreSQL"],
  stores: [],
  links: links.parsum,
  shots: [],
  status: "Non ancora online",
};

export const developerPortfolio: Project = {
  id: "developer-portfolio",
  name: "Developer Portfolio",
  tagline: "",
  kind: "Sito · questo sito",
  description:
    "Il sito che stai guardando: linktree, studio e portfolio, esportati come pagine statiche.",
  role: "Progetto personale",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  stores: [],
  links: links.portfolio,
  shots: [],
};

export const archive = [
  {
    id: "little-heroes",
    name: "Little Heroes",
    kind: "Gioco · non più mantenuto",
    description:
      "Gioco gestionale 2D in pixel art: risorse da gestire, una base da costruire e personaggi da far crescere.",
    stack: ["Unity", "C#", "Firebase"],
    links: links.littleHeroes,
    image: images.littleHeroes as SiteImage | null,
  },
  {
    id: "drivesafe",
    name: "DriveSafe",
    kind: "App mobile · non più mantenuta",
    description:
      "App gratuita basata sulla community, con avvisi in tempo reale su autovelox e zone a traffico limitato.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Node.js", "PostgreSQL"],
    links: links.driveSafe,
    image: null as SiteImage | null,
  },
];

export const experience = [
  {
    company: "Novaidea",
    role: "Software Engineer",
    period: "Settembre – dicembre 2024",
    description:
      "Ho sviluppato un frontend React responsive per desktop, tablet e telefono, lavorando in team con revisioni del codice e riunioni di avanzamento.",
    stack: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    company: "Data4Prime Srl",
    role: "Software Engineer, stage",
    period: "Luglio – agosto 2022",
    description:
      "Supporto tecnico: diagnosi di problemi hardware e software, configurazione delle postazioni, gestione degli accessi ai sistemi aziendali e documentazione delle procedure.",
    stack: [] as string[],
  },
];
