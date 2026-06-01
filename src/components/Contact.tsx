import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute -top-32 -right-32 h-96 w-96 animate-float-orb rounded-full bg-[oklch(0.65_0.25_295/0.3)] blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 animate-float-orb rounded-full bg-[oklch(0.78_0.18_200/0.3)] blur-3xl" style={{ animationDelay: "-8s" }} />
          <div className="relative">
            <p className="font-mono text-sm text-[oklch(0.78_0.18_200)]">// contact</p>
            <h2 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Got a project? <br />
              <span className="text-aurora">Let's talk.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Reach out via email or WhatsApp — I usually reply within a few hours.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:msulaiman729@gmail.com"
                className="glass group flex items-center justify-between rounded-2xl p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_295)] to-[oklch(0.72_0.22_350)]">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email me</p>
                    <p className="font-mono text-xs font-semibold break-all sm:text-base">msulaiman729@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" size={20} />
              </a>
              <a
                href="https://wa.me/923166888095"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-between rounded-2xl p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.2_150)] to-[oklch(0.6_0.2_140)]">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="font-mono text-sm font-semibold sm:text-base">+92 316 6888095</p>
                  </div>
                </div>
                <ArrowUpRight className="opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Sulaiman Majeed · Crafted with care.</p>
          <p className="font-mono">Bahawalpur → World</p>
        </footer>
      </div>
    </section>
  );
}
