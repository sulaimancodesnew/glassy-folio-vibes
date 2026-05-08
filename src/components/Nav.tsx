import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#automation", label: "Automation" },
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
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
        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
