import React from "react";
import HeroHeadline from "@/components/ui/hero-headline";
import CardProject from "@/components/ui/card-project";
{
  /*import AutoScroll from "@/components/ui/auto-scroll";*/
}

export default function Home() {
  return (
    <main className="p-4 font-sans">
      {/*Aggiungere loading page con nome e cognome*/}
      {/* Hero section */}
      <section className="flex items-center justify-center h-screen w-auto">
        {/* fare effetto scroll, che le parole compaiono mentre vado giù */}
        <HeroHeadline />
      </section>

      {/* Chi sono (metto immagine a sx e scrollando verso il basso faccio che il testo compare*/}
      <section className="flex flex-col items-center justify-center text-center px-30">
        <div className="text-7xl font-bold mb-4">WHO IS TOMMASO?</div>
        <div className="text-4xl mb-4 leading-relaxed">
          Tommaso D'Este is a passionate software engineer driven by innovation
          and creativity. He specializes in web development and thrives on
          building scalable, high-performance applications.
        </div>
        <div className="text-4xl mb-4 leading-relaxed">
          As a full-stack developer, he enjoys crafting digital experiences—from
          immersive video games to sleek mobile apps. He is dedicated to turning
          ideas into reality.
        </div>
      </section>

      {/* Progetti */}
      <section>
        <div className="text-6xl font-extrabold mb-8 text-center">
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
        <div>more...</div>
      </section>

      {/* Competenze */}
      <div>
        Fare una bella animazione di tutte le icone delle competenze che
        scorrono orrizontalmente
      </div>

      {/* Contatti */}
      <section>
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
      </section>
    </main>
  );
}
