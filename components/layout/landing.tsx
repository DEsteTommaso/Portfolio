import {
  DisplayTitle,
  SectionTitle,
  SubTitle,
} from "@/components/ui/typography";

export default function Landing() {
  return (
    <section className="relative isolate mx-auto flex min-h-screen w-full max-w-7xl items-center overflow-hidden pt-10 md:pt-0">
      <div className="relative z-20 flex max-w-3xl flex-col gap-11">
        <SectionTitle>Software engineer</SectionTitle>
        <DisplayTitle className="text-6xl md:text-7xl lg:text-8xl">
          TOMMASO D&apos;ESTE
        </DisplayTitle>
        <SubTitle className="text-zinc-400">Based in Italy</SubTitle>
        <div className="flex flex-wrap items-center gap-5">
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
        </div>
      </div>
      <div
        className="absolute top-0 right-0 z-0 h-full w-full opacity-20 md:w-1/2 md:border-l md:border-white/10 md:opacity-80 lg:w-5/12"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.8) 100%), var(--landing-image)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
