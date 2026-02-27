import ExperienceCard from "@/components/ui/experience-card";
import { SectionTitle } from "@/components/ui/typography";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Digital Innovation Labs",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications using modern JavaScript frameworks. Collaborated with UX designers to create intuitive user interfaces. Optimized application performance resulting in faster load times.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Firebase"],
  },
  {
    role: "Junior Software Engineer",
    company: "CodeBridge Labs",
    period: "2022 - 2024",
    description:
      "Built and maintained internal tools with a full-stack team, integrating REST APIs and improving CI pipelines for safer releases.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
  },
  {
    role: "Web Developer Intern",
    company: "Northwave Digital",
    period: "2019 - 2020",
    description:
      "Supported development of corporate websites and campaign landing pages, maintaining reusable UI components and technical SEO quality.",
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
  },
];

export default function Experiences() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col pb-16">
      <SectionTitle className="mt-40 mb-10">work Experience</SectionTitle>
      <div className="flex flex-col gap-16">
        {experiences.map((experience, index) => (
          <div key={`${experience.company}-${experience.role}`}>
            <ExperienceCard
              role={experience.role}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              technologies={experience.technologies}
            />
            {index < experiences.length - 1 ? (
              <div
                className="mx-auto mt-10 h-10 w-px bg-gradient-to-b from-white/35 via-white/15 to-white/0"
                aria-hidden="true"
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
