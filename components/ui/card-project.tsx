"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CardProjectProps {
  title: string;
  description: string;
  link: string;
}

export default function CardProject({
  title,
  description,
  link,
}: CardProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex flex-col items-start justify-between text-left p-6
         bg-[#1a1a1a] border border-white/20 rounded-xl shadow-lg
         hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
         w-full max-w-xs h-[230px]`}
    >
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
    </motion.div>
  );
}
