import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Automation } from "@/components/Automation";
import { Experience } from "@/components/Experience";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sulaiman Majeed — Full Stack Engineer & Automation Expert" },
      { name: "description", content: "Senior Full Stack Engineer (MEAN/MERN, AI integration, Make.com, n8n) building scalable apps & automations for global clients." },
      { property: "og:title", content: "Sulaiman Majeed — Full Stack Engineer" },
      { property: "og:description", content: "5+ years building enterprise web apps, AI integrations, and no-code automations." },
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
      <Skills />
      <Automation />
      <Experience />
      <Reviews />
      <Contact />
    </main>
  );
}
