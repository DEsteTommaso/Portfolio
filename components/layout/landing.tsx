import {
  SectionTitle,
  SubTitle,
} from "@/components/ui/typography";
import AnimatedTitle from "@/components/ui/animated-title";
import { motion } from "framer-motion";

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
          <button
            className="border border-transparent bg-zinc-100 px-7 py-3 text-base font-semibold uppercase tracking-wide text-zinc-900"
            type="button"
          >
            View Projects
          </button>
          <button
            className="border-0 border-b border-white/45 bg-transparent px-0 py-4 text-base font-semibold uppercase tracking-wide"
            type="button"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 right-0 z-0 h-full w-full md:w-1/2 lg:w-5/12"
        initial={{ opacity: 0, scale: 1.04, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.58, ease: "easeOut" }}
        aria-hidden="true"
      >
        <div
          className="h-full w-full opacity-20 md:opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.8) 100%), url('/images/projects/portrait.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </motion.div>
    </section>
  );
}
