export default function Landing() {
  return (
    <section className="relative isolate mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-[1400px] items-center overflow-hidden pt-10 md:pt-0">
      <div className="relative z-10 flex max-w-[44rem] flex-col gap-6">
        <p className="m-0 text-[0.95rem] uppercase tracking-[0.45em] text-white/45">
          Software Engineer
        </p>
        <h1 className="m-0 text-[clamp(3rem,9vw,7.2rem)] leading-[0.95] font-bold">
          TOMMASO D&apos;ESTE
        </h1>
        <p className="m-0 text-[clamp(1.15rem,1.8vw,2rem)] text-[var(--muted)]">Based in Italy</p>
        <div className="flex flex-wrap items-center gap-5">
          <button
            className="border border-transparent bg-[#f5f5f5] px-7 py-4 text-base font-semibold tracking-[0.12em] uppercase text-[#111]"
            type="button"
          >
            View Projects
          </button>
          <button
            className="border-0 border-b border-white/45 bg-transparent px-0 py-4 text-base font-semibold tracking-[0.12em] uppercase"
            type="button"
          >
            Get in Touch
          </button>
        </div>
      </div>
      <div
        className="absolute top-0 right-0 z-[1] h-full w-full border-l-0 opacity-20 md:w-[min(44vw,38rem)] md:border-l md:border-white/10 md:opacity-80"
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
