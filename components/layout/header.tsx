"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-[4.5rem] w-full max-w-[1400px] items-center justify-between border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="text-3xl font-bold tracking-wide">TD.</div>
      <nav className="flex items-center gap-2 text-[0.95rem] tracking-[0.14em] uppercase text-white/70">
        <span>Experience</span>
        <span>Projects</span>
        <span>Contact</span>
      </nav>
    </header>
  );
}
