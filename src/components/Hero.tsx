export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-highlight animate-pulse" />
            AI-Powered Property Intelligence
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            The future of <br />
            <span className="text-gradient">real estate</span> <br />
            is operational.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Manage portfolios, automate leasing, and forecast occupancy with a unified platform built for the next generation of property operators.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-gradient rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-primary">
              Launch Dashboard →
            </button>
            <button className="glass rounded-full px-7 py-3.5 text-sm font-semibold hover:border-highlight/50 hover:text-highlight transition-all">
              ▶ Watch Demo
            </button>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-2xl font-bold text-foreground">$2.4B</div>
              <div className="text-xs">Assets Managed</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-bold text-foreground">98%</div>
              <div className="text-xs">Occupancy Rate</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-bold text-foreground">42</div>
              <div className="text-xs">Cities Live</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in animate-float">
          <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-40 rounded-3xl" />
          <div className="relative glass-strong rounded-3xl overflow-hidden glow-primary">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
              alt="Futuristic skyline"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">Live Portfolio</span>
                <span className="flex items-center gap-1.5 text-xs text-highlight">
                  <span className="h-1.5 w-1.5 rounded-full bg-highlight animate-pulse" /> Streaming
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="font-display text-lg font-bold text-highlight">+12.4%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Yield</div>
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-primary">847</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Units</div>
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-accent">24/7</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Auto-pilot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
