"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    type: "Game Development",
    title: "Little Heroes",
    description:
      "A 2D tycoon game featuring resource management, base building, and character progression in a vibrant pixel-art world.",
    tags: ["GSAP", "React", "Game Engine"],
    image: "/images/carousel/ss0.png",
    sourceUrl: "https://github.com/DEsteTommaso/Idle",
    caseStudyUrl: "https://github.com/DEsteTommaso/Idle",
  },
  {
    type: "Mobile Application",
    title: "DriveSafe",
    description:
      "Free community-based app with real-time alerts for speed cameras and regulated traffic areas, designed for safer driving.",
    tags: ["React Native", "Firebase", "Maps API"],
    image: "/images/carousel/ss1.png",
    sourceUrl: "https://github.com/DEsteTommaso",
    caseStudyUrl:
      "https://play.google.com/store/apps/details?id=com.tom904.checkautovelox",
  },
  {
    type: "Web Platform",
    title: "DogArea",
    description:
      "A location-based app that helps dog owners discover nearby parks, services, and pet-friendly spaces with a clean mobile UX.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    image: "/images/carousel/ss2.png",
    sourceUrl: "https://github.com/DEsteTommaso",
    caseStudyUrl: "https://www.tiktok.com/@tommo.deste",
  },
  {
    type: "Portfolio",
    title: "Developer Portfolio",
    description:
      "Personal website focused on visual storytelling, motion-driven sections, and a clean system for showcasing products and experience.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/images/carousel/ss0.png",
    sourceUrl: "https://github.com/DEsteTommaso/Portfolio",
    caseStudyUrl: "https://tommasodeste.it",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 pb-24 pt-6">
      <h2 className="text-lg font-semibold tracking-[0.16em] text-white/85">PROJECTS</h2>

      {projects.map((project, index) => {
        const isReverse = index % 2 === 1;

        return (
          <article key={project.title} className="grid items-center gap-8 lg:grid-cols-2">
            <div className={isReverse ? "lg:order-2" : "lg:order-1"}>
              <div className="relative h-[260px] w-full overflow-hidden border border-white/15 bg-white/5 sm:h-[340px] lg:h-[380px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className={`flex flex-col gap-6 ${isReverse ? "lg:order-1" : "lg:order-2"}`}>
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">{project.type}</p>
              <h3 className="text-4xl font-semibold leading-tight md:text-6xl">{project.title}</h3>
              <p className="max-w-2xl text-xl leading-relaxed text-white/65">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="border border-white/20 px-4 py-2 text-sm uppercase tracking-[0.12em] text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-lg font-semibold uppercase tracking-[0.12em]">
                <Link
                  href={project.sourceUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
                >
                  <Github size={18} />
                  Source
                </Link>
                <Link
                  href={project.caseStudyUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
                >
                  <ExternalLink size={18} />
                  Case Study
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
