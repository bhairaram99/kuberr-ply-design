import heroImage from "@/assets/hero-kitchen.jpg";
import aboutImage from "@/assets/about-materials.jpg";
import { Container } from "@/components/site/primitives";
import { productCategories } from "@/data/products";
import { CloverMark, ExplorePair, WaterChip } from "./hero-bits";

const chipFills: Record<string, string> = {
  plywood: "var(--ink)",
  laminates: "var(--brand-red)",
  hardware: "var(--brand-blue)",
  "flush-doors": "var(--brand-red-dark)",
  "furniture-materials": "var(--ink)",
  "interior-materials": "var(--brand-blue)",
};

const chipLabels: Record<string, string> = {
  "furniture-materials": "Furniture",
  "interior-materials": "Interiors",
  "flush-doors": "Flush Doors",
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-12 sm:pt-36 sm:pb-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
        <div className="animate-rise">
          <div className="relative mb-8 h-28 w-48">
            <img
              src={aboutImage}
              alt=""
              className="absolute left-0 top-2 size-[5.5rem] rounded-full object-cover shadow-md animate-float"
            />
            <CloverMark className="absolute left-16 top-0 size-24 text-[#4D6275] animate-float" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">KUBER PLYWOOD</p>
          <h1 className="mt-4 max-w-xl text-[2.7rem] font-extrabold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Complete
            <span className="mt-2 block font-serif text-[1.02em] font-normal italic text-ink">Materials.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
            Plywood, laminates, hardware, flush doors and interior products — all in one destination.
          </p>
          <div className="mt-8 flex max-w-lg flex-wrap gap-2.5">
            {productCategories.map((item) => (
              <WaterChip
                key={item.id}
                to="/products/$slug"
                slug={item.slug}
                label={chipLabels[item.id] ?? item.name}
                image={item.image}
                alt={item.name}
                fill={chipFills[item.id] ?? "var(--ink)"}
              />
            ))}
          </div>
          <div className="mt-10">
            <ExplorePair to="/products" label="Explore Now" />
          </div>
        </div>
        <div className="relative animate-reveal">
          <div className="overflow-hidden rounded-[1.75rem] bg-muted shadow-[0_30px_80px_-40px_rgba(26,30,39,0.45)]">
            <img
              src={heroImage}
              alt="Premium contemporary kitchen with warm wood cabinetry, laminate surfaces and refined hardware"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <p className="pointer-events-none absolute bottom-6 right-6 max-w-[16rem] text-right text-[11px] font-semibold uppercase leading-5 tracking-[0.14em] text-white drop-shadow-md">
            Complete interior & furniture material solutions for homes, workshops and projects.
          </p>
        </div>
      </Container>
      <div className="pointer-events-none absolute -left-24 top-40 size-72 rounded-full bg-brand-red/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-brand-blue/10 blur-3xl" />
    </section>
  );
}

export function ManifestoSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <h2 className="max-w-5xl text-3xl font-extrabold leading-[1.15] text-ink sm:text-5xl">
          KUBERR PLYWOOD is <span className="font-serif italic font-normal">forging</span> complete interior material solutions.
        </h2>
        <div className="mt-10 grid gap-8 text-sm leading-7 text-muted-foreground md:grid-cols-2 md:text-base md:leading-8">
          <p>
            KUBERR PLYWOOD is a one-stop destination for plywood, laminates, hardware, flush doors, furniture materials and interior products. The company serves homeowners, carpenters, furniture manufacturers, interior designers, architects, contractors, builders and businesses.
          </p>
          <p>
            From an individual furniture requirement to a complete interior project, the team helps customers select suitable materials according to the work at hand — with support for both retail and bulk orders.
          </p>
        </div>
        <p className="mt-16 max-w-6xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Crafting spaces from the first sheet to the{" "}
          <span className="font-serif italic font-normal">final finish.</span>
        </p>
      </Container>
    </section>
  );
}
