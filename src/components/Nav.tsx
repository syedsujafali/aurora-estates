import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? "bg-background/90 backdrop-blur-md py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-12">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="font-display text-3xl tracking-tight text-cream">Allure</span>
          <span className="hidden lg:inline font-mono text-xs uppercase tracking-[0.35em] text-gold">
            Properties Group
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 xl:gap-12">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="font-mono text-[11px] lg:text-sm uppercase tracking-[0.15em] lg:tracking-[0.25em] text-cream/80 hover:text-cream ed-link"
              activeProps={{ className: "text-oxide" }}
            >
              <span className="text-gold mr-1.5 lg:mr-2">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block font-mono text-sm uppercase tracking-[0.25em] text-cream/70 text-right">
          973.823.0593
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden text-cream"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-7 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-7 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 ml-auto bg-current transition-transform ${open ? "-translate-y-2 -rotate-45 w-7" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-700 ${open ? "max-h-[80vh]" : "max-h-0"}`}
      >
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
