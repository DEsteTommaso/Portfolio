import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Shot from "@/components/shot";
import StoreList from "@/components/store-list";
import {
  archive,
  barks,
  calendarioRifiuti,
  developerPortfolio,
  experience,
  parsum,
  type Project,
} from "@/lib/content";

const description =
  "I progetti di Tommaso D'Este: Barks, Calendario Rifiuti, Parsum e gli altri, con stack, link e l'esperienza di lavoro.";

export const metadata: Metadata = {
  title: "Portfolio",
  description,
  alternates: { canonical: "/portfolio/" },
  openGraph: {
    title: "Portfolio · deste.",
    description,
    url: "/portfolio/",
    siteName: "deste.",
    locale: "it_IT",
    type: "website",
  },
};

const projects = [barks, calendarioRifiuti, parsum, developerPortfolio];

const index = [
  ...projects.map((p) => ({ id: p.id, label: p.name })),
  { id: "archivio", label: "Archivio" },
  { id: "esperienza", label: "Esperienza" },
];

function ProjectEntry({ project, first }: { project: Project; first: boolean }) {
  const hasShots = project.shots.length > 0;
  return (
    <article
      id={project.id}
      aria-labelledby={`${project.id}-titolo`}
      className="scroll-mt-4 border-t border-rule py-10 lg:py-14"
    >
      <div className={hasShots ? "grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14" : ""}>
        <div className={hasShots ? "" : "grid gap-x-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"}>
          <div>
            <p className="text-sm text-muted">{project.kind}</p>
            <h2 id={`${project.id}-titolo`} className="mt-1 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              {project.name}
            </h2>
          </div>
          <div className={hasShots ? "" : "lg:pt-6"}>
            <p className="mt-4 max-w-[60ch] text-lg">{project.description}</p>
            <dl className="mt-6 grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 text-[0.9375rem]">
              <dt className="text-muted">Ruolo</dt>
              <dd>{project.role}</dd>
              <dt className="text-muted">Stack</dt>
              <dd>{project.stack.join(", ")}</dd>
              <dt className="self-center text-muted">Link</dt>
              <dd>
                {project.stores.length > 0 ? (
                  <StoreList stores={project.stores} />
                ) : project.links.github ? (
                  <a href={project.links.github} className="link inline-flex min-h-12 items-center font-medium">
                    Codice su GitHub
                  </a>
                ) : (
                  <span className="text-muted">{project.status ?? "Nessuno"}</span>
                )}
              </dd>
            </dl>
          </div>
        </div>
        {hasShots ? (
          <div className="grid grid-cols-3 gap-2 self-start sm:gap-3">
            {project.shots.map((shot, i) => (
              <Shot key={shot.src} image={shot} priority={first && i === 0} />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <>
      <SiteHeader current="portfolio" />
      <main id="contenuto" className="wrap">
        <div className="pt-8 pb-10 lg:pt-20 lg:pb-14">
          <h1 className="text-[2.375rem] leading-[1.02] font-bold tracking-[-0.035em] sm:text-6xl lg:text-[5rem]">
            Progetti ed esperienza
          </h1>
          <nav aria-label="In questa pagina" className="mt-6">
            <ul className="-mx-2 flex flex-wrap">
              {index.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="link inline-flex min-h-12 items-center px-2">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {projects.map((p, i) => (
          <ProjectEntry key={p.id} project={p} first={i === 0} />
        ))}

        <section id="archivio" aria-labelledby="archivio-titolo" className="scroll-mt-4 border-t border-rule py-10 lg:py-14">
          <h2 id="archivio-titolo" className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Archivio
          </h2>
          <p className="mt-2 text-muted">Progetti chiusi, non più mantenuti.</p>
          <ul className="mt-8 grid gap-10 md:grid-cols-2 md:gap-8">
            {archive.map((a) => (
              <li key={a.id}>
                {a.image ? <Shot image={a.image} className="mb-4" /> : null}
                <p className="text-sm text-muted">{a.kind}</p>
                <h3 className="mt-1 text-xl font-bold">{a.name}</h3>
                <p className="mt-2 max-w-[60ch]">{a.description}</p>
                <p className="mt-2 text-[0.9375rem] text-muted">{a.stack.join(", ")}</p>
                {a.links.github ? (
                  <a href={a.links.github} className="link inline-flex min-h-12 items-center font-medium">
                    Codice su GitHub
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section id="esperienza" aria-labelledby="esperienza-titolo" className="scroll-mt-4 border-t border-rule py-10 lg:py-14">
          <h2 id="esperienza-titolo" className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Esperienza
          </h2>
          <ol className="mt-8">
            {experience.map((e) => (
              <li
                key={e.company}
                className="grid gap-x-14 gap-y-2 border-t border-rule py-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              >
                <div>
                  <h3 className="text-xl font-bold">{e.company}</h3>
                  <p className="text-muted">
                    {e.role} · {e.period}
                  </p>
                </div>
                <div>
                  <p className="max-w-[60ch]">{e.description}</p>
                  {e.stack.length > 0 ? (
                    <p className="mt-2 text-[0.9375rem] text-muted">{e.stack.join(", ")}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
