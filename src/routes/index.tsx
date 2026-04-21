import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Metrics } from "@/components/Metrics";
import { Properties } from "@/components/Properties";
import { TechSection } from "@/components/TechSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nova Estate — The Operating System for Modern Property Portfolios" },
      { name: "description", content: "AI-powered real estate management. Automate leasing, forecast occupancy, and orchestrate portfolios from a single futuristic command center." },
      { property: "og:title", content: "Nova Estate — Property Management, Reimagined" },
      { property: "og:description", content: "Manage portfolios, automate leasing, and forecast occupancy with the next-gen real estate platform." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Metrics />
      <Properties />
      <TechSection />
      <CTA />
      <Footer />
    </main>
  );
}
