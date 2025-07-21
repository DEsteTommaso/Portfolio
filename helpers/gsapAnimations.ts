import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupGsapAnimations(
  whoAmIRef: React.RefObject<HTMLDivElement>,
  skillsRef: React.RefObject<HTMLDivElement>,
  fadeOutSkillsRef: React.RefObject<HTMLDivElement>,
  fadeInProjectsRef: React.RefObject<HTMLDivElement>,
  fadeOutProjectsRef: React.RefObject<HTMLDivElement>,
  projectsRef: React.RefObject<HTMLDivElement>,
  heroRef: React.RefObject<HTMLDivElement>
) {
  if (!whoAmIRef.current) return;

  const elements = whoAmIRef.current.querySelectorAll(".animate-fade-scrolldown");
  elements.forEach((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "top 00%",
        scrub: true,
      },
    });
    tl.fromTo(
      el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    ).to(el, { opacity: 0, y: 50, duration: 1, ease: "power2.in" });
  });

  if (skillsRef.current) {
    const skillElements = skillsRef.current.querySelectorAll(".animate-skill");
    gsap.fromTo(
      skillElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "top 0%",
          scrub: true,
        },
      }
    );
  }

  if (fadeOutSkillsRef.current) {
    gsap.fromTo(
      fadeOutSkillsRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        duration: 1,
        y: -200,
        ease: "power2.in",
        scrollTrigger: {
          trigger: fadeOutSkillsRef.current,
          start: "top 60%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }
  
  if (fadeInProjectsRef.current) {
    gsap.fromTo(
      fadeInProjectsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: fadeInProjectsRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }
  if (fadeOutProjectsRef.current) {
    gsap.fromTo(
      fadeOutProjectsRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        duration: 1,
        y: -200,
        ease: "power2.in",
        scrollTrigger: {
          trigger: fadeOutProjectsRef.current,
          start: "top 60%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }
  if (projectsRef.current) {
    const cards = projectsRef.current.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.5, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.in",
        stagger: 0.5,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }

  if (heroRef.current) {
    gsap.fromTo(
      heroRef.current,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%", // Modifica qui: usa una percentuale fissa invece di "bottom top"
          scrub: true,
          pin: true,
          pinSpacing: false, // Modifica qui: imposta a false per evitare spazi vuoti
          anticipatePin: 1,
          onLeave: () => {
            ScrollTrigger.refresh();
          }
        },
      }
    );
  }
}