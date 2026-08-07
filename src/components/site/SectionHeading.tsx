import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  tone = "default",
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "inverse";
  as?: "h1" | "h2";
}) {
  const Title = as;
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="rule-gold" />
          <span className={cn("eyebrow", tone === "inverse" && "text-navy-foreground/70")}>
            {eyebrow}
          </span>
        </div>
      ) : null}
      <Title
        className={cn(
          "mt-5 text-3xl leading-[1.12] sm:text-4xl lg:text-5xl",
          tone === "inverse" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </Title>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "inverse" ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
