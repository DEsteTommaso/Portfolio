"use client";
import { useEffect, useRef } from "react";
import HeroHeadline from "@/components/ui/hero-headline";
import CardProject from "@/components/ui/card-project";
import { Roboto_Flex, Anton } from "next/font/google";
import { setupGsapAnimations } from "@/helpers/gsapAnimations";
import { BackgroundBeams } from "@/components/ui/background-beams";

const robotoFlex = Roboto_Flex({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  const whoAmIRef = useRef(null);
  const skillsRef = useRef(null);
  const fadeOutSkillsRef = useRef(null);
  const fadeInProjectsRef = useRef(null);
  const scaleHoverProjectsRef = useRef(null);
  const projectsRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    setupGsapAnimations(
      whoAmIRef,
      skillsRef,
      fadeOutSkillsRef,
      fadeInProjectsRef,
      projectsRef,
      heroRef
    );
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <div className={`${robotoFlex.className} overflow-x-hidden z-10`}>
      <main className="py-4 text-normal">
        {/*Aggiungere loading page con nome e cognome*/}
        {/* Hero section */}
        <section
          className="flex items-center justify-center h-screen w-auto"
          ref={heroRef}
        >
          {/* fare effetto scroll, che le parole compaiono mentre vado giù */}
          <HeroHeadline />
        </section>

        <section className="h-[50vh]"></section>

        {/* Chi sono (metto immagine a sx e scrollando verso il basso faccio che il testo compare*/}
        <section
          className="flex flex-col items-start justify-center h-screen w-auto padding-x"
          ref={whoAmIRef}
        >
          <div
            className={`super-title mb-8 animate-fade-scrolldown  ${anton.className}`}
          >
            Building digital experiences, one line of code at a time.
          </div>
          <div className="flex flex-row items-start justify-center text-start">
            <div className="colorful-text mb-4 w-1/2 animate-fade-scrolldown">
              WHO AM I?
            </div>
            <div className="w-1/2">
              <div className="mb-4 leading-relaxed animate-fade-scrolldown text-normal">
                I am Tommaso D'Este, a dedicated software engineer with a strong
                focus on web development. My commitment to excellence ensures
                that I consistently deliver robust, scalable, and high-quality
                web solutions tailored to client requirements.
              </div>
              <div className="mb-4 leading-relaxed animate-fade-scrolldown text-normal">
                With a results-driven approach, I strive to exceed expectations
                and bring every project to successful completion. My expertise
                spans the full stack, allowing me to transform concepts into
                effective and engaging digital experiences.
              </div>
            </div>
          </div>
        </section>

        {/* Competenze */}
        <section
          className="flex items-center justify-evenly h-screen w-auto padding-x"
          ref={fadeOutSkillsRef}
        >
          <div
            className="flex flex-col items-start justify-center gap-18"
            ref={skillsRef}
          >
            <div className="colorful-text animate-skill">SKILLS</div>
            <div className="flex flex-row items-start justify-around gap-6 mb-4 w-full">
              <div
                className={`w-1/2 ${anton.className} super-title animate-skill`}
              >
                FRONTEND
              </div>
              <div className="flex flex-wrap gap-4 w-1/2">
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/js.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Javascript
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/typescript.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Typescript
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/react.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  React
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/nextjs.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Next.js
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/tailwind.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Tailwind
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/gsap.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  GSAP
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between gap-6 mb-4 w-full">
              <div
                className={`w-1/2 ${anton.className} super-title animate-skill`}
              >
                BACKEND
              </div>
              <div className="flex flex-wrap gap-4 w-1/2">
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/node-js.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Node.js
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/express-js.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Express.js
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between gap-6 mb-4 w-full">
              <div
                className={`w-1/2 ${anton.className} super-title animate-skill`}
              >
                DATABASE
              </div>
              <div className="flex flex-wrap gap-4 w-1/2">
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/mongodb.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  MongoDB
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/mysql.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  MySQL
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/postgresql.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  PostgreSQL
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-between gap-6 mb-4 w-full">
              <div
                className={`w-1/2 ${anton.className} super-title animate-skill`}
              >
                TOOLS
              </div>
              <div className="flex flex-wrap gap-4 w-1/2">
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/git.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Git
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/docker.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Docker
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-2xl animate-skill">
                  <img
                    src="/images/skill/firebase.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                  Firebase
                </div>
              </div>
            </div>
            <div className={`w-1/2 ${anton.className} text-4xl animate-skill`}>
              And more...
            </div>
          </div>
        </section>

        {/* Progetti */}
        <section className="flex items-center justify-center h-screen w-auto padding-x" ref={fadeInProjectsRef}>
          <div
            className="flex-col items-center justify-center"
            ref={projectsRef}
          >
            <div className="colorful-text mb-8 text-start ">
              PROJECTS THAT BRING IDEAS TO LIFE
            </div>
            <div className="flex flex-row items-center justify-center gap-6 mb-8">
              {/* Elenco dei progetti */}
              <CardProject
                title="Little Heroes"
                description="Idle Little Heroes Tycoon is a 2D idle game that combines strategic gameplay with epic battles against hordes of dark"
                link="https://github.com/DEsteTommaso/Idle"
                className="project-card"
              />
              <CardProject
                title="DriveSafe"
                description="Idle Little Heroes Tycoon is a 2D idle game that combines strategic gameplay with epic battles against hordes of dark"
                link="https://play.google.com/store/apps/details?id=com.tom904.checkautovelox"
                className="project-card"
              />
              <CardProject
                title="SkyRoute "
                description="SkyRoute is a fullstack web application, copy of the famous Skyscanner, that allows you to search for flights and book them"
                link=""
                className="project-card"
              />
              <CardProject
                title="More..."
                description="more projects coming soon"
                link=""
                className="project-card"
              />
            </div>
          </div>
        </section>

        {/* Contatti */}
        <section className="flex flex-col items-center justify-center w-auto padding-x pb-10">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="colorful-text">GET IN TOUCH</div>
            <div className="flex flex-col items-center justify-between text-center gap-3">
              <div className={`${anton.className} text-4xl`}>
                <a href="mailto:tommaso.deste.ve@gmail.com">
                  tommaso.deste.ve@gmail.com
                </a>
              </div>
              <div className="flex flex-row items-center justify-center gap-6">
                <div>
                  <a href="https://www.linkedin.com/in/tommaso-d-este-a1596517b/">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="https://github.com/DEsteTommaso">Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BackgroundBeams />
    </div>
  );
}
