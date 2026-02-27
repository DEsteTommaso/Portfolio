"use client";

import ProjectCard from "@/components/ui/project-card";
import ScrollLinkedReveal from "@/components/ui/scroll-linked-reveal";
import { SectionTitle } from "@/components/ui/typography";

const projects = [
  {
    type: "Mobile Application",
    title: "Barks",
    description:
      "A location-based app that helps dog owners discover nearby parks, services, and pet-friendly spaces with a clean mobile UX.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "tRPC",
      "Mapbox API",
      "Better Auth",
      "AWS S3",
    ],
    image: "/images/projects/barks.png",
    sourceUrl: "",
    caseStudyUrl: "https://www.tiktok.com/@tommaso.deste",
  },
  {
    type: "Game Development",
    title: "Little Heroes",
    description:
      "A 2D tycoon game featuring resource management, base building, and character progression in a vibrant pixel-art world.",
    tags: ["Unity", "C#", "Firebase"],
    image: "/images/projects/little-heroes.png",
    sourceUrl: "https://github.com/DEsteTommaso/Idle",
    caseStudyUrl: "https://github.com/DEsteTommaso/Idle",
  },
  {
    type: "Portfolio",
    title: "Developer Portfolio",
    description:
      "Personal website focused on visual storytelling, motion-driven sections, and a clean system for showcasing products and experience.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/images/projects/portfolio.png",
    sourceUrl: "https://github.com/DEsteTommaso/Portfolio",
    caseStudyUrl: "https://tommasodeste.it",
  },
  {
    type: "Mobile Application - Not maintained",
    title: "DriveSafe",
    description:
      "Free community-based app with real-time alerts for speed cameras and regulated traffic areas, designed for safer driving.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Maps API",
      "Node.js",
      "PostgreSQL",
    ],
    image: "",
    sourceUrl: "",
    caseStudyUrl: "",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 pb-24 pt-6">
      <ScrollLinkedReveal fromY={24} revealStart={0.08} revealEnd={0.42}>
        <SectionTitle className="mt-40 mb-10">Selected Works</SectionTitle>
      </ScrollLinkedReveal>

      <div className="flex flex-col gap-30">
        {projects.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <ScrollLinkedReveal key={project.title} fromY={20} revealEnd={0.22}>
              <ProjectCard
                type={project.type}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                sourceUrl={project.sourceUrl}
                caseStudyUrl={project.caseStudyUrl}
                reverse={isReverse}
              />
            </ScrollLinkedReveal>
          );
        })}
      </div>
    </section>
  );
}
