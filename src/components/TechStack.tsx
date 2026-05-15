import { motion } from "framer-motion";

const groups = [
  { tag: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "TypeScript", "Tailwind", "Framer Motion"] },
  { tag: "Backend", items: ["Node.js", "Express", "NestJS", "Laravel", "PHP", "Python", "FastAPI"] },
  { tag: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase", "Supabase"] },
  { tag: "WordPress", items: ["Custom Themes", "Custom Plugins", "WooCommerce", "ACF", "Headless WP", "Gutenberg"] },
  { tag: "AI & APIs", items: ["OpenAI", "LangChain", "RAG", "SAP API", "Salesforce", "Stripe", "OAuth"] },
  { tag: "Automation", items: ["Make.com", "n8n", "Zapier", "Webhooks", "Cron Pipelines"] },
  { tag: "DevOps", items: ["Docker", "AWS", "DigitalOcean", "Cloudflare", "GitHub Actions", "Nginx"] },
];

export function TechStack() {
  return (
    <section id="stack" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm text-[oklch(0.78_0.18_200)]">// tech stack</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Tools of the <span className="text-aurora">trade.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A pragmatic toolkit — picked per project, never one-size-fits-all.
          </p>
        </div>
        <div className="space-y-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.tag}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass flex flex-wrap items-center gap-3 rounded-2xl p-4"
            >
              <span className="rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.78_0.18_200)] px-3 py-1 font-mono text-xs font-bold uppercase text-white">
                {g.tag}
              </span>
              {g.items.map((it) => (
                <span key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted-foreground">
                  {it}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
