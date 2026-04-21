import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-background text-cream border-t border-cream/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <h3 className="font-display text-[14vw] md:text-[7vw] leading-[0.85] tracking-tight">
              Allure<span className="text-oxide">.</span>
            </h3>
            <p className="mt-6 max-w-md text-cream/70 text-sm leading-relaxed">
              An editorial real estate practice — curating residences, estates,
              and sanctuaries that read like architecture in print.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Pages</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="ed-link">Index</Link></li>
              <li><Link to="/about" className="ed-link">About</Link></li>
              <li><Link to="/services" className="ed-link">Services</Link></li>
              <li><Link to="/properties" className="ed-link">Properties</Link></li>
              <li><Link to="/contact" className="ed-link">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>87 Greene Street</li>
              <li>SoHo, New York</li>
              <li>NY 10012</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>hello@allure.estate</li>
              <li>+1 (212) 555 — 0144</li>
              <li className="ed-link inline-block">Instagram</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            © {new Date().getFullYear()} Allure Properties Group — Issue No. 14
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            Crafted with quiet rigor.
          </p>
        </div>
      </div>
    </footer>
  );
}
