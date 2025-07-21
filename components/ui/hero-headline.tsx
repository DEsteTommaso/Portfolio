"use client";

import { Typewriter } from "react-simple-typewriter";

/**
 * HeroHeadline component renders a headline with a typewriter animation.
 *
 * @returns {JSX.Element} A styled <h1> element displaying animated words.
 *
 * - Uses the `Typewriter` component to cycle through the words "Code.", "Create.", "Repeat."
 * - The animation loops infinitely (`loop={0}` means infinite loop).
 * - The cursor is displayed as "|" and animates with the text.
 * - Animation speeds are controlled by `typeSpeed`, `deleteSpeed`, and `delaySpeed`.
 * - The headline is centered, bold, and adapts its size for different screen sizes.
 */
export default function HeroHeadline() {
  return (
    <h1 className="text-4xl sm:text-9xl font-bold text-center text-white">
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
