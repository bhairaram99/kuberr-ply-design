import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { CtaBand, Container, MediaFrame, PageIntro } from "@/components/site/primitives";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    pageHead({
      title: "Project Solutions | Kitchen, Wardrobe, Furniture & Interiors",
      description:
        "Plan kitchen, wardrobe, furniture, home interior and office materials with KUBERR PLYWOOD — from plywood and laminates to hardware and finishing products.",
      path: "/solutions",
    }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="From the first sheet of plywood to the final finishing touch."
        description="Use KUBERR PLYWOOD as a connected source of materials for kitchens, wardrobes, furniture, home interiors and commercial spaces."
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          {solutions.map((item) => (
            <Link key={item.id} to="/solutions/$slug" params={{ slug: item.slug }} className="group block">
              <MediaFrame src={item.image} alt={item.alt} className="aspect-[16/10]" />
              <div className="mt-5">
                <h2 className="text-2xl font-bold text-ink">{item.name}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <p className="mt-3 text-sm font-semibold text-ink">{item.materials.join(" + ")}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Explore {item.name} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
