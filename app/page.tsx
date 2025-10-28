"use client";
import { useEffect, useRef } from "react";
import HeroHeadline from "@/components/ui/hero-headline";
import CardProject from "@/components/ui/card-project";
import { Roboto_Flex, Anton } from "next/font/google";
import { setupGsapAnimations } from "@/helpers/gsapAnimations";
import { BackgroundBeams } from "@/components/ui/background-firefly";
import "lenis/dist/lenis.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skill from "@/components/ui/skill";
import Lenis from "lenis";
import gsap from "gsap";

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
    // Set up smooth scrolling with Lenis and synchronize GSAP ScrollTrigger
    const lenis = new Lenis({ autoRaf: false });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerFunc = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFunc);

    gsap.ticker.lagSmoothing(0);

    // set up GSAP animations (ScrollTrigger uses the default scroller: window)
    setupGsapAnimations(
      whoAmIRef,
      skillsRef,
      fadeOutSkillsRef,
      fadeInProjectsRef,
      projectsRef,
      heroRef
    );

    return () => {
      gsap.ticker.lagSmoothing(1000, 16); // restore default lag smoothing
      gsap.ticker.remove(tickerFunc);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <BackgroundBeams />
      <div
        id="scroll-container"
        className={`${robotoFlex.className} min-h-screen overflow-x-hidden z-10`}
      >
        <main className="py-4 text-normal">
          {/* Main hero section with headline and intro animation */}
          <section
            className="section-spacing flex items-center justify-center h-screen w-auto"
            ref={heroRef}
          >
            <HeroHeadline />
          </section>

          {/* About section: personal introduction and description */}
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

          {/* Skills section: displays technology and skill icons */}
          <section
            className="section-spacing flex items-center justify-evenly h-auto w-auto padding-x lg:mb-0"
            ref={fadeOutSkillsRef}
          >
            <Skill ref={skillsRef} className={"skill-section"} />
          </section>

          {/* Projects section: grid of featured project cards */}
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
                {/* Project cards list */}
                <CardProject
                  title="Little Heroes"
                  description="Idle Little Heroes Tycoon is a 2D idle game that blends strategic progression with fast-paced battles against hordes of enemies."
                  link="https://github.com/DEsteTommaso/Idle"
                  className="project-card"
                />
                <CardProject
                  title="DriveSafe"
                  description="A free, community-driven app that provides real-time alerts for speed cameras, ZTL zones, and traffic controls across Italy."
                  link="https://play.google.com/store/apps/details?id=com.tom904.checkautovelox"
                  className="project-card"
                />
                <CardProject
                  title="App Dogs"
                  description="App Dogs is a mobile app that helps dog owners discover nearby dog‑friendly places and services. Follow updates on TikTok and Instagram."
                  link="https://www.tiktok.com/@tommo.deste"
                  className="project-card"
                />
                <CardProject
                  title="More..."
                  description="More projects coming soon."
                  link=""
                  className="project-card"
                />
                </div>
            </div>
          </section>

          {/* Contact section: email and social links */}
          <section
            className="flex flex-col items-center justify-center h-auto w-auto padding-x 
            pt-16 pb-40 sm:pt-16 sm:pb-32 md:pt-16 md:pb-40 lg:pt-16 lg:pb-30"
          >
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="colorful-text">GET IN TOUCH</div>
              <div className="flex flex-col items-center justify-between text-center gap-3">
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
