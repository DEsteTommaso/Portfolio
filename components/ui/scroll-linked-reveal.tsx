"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollLinkedRevealProps = {
  children: ReactNode;
  className?: string;
  fromX?: number;
  fromY?: number;
  revealStart?: number;
  revealEnd?: number;
};

export default function ScrollLinkedReveal({
  children,
  className,
  fromX = 0,
  fromY = 20,
  revealStart = 0,
  revealEnd = 0.22,
}: ScrollLinkedRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const revealProgress = useTransform(
    scrollYProgress,
    [revealStart, revealEnd],
    [0, 1],
    { clamp: true },
  );
  const x = useTransform(revealProgress, [0, 1], [fromX, 0]);
  const y = useTransform(revealProgress, [0, 1], [fromY, 0]);

  return (
    <motion.div ref={ref} className={className} style={{ opacity: revealProgress, x, y }}>
      {children}
    </motion.div>
  );
}
