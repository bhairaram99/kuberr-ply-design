import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { productCategories } from "@/data/products";
import { CtaBand, Container, MediaFrame, PageIntro } from "@/components/site/primitives";

export const Route = createFileRoute("/products/")({
  head: () =>
    pageHead({
      title: "Products | Plywood, Laminates, Hardware, Doors & Interior Materials",
      description:
        "Explore KUBERR PLYWOOD product categories: plywood, laminates, hardware, flush doors, furniture materials and interior materials.",
      path: "/products",
    }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Materials for furniture, interiors and complete projects."
        description="Browse the core product categories available at KUBERR PLYWOOD. Each category can later connect to live ERP catalogue data without changing this layout."
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 md:grid-cols-2">
          {productCategories.map((category) => (
            <Link key={category.id} to="/products/$slug" params={{ slug: category.slug }} className="group block">
              <MediaFrame src={category.image} alt={category.alt} className="aspect-[16/10]" />
              <div className="mt-5">
                <h2 className="text-2xl font-bold text-ink">{category.name}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Explore {category.name} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
