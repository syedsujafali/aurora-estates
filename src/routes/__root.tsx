import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center text-cream">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Error — 404</p>
        <h1 className="mt-6 font-display text-7xl">Lost in the margins.</h1>
        <p className="mt-4 text-sm text-cream/70">This page does not appear in our index.</p>
        <div className="mt-10">
          <Link to="/" className="ed-link font-mono text-[11px] uppercase tracking-[0.3em] text-oxide">
            Return to the cover →
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Allure Properties Group — An Editorial Real Estate Practice" },
      { name: "description", content: "Allure Properties Group is a design-forward, editorial real estate firm curating residences, estates, and sanctuaries with the eye of an architecture studio." },
      { name: "author", content: "Allure Properties Group" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
