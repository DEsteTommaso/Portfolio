import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="mx-auto grid min-h-[62vh] w-full max-w-[1400px] grid-cols-1 gap-12 border-t border-white/10 pt-[clamp(4rem,8vw,8rem)] pb-[clamp(3rem,7vw,6rem)] lg:grid-cols-[1.2fr_0.8fr] lg:gap-[clamp(2rem,6vw,8rem)]"
      id="contact"
    >
      <div className="flex flex-col justify-center gap-8">
        <p className="m-0 text-base uppercase tracking-[0.42em] text-white/45">Get in touch</p>
        <h2 className="m-0 flex flex-col gap-1 text-[clamp(2.9rem,7vw,6.2rem)] leading-[0.94] font-bold tracking-[-0.02em]">
          <span>LET&apos;S WORK</span>
          <span className="text-white/20 italic">TOGETHER.</span>
        </h2>
        <Link
          href="mailto:tommaso.deste.ve@gmail.com"
          className="inline-flex w-fit items-center gap-3 border-b border-white/25 pb-1.5 text-[clamp(1.5rem,2.4vw,2.7rem)] text-white/75 no-underline transition hover:text-white"
        >
          tommaso.deste.ve@gmail.com
          <ArrowUpRight size={24} />
        </Link>
      </div>

      <div className="flex flex-col items-start justify-end gap-4 lg:items-end">
        <div className="flex items-center gap-6 text-white/55">
          <Link
            href="https://github.com/DEsteTommaso"
            target="_blank"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <Github size={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tommaso-d-este-a1596517b/"
            target="_blank"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <Linkedin size={32} />
          </Link>
        </div>
        <div className="text-[0.95rem] uppercase tracking-[0.18em] text-white/25 lg:text-[1.1rem]">
          © 2026 Tommaso D&apos;Este
        </div>
        <div className="text-[0.78rem] uppercase tracking-[0.18em] text-white/25">
          Based in Italy · Available worldwide
        </div>
      </div>
    </section>
  );
}
