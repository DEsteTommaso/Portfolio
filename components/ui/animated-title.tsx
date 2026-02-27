"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IAnimatedTitleProps {
  text: string;
  className?: string;
}

export default function AnimatedTitle({ text, className }: IAnimatedTitleProps) {
  const letters = Array.from(text);

  return (
    <motion.p
      aria-label={text}
      className={cn("leading-none font-bold tracking-tight", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: 0.12,
          },
        },
      }}
    >
      <span className="sr-only">{text}</span>
      {letters.map((char, index) =>
        char === "\n" ? (
          <br key={`br-${index}`} aria-hidden="true" />
        ) : (
          <motion.span
            key={`${char}-${index}`}
            aria-hidden="true"
            className="inline-block origin-bottom"
            variants={{
              hidden: {
                opacity: 0,
                y: 6,
                scaleY: 0.45,
              },
              visible: {
                opacity: 1,
                y: 0,
                scaleY: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        )
      )}
    </motion.p>
  );
}
