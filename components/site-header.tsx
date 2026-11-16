
type Current = "home" | "studio" | "portfolio";

const navLink =
  "inline-flex min-h-12 items-center px-2 underline decoration-1 underline-offset-[0.3em] hover:decoration-2";

export default function SiteHeader({ current }: { current: Current }) {
  return (
    <header
      className={`wrap flex min-h-16 items-center justify-between gap-4 ${current === "home" ? "max-w-[40rem] lg:max-w-[70rem]" : ""}`}
    >
      <a
        href="/"
        aria-current={current === "home" ? "page" : undefined}
        className="site-logo -ml-1 inline-flex min-h-12 items-center px-1 text-xl font-bold tracking-[-0.03em] no-underline"
      >
        deste.
      </a>
      <nav aria-label="Principale">
        {current === "home" ? (
          <a href="/portfolio/" className={`${navLink} -mr-2`}>
            Portfolio ↗
          </a>
        ) : (
          <ul className="-mr-2 flex items-center gap-1">
            <li>
              <a
                href="/studio/"
                aria-current={current === "studio" ? "page" : undefined}
                className={`${navLink} ${current === "studio" ? "font-bold decoration-2" : ""}`}
              >
                Studio
              </a>
            </li>
            <li>
              <a
                href="/portfolio/"
                aria-current={current === "portfolio" ? "page" : undefined}
                className={`${navLink} ${current === "portfolio" ? "font-bold decoration-2" : ""}`}
              >
                Portfolio
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
