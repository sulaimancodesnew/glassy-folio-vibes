import { motion } from "framer-motion";
import { Award, GraduationCap, Globe2, Code2, Users, Rocket } from "lucide-react";

const items = [
  { icon: Award, title: "Gold Medalist", text: "Top of cohort, BS Computer Science with 3.72 CGPA." },
  { icon: Rocket, title: "50+ Projects Shipped", text: "From MVPs to enterprise ERPs across 12+ countries." },
  { icon: Users, title: "5★ Client Rating", text: "Long-term clients on Fiverr & direct, repeat hires." },
  { icon: Code2, title: "Full-Stack Range", text: "MEAN, MERN, Laravel, WordPress, AI & automation stacks." },
  { icon: Globe2, title: "Global Delivery", text: "Worked with teams across US, UK, EU, MENA & APAC." },
  { icon: GraduationCap, title: "Continuous Learner", text: "Always shipping with the latest — AI agents, n8n, Make." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm text-[oklch(0.82_0.16_75)]">// highlights</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Milestones &amp; <span className="text-aurora">recognition.</span>
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06 }}
              className="glass-strong rounded-3xl p-6"
            >
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-[oklch(0.65_0.25_295)] to-[oklch(0.72_0.22_350)] p-2.5 text-white shadow-[0_0_30px_oklch(0.65_0.25_295/0.45)]">
                <it.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
