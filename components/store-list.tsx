import type { StoreEntry } from "@/lib/content";

/**
 * Riga degli store. Se un link manca (`href: null`) l'etichetta resta testo
 * semplice: niente `#`, niente URL inventati.
 */
export default function StoreList({
  stores,
  className = "",
}: {
  stores: StoreEntry[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-1 text-sm ${className}`}>
      {stores.map((s, i) => (
        <li key={s.label} className="inline-flex items-center gap-x-1">
          {i > 0 ? (
            <span aria-hidden="true" className="text-muted">
              ·
            </span>
          ) : null}
          {s.href ? (
            <a href={s.href} className="link inline-flex min-h-12 items-center font-medium">
              {s.label}
            </a>
          ) : (
            <span className="text-muted">{s.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
