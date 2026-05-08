import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What types of projects do you take on?", a: "Full-stack web apps, custom ERPs, WordPress themes & plugins, AI integrations, and Make.com / n8n automations. From MVPs to enterprise platforms." },
  { q: "Do you build WordPress plugins from scratch?", a: "Yes. I've shipped many custom plugins and themes — Gutenberg blocks, ACF-driven layouts, REST endpoints, WooCommerce extensions, and headless setups." },
  { q: "Can you integrate with SAP, Salesforce, or other ERPs?", a: "Absolutely. I've built secure SAP API and Salesforce SFDC integrations, plus custom ERP-to-CRM sync pipelines for enterprise clients." },
  { q: "How do you handle pricing?", a: "Fixed-price for clearly scoped projects, hourly or weekly retainers for ongoing work. We'll align on scope before kickoff." },
  { q: "What's your typical response time?", a: "Within a few hours during my working day (GMT+5). For urgent issues I'm usually reachable on WhatsApp." },
  { q: "Do you sign NDAs?", a: "Yes — happy to sign an NDA before we discuss anything sensitive." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="font-mono text-sm text-[oklch(0.78_0.18_200)]">// faq</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Quick <span className="text-aurora">answers.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass overflow-hidden rounded-2xl"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-white/5"
                >
                  <span className="font-medium">{f.q}</span>
                  <Plus size={18} className={`shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
