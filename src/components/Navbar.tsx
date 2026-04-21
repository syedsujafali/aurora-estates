import { useEffect, useState } from "react";

const links = ["Properties", "Features", "Tech", "About", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-lg bg-gradient-hero animate-gradient grid place-items-center font-display font-bold text-primary-foreground">
            N
            <div className="absolute inset-0 rounded-lg blur-md opacity-60 bg-gradient-hero -z-10" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            NOVA<span className="text-highlight">.</span>estate
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="glow-hover text-sm font-medium text-muted-foreground">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-sm font-medium glow-hover text-muted-foreground">
            Sign in
          </button>
          <button className="btn-gradient rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
