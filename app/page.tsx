import React from "react";
import HeroHeadline from "@/components/ui/hero-headline";
import CardProject from "@/components/ui/card-project";
import Skill from "@/components/ui/skill";
import { Roboto_Flex, Anton } from "next/font/google";
import { Mail, Linkedin } from "lucide-react";

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
            <div className="title mb-8 text-start">
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
        <section className="flex items-center justify-evenly h-screen w-auto padding-x">
          <div className="flex flex-col items-start justify-center gap-10">
            <div className="title">Skills</div>
                <div className="flex flex-row items-start justify-around gap-6 mb-4 w-full">
                  <div className={`w-1/2 ${anton.className} text-4xl`}>Frontend</div>
                  <div className="flex flex-wrap gap-4 w-1/2">
                    <div
                      className={`flex flex-row items-center justify-center gap-6 text-2xl`}
                    >
                      <img
                        src="/images/skill/js.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      Javascript
                    </div>
                    <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                      <img
                        src="/images/skill/typescript.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      Typescript
                    </div>
                    <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                      <img
                        src="/images/skill/react.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      React
                    </div>
                    <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                      <img
                        src="/images/skill/nextjs.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      Next.js
                    </div>
                    <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                      <img
                        src="/images/skill/tailwind.png"
                        alt=""
                        width={40}
                        height={40}
                      />
                      Tailwind
                    </div>
                    <div className="flex flex-row items-center justify-center gap-6 text-2xl">
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
                <div className={`w-1/2 ${anton.className} text-4xl`}>Backend</div>
                <div className="flex flex-wrap gap-4 w-1/2">
                  <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                    <img
                      src="/images/skill/node-js.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    Node.js
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 text-2xl">
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
                <div className={`w-1/2 ${anton.className} text-4xl`}>Database</div>
                <div className="flex flex-wrap gap-4 w-1/2">
                  <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                    <img
                      src="/images/skill/mongodb.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    MongoDB
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                    <img
                      src="/images/skill/mysql.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    MySQL
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 text-2xl">
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
                <div className={`w-1/2 ${anton.className} text-4xl`}>Tools</div>
                <div className="flex flex-wrap gap-4 w-1/2">
                  <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                    <img
                      src="/images/skill/git.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    Git
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 text-2xl">
                    <img
                      src="/images/skill/docker.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    Docker
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 text-2xl">
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
              <div className={`w-1/2 ${anton.className} text-4xl`}>And more...</div>
          </div>
        </section>

        {/* Contatti */}
        <section className="flex flex-col items-center justify-center h-screen w-auto padding-x">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="title">Get in touch</div>
            <div className="flex flex-col items-center justify-between text-center gap-3">
              <div className={`${anton.className} text-4xl`}>
                <a href="mailto:tommaso.deste.ve@gmail.com">tommaso.deste.ve@gmail.com</a>
              </div>
              <div className="flex flex-row items-center justify-center gap-6">
              <div>
                <a href="https://www.linkedin.com/in/tommaso-d-este-a1596517b/">LinkedIn</a>
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
  );
}
