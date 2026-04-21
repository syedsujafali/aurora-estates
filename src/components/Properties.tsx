const properties = [
  { name: "Aurora Heights", city: "Tokyo, JP", price: "$4.2M", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", tag: "Smart Home" },
  { name: "Vertex Tower", city: "Dubai, UAE", price: "$8.7M", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80", tag: "Penthouse" },
  { name: "Neon District", city: "Seoul, KR", price: "$2.1M", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80", tag: "Loft" },
  { name: "Pacific Reserve", city: "Singapore", price: "$6.5M", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80", tag: "Villa" },
  { name: "Atlas Loft", city: "New York, US", price: "$3.8M", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80", tag: "Modern" },
  { name: "Cobalt Bay", city: "Sydney, AU", price: "$5.3M", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80", tag: "Waterfront" },
];

export function Properties() {
  return (
    <section id="properties" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 animate-fade-up">
          <div>
            <span className="inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-highlight mb-4">
              SHOWCASE
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Trophy assets, <br />
              <span className="text-gradient">flawlessly managed.</span>
            </h2>
          </div>
          <button className="self-start md:self-end glass rounded-full px-6 py-3 text-sm font-semibold hover:border-highlight/50 hover:text-highlight transition-all">
            Explore portfolio →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div key={p.name} className="tilt-card group relative rounded-2xl overflow-hidden glass cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs font-medium text-highlight">
                  {p.tag}
                </span>
                <span className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-bold">
                  {p.price}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.city}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-hero grid place-items-center text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
