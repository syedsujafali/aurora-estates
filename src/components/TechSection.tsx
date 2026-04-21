const stack = [
  { label: "Automation", value: "Workflows", desc: "Trigger-based pipelines for leasing, billing, maintenance." },
  { label: "Analytics", value: "Realtime", desc: "Sub-second dashboards across every KPI you track." },
  { label: "Dashboards", value: "Composable", desc: "Drag-and-drop widgets tuned to each stakeholder." },
];

export function TechSection() {
  return (
    <section id="tech" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-30 rounded-3xl" />
          <div className="relative glass-strong rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=80"
              alt="Analytics dashboard"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-accent/20 mix-blend-overlay" />
            <div className="absolute top-6 left-6 glass rounded-xl px-4 py-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Occupancy AI</div>
              <div className="font-display text-2xl font-bold text-highlight">+18.2%</div>
            </div>
            <div className="absolute bottom-6 right-6 glass rounded-xl px-4 py-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Auto-resolved</div>
              <div className="font-display text-2xl font-bold text-primary">1,284 tickets</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 animate-fade-up">
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-highlight mb-4">
            INFRASTRUCTURE
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Tech that <span className="text-gradient">compounds</span> your edge.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We replaced static reports with a living operating system. Every action feeds the model. Every model feeds your bottom line.
          </p>

          <div className="space-y-4">
            {stack.map((s) => (
              <div key={s.label} className="group glass rounded-2xl p-5 flex items-center gap-5 hover:border-highlight/40 transition-all">
                <div className="text-xs uppercase tracking-widest text-muted-foreground w-28 shrink-0">{s.label}</div>
                <div className="flex-1">
                  <div className="font-display text-xl font-bold group-hover:text-highlight transition-colors">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.desc}</div>
                </div>
                <div className="text-highlight opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
