import { motion } from "framer-motion";
import { Building2, Boxes, Layers, Plug } from "lucide-react";
import { TiltCard } from "./TiltCard";

const specialties = [
  {
    icon: Building2,
    label: "ERP Systems",
    title: "Custom ERPs, built from the ground up",
    body: "Designed and shipped multiple end-to-end ERP platforms — inventory, HR, finance, sales, and reporting modules — with role-based access, audit trails, and real-time dashboards.",
    tags: ["MEAN/MERN", "Multi-tenant", "RBAC", "Reporting"],
    accent: "from-[oklch(0.65_0.25_295)] to-[oklch(0.72_0.22_350)]",
  },
  {
    icon: Boxes,
    label: "WordPress",
    title: "Themes, plugins & WooCommerce",
    body: "Built custom WordPress themes and production plugins from scratch — Gutenberg blocks, ACF-driven layouts, REST endpoints, WooCommerce extensions, and headless setups.",
    tags: ["Custom Plugins", "Themes", "WooCommerce", "ACF", "Headless"],
    accent: "from-[oklch(0.78_0.18_200)] to-[oklch(0.6_0.2_220)]",
  },
  {
    icon: Plug,
    label: "Integrations",
    title: "SAP, Salesforce & API workflows",
    body: "Secure ERP/CRM data syncs via SAP API and Salesforce REST. Webhook pipelines, OAuth flows, and event-driven automations between systems that never spoke before.",
    tags: ["SAP", "Salesforce", "OAuth", "Webhooks"],
    accent: "from-[oklch(0.82_0.16_75)] to-[oklch(0.7_0.22_30)]",
  },
  {
    icon: Layers,
    label: "AI Integration",
    title: "AI features in production",
    body: "Embedded Azure Foundry models into live web apps — intelligent search, predictive flows, and AI-assisted UX served through hardened REST services.",
    tags: ["Azure Foundry", "ML Models", "REST AI"],
    accent: "from-[oklch(0.7_0.2_150)] to-[oklch(0.6_0.2_140)]",
  },
];

export function Specialties() {
  return (
    <section id="specialties" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm text-[oklch(0.78_0.18_200)]">// specialties</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Where I go <span className="text-aurora">deep.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Beyond shipping features — entire systems I've architected, owned, and battle-tested in production.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {specialties.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard intensity={6} className="h-full">
                <div className="glass group relative h-full overflow-hidden rounded-3xl p-6">
                  <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-30 blur-3xl transition group-hover:opacity-60`} />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent}`}>
                        <s.icon size={20} className="text-white" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold sm:text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
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
