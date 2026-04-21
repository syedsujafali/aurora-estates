import { createFileRoute } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";

const COVER =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=85";

const services = [
  {
    n: "01",
    title: "Management",
    sub: "Operational excellence, daily.",
    body: "Our property management team handles the complex logistics of building stewardship. From vetting high-quality vendors and bidding contracts to performing regular on-site inspections, we ensure your asset is maintained at the highest professional standard.",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fe6ba84?auto=format&fit=crop&w=1600&q=85",
    bg: "bg-background",
    text: "text-cream",
    accent: "text-gold",
    align: "left",
  },
  {
    n: "02",
    title: "Rentals",
    sub: "Tenant-centric leasing strategies.",
    body: "We maximize your property's yield through strategic marketing and rigorous tenant screening. Our process includes multi-platform listing, criminal and credit background searches, and professional personal showings to ensure long-term, dependable occupancy.",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=85",
    bg: "bg-rose",
    text: "text-rose-foreground",
    accent: "text-gold",
    align: "right",
  },
  {
    n: "03",
    title: "Financials",
    sub: "GAAP-compliant fiscal precision.",
    body: "Transparency is our hallmark. We provide monthly financial statements including P&L, balance sheets, and general ledgers—all prepared under Generally Accepted Accounting Principles. Your board receives a comprehensive manager's report by the 25th of every month.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    bg: "bg-peach",
    text: "text-peach-foreground",
    accent: "text-primary",
    align: "left",
  },
  {
    n: "04",
    title: "Associations",
    sub: "HOA & Community Stewardship.",
    body: "Dedicated to the unique needs of Homeowner Associations, we manage everything from meeting agendas and annual planning to builder-to-owner transitions. We act as a professional buffer, ensuring bylaws are followed and community harmony is preserved.",
    img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=85",
    bg: "bg-oxide",
    text: "text-oxide-foreground",
    accent: "text-gold",
    align: "right",
  },
];

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Our Services — Allure Properties Group" },
      {
        name: "description",
        content:
          "Property management, rentals, HOA administration, and GAAP financial reporting — professional services with 19+ years experience.",
      },
      { property: "og:title", content: "Management Excellence — Allure Properties Group" },
      {
        property: "og:description",
        content:
          "Four core practices: Management, Rentals, Financials, and Association Stewardship.",
      },
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
        <img
          src={COVER}
          alt="Garden detail"
          className="absolute inset-0 h-full w-full object-cover animate-zoom-in"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="relative z-10 h-full px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex items-end pb-24 md:pb-40 lg:pb-52 max-w-[1500px] mx-auto">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-gold animate-fade-up">
              Section — Expertise
            </p>
            <h1 className="mt-6 font-display text-[16vw] sm:text-[18vw] md:text-[11vw] lg:text-[9vw] leading-[0.8] tracking-tight animate-fade-up [animation-delay:150ms] text-balance">
              Four <span className="italic text-rose">pillars</span>,<br />
              one standard.
            </h1>
          </div>
        </div>
      </section>

      {/* Editorial strips, alternating direction */}
      {services.map((s) => {
        const imageFirst = s.align === "left";
        return (
          <section key={s.n} className={`${s.bg} ${s.text} border-t border-current/10`}>
            <div className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-24 md:py-32 lg:py-52 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center">
              <div
                className={`col-span-1 lg:col-span-7 ${imageFirst ? "lg:order-1" : "lg:order-2"} reveal-left`}
              >
                <div className="ed-image aspect-[5/4] w-full">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                </div>
              </div>
              <div
                className={`col-span-1 lg:col-span-5 ${imageFirst ? "lg:order-2" : "lg:order-1"} reveal-right text-balance`}
              >
                <p className={`font-mono text-sm uppercase tracking-[0.15em] sm:tracking-[0.4em] ${s.accent} mb-8`}>
                  — {s.n} / {String(services.length).padStart(2, "0")}
                </p>
                <h2 className="font-display text-5xl md:text-7xl lg:text-[7vw] leading-[0.85] tracking-tight mb-8">
                  {s.title}
                </h2>
                <p className="font-display italic text-2xl md:text-3xl mb-10 opacity-90">{s.sub}</p>
                <p className="text-base md:text-lg leading-relaxed opacity-85 max-w-md">
                  {s.body}
                </p>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-background text-cream px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-32 md:py-56 text-center grain">
        <div className="max-w-[1200px] mx-auto reveal">
          <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] tracking-tight">
            Begin a <span className="italic text-oxide">conversation</span>.
          </h2>
          <p className="mt-10 max-w-xl mx-auto text-cream/70 text-base md:text-lg leading-relaxed">
            We respond professionally to every inquiry, usually within one business day.
          </p>
        </div>
      </section>
    </main>
  );
}
