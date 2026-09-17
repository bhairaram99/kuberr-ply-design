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
import { ExplorePair } from "./hero-bits";
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
  const tints = [
    "bg-[#f3e4d4]",
    "bg-[#f3d4ce]",
    "bg-[#d9e3eb]",
    "bg-[#efe6d8]",
    "bg-[#e4ebe6]",
    "bg-[#dde5ee]",
  ];

  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="max-w-xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
              Our selected
              <span className="block">materials</span>
            </h2>
          </Reveal>
          <Reveal className="max-w-md">
            <p className="text-sm leading-7 text-muted-foreground">
              Explore plywood, laminates, hardware, doors and finishing materials arranged for furniture and interior projects.
            </p>
            <div className="mt-6">
              <ExplorePair to="/products" />
            </div>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <Link
                to="/products/$slug"
                params={{ slug: category.slug }}
                className={cn("group block overflow-hidden rounded-[1.75rem] p-5 transition-transform duration-500 hover:-translate-y-1", tints[index] ?? "bg-muted")}
              >
                <MediaFrame src={category.image} alt={category.alt} className="aspect-[4/3] rounded-[1.25rem] bg-transparent" imgClassName="object-cover" />
                <div className="px-2 pt-5 pb-2">
                  <h3 className="font-serif text-2xl italic text-ink">{category.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/65">{category.description}</p>
                </div>
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
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Why KUBERR</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-extrabold text-ink sm:text-5xl">
            Why choose <span className="font-serif italic font-normal">KUBERR PLYWOOD?</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] ?? Layers;
            return (
              <Reveal key={benefit.title} delay={index * 60} className="rounded-[1.5rem] bg-white/60 p-8 shadow-[0_12px_40px_-28px_rgba(26,30,39,0.45)]">
                <Icon className="size-6 text-primary" strokeWidth={1.5} />
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
            title="Materials for every project."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 60} className="group overflow-hidden rounded-[1.75rem] bg-white/50">
              <MediaFrame
                src={audienceImages[index]?.image ?? plywoodImage}
                alt={audienceImages[index]?.alt ?? audience.title}
                className="aspect-[16/10]"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl italic text-ink">{audience.title}</h3>
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
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Project solutions</p>
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
              Complete project
              <span className="block font-serif italic font-normal">solutions.</span>
            </h2>
          </Reveal>
          <Reveal className="max-w-md">
            <p className="text-sm leading-7 text-muted-foreground">
              From the first sheet of plywood to the final finishing touch — tap a project type to see the material mix.
            </p>
            <div className="mt-6">
              <ExplorePair to="/solutions" label="View All" />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-[2rem] bg-white/70 shadow-[0_30px_80px_-48px_rgba(26,30,39,0.55)] lg:grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]">
            {solutions.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.alt}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
                  item.id === current.id ? "opacity-100 animate-kenburns" : "opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Material mix</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {current.materials.map((material) => (
                  <span
                    key={material}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col p-3 sm:p-5">
            {solutions.map((item, index) => {
              const selected = item.id === current.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "group relative flex w-full items-start gap-4 overflow-hidden rounded-[1.25rem] px-4 py-5 text-left transition-all duration-500",
                    selected ? "bg-[#f3e4d4] text-ink" : "text-ink/80 hover:bg-muted/80",
                  )}
                >
                  <span className="mt-0.5 font-serif text-lg italic text-primary/80">0{index + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="block text-lg font-bold sm:text-xl">{item.name}</span>
                      <ArrowRight
                        className={cn(
                          "size-4 shrink-0 transition-transform duration-500",
                          selected ? "translate-x-1 text-primary" : "text-ink/30 group-hover:translate-x-1 group-hover:text-primary",
                        )}
                      />
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-ink/60">{item.description}</span>
                  </span>
                </button>
              );
            })}
            <div className="mt-auto p-4">
              <Button asChild className="rounded-full">
                <Link to="/solutions/$slug" params={{ slug: current.slug }}>
                  Explore {current.name} <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
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
    <section className="relative overflow-hidden bg-ink py-20 text-background sm:py-28">
      <img
        src="/logo.png"
        alt=""
        className="pointer-events-none absolute -right-16 -top-10 w-[28rem] opacity-[0.06] grayscale"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Bulk orders</p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Planning a
            <span className="block font-serif italic font-normal">large project?</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-background/70">
            KUBERR PLYWOOD also serves customers with bulk material requirements. We help with product selection, quantity planning, pricing discussions and availability.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {["Contractors", "Builders", "Interior Designers", "Furniture Manufacturers", "Businesses"].map((item) => (
              <li key={item} className="bulk-pill">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <QuoteButton label="Request a Quote" />
            <CallButton variant="light" />
            <WhatsAppButton variant="light" />
          </div>
        </Reveal>
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-40 w-40 rounded-full bg-brand-red/20 blur-3xl lg:block" />
            <MediaFrame
              src={bulkImage}
              alt="Large interior project materials staged for a commercial fit-out"
              className="relative aspect-[4/3] rotate-1 rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:rotate-0"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ShowroomSection() {
  return (
    <section className="bg-background py-16 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <MediaFrame src={showroomImage} alt="KUBERR PLYWOOD showroom with laminates, hardware, doors and material samples" className="aspect-[4/5] rounded-[1.75rem] sm:aspect-[4/3]" />
        </Reveal>
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Visit our showroom</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
            Explore. Compare. <span className="font-serif italic font-normal">Choose.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            Visit the KUBERR PLYWOOD showroom to explore our products and discuss your project requirements with our team. Whether you need materials for a single piece of furniture or an entire interior project, our team is ready to assist you.
          </p>
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
