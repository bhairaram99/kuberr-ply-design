import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/primitives";
import { WhatsAppButton } from "@/components/site/contact-actions";
import { company } from "@/data/company";

export function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => setOffset(Math.min(window.scrollY, 420));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-ink text-background">
      <img
        src={heroImage}
        alt="Premium contemporary kitchen with warm wood cabinetry, laminate surfaces and refined hardware"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover animate-reveal"
        style={{ transform: `translateY(${offset * 0.12}px) scale(1.08)` }}
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/15" />
      <Container className="relative flex min-h-[100svh] items-end pb-16 pt-28 sm:pb-24">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">{company.name}</p>
          <h1 className="mt-5 text-3xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">{company.positioning}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-background/78 sm:text-lg">
            Plywood, laminates, hardware, flush doors, furniture materials and interior products — all in one destination.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link to="/products">
                Explore Products <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="light">
              <Link to="/quote">Get a Quote</Link>
            </Button>
            <WhatsAppButton variant="outline" />
          </div>
        </div>
      </Container>
    </section>
  );
}
