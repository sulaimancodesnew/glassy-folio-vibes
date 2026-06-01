import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import portrait from "@/assets/sulaiman.jpg";
import { TiltCard } from "./TiltCard";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono"
          >
            <Sparkles size={14} className="text-[oklch(0.82_0.16_75)]" />
            Available for new projects
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Sulaiman
            <br />
            <span className="text-aurora">Majeed.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            Senior Full Stack Engineer crafting scalable MEAN/MERN apps, AI integrations, and
            no-code automations with <span className="text-foreground">Make.com</span> &{" "}
            <span className="text-foreground">n8n</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#contact" className="rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.72_0.22_350)] px-6 py-3 font-medium text-white shadow-[0_0_40px_oklch(0.65_0.25_295/0.6)] transition hover:scale-105">
              Let's work together
            </a>
            <a href="#automation" className="glass rounded-full px-6 py-3 font-medium transition hover:bg-white/10">
              See my work
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4"
          >
            {[
              { v: "5+", l: "Years" },
              { v: "50+", l: "Projects" },
              { v: "5★", l: "Rated" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="text-aurora text-2xl font-bold">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mx-auto"
        >
          <TiltCard intensity={15} className="relative">
            <div className="absolute -inset-4 animate-spin-slow rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_295)] via-[oklch(0.72_0.22_350)] to-[oklch(0.78_0.18_200)] opacity-50 blur-2xl" />
            <div className="glass-strong relative aspect-square w-72 overflow-hidden rounded-[2.5rem] sm:w-80 lg:w-96">
              <img src={portrait} alt="Sulaiman Majeed" className="h-full w-full object-cover" width={384} height={384} />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.03_280)] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-2xl px-4 py-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                    Bahawalpur, PK · GMT+5
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
          <div className="glass absolute -bottom-4 -left-6 rotate-[-8deg] rounded-2xl px-3 py-2 text-xs font-mono shadow-xl">
            🥇 Gold Medalist · 3.72 CGPA
          </div>
          <div className="glass absolute -top-4 -right-4 rotate-[6deg] rounded-2xl px-3 py-2 text-xs font-mono shadow-xl">
            ⚡ MEAN · MERN · AI
          </div>
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground" aria-label="Scroll">
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
