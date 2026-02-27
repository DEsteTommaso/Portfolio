import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ImageOff } from "lucide-react";
import TechPill from "@/components/ui/tech-pill";
import { BodyText, CardTitle, Eyebrow } from "@/components/ui/typography";

interface IProjectCardProps {
  type: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceUrl: string;
  caseStudyUrl: string;
  reverse?: boolean;
}

export default function ProjectCard({
  type,
  title,
  description,
  tags,
  image,
  sourceUrl,
  caseStudyUrl,
  reverse = false,
}: IProjectCardProps) {
  const hasSourceUrl = sourceUrl.trim().length > 0;
  const hasCaseStudyUrl = caseStudyUrl.trim().length > 0;
  const hasImage = image.trim().length > 0;

  return (
    <article className="grid items-center gap-22 lg:grid-cols-2">
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 sm:h-80 lg:h-96">
          {hasImage ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale transition duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%),linear-gradient(160deg,#191919_0%,#0D0D0D_100%)] px-6 text-center text-white/70">
              <ImageOff size={34} className="text-white/45" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Preview coming soon
              </p>
              <p className="max-w-xs text-sm text-white/60">
                This project does not have an image yet.
              </p>
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex flex-col gap-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}
      >
        <Eyebrow>{type}</Eyebrow>
        <CardTitle className="text-2xl md:text-4xl">{title}</CardTitle>
        <BodyText className="text-base md:text-lg">{description}</BodyText>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <TechPill key={`${title}-${tag}`} label={tag} />
          ))}
        </div>

        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wide text-white/90 md:text-sm">
          {hasSourceUrl ? (
            <Link
              href={sourceUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
            >
              <Github size={18} />
              Source
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 text-white/35"
            >
              <Github size={18} />
              Source
            </span>
          )}
          {hasCaseStudyUrl ? (
            <Link
              href={caseStudyUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
            >
              <ExternalLink size={18} />
              Case Study
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 text-white/35"
            >
              <ExternalLink size={18} />
              Case Study
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
