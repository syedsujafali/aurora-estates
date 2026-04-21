import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 500, suffix: "+", label: "Properties Managed" },
  { value: 98, suffix: "%", label: "Tenant Satisfaction" },
  { value: 42, suffix: "", label: "Cities Worldwide" },
  { value: 2.4, suffix: "B", prefix: "$", label: "Assets Under Management" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(value * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  const display = value < 10 ? n.toFixed(1) : Math.floor(n).toString();
  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl font-bold text-gradient">
      {prefix}{display}{suffix}
    </div>
  );
}

export function Metrics() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl glass-strong rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-highlight/20 blur-3xl" />
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              <div className="mt-3 text-sm text-muted-foreground uppercase tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
