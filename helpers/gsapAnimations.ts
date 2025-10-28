import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupGsapAnimations(
  whoAmIRef: React.RefObject<HTMLDivElement | null>,
  skillsRef: React.RefObject<HTMLDivElement | null>,
  fadeOutSkillsRef: React.RefObject<HTMLDivElement | null>,
  fadeInProjectsRef: React.RefObject<HTMLDivElement | null>,
  projectsRef: React.RefObject<HTMLDivElement | null>,
  heroRef: React.RefObject<HTMLDivElement | null>,
  navRef: React.RefObject<HTMLElement | null>
) {

  if (whoAmIRef.current) {
    const elements = whoAmIRef.current.querySelectorAll(
      ".animate-fade-scrolldown"
    );
    elements.forEach((el) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 00%",
          scrub: true,
          // uses default window scroller
        },
      });
      tl.fromTo(
        el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      ).to(el, { opacity: 0, y: 50, duration: 1, ease: "power2.in" });
    });
  }

  if (skillsRef.current) {
    // Animate the "SKILLS" title first
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
            // uses default window scroller
          },
        }
      );
    }

    // Animate individual categories as they enter the viewport
    const skillCategories =
      skillsRef.current.querySelectorAll(".skill-category");

    skillCategories.forEach((category) => {
      // Timeline for each category (title + skills)
      const categoryTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: category,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          // uses default window scroller
        },
      });

      // Animate the category title
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

      // Animate the skill items of the category
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
          // Stagger between items in the same category
          0.1 + itemIndex * 0.08
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
          // uses default window scroller
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
          start: isPhoneOrSmaller ? "top 90%" : "top 60%", // Start when the top of the element reaches 90% or 60% of the viewport height
          end: isPhoneOrSmaller ? "center 50%" : "top 20%", // End when the bottom of the element reaches 50% or 20% of the viewport height
          scrub: true,
          // uses default window scroller
        },
      }
    );
  }
  if (projectsRef.current) {
    const cards = projectsRef.current.querySelectorAll(".project-card");
    const isPhoneOrSmaller = window.innerWidth <= 767;
    const isTablet = window.innerWidth > 767 && window.innerWidth <= 1280;

    if (isPhoneOrSmaller) {
      // Mobile: each card has its own trigger
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
              // uses default window scroller
            },
          }
        );
      });
    } else if (isTablet) {
      // Tablet: manage cards in 2-column rows with scrub and stagger
      const firstRow = Array.from(cards).slice(0, 2); // First 2 cards
      const secondRow = Array.from(cards).slice(2, 4); // Last 2 cards

      // Timeline for the first row with scrub
      const firstRowTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: firstRow[0],
          start: "top 95%",
          end: "top 60%",
          scrub: true,
          // uses default window scroller
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
          stagger: 1.5, // Stagger between the cards in the first row
        }
      );

      // Timeline for the second row with scrub
      const secondRowTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: secondRow[0],
          start: "top 95%",
          end: "top 60%",
          scrub: true,
          // uses default window scroller
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
          stagger: 1.5, // Stagger between the cards in the second row
        }
      );
    } else {
      // Desktop: all 4 in a row, as you already do
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
            // uses default window scroller
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
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Sincronizza la navbar con il progresso dell'hero
            if (navRef.current) {
              const progress = self.progress;
              // La navbar appare quando l'hero scompare
              gsap.set(navRef.current, {
                opacity: progress,
                y: -50 * (1 - progress),
                display: progress > 0.1 ? "flex" : "none"
              });
            }
            
            // When the animation reaches the end, hide the hero element
            if (self.progress === 1) {
              gsap.set(heroRef.current, { display: "none" });
            }
          },
          onLeave: () => {
            // When scrolling past the end, hide the hero and show navbar
            gsap.set(heroRef.current, { display: "none" });
            if (navRef.current) {
              gsap.set(navRef.current, { opacity: 1, y: 0, display: "flex" });
            }
            ScrollTrigger.refresh();
          },
          onEnterBack: () => {
            // When scrolling back, show the hero element again
            gsap.set(heroRef.current, { display: "flex" });
          },
        },
      }
    );
  }
}
