import { createFileRoute, Link } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";
import { FullBleedImage } from "@/components/editorial/FullBleedImage";
import { LargeTextBlock } from "@/components/editorial/LargeTextBlock";
import { SplitLayout } from "@/components/editorial/SplitLayout";
import { PropertyShowcase } from "@/components/editorial/PropertyShowcase";
import { properties } from "@/data/properties";

const COVER = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85";
const SPLIT_IMG = "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=85";
const BREAK_IMG = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=85";

const services = [
  { n: "01", title: "Acquisition", desc: "Sourcing residences with character — listed, off-market, and entirely unseen.", bg: "bg-background", text: "text-cream" },
  { n: "02", title: "Curation", desc: "We compose a portfolio the way an editor builds an issue: with rhythm, restraint, and intent.", bg: "bg-rose", text: "text-rose-foreground" },
  { n: "03", title: "Stewardship", desc: "Day-to-day care that treats a home as living architecture, not an asset on a spreadsheet.", bg: "bg-peach", text: "text-peach-foreground" },
  { n: "04", title: "Editorial", desc: "Photography, words, and presentation — every property told as a feature story.", bg: "bg-oxide", text: "text-oxide-foreground" },
];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Allure Properties Group — Index" },
      { name: "description", content: "An editorial real estate practice curating residences, estates, and sanctuaries with the eye of an architecture studio." },
      { property: "og:title", content: "Allure Properties Group — Index" },
      { property: "og:description", content: "Architectural homes, edited like a magazine. Discover our current issue." },
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
        <div className="relative z-10 h-full w-full px-6 md:px-12 flex flex-col">
          <div className="pt-32 md:pt-40 flex justify-between items-start text-cream/80 font-mono text-[10px] uppercase tracking-[0.35em]">
            <span>Issue 14 — Spring</span>
            <span className="hidden md:inline">N. 40.7128° W. 74.0060°</span>
            <span>MMXXV</span>
          </div>

          <div className="mt-auto pb-20 md:pb-28">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold mb-6 animate-fade-up">
              An editorial practice in real estate
            </p>
            <h1 className="font-display text-[28vw] md:text-[20vw] leading-[0.82] tracking-[-0.04em] text-cream animate-fade-up [animation-delay:120ms]">
              Allure
            </h1>
            <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="font-display italic text-3xl md:text-5xl text-cream/90 animate-fade-up [animation-delay:240ms]">
                Properties Group
              </p>
              <Link
                to="/properties"
                className="ed-link font-mono text-[11px] uppercase tracking-[0.35em] text-cream animate-fade-up [animation-delay:360ms]"
              >
                Open the issue →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Statement / Manifesto */}
      <LargeTextBlock eyebrow="A Note from the Editors" size="lg">
        We do not sell houses.
        <br />
        We <span className="italic text-oxide">publish</span> them — bound in stone,
        glass, and the quiet light of an unhurried morning.
      </LargeTextBlock>

      {/* 3. Split Editorial */}
      <SplitLayout
        bg="bg-rose text-rose-foreground"
        ratio="left-wide"
        left={
          <div className="max-w-md">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-oxide mb-6">Chapter One</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
              The home as a sentence,
              <span className="italic"> read slowly.</span>
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.8] columns-1 md:columns-2 md:gap-10">
              <p>
                We approach property the way a magazine approaches a feature: with
                research, with patience, with a point of view. Each listing is
                shaped by hand — photographed in its right hour, written in its
                right voice.
              </p>
              <p>
                What follows in these pages is not a catalogue. It is a
                considered selection of forty-seven residences across nine
                countries, gathered for their architecture, their light, and the
                lives they invite.
              </p>
            </div>
          </div>
        }
        right={
          <div className="ed-image aspect-[3/4] w-full">
            <img src={SPLIT_IMG} alt="Interior detail" className="h-full w-full object-cover" />
          </div>
        }
      />

      {/* 4. Featured Properties Spread */}
      <div className="px-6 md:px-12 pt-24 md:pt-32 max-w-[1500px] mx-auto flex items-end justify-between">
        <div className="reveal-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Spread — Pages 24 / 31</p>
          <h2 className="font-display text-5xl md:text-7xl">Featured Residences</h2>
        </div>
        <Link to="/properties" className="hidden md:inline-block ed-link font-mono text-[11px] uppercase tracking-[0.3em] text-cream/80">
          See all forty-seven →
        </Link>
      </div>
      <PropertyShowcase items={properties.slice(0, 3)} />

      {/* 5. Services strips */}
      <section>
        {services.map((s) => (
          <div
            key={s.n}
            className={`${s.bg} ${s.text} border-t border-current/10`}
          >
            <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-20 md:py-28 grid grid-cols-12 gap-6 items-center reveal">
              <div className="col-span-2 md:col-span-1 font-mono text-xs tracking-[0.3em] opacity-70">{s.n}</div>
              <h3 className="col-span-10 md:col-span-7 font-display text-5xl md:text-8xl leading-[0.9] tracking-tight">
                {s.title}
              </h3>
              <p className="col-span-12 md:col-span-4 text-[15px] leading-[1.8] opacity-85">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 6. Image Break */}
      <FullBleedImage src={BREAK_IMG} alt="A pause — light through stone" height="h-[80vh]" />

      {/* 7. Testimonials */}
      <section className="bg-peach text-peach-foreground px-6 md:px-12 py-32 md:py-44">
        <div className="max-w-[1300px] mx-auto reveal">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-oxide mb-12">— Words on Allure</p>
          <blockquote className="font-display text-4xl md:text-7xl leading-[1.05] tracking-tight">
            <span className="text-oxide">“</span>
            They didn't show me a property. They composed a chapter, and asked
            whether I'd like to live inside it.
            <span className="text-oxide">”</span>
          </blockquote>
          <div className="mt-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em]">
            <span className="h-px w-12 bg-charcoal/40" />
            <span>Iris Marchetti — Collector, Milan</span>
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="bg-oxide text-oxide-foreground grain">
        <div className="px-6 md:px-12 py-32 md:py-48 max-w-[1300px] mx-auto text-center reveal">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-cream/80 mb-10">The Final Page</p>
          <h2 className="font-display text-[14vw] md:text-[9vw] leading-[0.88] tracking-tight">
            Begin your <span className="italic">issue</span>.
          </h2>
          <Link
            to="/contact"
            className="inline-block mt-14 ed-link font-mono text-[12px] uppercase tracking-[0.4em]"
          >
            Write to the editors →
          </Link>
        </div>
      </section>
    </main>
  );
}
