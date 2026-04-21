import { createFileRoute } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";

const COVER = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=85";

const services = [
  {
    n: "01",
    title: "Acquisition",
    sub: "On finding what isn't yet on the page.",
    body: "Sixty percent of what we place is never publicly listed. We work through a quiet network of architects, owners, and stewards — and we visit each property ourselves, twice, before it ever enters the issue.",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fe6ba84?auto=format&fit=crop&w=1600&q=85",
    bg: "bg-background", text: "text-cream", accent: "text-gold",
    align: "left",
  },
  {
    n: "02",
    title: "Curation",
    sub: "A portfolio shaped like an issue.",
    body: "We help collectors compose a residential portfolio with rhythm — a city apartment, a country room, a sea-facing winter. Our advisory work treats your holdings the way an editor treats a magazine: each piece earning its place.",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=85",
    bg: "bg-rose", text: "text-rose-foreground", accent: "text-oxide",
    align: "right",
  },
  {
    n: "03",
    title: "Stewardship",
    sub: "The long, quiet years between.",
    body: "Once a home is yours, our stewardship desk takes over: maintenance, staffing, seasonal openings, the small repairs that keep architecture honest. We treat each residence as a living document, not a static asset.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    bg: "bg-peach", text: "text-peach-foreground", accent: "text-oxide",
    align: "left",
  },
  {
    n: "04",
    title: "Editorial",
    sub: "Photography, words, and the right hour of light.",
    body: "Every property we represent is shot by our in-house photographers, written by our editors, and presented in a printed dossier. We take the time to find the right hour — even if it means returning in another season.",
    img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=85",
    bg: "bg-oxide", text: "text-oxide-foreground", accent: "text-peach",
    align: "right",
  },
];

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Allure Properties Group" },
      { name: "description", content: "Acquisition, curation, stewardship, editorial — four practices, one editorial method." },
      { property: "og:title", content: "Services — Allure Properties Group" },
      { property: "og:description", content: "Four practices: acquisition, curation, stewardship, editorial." },
      { property: "og:image", content: COVER },
      { name: "twitter:image", content: COVER },
    ],
  }),
});

function Services() {
  useRevealAll();
  return (
    <main className="bg-background text-cream">
      <section className="relative h-[80vh] overflow-hidden">
        <img src={COVER} alt="Garden detail" className="absolute inset-0 h-full w-full object-cover animate-zoom-in" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="relative z-10 h-full px-6 md:px-12 flex items-end pb-20 max-w-[1500px] mx-auto">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold animate-fade-up">Section — Practices</p>
            <h1 className="mt-6 font-display text-[18vw] md:text-[11vw] leading-[0.85] tracking-tight animate-fade-up [animation-delay:150ms]">
              Four <span className="italic text-rose">practices</span>,<br/>one method.
            </h1>
          </div>
        </div>
      </section>

      {/* Editorial strips, alternating direction */}
      {services.map((s) => {
        const imageFirst = s.align === "left";
        return (
          <section key={s.n} className={`${s.bg} ${s.text}`}>
            <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-24 md:py-40 grid grid-cols-12 gap-6 md:gap-12 items-center">
              <div className={`col-span-12 md:col-span-7 ${imageFirst ? "md:order-1" : "md:order-2"} reveal-left`}>
                <div className="ed-image aspect-[5/4] w-full">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className={`col-span-12 md:col-span-5 ${imageFirst ? "md:order-2" : "md:order-1"} reveal-right`}>
                <p className={`font-mono text-[11px] uppercase tracking-[0.35em] ${s.accent} mb-5`}>— {s.n} / {String(services.length).padStart(2, "0")}</p>
                <h2 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tight mb-6">{s.title}</h2>
                <p className="font-display italic text-2xl md:text-3xl mb-8 opacity-90">{s.sub}</p>
                <p className="text-[15px] md:text-[16px] leading-[1.85] opacity-85 max-w-md">{s.body}</p>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-background text-cream px-6 md:px-12 py-32 md:py-44 text-center grain">
        <div className="max-w-[1200px] mx-auto reveal">
          <h2 className="font-display text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight">
            Begin a <span className="italic text-oxide">conversation</span>.
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-cream/70 leading-relaxed">
            We respond personally to every letter, usually within two working days.
          </p>
        </div>
      </section>
    </main>
  );
}
