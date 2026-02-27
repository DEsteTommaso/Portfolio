import TechPill from "@/components/ui/tech-pill";

interface IExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  technologies,
}: IExperienceCardProps) {
  return (
    <article className="flex w-full flex-col gap-8 rounded-2xl border border-white/15 bg-[#060606] px-6 py-8 md:px-10 md:py-10">
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            {role}
          </h3>
          <p className="text-2xl font-medium text-white/65">{company}</p>
        </div>
        <p className="pt-1 text-xl font-semibold text-white/45">{period}</p>
      </div>
      <p className="max-w-6xl text-xl leading-relaxed text-white/70">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <TechPill key={`${company}-${technology}`} label={technology} />
        ))}
      </div>
    </article>
  );
}
