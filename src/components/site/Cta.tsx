import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 text-[0.8125rem] font-medium tracking-[0.08em] uppercase transition-all duration-300 px-6 py-3.5 rounded-xs";

const styles = {
  solid: "bg-navy text-navy-foreground hover:bg-navy/90",
  gold: "bg-gold text-gold-foreground hover:brightness-105",
  outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-navy-foreground",
  ghostLight:
    "border border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground hover:text-navy",
} as const;

type Variant = keyof typeof styles;

export function CtaLink({
  variant = "solid",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link className={cn(base, styles[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  variant = "solid",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a className={cn(base, styles[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function CtaButton({
  variant = "solid",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function TextLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-navy",
        className,
      )}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
