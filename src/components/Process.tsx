import { motion } from "framer-motion";
import { Lightbulb, Pencil, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Discover", desc: "We chat about your goals, scope, and success metrics." },
  { icon: Pencil, title: "Design", desc: "Architecture, data models, and UX wireframes mapped out." },
  { icon: Rocket, title: "Build & Ship", desc: "Iterative delivery with weekly demos. Clean code, tested." },
  { icon: LifeBuoy, title: "Support", desc: "Post-launch monitoring, optimizations, and feature growth." },
];

export function Process() {
  return (
    <section id="process" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm text-[oklch(0.72_0.22_350)]">// process</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            How we'll <span className="text-aurora">work.</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass relative overflow-hidden rounded-2xl p-6"
            >
              <span className="font-mono absolute right-4 top-3 text-5xl font-bold text-white/5">0{i + 1}</span>
              <s.icon size={24} className="mb-4 text-[oklch(0.78_0.18_200)]" />
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
