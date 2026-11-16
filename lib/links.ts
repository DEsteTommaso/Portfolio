/**
 * Tutti i link esterni del sito, in un solo posto.
 *
 * Regola: se un link non esiste ancora vale `null`. In pagina l'etichetta
 * viene mostrata come testo non cliccabile (mai `#`, mai URL inventati).
 * I link degli store vanno compilati quando Tommaso li fornisce.
 */
export type LinkSet = {
  appStore: string | null;
  playStore: string | null;
  github: string | null;
  tiktok: string | null;
  instagram: string | null;
  linkedin: string | null;
  email: string | null;
};

const none: LinkSet = {
  appStore: null,
  playStore: null,
  github: null,
  tiktok: null,
  instagram: null,
  linkedin: null,
  email: null,
};

export const EMAIL = "info@tommasodeste.it";

export const links = {
  tommaso: {
    ...none,
    github: "https://github.com/DEsteTommaso",
    tiktok: "https://www.tiktok.com/@tommaso.deste",
    instagram: "https://www.instagram.com/tommo.deste/",
    linkedin: "https://www.linkedin.com/in/tommaso-d-este-a1596517b/",
    email: `mailto:${EMAIL}`,
  },
  barks: {
    ...none,
    appStore: "https://apps.apple.com/it/app/barks/id6757150718",
    playStore: "https://play.google.com/store/apps/details?id=com.barks",
  },
  calendarioRifiuti: {
    ...none,
    appStore: "https://apps.apple.com/it/app/calendario-rifiuti-raccolta/id6825545707",
    playStore: "https://play.google.com/store/apps/details?id=com.calendariorifiuti.app",
  },
  parsum: { ...none },
  portfolio: {
    ...none,
    github: "https://github.com/DEsteTommaso/Portfolio",
  },
  littleHeroes: {
    ...none,
    github: "https://github.com/DEsteTommaso/Idle",
  },
  driveSafe: { ...none },
} satisfies Record<string, LinkSet>;
