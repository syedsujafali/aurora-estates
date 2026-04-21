export function CTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl relative rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=80"
          alt="City skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-accent/40" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20 mix-blend-overlay animate-gradient" style={{ backgroundSize: "300% 300%" }} />

        <div className="relative px-8 md:px-16 py-20 md:py-28 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Stop managing. <br />
            <span className="text-gradient">Start orchestrating.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join 500+ operators running their portfolios on autopilot. Free 30-day trial. No card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-gradient rounded-full px-8 py-4 text-base font-bold text-primary-foreground glow-primary">
              Start Free Trial →
            </button>
            <button className="glass rounded-full px-8 py-4 text-base font-bold hover:border-highlight/50 hover:text-highlight transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
