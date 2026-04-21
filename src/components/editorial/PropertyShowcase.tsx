interface Property {
  title: string;
  location: string;
  price: string;
  image: string;
  tag?: string;
}

export function PropertyCard({ p, size = "md" }: { p: Property; size?: "sm" | "md" | "lg" }) {
  const h =
    size === "lg"
      ? "h-[70vh] md:h-[85vh]"
      : size === "md"
        ? "h-[55vh] md:h-[65vh]"
        : "h-[40vh] md:h-[45vh]";
  return (
    <article className="ed-card group">
      <div className={`ed-image relative ${h}`}>
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {p.tag && (
          <span className="absolute top-5 left-5 z-10 font-mono text-[10px] uppercase tracking-[0.3em] bg-cream text-charcoal px-3 py-1.5">
            {p.tag}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10 bg-gradient-to-t from-background/85 via-background/40 to-transparent">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{p.location}</p>
          <h3 className="font-display text-3xl md:text-5xl text-cream mt-2 leading-none">
            {p.title}
          </h3>
          <p className="font-mono text-xs text-cream/80 mt-3 tracking-wider">{p.price}</p>
        </div>
      </div>
    </article>
  );
}

export function PropertyShowcase({ items }: { items: Property[] }) {
  const [a, b, c] = items;
  return (
    <section className="bg-background text-cream">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-7 reveal-left">
            {a && <PropertyCard p={a} size="lg" />}
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col gap-6 md:gap-8 reveal-right">
            {b && <PropertyCard p={b} size="md" />}
            {c && <PropertyCard p={c} size="sm" />}
          </div>
        </div>
      </div>
    </section>
  );
}

export type { Property };
