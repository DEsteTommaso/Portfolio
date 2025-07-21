import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupGsapAnimations(
  whoAmIRef: React.RefObject<HTMLDivElement | null>,
  skillsRef: React.RefObject<HTMLDivElement | null>,
  fadeOutSkillsRef: React.RefObject<HTMLDivElement | null>,
  fadeInProjectsRef: React.RefObject<HTMLDivElement | null>,
  projectsRef: React.RefObject<HTMLDivElement | null>,
  heroRef: React.RefObject<HTMLDivElement | null>,
  scroller: HTMLElement
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
        scroller: scroller,
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
    const isTabletOrSmaller = window.innerWidth <= 1024;
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
        start: isTabletOrSmaller ? "top 60%" : "top 80%",
        end: isTabletOrSmaller ? "bottom bottom" : "top top",
        scrub: true,
        scroller: scroller,
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
          scroller: scroller,
        },
      }
    );
  }
  
  if (fadeInProjectsRef.current) {
    const isPhoneOrSmaller = window.innerWidth <= 767;
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
          start: isPhoneOrSmaller ? "top bottom" : "top 60%", // Inizia quando il contenitore entra nella viewport dal basso
          end: isPhoneOrSmaller ? "center 50%" : "top 20%", // Finisce quando il fondo del contenitore raggiunge il 70% dell'altezza dello schermo
          scrub: true,
          scroller: scroller,
        },
      }
    );
  }
  if (projectsRef.current) {
    const cards = projectsRef.current.querySelectorAll(".project-card");
    const isPhoneOrSmaller = window.innerWidth <= 767;
    
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.5, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.in",
        stagger: isPhoneOrSmaller ? 0.3 : 0.5, // Stagger ridotto per mobile
        scrollTrigger: {
          trigger: projectsRef.current,
          start: isPhoneOrSmaller ? "top bottom" : "top 80%", // Anticipiamo ancora di più l'animazione
          end: isPhoneOrSmaller ? "center 50%" : "top 40%", // Modifichiamo anche l'end point su mobile
          scrub: true, 
          scroller: scroller,
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
          start: "center center",
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