import { motion } from "framer-motion";

const groups = [
  { title: "Frontend", items: ["Angular", "React.js", "Next.js", "TypeScript", "Tailwind", "Webflow"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Laravel", "PHP", "REST APIs", "Microservices"] },
  { title: "WordPress", items: ["Custom Themes", "Plugin Development", "ACF", "Gravity Forms", "WooCommerce", "Elementor"] },
  { title: "AI & Cloud", items: ["Azure Foundry", "AI/ML Models", "SAP API", "Salesforce SFDC", "Docker", "Kubernetes"] },
  { title: "Automation", items: ["Make.com", "n8n", "Zapier", "Webhooks", "API Orchestration"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "Indexing", "Aggregation", "Caching"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="font-mono text-sm text-[oklch(0.78_0.18_200)]">// stack</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Tools I <span className="text-aurora">wield.</span></h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition hover:border-[oklch(0.65_0.25_295)] hover:bg-[oklch(0.65_0.25_295/0.15)]">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
