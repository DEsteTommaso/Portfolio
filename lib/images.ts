export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  barksMappa: {
    src: "/images/barks/barks-mappa-arona.webp",
    width: 720,
    height: 1561,
    alt: "Barks su iPhone: la mappa di Arona con il Lago Maggiore, la Rocca Borromea e il segnaposto di un'area cani.",
  },
  barksMappaRitaglio: {
    src: "/images/barks/barks-mappa-arona-ritaglio.webp",
    width: 780,
    height: 585,
    alt: "Barks: dettaglio della mappa di Arona con il Lago Maggiore, la Rocca Borromea e il segnaposto di un'area cani.",
  },
  barksMappaZoom: {
    src: "/images/barks/barks-mappa-zoom.webp",
    width: 600,
    height: 1301,
    alt: "Barks: mappa ravvicinata di Arona con l'area cani evidenziata in verde e i filtri di distanza da 1, 5 e 10 km.",
  },
  barksScheda: {
    src: "/images/barks/barks-scheda-area.webp",
    width: 600,
    height: 1301,
    alt: "Barks: scheda dell'area cani di Via Combattente e Reduce ad Arona, con la foto di un cane bianco, gli orari e il pulsante per il check-in.",
  },
  barksRecinto: {
    src: "/images/barks/barks-area-recinto.webp",
    width: 600,
    height: 1301,
    alt: "Barks: seconda foto della stessa area cani, con il recinto, gli attrezzi per l'agility e due cani sul prato.",
  },
  barksCane: {
    src: "/images/barks/barks-area-cane.webp",
    width: 600,
    height: 1301,
    alt: "Barks: foto dell'area cani sotto il pergolato, con un cane bianco e nero che annusa l'erba e le panchine colorate.",
  },
  crHome: {
    src: "/images/calendario-rifiuti/calendario-rifiuti-home.webp",
    width: 600,
    height: 1221,
    alt: "Calendario Rifiuti: schermata del Comune di Invorio con la raccolta di oggi e di domani e il calendario di ottobre.",
  },
  crSettimana: {
    src: "/images/calendario-rifiuti/calendario-rifiuti-settimana.webp",
    width: 600,
    height: 1221,
    alt: "Calendario Rifiuti: la settimana giorno per giorno, con verde, organico, carta e cartone e plastica.",
  },
  crNotifiche: {
    src: "/images/calendario-rifiuti/calendario-rifiuti-notifiche.webp",
    width: 600,
    height: 1221,
    alt: "Calendario Rifiuti: impostazioni dei promemoria, con l'orario del primo e del secondo avviso e i tipi di rifiuto da ricevere.",
  },
  ritratto: {
    src: "/images/tommaso/ritratto.webp",
    width: 406,
    height: 711,
    alt: "Tommaso D'Este, ritratto in bianco e nero su fondo scuro.",
  },
  littleHeroes: {
    src: "/images/archivio/little-heroes.webp",
    width: 1024,
    height: 500,
    alt: "Little Heroes: copertina in pixel art con la scritta Idle Little Heroes Tycoon, una forgia accesa e alcuni personaggi.",
  },
} satisfies Record<string, SiteImage>;
