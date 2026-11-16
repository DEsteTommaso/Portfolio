import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Shot from "@/components/shot";
import { images } from "@/lib/images";
import { EMAIL } from "@/lib/links";

const description =
  "Siti web, web app, app mobile, backend e API: li sviluppo io, Tommaso D'Este. Scrivimi per parlare del tuo progetto.";

export const metadata: Metadata = {
  title: "Studio",
  description,
  alternates: { canonical: "/studio/" },
  openGraph: {
    title: "Studio · deste.",
    description,
    url: "/studio/",
    siteName: "deste.",
    locale: "it_IT",
    type: "website",
  },
};

// Bozze brevi: da rivedere con Tommaso. Nessun tempo di consegna, nessun esito promesso.
const services = [
  {
    name: "Siti web",
    text: "Pagine per presentare te o la tua attività, pensate prima di tutto per il telefono.",
  },
  {
    name: "Web app",
    text: "Strumenti che si usano dal browser, con accessi, dati e pannelli su misura.",
  },
  {
    name: "App mobile",
    text: "App per iPhone e Android con React Native ed Expo, come Barks e Calendario Rifiuti.",
  },
  {
    name: "Backend e API",
    text: "Database, autenticazione e API per far funzionare app e siti.",
  },
];

const steps = [
  { verb: "Capisco", text: "Mi racconti il progetto, chi lo userà e cosa deve fare." },
  { verb: "Scelgo", text: "Ti propongo gli strumenti e ti spiego perché, compromessi compresi." },
  { verb: "Costruisco", text: "Sviluppo e ti faccio provare le versioni intermedie." },
  { verb: "Verifico", text: "Controllo il lavoro su telefono e computer prima di pubblicarlo." },
];

const explained = [
  { term: "La scelta", text: "Ho fatto Barks con React Native ed Expo, invece di scrivere due app native separate per iPhone e Android." },
  { term: "Il motivo", text: "Lavoro da solo. Con un solo codice pubblico su App Store e Google Play, e una correzione la faccio una volta sola." },
  { term: "Il compromesso", text: "Dipendo dagli strumenti di Expo e, per le funzioni molto specifiche di un telefono, ho meno libertà che con il codice nativo." },
];

export default function Studio() {
  return (
    <>
      <SiteHeader current="studio" />
      <main id="contenuto" className="wrap">
        <section aria-labelledby="titolo" className="pt-8 pb-4 lg:pt-20">
          <h1
            id="titolo"
            className="max-w-[18ch] text-[2.375rem] leading-[1.02] font-bold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[5rem]"
          >
            Il tuo prossimo sito o la tua prossima app, li sviluppo io.
          </h1>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a href={`mailto:${EMAIL}`} className="btn-primary w-full sm:w-auto">
              Scrivimi <span aria-hidden="true" className="nudge">→</span>
            </a>
            <a href="/portfolio/" className="link inline-flex min-h-12 items-center justify-center font-medium sm:justify-start">
              Guarda cosa ho costruito
            </a>
          </div>
        </section>

        <section aria-labelledby="servizi" className="mt-16 lg:mt-28">
          <h2 id="servizi" className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            Cosa sviluppo
          </h2>
          <dl className="mt-6 border-t border-rule">
            {services.map((s) => (
              <div key={s.name} className="grid gap-1 border-b border-rule py-5 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-8">
                <dt className="text-lg font-bold">{s.name}</dt>
                <dd className="max-w-[60ch] text-muted md:text-lg">{s.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="spiegato" className="mt-16 lg:mt-28">
          <h2 id="spiegato" className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            Un lavoro, spiegato
          </h2>
          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="grid grid-cols-2 gap-3 self-start">
              <Shot image={images.barksMappaZoom} />
              <Shot image={images.barksCane} />
            </div>
            <div>
              <p className="text-xl font-bold">Barks</p>
              <p className="mt-1 max-w-[60ch] text-muted">
                L&apos;app per trovare aree cani, servizi e luoghi pet-friendly vicino a te.{" "}
                <a href="/portfolio/#barks" className="link inline-flex min-h-12 items-center">
                  Scheda nel portfolio
                </a>
              </p>
              <dl className="mt-6 border-t border-rule">
                {explained.map((e) => (
                  <div key={e.term} className="border-b border-rule py-5">
                    <dt className="font-bold">{e.term}</dt>
                    <dd className="mt-1 max-w-[60ch] text-muted">{e.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section aria-labelledby="metodo" className="mt-16 lg:mt-28">
          <h2 id="metodo" className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            Come lavoro
          </h2>
          <ol className="mt-6 grid gap-x-8 border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.verb} className="border-b border-rule py-5 lg:border-b-0">
                <p className="text-lg font-bold">{s.verb}</p>
                <p className="mt-1 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="contatto" className="mt-16 lg:mt-28">
          <h2 id="contatto" className="text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
            Parliamo del tuo progetto.
          </h2>
          <p className="mt-4 max-w-[60ch] text-lg text-muted">
            Scrivimi cosa ti serve a{" "}
            <a href={`mailto:${EMAIL}`} className="link whitespace-nowrap">
              {EMAIL}
            </a>
            .
          </p>
          <a href={`mailto:${EMAIL}`} className="btn-primary mt-6 w-full sm:w-auto">
            Scrivi una email <span aria-hidden="true" className="nudge">→</span>
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
