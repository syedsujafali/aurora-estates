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
              Dependable Property Management and Community Association services defined by
              integrity, transparency, and over 19 years of excellence.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold mb-6">Pages</p>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="ed-link">Index</Link></li>
              <li><Link to="/services" className="ed-link">Services</Link></li>
              <li><Link to="/about" className="ed-link">About</Link></li>
              <li><Link to="/contact" className="ed-link">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold mb-6">Offices</p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>PO Box 364</li>
              <li>Hamburg, NJ 07419</li>
              <li>USA</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold mb-6">Contact</p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>manager@allurepropertiesgroup.com</li>
              <li>973.823.0593 | Fax: 973.209.0257</li>
              <li>Emergency (24/7): 888.245.2440</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cream/50">
            © {new Date().getFullYear()} Allure Properties Group — MMXXV
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cream/50">
            GAAP-Compliant Quality Management.
          </p>
        </div>
      </div>
    </footer>
  );
}
