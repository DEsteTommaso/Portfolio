gsap
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
    // Anima prima il titolo "SKILLS"
    const skillTitle = skillsRef.current.querySelector(".skill-title");
    if (skillTitle) {
      gsap.fromTo(
        skillTitle,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillTitle,
            start: "top 85%",
            end: "top 20%",
            scrub: true,
            scroller: scroller,
          },
        }
      );
    }

    // Anima le categorie individualmente quando entrano nella viewport
    const skillCategories = skillsRef.current.querySelectorAll(".skill-category");
    
    skillCategories.forEach((category) => {
      // Timeline per ogni categoria (titolo + skills)
      const categoryTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: category,
          start: "top 80%",
          end: "top 60%",
          scrub: true, // No scrub per animazioni complete immediate
          scroller: scroller,
        },
      });
      
      // Anima il titolo della categoria
      const categoryTitle = category.querySelector(".skill-category-title");
      if (categoryTitle) {
        categoryTimeline.fromTo(
          categoryTitle,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          }
        );
      }

      // Anima gli elementi della skill della categoria
      const skillItems = category.querySelectorAll(".skill-item");
      
      skillItems.forEach((item, itemIndex) => {
        categoryTimeline.fromTo(
          item,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.1)",
          },
          0.1 + (itemIndex * 0.08) // Stagger tra gli elementi della stessa categoria
        );
      });
    });
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
          start: isPhoneOrSmaller ? "top 90%" : "top 60%", // Inizia quando il contenitore entra nella viewport dal basso
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
    const isTablet = window.innerWidth > 767 && window.innerWidth <= 1280;
    
if (isPhoneOrSmaller) {
  // Mobile: ogni carta al suo trigger
  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.5, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          end: "top 80%",
          scrub: true,
          scroller: scroller,
        },
      }
    );
  });
} else if (isTablet) {
  // Tablet: gestisce le carte in righe da 2 con scrub e stagger
  const firstRow = Array.from(cards).slice(0, 2);  // Prime 2 carte
  const secondRow = Array.from(cards).slice(2, 4); // Ultime 2 carte
  
  // Timeline per la prima riga con scrub
  const firstRowTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: firstRow[0],
      start: "top 95%",
      end: "top 60%",
      scrub: true,
      scroller: scroller,
    },
  });
  
  firstRowTimeline.fromTo(
    firstRow,
    { opacity: 0, scale: 0.5, y: 40 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 1.5, // Stagger tra le carte della prima riga
    }
  );
  
  // Timeline per la seconda riga con scrub
  const secondRowTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: secondRow[0],
      start: "top 95%",
      end: "top 60%",
      scrub: true,
      scroller: scroller,
    },
  });
  
  secondRowTimeline.fromTo(
    secondRow,
    { opacity: 0, scale: 0.5, y: 40 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 1.5, // Stagger tra le carte della seconda riga
    }
  );
} else {
  // Desktop: tutte e 4 in fila, come già fai
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
        scroller: scroller,
      },
    }
  );
}

  }

  if (heroRef.current) {
    gsap.fromTo(
      heroRef.current,
      { opacity: 1, scale: 1, display: "flex" },
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
          onUpdate: (self) => {
            // Quando l'animazione raggiunge la fine, nascondi l'elemento
            if (self.progress === 1) {
              gsap.set(heroRef.current, { display: "none" });
            }
          },
          onLeave: () => {
            // Quando si scrolla oltre la fine, nascondi l'elemento
            gsap.set(heroRef.current, { display: "none" });
            ScrollTrigger.refresh();
          },
          onEnterBack: () => {
            // Quando si scrolla indietro, mostra di nuovo l'elemento
            gsap.set(heroRef.current, { display: "flex" });
          }
        },
      }
    );
  }
}
