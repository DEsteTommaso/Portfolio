"use client";

import ProjectCard from "@/components/ui/project-card";
import { SectionTitle } from "@/components/ui/typography";

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
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 pb-24 pt-6">
      <SectionTitle className="mt-40 mb-10">Selected Works</SectionTitle>

      <div className="flex flex-col gap-30">
        {projects.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <ProjectCard
              key={project.title}
              type={project.type}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              sourceUrl={project.sourceUrl}
              caseStudyUrl={project.caseStudyUrl}
              reverse={isReverse}
            />
          );
        })}
      </div>
    </section>
  );
}
