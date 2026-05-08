import { motion } from "framer-motion";
import { Workflow, Zap } from "lucide-react";
import { TiltCard } from "./TiltCard";
import makeImg from "@/assets/make-screenshot.jpg";
import n8nImg from "@/assets/n8n-screenshot.jpg";

const cards = [
  {
    name: "Make.com",
    tag: "No-code automation",
    color: "from-[oklch(0.72_0.22_350)] to-[oklch(0.65_0.25_295)]",
    icon: Zap,
    img: makeImg,
    points: ["Multi-step scenarios", "API + Webhook flows", "CRM ↔ ERP sync"],
  },
  {
    name: "n8n",
    tag: "Self-hosted workflows",
    color: "from-[oklch(0.82_0.16_75)] to-[oklch(0.7_0.22_30)]",
    icon: Workflow,
    img: n8nImg,
    points: ["Custom nodes", "Data pipelines", "AI agent orchestration"],
  },
];

export function Automation() {
  return (
    <section id="automation" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm text-[oklch(0.78_0.18_200)]">// automation</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Workflows that <span className="text-aurora">run themselves.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            I design end-to-end automations that connect your apps, eliminate manual work, and
            scale silently in the background.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard intensity={8} className="h-full">
                <div className="glass-strong group relative h-full overflow-hidden rounded-3xl p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img src={c.img} alt={`${c.name} workflow`} loading="lazy" width={1280} height={800} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.03_280)] via-transparent to-transparent" />
                    <div className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${c.color} px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white`}>
                      <c.icon size={12} className="mr-1 inline" />
                      {c.name}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-xs uppercase text-muted-foreground">{c.tag}</p>
                    <h3 className="mt-1 text-2xl font-semibold">{c.name} expert</h3>
                    <ul className="mt-4 space-y-2">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.18_200)]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
