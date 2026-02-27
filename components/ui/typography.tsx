import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ITypographyProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: ITypographyProps) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.3em] text-[#666]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Eyebrow({ children, className }: ITypographyProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium uppercase tracking-widest text-white/45",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function DisplayTitle({ children, className }: ITypographyProps) {
  return (
    <p
      className={cn("tracking-tight leading-none font-bold", className)}
    >
      {children}
    </p>
  );
}

export function CardTitle({ children, className }: ITypographyProps) {
  return (
    <p
      className={cn(
        "text-3xl font-semibold leading-tight text-white md:text-5xl",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SubTitle({ children, className }: ITypographyProps) {
  return (
    <p
      className={cn("text-xl font-light text-white/65 md:text-2xl", className)}
    >
      {children}
    </p>
  );
}

export function BodyText({ children, className }: ITypographyProps) {
  return (
    <p
      className={cn(
        "text-lg leading-relaxed text-white/70 md:text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
}
