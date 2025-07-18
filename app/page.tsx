import React from "react";
import HeroHeadline from "@/components/ui/hero-headline";
import CardProject from "@/components/ui/card-project";
import Skill from "@/components/ui/skill";
import { Montserrat, Roboto_Flex, Anton } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={robotoFlex.className}>
      <main className="py-4 text-normal">
        {/*Aggiungere loading page con nome e cognome*/}
        {/* Hero section */}
        <section className="flex items-center justify-center h-screen w-auto">
          {/* fare effetto scroll, che le parole compaiono mentre vado giù */}
          <HeroHeadline />
        </section>

        {/* Chi sono (metto immagine a sx e scrollando verso il basso faccio che il testo compare*/}
        <section className="flex items-center justify-center h-screen w-auto padding-x">
          <div className="flex flex-row items-start justify-center text-start">
            <div className="title mb-4 w-1/2">WHO AM I?</div>
            <div className="w-1/2">
              <div className="mb-4 leading-relaxed">
                I am Tommaso D'Este, a passionate software engineer driven by
                innovation and creativity. I specialize in web development and
                thrive on building scalable, high-performance applications.
              </div>
              <div className=" mb-4 leading-relaxed">
                As a full-stack developer, I enjoy crafting digital
                experiences—from immersive video games to sleek mobile apps. I
                am dedicated to turning ideas into reality.
              </div>
            </div>
          </div>
        </section>

        {/* Progetti */}
        <section className="flex items-center justify-center h-screen w-auto padding-x">
          <div className="flex-col items-center justify-center">
            <div className="title font-extrabold mb-8 text-start">
              Projects that shape ideas into reality
            </div>
            <div className="flex flex-row items-center justify-center gap-6 mb-8">
              {/* Elenco dei progetti (ripetere per tutti i progetti)*/}
              <CardProject
                title="Little Heroes"
                description="Idle Little Heroes Tycoon is a 2D idle game that combines strategic gameplay with epic battles against hordes of dark"
                link="https://github.com/DEsteTommaso/Idle"
              />
              <CardProject
                title="DriveSafe"
                description="Idle Little Heroes Tycoon is a 2D idle game that combines strategic gameplay with epic battles against hordes of dark"
                link="https://play.google.com/store/apps/details?id=com.tom904.checkautovelox"
              />
              <CardProject
                title="SkyRoute "
                description="SkyRoute is a fullstack web application, copy of the famous Skyscanner, that allows you to search for flights and book them"
                link=""
              />
              <CardProject
                title="More..."
                description="more projects coming soon"
                link=""
              />
            </div>
          </div>
        </section>

        {/* Competenze */}
        <section className="flex items-center justify-center h-screen w-auto padding-x">
          <div className="flex-col items-center justify-center padding-x">
            <div className="padding-x">Competenze</div>
            <Skill />
          </div>
        </section>

        {/* Contatti */}
        <section>
          <div className="padding-x">
            <div>Contattami</div>
            <div className="flex flex-row items-center justify-between text-center">
              <div>
                <a href="https://www.linkedin.com/in/tommaso-d-este-a1596517b/">
                  LINKEDIN
                </a>
              </div>
              <div className="text-2xl mb-2">Tommaso D'Este</div>
              <div>
                <a href="mailto:tommaso.deste.ve@gmail.com">MAIL</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
