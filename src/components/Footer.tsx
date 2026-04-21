const cols = [
  { title: "Product", links: ["Platform", "Automation", "Analytics", "Integrations"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Docs", "Blog", "Changelog", "Status"] },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-0 right-1/4 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-gradient-hero animate-gradient grid place-items-center font-display font-bold text-primary-foreground">
                N
              </div>
              <span className="font-display text-xl font-bold">
                NOVA<span className="text-highlight">.</span>estate
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
              The operating system for the next generation of property portfolios. Built in Tokyo, deployed worldwide.
            </p>
            <div className="flex gap-3">
              {["X", "in", "GH", "yt"].map((s) => (
                <a key={s} href="#" className="h-10 w-10 rounded-full glass grid place-items-center text-xs font-bold hover:text-highlight hover:border-highlight/50 transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-display text-sm font-bold mb-4 text-highlight uppercase tracking-widest">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground glow-hover">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-highlight/40 to-transparent" />
          <p className="text-xs text-muted-foreground">© 2026 Nova Estate Systems. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="glow-hover">Privacy</a>
            <a href="#" className="glow-hover">Terms</a>
            <a href="#" className="glow-hover">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
