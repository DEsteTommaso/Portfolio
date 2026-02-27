"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface IAnimatedTitleProps {
  text: string;
  className?: string;
}

export default function AnimatedTitle({ text, className }: IAnimatedTitleProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <p
      aria-label={text}
      className={cn("leading-none font-bold tracking-tight", className)}
    >
      <span className="sr-only">{text}</span>
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          aria-hidden="true"
          className={cn(
            "inline-block origin-bottom transform-gpu transition duration-500 ease-out",
            isVisible
              ? "translate-y-0 scale-y-100 opacity-100"
              : "translate-y-1 scale-y-50 opacity-0",
          )}
          style={{ transitionDelay: `${index * 45}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
}
