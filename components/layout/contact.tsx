import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import {
  DisplayTitle,
  Eyebrow,
  SectionTitle,
} from "@/components/ui/typography";

export default function Contact() {
  return (
    <section
      className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 border-t border-white/10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16"
      id="contact"
    >
      <div className="flex flex-col justify-center gap-10">
        <SectionTitle>Get in touch</SectionTitle>
        <DisplayTitle className="text-6xl">
          <span className="block">LET&apos;S WORK</span>
          <span className="block italic text-white/25">TOGETHER.</span>
        </DisplayTitle>
        <Link
          href="mailto:tommaso.deste.ve@gmail.com"
          className="inline-flex w-fit items-center gap-3 border-b border-white/25 pb-1 text-xl text-white/75 no-underline transition hover:text-white md:text-3xl"
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
        <Eyebrow>© 2026 Tommaso D&apos;Este</Eyebrow>
        <Eyebrow>Based in Italy · Available worldwide</Eyebrow>
      </div>
    </section>
  );
}
