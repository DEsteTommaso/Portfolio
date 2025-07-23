import React, { forwardRef } from "react";
import { Anton } from "next/font/google";
import Image from "next/image";

// Load Anton Google font with weight 400 and latin subset
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
}); 

// Skill component displays categorized skills with icons and titles
interface SkillProps {
  // Puoi aggiungere proprietà in futuro se necessario
  className?: string;
}

// Utilizziamo forwardRef per permettere al componente di ricevere un ref esterno
const Skill = forwardRef<HTMLDivElement, SkillProps>(({ className = '' }, ref) => {
  return (
    // Il ref viene applicato qui al contenitore principale
    <div
      className={`flex flex-col items-start justify-center lg:gap-18 gap-10 ${className}`}
      ref={ref}
    >
      {/* Resto del componente invariato */}
      <div className="colorful-text animate-skill">SKILLS</div>

      {/* FRONTEND skills group */}
      <div className="flex flex-col sm:flex-row items-start justify-around gap-6 mb-4 w-full">
        {/* Category title styled with Anton font */}
        <div className={`w-1/2 ${anton.className} super-title animate-skill`}>
          FRONTEND
        </div>
        {/* List of frontend skills with icons */}
        <div className="flex flex-wrap gap-4 w-auto sm:w-1/2">
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image src="/images/skill/js.png" alt="JavaScript logo" width={40} height={40} />
            Javascript
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image
              src="/images/skill/typescript.png"
              alt="TypeScript logo"
              width={40}
              height={40}
            />
            Typescript
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image src="/images/skill/react.png" alt="React logo" width={40} height={40} />
            React
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image src="/images/skill/nextjs.png" alt="Next.js logo" width={40} height={40} />
            Next.js
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image
              src="/images/skill/tailwind.png"
              alt="Tailwind CSS logo"
              width={40}
              height={40}
            />
            Tailwind
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image src="/images/skill/gsap.png" alt="GSAP logo" width={40} height={40} />
            GSAP
          </div>
        </div>
      </div>

      {/* BACKEND skills group */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-4 w-full">
        <div className={`w-1/2 ${anton.className} super-title animate-skill`}>
          BACKEND
        </div>
        <div className="flex flex-wrap gap-4 w-auto sm:w-1/2">
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image
              src="/images/skill/node-js.png"
              alt="Node.js logo"
              width={40}
              height={40}
            />
            Node.js
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image
              src="/images/skill/express-js.png"
              alt="Express.js logo"
              width={40}
              height={40}
            />
            Express.js
          </div>
        </div>
      </div>

      {/* DATABASE skills group */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-4 w-full">
        <div className={`w-1/2 ${anton.className} super-title animate-skill`}>
          DATABASE
        </div>
        <div className="flex flex-wrap gap-4 w-auto sm:w-1/2">
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image
              src="/images/skill/mongodb.png"
              alt="MongoDB logo"
              width={40}
              height={40}
            />
            MongoDB
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image src="/images/skill/mysql.png" alt="MySQL logo" width={40} height={40} />
            MySQL
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image
              src="/images/skill/postgresql.png"
              alt="PostgreSQL logo"
              width={40}
              height={40}
            />
            PostgreSQL
          </div>
        </div>
      </div>

      {/* TOOLS skills group */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-4 w-full">
        <div className={`w-1/2 ${anton.className} super-title animate-skill`}>
          TOOLS
        </div>
        <div className="flex flex-wrap gap-4 w-auto sm:w-1/2">
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image src="/images/skill/git.png" alt="Git logo" width={40} height={40} />
            Git
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image src="/images/skill/docker.png" alt="Docker logo" width={40} height={40} />
            Docker
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
            <Image
              src="/images/skill/firebase.png"
              alt="Firebase logo"
              width={40}
              height={40}
            />
            Firebase
          </div>
        </div>
      </div>

      {/* Additional skills indicator */}
      <div className={`w-1/2 ${anton.className} text-4xl animate-skill`}>
        And more...
      </div>
    </div>
  );
});

// Aggiungi un displayName al componente
Skill.displayName = "Skill";

export default Skill;

