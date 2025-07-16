"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroHeadline() {
  return (
    <h1 className="text-9xl font-bold text-center text-white">
      <Typewriter
        words={["Code.", "Create.", "Repeat."]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={90}
        deleteSpeed={50}
        delaySpeed={1200}
      />
    </h1>
  );
}
