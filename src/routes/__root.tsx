import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar, WhatsAppFloat } from "@/components/site/MobileActionBar";
import { Toaster } from "@/components/ui/sonner";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl text-navy">404</p>
        <h1 className="mt-4 text-xl">Page introuvable</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-navy px-6 py-3.5 text-[0.8125rem] tracking-[0.08em] uppercase text-navy-foreground"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl">Cette page ne s'est pas chargée</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur est survenue. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-navy px-6 py-3.5 text-[0.8125rem] tracking-[0.08em] uppercase text-navy-foreground"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-navy/25 px-6 py-3.5 text-[0.8125rem] tracking-[0.08em] uppercase text-navy"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "fr_MA" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: SITE.name,
          description:
            "École privée à Sidi Maârouf, Casablanca : maternelle, primaire, collège et lycée.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lotissement Salma, Route de Sidi Maârouf",
            postalCode: "20280",
            addressLocality: "Casablanca",
            addressCountry: "MA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 33.5139235,
            longitude: -7.650382,
          },
          telephone: "+212522972524",
          openingHours: "Mo-Fr 08:00-18:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: SITE.rating,
            reviewCount: SITE.reviewCount,
          },
          hasMap: SITE.mapsLink,
          areaServed: "Casablanca",

        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
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

/** Routes rendered without the site header/footer/nav (standalone ad landing pages). */
const STANDALONE_ROUTES = ["/inscriptions-2026-2027", "/inscriptions-2026-2027-merci"];

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const standalone = STANDALONE_ROUTES.includes(pathname);

  if (standalone) {
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <Toaster />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pb-16 lg:pb-0">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
      <WhatsAppFloat />
      <Toaster />
    </QueryClientProvider>
  );
}
