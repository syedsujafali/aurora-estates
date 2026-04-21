import { createFileRoute, Link } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";
import { FullBleedImage } from "@/components/editorial/FullBleedImage";
import { LargeTextBlock } from "@/components/editorial/LargeTextBlock";
import { SplitLayout } from "@/components/editorial/SplitLayout";

const COVER =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85";
const SPLIT_IMG =
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=85";
const BREAK_IMG =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=85";

const services = [
  {
    n: "01",
    title: "Management",
    desc: "Strategic property oversight, monthly inspections, and comprehensive vendor management.",
    bg: "bg-background",
    text: "text-cream",
  },
  {
    n: "02",
    title: "Rentals",
    desc: "Professional leasing, tenant screening, and marketing that minimizes vacancy and maximizes return.",
    bg: "bg-rose",
    text: "text-rose-foreground",
  },
  {
    n: "03",
    title: "Financials",
    desc: "GAAP-based accounting, detailed monthly reporting, and transparent fund management.",
    bg: "bg-peach",
    text: "text-peach-foreground",
  },
  {
    n: "04",
    title: "Associations",
    desc: "Dedicated HOA and Community management, board administration, and transition services.",
    bg: "bg-oxide",
    text: "text-oxide-foreground",
  },
];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Allure Properties Group — Exceptional Property Management" },
      {
        name: "description",
        content:
          "Professional property management, rental management, and HOA services defined by integrity and 19+ years of experience.",
      },
      { property: "og:title", content: "Allure Properties Group — Property Management Excellence" },
      {
        property: "og:description",
        content:
          "Dependable service and GAAP-compliant financial reporting for your real estate assets.",
      },
      { property: "og:image", content: COVER },
      { name: "twitter:image", content: COVER },
    ],
  }),
});

function Home() {
  useRevealAll();

  return (
    <main className="bg-background text-cream">
      {/* 1. Opening Frame */}
      <section className="relative h-screen w-full overflow-hidden grain">
        <img
          src={COVER}
          alt="Architectural interior with morning light"
          className="absolute inset-0 h-full w-full object-cover animate-zoom-in"
        />
        <div className="absolute inset-0 bg-background/35" />
        <div className="relative z-10 h-full w-full px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex flex-col">
          <div className="pt-28 sm:pt-32 md:pt-40 flex justify-between items-start text-cream/80 font-mono text-xs md:text-sm lg:text-base uppercase tracking-[0.15em] sm:tracking-[0.4em]">
            <span>Est. 2005 — Hamburg, NJ</span>
            <span className="hidden md:inline">Trust • Integrity • Professionalism</span>
            <span>MMXXV</span>
          </div>

          <div className="mt-auto pb-20 md:pb-32 lg:pb-40">
            <p className="font-mono text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.4em] text-gold mb-6 animate-fade-up">
              Strategic Property Management
            </p>
            <h1 className="font-display text-[16vw] sm:text-[22vw] md:text-[14vw] lg:text-[11vw] leading-[0.8] tracking-[-0.04em] text-cream animate-fade-up [animation-delay:120ms] text-balance">
              Allure
            </h1>
            <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-10">
              <p className="font-display italic text-4xl md:text-6xl text-cream/90 animate-fade-up [animation-delay:240ms]">
                Properties Group
              </p>
              <Link
                to="/services"
                className="ed-link font-mono text-sm uppercase tracking-[0.15em] sm:tracking-[0.4em] text-cream animate-fade-up [animation-delay:360ms]"
              >
                Explore services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Statement / Manifesto */}
      <LargeTextBlock eyebrow="A Professional Standard" size="lg">
        We do not just manage property.
        <br />
        We <span className="italic text-oxide">protect</span> and enhance your investments — with 19
        years of expertise and GAAP-certified precision.
      </LargeTextBlock>

      {/* 3. Split Editorial */}
      <SplitLayout
        bg="bg-rose text-rose-foreground"
        ratio="left-wide"
        left={
          <div className="max-w-md">
            <p className="font-mono text-sm uppercase tracking-[0.15em] sm:tracking-[0.4em] text-oxide mb-8">
              Integrity in Action
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
              A commitment to
              <span className="italic"> transparency.</span>
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.8] columns-1 md:columns-2 md:gap-10">
              <p>
                We approach property management with the same rigor a financial firm approaches a
                portfolio. Every decision is backed by data, every inspection is thorough, and every
                report is delivered with GAAP-standard accuracy.
              </p>
              <p>
                Our 19 years in the industry have taught us that trust is not given; it is built
                through consistent, dependable service. From tenant relations to capital
                improvements, we act as an extension of your own professional standards.
              </p>
            </div>
          </div>
        }
        right={
          <div className="ed-image aspect-[3/4] w-full">
            <img
              src={SPLIT_IMG}
              alt="Professional office detail"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      {/* 4. Experience & Trust */}
      <div className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-32 md:pt-44 max-w-[1500px] mx-auto flex items-end justify-between">
        <div className="reveal-left">
          <p className="font-mono text-sm uppercase tracking-[0.15em] sm:tracking-[0.4em] text-gold mb-6">
            Service Excellence — Since 2005
          </p>
          <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-balance">Nineteen Years of Dependability</h2>
        </div>
      </div>
      <div className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-20 md:py-32 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 text-base leading-relaxed">
          <div className="reveal-up">
            <h4 className="font-mono text-sm uppercase tracking-[0.2em] text-gold mb-4">
              Integrity
            </h4>
            <p className="opacity-80">
              Honest communication and transparent management practices are the cornerstone of our
              operations. No hidden fees, no opaque contracts.
            </p>
          </div>
          <div className="reveal-up [animation-delay:100ms]">
            <h4 className="font-mono text-sm uppercase tracking-[0.2em] text-gold mb-4">
              Precision
            </h4>
            <p className="opacity-80">
              From vendor bidding to GAAP-compliant financial reporting, we bring a high level of
              detail to every aspect of your asset management.
            </p>
          </div>
          <div className="reveal-up [animation-delay:200ms]">
            <h4 className="font-mono text-sm uppercase tracking-[0.2em] text-gold mb-4">
              Scale
            </h4>
            <p className="opacity-80">
              Serving communities and associations with a deep understanding of local market
              dynamics and specialized legal requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Service Pillars */}
    <section>
        {services.map((s) => (
          <div key={s.n} className={`${s.bg} ${s.text} border-t border-current/10`}>
            <div className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-24 md:py-32 lg:py-44 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center reveal">
              <div className="col-span-1 lg:col-span-1 font-mono text-sm tracking-[0.2em] sm:tracking-[0.4em] opacity-70">
                {s.n}
              </div>
              <h3 className="col-span-1 lg:col-span-7 font-display text-5xl md:text-7xl lg:text-[8vw] leading-[0.85] tracking-tight">
                {s.title}
              </h3>
              <p className="col-span-1 lg:col-span-4 text-base md:text-lg leading-relaxed opacity-85 max-w-md">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 6. Image Break */}
      <FullBleedImage src={BREAK_IMG} alt="A pause — light through stone" height="h-[80vh]" />

      {/* 7. Testimonials */}
      <section className="bg-peach text-peach-foreground px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-32 md:py-52">
        <div className="max-w-[1300px] mx-auto reveal">
          <p className="font-mono text-sm uppercase tracking-[0.15em] sm:tracking-[0.4em] text-oxide mb-14">
            — Client Testimonials
          </p>
          <blockquote className="font-display text-4xl md:text-7xl leading-[1.05] tracking-tight">
            <span className="text-oxide">“</span>
            Allure Properties Group took our HOA from financial uncertainty to complete transparency
            within six months. Their GAAP reporting is impeccable.
            <span className="text-oxide">”</span>
          </blockquote>
          <div className="mt-14 flex items-center gap-6 font-mono text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.3em]">
            <span className="h-px w-16 bg-charcoal/40" />
            <span>Board President — Seraphina Community Association</span>
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="bg-background text-cream px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-32 md:py-56 text-center grain">
        <div className="max-w-[1200px] mx-auto reveal">
          <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] tracking-tight text-balance">
            Professional <span className="italic text-oxide">stewardship</span>.
          </h2>
          <Link
            to="/contact"
            className="inline-block mt-20 ed-link font-mono text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.4em]"
          >
            Request professional proposal →
          </Link>
        </div>
      </section>
    </main>
  );
}
