import { EMAIL, links } from "@/lib/links";

const social = [
  { label: "TikTok", href: links.tommaso.tiktok },
  { label: "Instagram", href: links.tommaso.instagram },
  { label: "GitHub", href: links.tommaso.github },
  { label: "LinkedIn", href: links.tommaso.linkedin },
];

export default function SiteFooter({ narrow = false }: { narrow?: boolean }) {
  return (
    <footer className={`wrap mt-24 pb-10 text-sm text-muted ${narrow ? "max-w-[40rem] lg:max-w-[70rem]" : ""}`}>
      <div className="flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-bold text-ink">deste.</span> di Tommaso D&apos;Este
        </p>
        <ul className="-mx-2 flex flex-wrap items-center">
          <li>
            <a href={`mailto:${EMAIL}`} className="link inline-flex min-h-12 items-center px-2">
              Email
            </a>
          </li>
          {social.map((s) =>
            s.href ? (
              <li key={s.label}>
                <a href={s.href} rel="me noopener" className="link inline-flex min-h-12 items-center px-2">
                  {s.label}
                </a>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </footer>
  );
}
