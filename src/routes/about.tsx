import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImage from "@/assets/about-materials.jpg";
import { pageHead } from "@/lib/seo";
import { audiences, company } from "@/data/company";
import { productCategories } from "@/data/products";
import { CtaBand, Container, MediaFrame, PageIntro } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About KUBERR PLYWOOD | Interior & Furniture Material Solutions",
      description:
        "KUBERR PLYWOOD is a one-stop destination for plywood, laminates, hardware, flush doors, furniture materials and interior products for retail and bulk requirements.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="A one-stop destination for interior and furniture materials."
        description={company.description}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <MediaFrame src={aboutImage} alt="Material samples, hardware and interior plans prepared for a project discussion" className="aspect-[4/3]" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{company.tagline}</p>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Dependable products. Practical project support.</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              The company serves homeowners, carpenters, furniture manufacturers, interior designers, architects, contractors, builders and businesses — from individual furniture requirements to complete interior projects.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Customers can source plywood, laminates, hardware, flush doors, furniture materials and interior products from one place, with support for both retail and bulk orders.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-surface py-16 sm:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-ink">What we offer</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((item) => (
              <Link key={item.id} to="/products/$slug" params={{ slug: item.slug }} className="border border-border bg-background p-6 transition-colors hover:border-primary">
                <h3 className="font-bold text-ink">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-ink">Who we work with</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {audiences.map((item) => (
              <article key={item.title} className="border border-border p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Tell us about your project" />
    </>
  );
}
