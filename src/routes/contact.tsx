import { createFileRoute } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";
import { useState } from "react";

const COVER = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=85";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Allure Properties Group" },
      { name: "description", content: "Write to the editors of Allure Properties Group. We respond personally, usually within two working days." },
      { property: "og:title", content: "Contact — Allure Properties Group" },
      { property: "og:description", content: "Write to the editors. We respond personally." },
      { property: "og:image", content: COVER },
      { name: "twitter:image", content: COVER },
    ],
  }),
});

function Field({ label, type = "text", name, as = "input" }: { label: string; type?: string; name: string; as?: "input" | "textarea" }) {
  return (
    <label className="block group">
      <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={4}
          className="mt-3 w-full bg-transparent border-b border-cream/30 focus:border-oxide outline-none py-3 text-lg font-display text-cream transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="mt-3 w-full bg-transparent border-b border-cream/30 focus:border-oxide outline-none py-3 text-lg font-display text-cream transition-colors"
        />
      )}
    </label>
  );
}

function Contact() {
  useRevealAll();
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-background text-cream">
      <section className="px-6 md:px-12 pt-40 md:pt-52 pb-16 max-w-[1500px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold mb-8 animate-fade-up">— Correspondence</p>
        <h1 className="font-display text-[16vw] md:text-[11vw] leading-[0.85] tracking-tight animate-fade-up [animation-delay:120ms]">
          Write to<br/>the <span className="italic text-rose">editors.</span>
        </h1>
      </section>

      <section className="px-6 md:px-12 pb-32 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Form */}
          <div className="md:col-span-7 reveal-left">
            {sent ? (
              <div className="border-t border-cream/15 pt-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-gold">— Received</p>
                <p className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
                  Thank you. A note from the editors will reach you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-12 border-t border-cream/15 pt-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Field label="Your name" name="name" />
                  <Field label="Email" type="email" name="email" />
                </div>
                <Field label="Subject" name="subject" />
                <Field label="A few words" name="message" as="textarea" />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.4em] text-cream"
                >
                  <span className="ed-link">Send the letter</span>
                  <span className="h-px w-16 bg-cream/40 transition-all duration-500 group-hover:w-28 group-hover:bg-oxide" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-5 reveal-right">
            <div className="border-t border-cream/15 pt-12 space-y-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold mb-4">The Studio</p>
                <p className="font-display text-3xl leading-[1.15]">
                  87 Greene Street<br/>
                  SoHo, New York<br/>
                  NY 10012
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold mb-4">Direct</p>
                <p className="font-display text-2xl">hello@allure.estate</p>
                <p className="font-display text-2xl mt-1">+1 (212) 555 — 0144</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold mb-4">Other Desks</p>
                <ul className="space-y-2 font-display text-xl text-cream/85">
                  <li>Paris — 8e</li>
                  <li>Milan — Brera</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <img src={COVER} alt="Light through stone" className="absolute inset-0 h-full w-full object-cover reveal-zoom" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <p className="font-display italic text-3xl md:text-5xl text-cream text-center max-w-3xl">
            "Slow letters, considered replies."
          </p>
        </div>
      </section>
    </main>
  );
}
