"use client";
import { useEffect, useRef } from "react";
import HeroHeadline from "@/components/ui/hero-headline";
import CardProject from "@/components/ui/card-project";
import { Roboto_Flex, Anton } from "next/font/google";
import { setupGsapAnimations } from "@/helpers/gsapAnimations";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ScrollBar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skill from "@/components/ui/skill";

const robotoFlex = Roboto_Flex({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  const whoAmIRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const fadeOutSkillsRef = useRef<HTMLDivElement>(null);
  const fadeInProjectsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEl = document.querySelector("#scroll-container") as HTMLElement;
    if (!scrollEl) return;

    const scrollbar = ScrollBar.init(scrollEl, {
      damping: 0.05,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      plugins: {
        overscroll: false
      },
    });

    // Disabilita esplicitamente lo scroll orizzontale
    scrollbar.track.xAxis.element.remove(); // Rimuove fisicamente la barra di scorrimento orizzontale
    
    // Inoltre, blocca il movimento orizzontale
    scrollbar.addListener((status) => {
      scrollbar.setPosition(0, status.offset.y); // Resetta sempre la posizione X a 0
    });
    
    // Configurazione del proxy per ScrollTrigger
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined) {
          scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform",
    });

    // Agganciare l'update di GSAP al scrollbar
    scrollbar.addListener(ScrollTrigger.update);

    // Impostare il contenitore di default
    ScrollTrigger.defaults({ scroller: scrollEl });

    // Ora configuriamo le animazioni GSAP
    setupGsapAnimations(
      whoAmIRef,
      skillsRef,
      fadeOutSkillsRef,
      fadeInProjectsRef,
      projectsRef,
      heroRef,
      scrollEl
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (scrollbar) {
        scrollbar.removeListener(ScrollTrigger.update);
        scrollbar.destroy();
      }
    };
  }, []);

return (
    <>
      <BackgroundBeams />
      <div
        id="scroll-container"
        className={`${robotoFlex.className} h-screen overflow-x-hidden z-10`}
      >
        <main className="py-4 text-normal">
          {/* Hero section */}
          <section
            className="section-spacing flex items-center justify-center h-screen w-auto"
            ref={heroRef}
          >
            <HeroHeadline />
          </section>

          {/* Chi sono */}
          <section
            className="section-spacing flex flex-col items-start justify-center h-auto w-auto padding-x lg:mb-0"
            ref={whoAmIRef}
          >
            <div
              className={`super-title mb-8 animate-fade-scrolldown  ${anton.className}`}
            >
              Building digital experiences, one line of code at a time.
            </div>
            <div className="flex flex-col sm:flex-row items-start justify-center text-start">
              <div className="colorful-text mb-4 w-1/2 animate-fade-scrolldown">
                WHO AM I?
              </div>
              <div className="w-auto sm:w-1/2">
                <div className="mb-4 leading-relaxed animate-fade-scrolldown text-normal">
                  I am Tommaso D&apos;Este, a dedicated software engineer with a
                  strong focus on web development. My commitment to excellence
                  ensures that I consistently deliver robust, scalable, and
                  high-quality web solutions tailored to client requirements.
                </div>
                <div className="mb-4 leading-relaxed animate-fade-scrolldown text-normal">
                  With a results-driven approach, I strive to exceed
                  expectations and bring every project to successful completion.
                  My expertise spans the full stack, allowing me to transform
                  concepts into effective and engaging digital experiences.
                </div>
              </div>
            </div>
          </section>

          {/* Competenze */}
          <section
            className="section-spacing flex items-center justify-evenly h-auto w-auto padding-x lg:mb-0"
            ref={fadeOutSkillsRef}
          >
            <Skill ref={skillsRef} />
          </section>

          {/* Progetti */}
          <section
            className="section-spacing flex items-center justify-center h-auto w-full padding-x"
            ref={fadeInProjectsRef}
          >
            <div
              className="flex-col items-start justify-center w-full"
              ref={projectsRef}
            >
              <div className="colorful-text mb-8 text-start ">
                PROJECTS THAT BRING IDEAS TO LIFE
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 mb-8 justify-items-center items-center">
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
          <section className="section-spacing flex flex-col items-center justify-center h-auto w-auto padding-x pb-10">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="colorful-text">GET IN TOUCH</div>
              <div className="flex flex-col items-center justify-between text-center gap-3">
                {/*
                  Mostra il super title solo su desktop (lg e oltre).
                  Usa hidden su mobile/tablet, block su desktop.
                */}
                <div className={`${anton.className} text-2xl md:text-[3rem]`}>
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
      </div>
    </>
  );
}
