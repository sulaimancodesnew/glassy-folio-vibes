import { motion } from "framer-motion";
import { Building2, ShoppingBag, GraduationCap, HeartPulse, Plane, Briefcase, Factory, Megaphone } from "lucide-react";

const items = [
  { icon: Building2, name: "Real Estate", note: "CRMs, listings, lead flows" },
  { icon: ShoppingBag, name: "E-commerce", note: "WooCommerce, Shopify, payments" },
  { icon: GraduationCap, name: "EdTech", note: "LMS, student portals" },
  { icon: HeartPulse, name: "Healthcare", note: "Appointments, patient ERPs" },
  { icon: Plane, name: "Travel", note: "Booking engines, itineraries" },
  { icon: Briefcase, name: "SaaS", note: "Multi-tenant dashboards" },
  { icon: Factory, name: "Manufacturing", note: "Inventory & production ERP" },
  { icon: Megaphone, name: "Marketing", note: "Automation, ad reporting" },
];

export function Industries() {
  return (
    <section id="industries" className="relative px-4 py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm text-[oklch(0.72_0.22_350)]">// industries</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Domains I've <span className="text-aurora">shipped in.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Five plus years across verticals — bringing context, not just code.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="glass group rounded-2xl p-5 transition hover:bg-white/10"
            >
              <it.icon size={22} className="text-[oklch(0.78_0.18_200)] transition group-hover:scale-110" />
              <h3 className="mt-3 font-semibold">{it.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{it.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
