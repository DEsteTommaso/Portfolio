"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-16 w-full max-w-7xl items-center justify-between border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="text-xl font-bold tracking-wide">TD.</div>
      <nav className="flex items-center gap-8 text-xs font-medium uppercase tracking-wide text-white/70 md:text-sm">
        <span>Experience</span>
        <span>Projects</span>
        <span>Contact</span>
      </nav>
    </header>
  );
}
