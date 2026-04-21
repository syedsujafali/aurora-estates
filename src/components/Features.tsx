const features = [
  { icon: "⚡", title: "Smart Automation", desc: "Auto-route maintenance, rent collection, and lease renewals with zero manual input.", glow: "glow-primary" },
  { icon: "📊", title: "Predictive Analytics", desc: "Forecast occupancy, churn and revenue 90 days out with proprietary ML models.", glow: "glow-violet" },
  { icon: "🛰️", title: "Unified Dashboard", desc: "Every property, every tenant, every contract in one real-time command center.", glow: "glow-cyan" },
  { icon: "🔐", title: "Bank-Grade Security", desc: "SOC2 Type II, encrypted at rest, and biometric tenant verification baked in.", glow: "glow-primary" },
  { icon: "🌐", title: "IoT Integration", desc: "Connect smart locks, thermostats, and sensors. Telemetry into actionable insight.", glow: "glow-violet" },
  { icon: "💬", title: "AI Concierge", desc: "24/7 multilingual assistant handles tenant requests with empathy and precision.", glow: "glow-cyan" },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-highlight mb-4">
            CAPABILITIES
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Built for <span className="text-gradient">operators</span>, not spreadsheets.
          </h2>
          <p className="text-muted-foreground text-lg">
            Six modules. One nervous system. Total control of your portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative glass rounded-2xl p-7 transition-all duration-500 hover:scale-[1.03] hover:border-primary/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-hero grid place-items-center text-2xl mb-5 group-hover:${f.glow} transition-shadow duration-500`}>
                {f.icon}
              </div>
              <h3 className="relative font-display text-xl font-bold mb-2">{f.title}</h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
