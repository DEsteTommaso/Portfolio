"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CardProjectProps {
  title: string;
  description: string;
  link: string;
  className?: string; 
}

// CardProject displays a project card with title, description, and a link.
// It animates the card scale on mouse enter/leave using GSAP.
export default function CardProject({
  title,
  description,
  link,
  className = "",
}: CardProjectProps) {

  // Ref for the card DOM element to apply GSAP animations
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Scale up the card slightly on mouse enter
    const onEnter = () => {
      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    // Scale back to normal on mouse leave
    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    // Cleanup event listeners on unmount
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      // Main card container with animated border and GSAP ref
      className={`card-animated-border relative w-full max-w-xs h-[250px] sm:h-[370px] overflow-hidden p-[2px] ${className} `}
      style={{ zIndex: 0 }}
      ref={cardRef}
    >
      <div className="flex flex-col items-start justify-between text-left p-6 bg-[#1a1a1a] rounded-xl w-full h-full shadow-lg">
        <div>
          {/* Project title and description */}
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/70 mb-4 leading-snug">{description}</p>
        </div>
        {/* Link to project, disabled if link is empty */}
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
