import { motion } from "framer-motion";
import { Code, Globe, Workflow, Wrench, Brain, ShoppingBag } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Apps", desc: "MEAN/MERN, Next.js, Angular — production-grade SaaS and dashboards." },
  { icon: Code, title: "Custom ERP", desc: "Tailored ERP modules: inventory, HR, finance, reporting." },
  { icon: ShoppingBag, title: "WordPress & WooCommerce", desc: "Custom themes, plugins, headless WP, store optimization." },
  { icon: Workflow, title: "Make.com / n8n", desc: "Automations that connect tools and eliminate manual work." },
  { icon: Brain, title: "AI Integration", desc: "Azure Foundry, OpenAI, RAG pipelines wired into your product." },
  { icon: Wrench, title: "API & Integrations", desc: "SAP, Salesforce, Stripe, webhooks — anything talks to anything." },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm text-[oklch(0.82_0.16_75)]">// services</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            How I can <span className="text-aurora">help.</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:bg-white/10"
            >
              <s.icon className="mb-3 text-[oklch(0.78_0.18_200)] transition group-hover:scale-110" size={24} />
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
