import { ArrowRight } from "lucide-react";
import { CYCLES } from "@/content/school";
import { Reveal } from "./Reveal";
import { CtaLink } from "./Cta";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CycleTabs() {
  return (
    <Tabs defaultValue={CYCLES[0]!.slug} className="mt-16">
      <TabsList className="h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
        {CYCLES.map((c) => (
          <TabsTrigger
            key={c.slug}
            value={c.slug}
            className="rounded-none border border-border px-6 py-3 text-xs tracking-[0.14em] uppercase text-muted-foreground data-[state=active]:border-gold data-[state=active]:bg-gold data-[state=active]:text-gold-foreground data-[state=active]:shadow-none"
          >
            {c.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {CYCLES.map((c) => (
        <TabsContent key={c.slug} value={c.slug} className="mt-10 outline-none">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="overflow-hidden">
              <img
                src={c.image}
                alt={`Élèves du cycle ${c.title} au Groupe Scolaire Al Oumrane`}
                loading="lazy"
                width={1000}
                height={1250}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <div>
              <span className="font-display text-sm text-gold">{c.index}</span>
              <h3 className="mt-3 text-3xl">{c.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.intro}</p>
              <ul className="mt-8 space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 size-1 shrink-0 bg-gold" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <CtaLink to={c.to} variant="outline" className="mt-8">
                Découvrir le cycle {c.title}
                <ArrowRight className="size-4" />
              </CtaLink>
            </div>
          </Reveal>
        </TabsContent>
      ))}
    </Tabs>
  );
}
