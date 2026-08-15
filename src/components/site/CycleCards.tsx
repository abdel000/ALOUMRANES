import { Link } from "@tanstack/react-router";
import { ArrowRight, Baby, Backpack, BookOpen, GraduationCap } from "lucide-react";
import { CYCLES } from "@/content/school";
import { Reveal } from "./Reveal";

/** Per-cycle icon + brand color (same color-coding used for cycle tags across the site). */
const CYCLE_STYLE: Record<string, { icon: typeof Baby; className: string }> = {
  maternelle: { icon: Baby, className: "bg-[#e5342c] text-white" },
  primaire: { icon: BookOpen, className: "bg-[#7cb928] text-white" },
  college: { icon: Backpack, className: "bg-[#12213c] text-white" },
  lycee: { icon: GraduationCap, className: "bg-[#f4c40f] text-[#12213c]" },
};

export function CycleCards() {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {CYCLES.map((c, i) => {
        const style = CYCLE_STYLE[c.slug];
        const Icon = style.icon;
        return (
          <Reveal as="article" key={c.slug} delay={i * 90}>
            <div
              className={`flex aspect-4/5 w-full items-center justify-center overflow-hidden ${style.className}`}
            >
              <Icon className="size-16 opacity-90" strokeWidth={1.25} aria-hidden="true" />
            </div>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-sm text-gold">{c.index}</span>
              <h3 className="text-2xl">{c.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            <Link
              to={c.to}
              className="group mt-5 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-navy transition-colors hover:text-gold"
            >
              Découvrir
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
