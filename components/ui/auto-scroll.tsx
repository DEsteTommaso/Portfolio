"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AutoScrollProps {
  numberOfImages: number; // Required prop to specify the number of images
}

export default function AutoScroll({ numberOfImages }: AutoScrollProps) {
  const [index, setIndex] = React.useState(0);
  const [isCenterHovered, setIsCenterHovered] = React.useState(false);

  useEffect(() => {
    if (isCenterHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % numberOfImages);
    }, 2500);
    return () => clearInterval(interval);
  }, [isCenterHovered, numberOfImages]);

  const prevIndex = (index - 1 + numberOfImages) % numberOfImages;
  const nextIndex = (index + 1) % numberOfImages;

  return (
    <div
      className="flex flex-row items-center justify-center text-center gap-6 py-8 rounded-xl "
    >
      <button
        onClick={() => setIndex(prevIndex)}
        className="rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-md w-12 h-12 flex items-center justify-center text-2xl font-bold"
        aria-label="Previous image"
      >
        &#8592;
      </button>
      <div className="flex flex-row items-center gap-6">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={prevIndex}
            className="perspective"
            style={{
              transform: "perspective(1000px) rotateY(40deg) scale(0.85)",
              opacity: 0.5,
              transition: "all 0.5s",
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 0.5, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={`/images/carousel/ss${prevIndex}.png`}
              alt="previous"
              width={220}
              height={160}
              className="rounded-lg shadow"
            />
          </motion.div>
          <motion.div
            key={index}
            className="perspective"
            style={{
              transform: "perspective(1000px) rotateY(0deg) scale(1)",
              zIndex: 2,
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              transition: "all 0.5s",
            }}
            initial={{ opacity: 0, scale: 0.90 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.90 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsCenterHovered(true)}
            onMouseLeave={() => setIsCenterHovered(false)}
          >
            <Image
              src={`/images/carousel/ss${index}.png`}
              alt="current"
              width={320}
              height={220}
              className="rounded-xl shadow-lg border-4 border-primary hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            key={nextIndex}
            className="perspective"
            style={{
              transform: "perspective(1000px) rotateY(-40deg) scale(0.85)",
              opacity: 0.5,
              transition: "all 0.5s",
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 0.5, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={`/images/carousel/ss${nextIndex}.png`}
              alt="next"
              width={220}
              height={160}
              className="rounded-lg shadow"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={() => setIndex(nextIndex)}
        className="rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-md w-12 h-12 flex items-center justify-center text-2xl font-bold"
        aria-label="Next image"
      >
        &#8594;
      </button>
    </div>
  );
}
