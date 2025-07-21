"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CardProjectProps {
  title: string;
  description: string;
  link: string;
  className?: string; // aggiungi questa riga
}

export default function CardProject({
  title,
  description,
  link,
  className = "",
}: CardProjectProps) {

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // mouse enter → scala a 1.05
    const onEnter = () => {
      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    // mouse leave → scala indietro a 1
    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      className={`card-animated-border relative w-full max-w-xs h-[250px] sm:h-[370px] overflow-hidden p-[2px] ${className} `}
      style={{ zIndex: 0 }}
      ref={cardRef}
    >
      <div className="flex flex-col items-start justify-between text-left p-6 bg-[#1a1a1a] rounded-xl w-full h-full shadow-lg">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/70 mb-4 leading-snug">{description}</p>
        </div>
        <a
          href={link || undefined}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={link ? 0 : -1}
          aria-disabled={link === ""}
          className={`group inline-flex items-center font-medium ${
            link === "" ? "text-gray-400 cursor-not-allowed pointer-events-none" : "text-blue-400"
          } focus:outline-none transition-colors duration-200`}
        >
          <span className="group-hover:text-blue-300">View Project</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
}
