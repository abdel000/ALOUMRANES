import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

/** En-tête éditoriale des pages intérieures. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  actions,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="bg-ivory pt-32 lg:pt-40">
      <div className="mx-auto max-w-[88rem] px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="rule-gold" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl leading-[1.08] sm:text-5xl lg:text-[3.75rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-muted-foreground">
              <MapPin className="size-3.5 text-gold" aria-hidden="true" />
              {SITE.district} • {SITE.city}
            </p>
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {image ? (
            <Reveal className="overflow-hidden">
              <img
                src={image}
                alt={imageAlt ?? ""}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
