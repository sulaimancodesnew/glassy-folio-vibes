import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Specialties } from "@/components/Specialties";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Automation } from "@/components/Automation";
import { Process } from "@/components/Process";
import { Experience } from "@/components/Experience";
import { Reviews } from "@/components/Reviews";
import { Industries } from "@/components/Industries";
import { Achievements } from "@/components/Achievements";
import { TechStack } from "@/components/TechStack";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sulaiman Majeed — Full Stack Engineer & Automation Expert" },
      { name: "description", content: "Senior Full Stack Engineer (MEAN/MERN, ERPs, WordPress, AI, Make.com, n8n) building scalable apps & automations for global clients." },
      { property: "og:title", content: "Sulaiman Majeed — Full Stack Engineer" },
      { property: "og:description", content: "5+ years building enterprise web apps, custom ERPs, WordPress plugins, AI integrations, and no-code automations." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Specialties />
      <Skills />
      <Services />
      <Automation />
      <Process />
      <Experience />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}
