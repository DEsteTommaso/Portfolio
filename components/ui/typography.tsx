import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ITypographyProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: ITypographyProps) {
  return (
    <h2
      className={cn(
        "text-lg font-semibold uppercase tracking-[0.3em] text-white/85",
        className,
      )}
    >
      {children}
    </h2>
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
    <h1
      className={cn(
        "text-5xl leading-none font-bold md:text-7xl lg:text-8xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function CardTitle({ children, className }: ITypographyProps) {
  return (
    <h3
      className={cn(
        "text-3xl font-semibold leading-tight text-white md:text-5xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function SubTitle({ children, className }: ITypographyProps) {
  return (
    <p
      className={cn("text-xl font-medium text-white/65 md:text-2xl", className)}
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

export function MetaText({ children, className }: ITypographyProps) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-wide text-white/40",
        className,
      )}
    >
      {children}
    </p>
  );
}
