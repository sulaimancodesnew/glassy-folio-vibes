import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

const cards = [
  { icon: Code2, title: "Full Stack Craft", body: "5+ years shipping enterprise MEAN/MERN apps with Angular, React, Next.js, Node.js & microservices." },
  { icon: Cpu, title: "AI & Automation", body: "Azure Foundry AI/ML pipelines plus production workflows in Make.com and n8n." },
  { icon: Rocket, title: "Global Delivery", body: "Trusted by clients in Germany, USA, Australia & beyond — delivered on time, every time." },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="font-mono text-sm text-[oklch(0.78_0.18_200)]">// about</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Engineering with <span className="text-aurora">conviction.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I build scalable systems that just work. From SAP & Salesforce ERP integrations to
            AI-powered REST services and Kubernetes deployments — I turn complex problems into
            elegant, performant solutions.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_295/0.4)] to-transparent blur-2xl transition group-hover:scale-150" />
              <c.icon className="mb-4 text-[oklch(0.78_0.18_200)]" size={28} />
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
