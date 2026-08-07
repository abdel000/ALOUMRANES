import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CYCLES } from "@/content/school";
import { Reveal } from "./Reveal";

export function CycleCards() {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {CYCLES.map((c, i) => (
        <Reveal as="article" key={c.slug} delay={i * 90}>
          <Link to={c.to} className="group block">
            <div className="overflow-hidden">
              <img
                src={c.image}
                alt={`Élèves du cycle ${c.title} au Groupe Scolaire Al Oumrane`}
                loading="lazy"
                width={1000}
                height={1250}
                className="aspect-4/5 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-sm text-gold">{c.index}</span>
              <h3 className="text-2xl">{c.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-navy">
              Découvrir
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
