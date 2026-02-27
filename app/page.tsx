"use client";
import Header from "@/components/layout/header";
import Landing from "@/components/layout/landing";
import Experiences from "@/components/layout/experiences";
import Projects from "@/components/layout/projects";
import Contact from "@/components/layout/contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full px-5 md:px-10 lg:px-16 xl:px-24">
      <Header />
      <Landing />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}
