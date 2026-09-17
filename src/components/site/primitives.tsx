import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  title = "Ready to plan your requirement?",
  copy = "Tell us what you need. Our team will help you identify suitable materials for your project.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-surface-strong py-16 text-background sm:py-20">
      <Container className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">Start a conversation</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-background/70">{copy}</p>
        </div>
        <Button asChild variant="light" size="lg">
          <Link to="/quote">
            Request a Quote <ArrowRight />
          </Link>
        </Button>
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
      className={cn(visible ? "animate-rise" : "opacity-0", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
