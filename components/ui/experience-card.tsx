import TechPill from "@/components/ui/tech-pill";
import {
  BodyText,
  CardTitle,
  Eyebrow,
  SubTitle,
} from "@/components/ui/typography";

interface IExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  technologies,
}: IExperienceCardProps) {
  return (
    <article className="flex w-full flex-col gap-8 rounded-2xl border border-white/15 bg-[#0D0D0D] px-6 py-8 md:px-10 md:py-10">
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-2xl md:text-4xl">{role}</CardTitle>
          <SubTitle className="text-lg md:text-xl">{company}</SubTitle>
        </div>
        <Eyebrow className="pt-1">{period}</Eyebrow>
      </div>
      <BodyText className="text-base md:text-lg">{description}</BodyText>
      {technologies?.length ? (
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <TechPill key={`${company}-${technology}`} label={technology} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
