import Link from "next/link";

type Current = "home" | "studio" | "portfolio";

const navLink =
  "inline-flex min-h-12 items-center px-2 underline decoration-1 underline-offset-[0.3em] hover:decoration-2";

export default function SiteHeader({ current }: { current: Current }) {
  return (
    <header
      className={`wrap flex min-h-16 items-center justify-between gap-4 ${current === "home" ? "max-w-[40rem] lg:max-w-[70rem]" : ""}`}
    >
      <Link
        prefetch={false}
        href="/"
        aria-current={current === "home" ? "page" : undefined}
        className="-ml-1 inline-flex min-h-12 items-center px-1 text-xl font-bold tracking-[-0.03em] no-underline"
      >
        deste.
      </Link>
      <nav aria-label="Principale">
        {current === "home" ? (
          <Link prefetch={false} href="/portfolio/" className={`${navLink} -mr-2`}>
            Portfolio ↗
          </Link>
        ) : (
          <ul className="-mr-2 flex items-center gap-1">
            <li>
              <Link
                prefetch={false}
                href="/studio/"
                aria-current={current === "studio" ? "page" : undefined}
                className={`${navLink} ${current === "studio" ? "font-bold decoration-2" : ""}`}
              >
                Studio
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                href="/portfolio/"
                aria-current={current === "portfolio" ? "page" : undefined}
                className={`${navLink} ${current === "portfolio" ? "font-bold decoration-2" : ""}`}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
