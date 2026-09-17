import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import showroomImage from "@/assets/showroom.jpg";
import { cn } from "@/lib/utils";
import { CallButton, QuoteButton, WhatsAppButton } from "./contact-actions";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{copy}</p> : null}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b bg-surface pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Container>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
      </Container>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs font-semibold text-muted-foreground">
      <Link to="/" className="hover:text-primary">
        Home
      </Link>
      {items.map((item) => (
        <span className="flex items-center gap-1" key={item.label}>
          <ChevronRight className="size-3" />
          {item.to ? (
            <Link to={item.to as "/"} className="hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function CtaBand({
  title,
  copy = "Whether the requirement is a single furniture piece or a complete interior project, the team is ready to help you choose suitable materials.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-background py-10 sm:py-16">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-ink text-background shadow-[0_30px_80px_-48px_rgba(26,30,39,0.7)] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Let’s talk</p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.08] sm:text-5xl">
              {title ?? (
                <>
                  Let’s start creating
                  <span className="block font-serif italic font-normal">together.</span>
                </>
              )}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-background/70">{copy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <QuoteButton label="Request a Quote" />
              <CallButton variant="light" />
              <WhatsAppButton variant="light" />
            </div>
          </div>
          <div className="relative min-h-[240px] overflow-hidden">
            <img
              src={showroomImage}
              alt="KUBER PLYWOOD showroom with laminates, hardware, doors and material samples"
              className="h-full w-full object-cover transition-transform duration-[4000ms] hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-transparent to-ink/20" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function MediaFrame({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden bg-muted", className)}>
      <img
        src={src}
        alt={alt}
        width={1600}
        height={1066}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
          imgClassName,
        )}
      />
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(visible ? "animate-rise" : "translate-y-6", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
