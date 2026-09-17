import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExplorePair({
  to = "/products",
  label = "Explore Now",
}: {
  to?: "/products" | "/quote" | "/contact" | "/solutions";
  label?: string;
}) {
  return (
    <div className="flex items-center">
      <Link
        to={to}
        className="inline-flex h-14 items-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand-red-dark"
      >
        {label}
      </Link>
      <Link
        to={to}
        aria-label={label}
        className="-ml-1 grid size-14 place-items-center rounded-full bg-ink text-background transition-transform duration-300 hover:-translate-y-0.5 hover:rotate-12"
      >
        <ArrowUpRight className="size-5" />
      </Link>
    </div>
  );
}

export function WaterChip({
  to,
  slug,
  label,
  image,
  alt,
  fill,
}: {
  to: "/products/$slug" | "/solutions/$slug";
  slug: string;
  label: string;
  image: string;
  alt: string;
  fill: string;
}) {
  return (
    <Link
      to={to}
      params={{ slug }}
      className="liquid-chip"
      style={{ "--chip-fill": fill } as CSSProperties}
    >
      <span className="liquid-chip-wave" aria-hidden="true" />
      <span className="liquid-chip-wave-2" aria-hidden="true" />
      <img src={image} alt="" className="size-8 rounded-full object-cover" />
      <span className="liquid-chip-label text-sm font-semibold">{label}</span>
      <span className="sr-only">{alt}</span>
    </Link>
  );
}

export function CloverMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={cn("text-brand-blue", className)} aria-hidden="true">
      <g fill="currentColor">
        <circle cx="60" cy="32" r="28" />
        <circle cx="88" cy="60" r="28" />
        <circle cx="60" cy="88" r="28" />
        <circle cx="32" cy="60" r="28" />
      </g>
    </svg>
  );
}
