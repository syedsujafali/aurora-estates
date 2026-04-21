import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/properties", label: "Properties" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/85 backdrop-blur-md py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-12">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-cream">Allure</span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Properties Group</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/80 hover:text-cream ed-link"
              activeProps={{ className: "text-oxide" }}
            >
              <span className="text-gold mr-2">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block font-mono text-[11px] uppercase tracking-[0.25em] text-cream/70">
          +1 (212) 555 — 0144
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden text-cream"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-7 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-7 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 ml-auto bg-current transition-transform ${open ? "-translate-y-2 -rotate-45 w-7" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-700 ${open ? "max-h-[80vh]" : "max-h-0"}`}>
        <nav className="px-6 py-8 flex flex-col gap-6 bg-background/95 backdrop-blur-md">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-cream"
            >
              <span className="font-mono text-xs text-gold mr-3 align-middle">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
