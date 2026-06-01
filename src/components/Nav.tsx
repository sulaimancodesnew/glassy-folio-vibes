import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#specialties", label: "Specialties" },
  { href: "#services", label: "Services" },
  { href: "#automation", label: "Automation" },
  { href: "#industries", label: "Industries" },
  { href: "#experience", label: "Experience" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <nav className={`flex items-center justify-between rounded-2xl px-5 py-3 border border-white/10 backdrop-blur-2xl transition-colors duration-300 ${scrolled ? "bg-[oklch(0.14_0.03_280/0.85)] shadow-lg shadow-black/30" : "bg-white/5"}`}>
          <a href="#top" className="font-mono text-sm font-bold tracking-tight">
            <span className="text-aurora">SM</span>
            <span className="text-foreground">.dev</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.78_0.18_200)] px-4 py-2 text-sm font-medium text-white shadow-[0_0_30px_oklch(0.65_0.25_295/0.5)] transition hover:scale-105 md:inline-block">
            Hire me
          </a>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 md:hidden" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 z-50 h-full w-[80vw] max-w-[320px] border-l border-white/10 bg-[oklch(0.12_0.03_280/0.95)] backdrop-blur-2xl shadow-2xl md:hidden"
            >
              <div className="flex h-full flex-col p-6">
                {/* Drawer Header */}
                <div className="mb-8 flex items-center justify-between">
                  <a href="#top" onClick={() => setOpen(false)} className="font-mono text-lg font-bold tracking-tight">
                    <span className="text-aurora">SM</span>
                    <span className="text-foreground">.dev</span>
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-lg p-2 transition hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Drawer Links */}
                <ul className="flex flex-col gap-1">
                  {links.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.15 }}
                    >
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Drawer CTA */}
                <div className="mt-auto pt-6">
                  <motion.a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="block w-full rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_295)] to-[oklch(0.78_0.18_200)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_0_30px_oklch(0.65_0.25_295/0.5)] transition hover:scale-105"
                  >
                    Hire me
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
