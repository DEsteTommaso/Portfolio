"use client";

import ExperienceCard from "@/components/ui/experience-card";
import ScrollLinkedReveal from "@/components/ui/scroll-linked-reveal";
import { SectionTitle } from "@/components/ui/typography";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Novaidea",
    period: "September 2024 - 2024",
    description:
      "Developed a responsive React frontend compatible with desktop, tablet, and mobile devices, contributing to a consistent user experience. Worked collaboratively within a development team, participating in reviews and meetings to support project progress.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    role: "Software Engineer Intern",
    company: "Data4Prime Srl",
    period: "July 2022 - August 2022",
    description:
      "Provided technical support by troubleshooting hardware and software issues, configuring workstations, and managing user access across company systems. Maintained documentation of procedures and system configurations to improve operational efficiency and IT infrastructure stability.",
  },
];

export default function Experiences() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col pb-16">
      <ScrollLinkedReveal fromY={24} revealStart={0.08} revealEnd={0.42}>
        <SectionTitle className="mt-40 mb-10">work Experience</SectionTitle>
      </ScrollLinkedReveal>
      <div className="flex flex-col gap-16">
        {experiences.map((experience, index) => (
          <ScrollLinkedReveal
            key={`${experience.company}-${experience.role}`}
            fromX={index % 2 === 0 ? -72 : 72}
            fromY={0}
            revealEnd={0.2}
          >
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
          </ScrollLinkedReveal>
        ))}
      </div>
    </section>
  );
}
