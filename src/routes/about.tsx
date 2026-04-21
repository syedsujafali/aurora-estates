import { createFileRoute } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";
import { FullBleedImage } from "@/components/editorial/FullBleedImage";
import { SplitLayout } from "@/components/editorial/SplitLayout";

const COVER =
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=2000&q=85";
const PORTRAIT =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85";
const ARCHIVE =
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=85";

const timeline = [
  {
    year: "2005",
    title: "The Foundation",
    body: "Established with a commitment to bringing high-level professional standards to the regional property management market.",
  },
  {
    year: "2010",
    title: "Scale & Expansion",
    body: "Our management portfolio grows significantly, benchmarked by industry-leading low vacancy rates and high tenant retention.",
  },
  {
    year: "2015",
    title: "Fiscal Integrity",
    body: "Full implementation of GAAP-compliant reporting systems, providing owners with institutional-grade financial oversight.",
  },
  {
    year: "2019",
    title: "Association Services",
    body: "Establishing a dedicated Community Association Management division to specialized board administration needs.",
  },
  {
    year: "2024",
    title: "19 Years of Excellence",
    body: "Continuously defined by the same principles of transparency and dependability that we established nearly two decades ago.",
  },
];

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us — Allure Properties Group" },
      {
        name: "description",
        content:
          "Nineteen years of excellence in property management and community association services.",
      },
      { property: "og:title", content: "Professional Stewardship — Allure Properties Group" },
      {
        property: "og:description",
        content: "The story of our commitment to integrity and dependability since 2005.",
      },
      { property: "og:image", content: COVER },
      { name: "twitter:image", content: COVER },
    ],
  }),
});

function About() {
  useRevealAll();
  return (
    <main className="bg-background text-cream">
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src={COVER}
          alt="Studio interior"
          className="absolute inset-0 h-full w-full object-cover animate-zoom-in"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="relative z-10 h-full px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex flex-col justify-end pb-24 md:pb-32 lg:pb-40 max-w-[1500px] mx-auto">
          <p className="font-mono text-sm uppercase tracking-[0.15em] sm:tracking-[0.4em] text-gold animate-fade-up">
            Professional Profile
          </p>
          <h1 className="mt-6 font-display text-[16vw] sm:text-[18vw] md:text-[12vw] lg:text-[10vw] leading-[0.8] tracking-tight animate-fade-up [animation-delay:150ms] text-balance">
            Experience,
            <br />
            <span className="italic text-rose">matters.</span>
          </h1>
        </div>
      </section>

      {/* Manifesto split */}
      <SplitLayout
        bg="bg-background"
        ratio="right-wide"
        left={
          <div className="md:sticky md:top-32">
            <p className="font-mono text-sm uppercase tracking-[0.15em] sm:tracking-[0.4em] text-gold mb-6">— I.</p>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">Our Ethos.</h2>
          </div>
        }
        right={
          <div className="space-y-6 text-[16px] md:text-[17px] leading-[1.85] text-cream/85 max-w-2xl">
            <p>
              Allure Properties Group represents a high-standard for professional property
              management. We manage every asset with the care of an owner and the precision of a
              certified accountant.
            </p>
            <p>
              Our team consists of <span className="italic text-gold">dedicated managers</span>{" "}
              across the region. We do not rely on automation alone. We rely on regular inspections,
              vendor accountability, and transparent communication.
            </p>
            <p>
              Our clients are homeowners, HOA boards, and commercial investors. They stay with us
              for decades—not because of a contract, but because of the peace of mind our
              dependability provides.
            </p>
          </div>
        }
      />

      {/* Leadership Section */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-24 md:py-32 lg:py-44 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5 ed-image aspect-[3/4] reveal-left">
            <img src={PORTRAIT} alt="Management Team" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-3 md:pt-12 reveal">
            <p className="font-mono text-xs uppercase tracking-[0.15em] sm:tracking-[0.4em] text-gold mb-6">
              Integrity in Leadership
            </p>
            <p className="text-base md:text-lg leading-relaxed text-cream/80">
              Our leadership team brings decades of property management and financial stewardship to
              every association we manage. We believe firmly in transparency, professional ethics,
              and regular on-site presence.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 ed-image aspect-[4/5] mt-12 md:mt-32 reveal-right">
            <img
              src={ARCHIVE}
              alt="Professional Environment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline as chapters */}
      <section className="bg-peach text-peach-foreground px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-32 md:py-52">
        <div className="max-w-[1500px] mx-auto">
          <div className="reveal mb-24 md:mb-32">
            <p className="font-mono text-sm uppercase tracking-[0.15em] sm:tracking-[0.4em] text-oxide mb-6">
              — II. Our Legacy
            </p>
            <h2 className="font-display text-6xl md:text-9xl leading-[0.85]">
              Nineteen years,
              <br />
              <span className="italic">one building at a time.</span>
            </h2>
          </div>
          <div className="space-y-0 divide-y divide-charcoal/20">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-24 py-12 md:py-20 border-b border-charcoal/10 last:border-0 reveal"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="col-span-1 lg:col-span-2 font-display text-5xl md:text-6xl text-oxide">
                  {t.year}
                </div>
                <h3 className="col-span-1 lg:col-span-4 font-display text-4xl md:text-5xl leading-[0.95] mb-6 lg:mb-0">
                  {t.title}
                </h3>
                <p className="col-span-1 lg:col-span-6 text-base md:text-lg leading-relaxed text-charcoal/80 max-w-2xl">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FullBleedImage
        src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=2000&q=85"
        alt="Quiet courtyard"
        height="h-[80vh]"
      />

      <section className="bg-rose text-rose-foreground px-6 md:px-12 py-32 md:py-44 text-center">
        <div className="max-w-[1100px] mx-auto reveal">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-oxide mb-10">
            — III. Professional Standards
          </p>
          <p className="font-display italic text-3xl md:text-5xl leading-[1.2]">
            Committed to GAAP-certified accuracy
            <br />
            and dependable stewardship
            <br />
            across all properties.
          </p>
        </div>
      </section>
    </main>
  );
}
