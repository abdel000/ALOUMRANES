import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { GALLERY } from "@/content/school";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {GALLERY.map((img, i) => (
          <Reveal key={img.caption} delay={i * 60}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden text-left"
              aria-label={`Agrandir : ${img.caption}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
              <span className="mt-3 block text-xs tracking-[0.14em] uppercase text-muted-foreground">
                {img.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[active]!.caption}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Fermer"
            className="absolute top-5 right-5 grid size-11 place-items-center border border-navy-foreground/30 text-navy-foreground"
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-full max-w-5xl">
            <img
              src={GALLERY[active]!.src}
              alt={GALLERY[active]!.alt}
              className="max-h-[80dvh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-xs tracking-[0.14em] uppercase text-navy-foreground/70">
              {GALLERY[active]!.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
