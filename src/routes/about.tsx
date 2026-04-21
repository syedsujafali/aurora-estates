import { createFileRoute } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";
import { FullBleedImage } from "@/components/editorial/FullBleedImage";
import { SplitLayout } from "@/components/editorial/SplitLayout";

const COVER = "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=2000&q=85";
const PORTRAIT = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85";
const ARCHIVE = "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=85";

const timeline = [
  { year: "2009", title: "A studio of two", body: "Founded above a bookshop in SoHo by Lena Aubry and Marcus Hale, with a Rolodex of nine names and a Leica." },
  { year: "2013", title: "The first issue", body: "We publish our debut catalogue — letterpress, cloth-bound — and learn that real estate can be read." },
  { year: "2017", title: "Rooms abroad", body: "Offices open in Paris and Milan. Our European listings double, and so does the depth of our research." },
  { year: "2021", title: "The Editorial Desk", body: "An in-house team of writers, photographers, and stylists begins shaping every property as a feature." },
  { year: "2025", title: "Issue Fourteen", body: "Forty-seven residences across nine countries. The largest, quietest issue we have ever assembled." },
];

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Allure Properties Group" },
      { name: "description", content: "From a SoHo studio to nine countries — the unhurried story of an editorial real estate practice." },
      { property: "og:title", content: "About — Allure Properties Group" },
      { property: "og:description", content: "An unhurried story of how we came to publish homes." },
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
        <img src={COVER} alt="Studio interior" className="absolute inset-0 h-full w-full object-cover animate-zoom-in" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="relative z-10 h-full px-6 md:px-12 flex flex-col justify-end pb-20 max-w-[1500px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold animate-fade-up">Chapter — About</p>
          <h1 className="mt-6 font-display text-[18vw] md:text-[12vw] leading-[0.85] tracking-tight animate-fade-up [animation-delay:150ms]">
            A studio,<br/>
            <span className="italic text-rose">not an agency.</span>
          </h1>
        </div>
      </section>

      {/* Manifesto split */}
      <SplitLayout
        bg="bg-background"
        ratio="right-wide"
        left={
          <div className="md:sticky md:top-32">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-gold mb-4">— I.</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">On slowness.</h2>
          </div>
        }
        right={
          <div className="space-y-6 text-[16px] md:text-[17px] leading-[1.85] text-cream/85 max-w-2xl">
            <p>
              Allure was founded on the belief that a home deserves the same
              attention as a building, a film, or a piece of literature. We work
              with fewer properties, on longer timelines, and we write about each
              of them at length.
            </p>
            <p>
              We are <span className="italic text-gold">sixteen people</span> across
              three cities. We do not have an algorithm. We have a library, a
              darkroom, and a long table where every listing is debated before it
              is offered.
            </p>
            <p>
              Our clients are collectors, architects, and quietly curious people.
              They tend to stay with us — not because of what we sold them, but
              because of what we noticed.
            </p>
          </div>
        }
      />

      {/* Portrait + archive — magazine spread */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5 ed-image aspect-[3/4] reveal-left">
            <img src={PORTRAIT} alt="Founder portrait" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-3 md:pt-12 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold mb-4">Portrait — Lena Aubry</p>
            <p className="text-[15px] leading-[1.8] text-cream/80">
              Co-founder. Trained as an architect in Lyon. Spends her weeks
              between three apartments she insists on calling 'rooms'. Believes
              firmly in north light and unannounced visits.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 ed-image aspect-[4/5] mt-12 md:mt-32 reveal-right">
            <img src={ARCHIVE} alt="Archive shelf" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Timeline as chapters */}
      <section className="bg-peach text-peach-foreground px-6 md:px-12 py-28 md:py-40">
        <div className="max-w-[1500px] mx-auto">
          <div className="reveal mb-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-oxide mb-4">— II. A Brief History</p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">Sixteen years,<br/><span className="italic">one issue at a time.</span></h2>
          </div>
          <div className="space-y-0 divide-y divide-charcoal/20">
            {timeline.map((t, i) => (
              <div key={t.year} className="grid grid-cols-12 gap-4 md:gap-10 py-10 md:py-14 reveal" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="col-span-3 md:col-span-2 font-display text-3xl md:text-5xl text-oxide">{t.year}</div>
                <h3 className="col-span-9 md:col-span-4 font-display text-3xl md:text-5xl leading-[0.95]">{t.title}</h3>
                <p className="col-span-12 md:col-span-6 text-[15px] leading-[1.8] text-charcoal/80">{t.body}</p>
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
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-oxide mb-10">— III. Colophon</p>
          <p className="font-display italic text-3xl md:text-5xl leading-[1.2]">
            Set in Fraunces and Inter. Printed in small quantities.
            <br/>Assembled with a great deal of patience, in New York,
            Paris, and Milan.
          </p>
        </div>
      </section>
    </main>
  );
}
