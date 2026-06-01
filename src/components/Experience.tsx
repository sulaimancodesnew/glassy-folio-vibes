import { motion } from "framer-motion";

const jobs = [
  { role: "Senior Software Engineer", co: "SofTechGenics", loc: "Bahawalpur", period: "Aug 2023 – Present", desc: "Architected MEAN microservices, integrated Azure Foundry AI, SAP & Salesforce APIs. Improved performance 35%." },
  { role: "Associate Software Engineer", co: "DSAP", loc: "Germany · Remote", period: "Apr 2023 – Present", desc: "Full-stack enterprise apps with Angular + Node.js microservices, Salesforce CRM integrations." },
  { role: "Tech Lead", co: "Momentum Marketing", loc: "USA · Remote", period: "May 2023 – Dec 2024", desc: "Multi-tenant e-commerce architecture serving 10,000+ monthly users with secure payments." },
  { role: "Software Developer & Server Admin", co: "Flip Marketing", loc: "Australia · Remote", period: "Jan 2023 – Jun 2024", desc: "Linux production servers, deployment pipelines, runtime troubleshooting." },
  { role: "Full Stack Developer", co: "CodeCradle Technologies", loc: "Bahawalpur", period: "Nov 2020 – Mar 2024", desc: "Laravel, Livewire, MEAN/MERN. REST APIs, payment gateways, WordPress with ACF." },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="font-mono text-sm text-[oklch(0.78_0.18_200)]">// timeline</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Where I've <span className="text-aurora">built.</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[oklch(0.65_0.25_295)] via-[oklch(0.78_0.18_200)] to-transparent md:left-1/2" />
          {jobs.map((j, i) => (
            <motion.div
              key={j.co + j.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              <div className="absolute left-2 top-4 h-4 w-4 rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_295)] to-[oklch(0.78_0.18_200)] shadow-[0_0_20px_oklch(0.65_0.25_295)] md:left-auto md:right-[-8px]" style={i % 2 !== 0 ? { left: "-8px", right: "auto" } : {}} />
              <div className="glass rounded-2xl p-5">
                <p className="font-mono text-xs text-[oklch(0.78_0.18_200)]">{j.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{j.role}</h3>
                <p className="text-sm text-muted-foreground">{j.co} · {j.loc}</p>
                <p className="mt-3 text-sm">{j.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
