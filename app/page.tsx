import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import StoreList from "@/components/store-list";
import { barks, calendarioRifiuti } from "@/lib/content";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: { absolute: "deste." },
  alternates: { canonical: "/" },
};

const social = [
  { label: "TikTok", href: links.tommaso.tiktok },
  { label: "Instagram", href: links.tommaso.instagram },
  { label: "GitHub", href: links.tommaso.github },
  { label: "LinkedIn", href: links.tommaso.linkedin },
];

const apps = [barks, calendarioRifiuti];

export default function Linktree() {
  return (
    <>
      <SiteHeader current="home" />
      <main id="contenuto" className="mx-auto w-full max-w-[40rem] px-4 sm:px-6 lg:max-w-[70rem] lg:px-10">
        <section aria-labelledby="titolo" className="pt-6 lg:pt-16">
          <h1
            id="titolo"
            className="text-[2.125rem] leading-[1.02] font-bold tracking-[-0.035em] text-balance sm:text-5xl lg:text-[4.25rem]"
          >
            Ti mostro cosa ho costruito.
          </h1>

          <p className="mt-4 text-[1.0625rem] leading-snug text-ink sm:text-lg lg:mt-5 text-balance lg:max-w-none lg:text-xl">
            Ciao, sono Tommaso. Sviluppo app e le racconto sui social.
          </p>

          <ul className="-mx-2 mt-5 flex flex-wrap lg:mt-8" aria-label="Social">
            {social.map((s) =>
              s.href ? (
                <li key={s.label}>
                  <a href={s.href} rel="me noopener" className="link inline-flex min-h-12 items-center px-2 text-lg font-medium">
                    {s.label}
                  </a>
                </li>
              ) : null,
            )}
          </ul>

          <div className="mt-3 lg:mt-6">
            <a href="/studio/" className="btn-primary w-full text-[1.0625rem] sm:w-auto">
              Un sito o un&apos;app per il tuo progetto <span aria-hidden="true" className="nudge">→</span>
            </a>
          </div>
        </section>

        <section aria-labelledby="app" className="mt-14 lg:mt-20">
          <h2 id="app" className="text-sm font-medium text-muted">
            App pubblicate
          </h2>
          <ul className="mt-2 border-t border-rule">
            {apps.map((app) => (
              <li key={app.id} className="grid gap-x-8 border-b border-rule py-4 lg:grid-cols-[16rem_minmax(0,1fr)_auto] lg:items-center">
                <h3 className="text-xl font-bold tracking-[-0.02em]">
                  <a href={`/portfolio/#${app.id}`} className="inline-flex min-h-12 items-center gap-2 underline decoration-muted decoration-1 underline-offset-[0.25em] hover:decoration-ink hover:decoration-2">
                    {app.name} <span aria-hidden="true" className="nudge text-muted">→</span>
                  </a>
                </h3>
                <p className="text-muted">{app.tagline}</p>
                <StoreList stores={app.stores} className="mt-1 lg:mt-0" />
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-6">
          <a href="/portfolio/" className="link inline-flex min-h-12 items-center text-lg font-medium">
            Portfolio e esperienza <span aria-hidden="true" className="nudge">&nbsp;→</span>
          </a>
        </p>
      </main>
      <SiteFooter narrow />
    </>
  );
}
