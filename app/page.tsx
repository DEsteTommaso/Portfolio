"use client";
import Header from "@/components/layout/header";
import Landing from "@/components/layout/landing";
import Experiences from "@/components/layout/experiences";
import Projects from "@/components/layout/projects";

export default function Home() {
  return (
    <main className="site-shell">
      <Header />
      <Landing />
      <Experiences />
      <Projects />
    </main>
  );
}
