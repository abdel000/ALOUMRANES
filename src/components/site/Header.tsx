import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { NAV, LANGUAGES, SITE, track } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CtaLink } from "./Cta";
const logo = "/images/logo-al-oumrane.png";

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="flex items-center" aria-label={`${SITE.name} — accueil`}>
      <img
        src={logo}
        alt={`Logo ${SITE.name}`}
        width={96}
        height={96}
        className={cn(
          "size-14 shrink-0 object-contain sm:size-16 lg:size-20",
          inverse && "rounded-md bg-navy-foreground/95 p-1",
        )}
      />
    </Link>
  );
}

function LangSwitcher({ inverse = false }: { inverse?: boolean }) {
  const [lang, setLang] = useState("fr");
  return (
    <div className="flex items-center gap-1" role="group" aria-label="Choix de la langue">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => l.enabled && setLang(l.code)}
          aria-current={lang === l.code ? "true" : undefined}
          aria-disabled={!l.enabled}
          title={l.enabled ? l.label : "Bientôt disponible"}
          className={cn(
            "px-1.5 py-1 text-[0.6875rem] tracking-[0.14em] transition-colors",
            inverse ? "text-navy-foreground/60" : "text-muted-foreground",
            lang === l.code && (inverse ? "text-navy-foreground" : "text-navy"),
            !l.enabled && "opacity-40",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8",
          scrolled ? "h-20" : "h-24 lg:h-28",
        )}
      >
        <Wordmark />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-[0.8125rem] tracking-wide whitespace-nowrap text-foreground/80 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitcher />
          <Link
            to="/demande-visite"
            className="hidden text-[0.75rem] tracking-[0.12em] uppercase text-navy link-underline xl:inline"
          >
            Demander une visite
          </Link>
          <CtaLink to="/admissions" variant="gold" className="px-5 py-3 text-[0.6875rem]">
            Inscription {SITE.schoolYear}
          </CtaLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CtaLink to="/admissions" variant="gold" className="px-4 py-2.5 text-[0.625rem]">
            Inscription
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="grid size-10 place-items-center border border-navy/20 text-navy"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-navy px-6 py-6 text-navy-foreground lg:hidden">
          <div className="flex items-center justify-between">
            <Wordmark inverse />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="grid size-10 place-items-center border border-navy-foreground/25"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-1 flex-col gap-1" aria-label="Navigation mobile">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-navy-foreground/10 py-4 font-display text-2xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <CtaLink to="/demande-visite" variant="gold" onClick={() => setOpen(false)}>
              Demander une visite
            </CtaLink>
            <a
              href={SITE.phoneHref}
              onClick={() => track("phone_click", { location: "menu_mobile" })}
              className="inline-flex items-center justify-center gap-2 border border-navy-foreground/30 py-3.5 text-sm"
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
            <LangSwitcher inverse />
          </div>
        </div>
      ) : null}
    </header>
  );
}
