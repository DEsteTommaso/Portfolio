import {
  SectionTitle,
  SubTitle,
} from "@/components/ui/typography";
import AnimatedTitle from "@/components/ui/animated-title";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="relative isolate mx-auto flex min-h-screen w-full max-w-7xl items-center overflow-hidden pt-10 md:pt-0">
      <div className="relative z-20 flex max-w-3xl flex-col gap-11">
        <SectionTitle>Software engineer</SectionTitle>
        <AnimatedTitle
          text={"TOMMASO\nD'ESTE"}
          className="text-6xl md:text-7xl lg:text-8xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
        >
          <SubTitle className="text-zinc-400">Based in Italy</SubTitle>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.58, ease: "easeOut" }}
        >
          <Link
            href="#projects"
            className="border border-transparent bg-zinc-100 px-7 py-3 text-base font-semibold uppercase tracking-wide text-zinc-900 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="border-0 border-b border-white/45 bg-transparent px-0 py-4 text-base font-semibold uppercase tracking-wide transition duration-200 hover:-translate-y-0.5 hover:border-white hover:text-white"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 right-0 z-0 h-full w-full md:w-1/2 lg:w-5/12"
        initial={{ opacity: 0, scale: 1.04, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.58, ease: "easeOut" }}
        aria-hidden="true"
      >
        <div className="relative h-full w-full opacity-20 md:opacity-80">
          <Image
            src="/images/projects/portrait.png"
            alt=""
            fill
            aria-hidden="true"
            className="object-contain object-right xl:object-cover xl:object-center"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-[88%] bg-gradient-to-b from-transparent via-black/70 to-black" />
        </div>
      </motion.div>
    </section>
  );
}
