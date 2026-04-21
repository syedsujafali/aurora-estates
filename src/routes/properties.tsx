import { createFileRoute } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";
import { properties } from "@/data/properties";
import type { Property } from "@/components/editorial/PropertyShowcase";

const COVER = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85";

export const Route = createFileRoute("/properties")({
  component: Properties,
  head: () => ({
    meta: [
      { title: "Properties — Allure Properties Group" },
      { name: "description", content: "Forty-seven residences across nine countries — an editorial selection of architectural homes." },
      { property: "og:title", content: "Properties — Allure Properties Group" },
      { property: "og:description", content: "An editorial selection of architectural homes." },
      { property: "og:image", content: COVER },
      { name: "twitter:image", content: COVER },
    ],
  }),
});

function Tile({ p, ratio, span }: { p: Property; ratio: string; span: string }) {
  return (
    <article className={`${span} reveal group`}>
      <div className={`ed-image relative ${ratio} w-full`}>
        <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/35 transition-colors duration-700" />
        <div className="absolute inset-0 z-10 p-5 md:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="flex items-start justify-between text-cream">
            {p.tag && <span className="font-mono text-[10px] uppercase tracking-[0.3em] border border-cream/60 px-3 py-1.5">{p.tag}</span>}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">View →</span>
          </div>
          <div className="text-cream">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{p.location}</p>
            <h3 className="font-display text-3xl md:text-5xl leading-none mt-2">{p.title}</h3>
            <p className="font-mono text-xs mt-3">{p.price}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between text-cream">
        <div>
          <h3 className="font-display text-2xl">{p.title}</h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 mt-1">{p.location}</p>
        </div>
        <p className="font-mono text-xs text-gold">{p.price}</p>
      </div>
    </article>
  );
}

function Properties() {
  useRevealAll();

  // Editorial masonry layout — varied spans + aspect ratios
  const layout = [
    { ratio: "aspect-[4/5]", span: "md:col-span-7" },
    { ratio: "aspect-[4/3]", span: "md:col-span-5" },
    { ratio: "aspect-square", span: "md:col-span-4" },
    { ratio: "aspect-[3/4]", span: "md:col-span-4" },
    { ratio: "aspect-[5/6]", span: "md:col-span-4" },
    { ratio: "aspect-[16/10]", span: "md:col-span-8" },
    { ratio: "aspect-[3/4]", span: "md:col-span-4" },
    { ratio: "aspect-[4/5]", span: "md:col-span-5" },
    { ratio: "aspect-[5/6]", span: "md:col-span-7" },
  ];

  return (
    <main className="bg-background text-cream">
      <section className="relative h-[85vh] overflow-hidden">
        <img src={COVER} alt="Lake Como villa" className="absolute inset-0 h-full w-full object-cover animate-zoom-in" />
        <div className="absolute inset-0 bg-background/45" />
        <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold animate-fade-up">The Index — Issue 14</p>
          <h1 className="mt-6 font-display text-[20vw] md:text-[13vw] leading-[0.85] tracking-tight animate-fade-up [animation-delay:120ms]">
            Forty-seven<br/><span className="italic text-rose">rooms.</span>
          </h1>
          <p className="mt-8 max-w-md text-cream/85 leading-relaxed animate-fade-up [animation-delay:240ms]">
            Across nine countries, three continents, and one careful season of looking.
          </p>
        </div>
      </section>

      {/* Filter strip */}
      <div className="border-y border-cream/10 bg-background sticky top-[64px] z-30 backdrop-blur-md">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cream/70">
          <span className="text-gold">Filter —</span>
          {["All", "Estate", "Penthouse", "Coastal", "Country", "Loft", "Architectural"].map((f, i) => (
            <button key={f} className={`ed-link ${i === 0 ? "text-cream" : "hover:text-cream"}`}>{f}</button>
          ))}
          <span className="ml-auto hidden md:inline text-cream/50">{properties.length} on view</span>
        </div>
      </div>

      <section className="px-6 md:px-12 py-20 md:py-28 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {properties.map((p, i) => {
            const l = layout[i % layout.length];
            return <Tile key={p.title} p={p} ratio={l.ratio} span={l.span} />;
          })}
        </div>
      </section>

      <section className="bg-rose text-rose-foreground px-6 md:px-12 py-28 md:py-36 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-oxide mb-8 reveal">— Off the Page</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] reveal">
          A further <span className="italic">twenty-three</span> are
          <br/>shown only by introduction.
        </h2>
      </section>
    </main>
  );
}
