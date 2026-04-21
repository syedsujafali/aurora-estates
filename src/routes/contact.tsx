import { createFileRoute } from "@tanstack/react-router";
import { useRevealAll } from "@/hooks/use-reveal";
import { useState } from "react";

const COVER =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=85";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us — Allure Properties Group" },
      {
        name: "description",
        content:
          "Contact the directors of Allure Properties Group for property management and community association inquiries.",
      },
      { property: "og:title", content: "Service Inquiry — Allure Properties Group" },
      {
        property: "og:description",
        content: "Professional property management for North New Jersey and regional assets.",
      },
      { property: "og:image", content: COVER },
      { name: "twitter:image", content: COVER },
    ],
  }),
});

function Field({
  label,
  type = "text",
  name,
  as = "input",
}: {
  label: string;
  type?: string;
  name: string;
  as?: "input" | "textarea";
}) {
  return (
    <label className="block group">
      <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={4}
          className="mt-4 w-full bg-transparent border-b border-cream/30 focus:border-oxide outline-none py-4 text-xl font-display text-cream transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="mt-4 w-full bg-transparent border-b border-cream/30 focus:border-oxide outline-none py-4 text-xl font-display text-cream transition-colors"
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
      <section className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-44 md:pt-60 lg:pt-80 pb-20 max-w-[1500px] mx-auto text-balance">
        <p className="font-mono text-sm uppercase tracking-[0.45em] text-gold mb-10 animate-fade-up">
          — Inquiries
        </p>
        <h1 className="font-display text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] leading-[0.82] tracking-tight animate-fade-up [animation-delay:120ms] text-balance">
          Write to
          <br />
          the <span className="italic text-rose">directors.</span>
        </h1>
      </section>

      <section className="px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 pb-32 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Form */}
          <div className="md:col-span-7 reveal-left">
            {sent ? (
              <div className="border-t border-cream/15 pt-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-gold">
                  — Received
                </p>
                <p className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
                  Thank you. A specialist will reach out to discuss your requirements shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-14 border-t border-cream/15 pt-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <Field label="Your name" name="name" />
                  <Field label="Email" type="email" name="email" />
                </div>
                <Field label="Subject" name="subject" />
                <Field label="A few words" name="message" as="textarea" />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-6 font-mono text-sm uppercase tracking-[0.45em] text-cream"
                >
                  <span className="ed-link pb-1">Send Inquiry</span>
                  <span className="h-px w-20 bg-cream/30 transition-all duration-700 group-hover:w-32 group-hover:bg-oxide" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-5 reveal-right">
            <div className="border-t border-cream/15 pt-16 md:pt-24 space-y-16 lg:space-y-24">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] sm:tracking-[0.4em] text-gold mb-6">
                  Mailing Address
                </p>
                <p className="font-display text-4xl leading-[1.1]">
                  PO Box 364
                  <br />
                  Hamburg, NJ 07419
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] sm:tracking-[0.4em] text-gold mb-6">
                  Direct Correspondence
                </p>
                <p className="font-display text-3xl leading-[1.2]">manager@allurepropertiesgroup.com</p>
                <p className="font-display text-3xl mt-4">973.823.0593</p>
                <p className="font-display text-xl mt-2 text-cream/70">Fax: 973.209.0257</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] sm:tracking-[0.4em] text-gold mb-6">
                  Registry & Support
                </p>
                <ul className="space-y-4 font-display text-2xl text-cream/90">
                  <li>24/7 Emergency Dispatch: 888.245.2440</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={COVER}
          alt="Light through stone"
          className="absolute inset-0 h-full w-full object-cover reveal-zoom"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <p className="font-display italic text-3xl md:text-5xl text-cream text-center max-w-3xl">
            "Professional service, dependable replies."
          </p>
        </div>
      </section>
    </main>
  );
}
