import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { getCategoryBySlug } from "@/lib/catalogue";
import { CtaBand, Container, MediaFrame, PageIntro } from "@/components/site/primitives";
import { QuoteButton } from "@/components/site/contact-actions";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) =>
    pageHead({
      title: `${loaderData?.category.name ?? "Products"} | KUBERR PLYWOOD`,
      description: loaderData?.category.description ?? "Explore KUBERR PLYWOOD product categories.",
      path: `/products/${loaderData?.category.slug ?? ""}`,
    }),
  component: ProductCategoryPage,
});

function ProductCategoryPage() {
  const { category } = Route.useLoaderData();
  return (
    <>
      <PageIntro eyebrow="Products" title={category.name} description={category.description} />
      <section className="py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <MediaFrame src={category.image} alt={category.alt} className="aspect-[4/3]" priority />
          <div>
            <h2 className="text-2xl font-bold text-ink">Where {category.name.toLowerCase()} is used</h2>
            <ul className="mt-6 grid gap-3">
              {category.uses.map((use) => (
                <li key={use} className="border border-border px-4 py-3 text-sm font-semibold text-ink">
                  {use}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              Detailed grades, brands, thicknesses and pricing are not listed here. Our team will help you choose suitable options according to your project.
            </p>
            <div className="mt-8">
              <QuoteButton label="Request a Quote" />
            </div>
          </div>
        </Container>
      </section>
      <CtaBand title={`Need ${category.name.toLowerCase()} for a project?`} />
    </>
  );
}
