import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Handshake,
  Layers,
  Package,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import bulkImage from "@/assets/bulk-project.jpg";
import showroomImage from "@/assets/showroom.jpg";
import { Button } from "@/components/ui/button";
import { Container, MediaFrame, Reveal, SectionHeading } from "@/components/site/primitives";
import { CallButton, DirectionsButton, QuoteButton, WhatsAppButton } from "@/components/site/contact-actions";
import { audiences, benefits, company } from "@/data/company";
import { productCategories } from "@/data/products";
import { solutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

const benefitIcons = [Layers, Sparkles, Wallet, ShieldCheck, Package, Handshake];
const plywoodImage = productCategories.find((item) => item.id === "plywood")?.image ?? bulkImage;
const furnitureImage = productCategories.find((item) => item.id === "furniture-materials")?.image ?? plywoodImage;
const interiorImage = productCategories.find((item) => item.id === "interior-materials")?.image ?? plywoodImage;
const homeSolutionImage = solutions.find((item) => item.id === "home-interior")?.image ?? plywoodImage;
const furnitureSolutionImage = solutions.find((item) => item.id === "furniture")?.image ?? furnitureImage;
const officeSolutionImage = solutions.find((item) => item.id === "office-commercial")?.image ?? interiorImage;
const audienceImages = [
  { image: homeSolutionImage, alt: "Residential interior materials for homeowners" },
  { image: furnitureImage, alt: "Cabinetry workshop materials for carpenters" },
  { image: furnitureSolutionImage, alt: "Furniture manufacturing materials" },
  { image: interiorImage, alt: "Material selection for interior designers and architects" },
  { image: bulkImage, alt: "Project materials for contractors and builders" },
  { image: officeSolutionImage, alt: "Commercial interior materials for businesses" },
];

export function CategorySection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Product categories" title="Everything You Need. One Destination." copy={company.description} />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 70}>
              <Link to="/products/$slug" params={{ slug: category.slug }} className="group block">
                <MediaFrame src={category.image} alt={category.alt} className="aspect-[4/3]" />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{category.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                  </div>
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center border border-border transition-transform group-hover:translate-x-1 group-hover:border-primary group-hover:text-primary">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Explore {category.name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Why KUBERR" title="Why Choose KUBERR PLYWOOD?" />
        </Reveal>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] ?? Layers;
            return (
              <Reveal key={benefit.title} delay={index * 60} className="bg-background p-8">
                <Icon className="size-6 text-primary" strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-bold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{benefit.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Who we serve"
            title="Materials for Every Project. Support for Every Customer."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 60} className="group border border-border bg-background">
              <MediaFrame
                src={audienceImages[index]?.image ?? plywoodImage}
                alt={audienceImages[index]?.alt ?? audience.title}
                className="aspect-[16/10]"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{audience.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionSelector() {
  const firstSolution = solutions[0];
  const [active, setActive] = useState(firstSolution?.id ?? "kitchen");
  const current = solutions.find((item) => item.id === active) ?? firstSolution;
  if (!current) return null;

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Project solutions"
            title="Complete Project Solutions"
            copy="From the first sheet of plywood to the final finishing touch."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <Reveal className="overflow-hidden bg-background">
            <MediaFrame src={current.image} alt={current.alt} className="aspect-[4/3] lg:h-full lg:aspect-auto" />
          </Reveal>
          <div>
            <div className="mb-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
              {solutions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "shrink-0 border px-4 py-2 text-sm font-semibold",
                    item.id === current.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="hidden lg:block">
              {solutions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "flex w-full items-start justify-between border-b px-1 py-5 text-left transition-colors",
                    item.id === current.id ? "text-primary" : "text-ink hover:text-primary",
                  )}
                >
                  <span>
                    <span className="block text-xl font-bold">{item.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{item.description}</span>
                  </span>
                  <ArrowRight className={cn("mt-1 size-4", item.id === current.id ? "translate-x-1" : "")} />
                </button>
              ))}
            </div>
            <div className="mt-6 border border-border bg-background p-6 lg:mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Material mix</p>
              <p className="mt-3 text-lg font-bold text-ink">{current.materials.join(" + ")}</p>
              <Button asChild className="mt-6">
                <Link to="/solutions/$slug" params={{ slug: current.slug }}>
                  Explore {current.name} <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FeaturedSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Materials" title="Explore Our Materials" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.slice(0, 5).map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <Link to="/products/$slug" params={{ slug: item.slug }} className="group block border border-border">
                <MediaFrame src={item.image} alt={item.alt} className="aspect-[5/4]" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BulkSection() {
  return (
    <section className="bg-ink py-20 text-background sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Bulk orders</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Planning a Large Project?</h2>
          <p className="mt-5 max-w-xl text-background/70">
            KUBERR PLYWOOD also serves customers with bulk material requirements. We help with product selection, quantity planning, pricing discussions and availability.
          </p>
          <ul className="mt-8 grid gap-3 text-sm font-semibold sm:grid-cols-2">
            {["Contractors", "Builders", "Interior Designers", "Furniture Manufacturers", "Businesses"].map((item) => (
              <li key={item} className="border border-background/15 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QuoteButton label="Request a Quote" />
            <WhatsAppButton />
          </div>
        </Reveal>
        <Reveal>
          <MediaFrame src={bulkImage} alt="Large interior project materials staged for a commercial fit-out" className="aspect-[4/3]" />
        </Reveal>
      </Container>
    </section>
  );
}

export function ShowroomSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <MediaFrame src={showroomImage} alt="KUBERR PLYWOOD showroom with laminates, hardware, doors and material samples" className="aspect-[4/3]" />
        </Reveal>
        <Reveal>
          <SectionHeading
            eyebrow="Visit our showroom"
            title="Explore. Compare. Choose."
            copy="Visit the KUBERR PLYWOOD showroom to explore our products and discuss your project requirements with our team. Whether you need materials for a single piece of furniture or an entire interior project, our team is ready to assist you."
          />
          {!company.contact.address ? (
            <p className="mt-5 text-sm text-muted-foreground">Showroom address and visiting hours will be published once confirmed.</p>
          ) : (
            <p className="mt-5 text-sm text-muted-foreground">{company.contact.address}</p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <DirectionsButton />
            <CallButton />
            <WhatsAppButton />
            <QuoteButton />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
