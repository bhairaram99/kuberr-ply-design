import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { getSolutionBySlug } from "@/lib/catalogue";
import { CtaBand, Container, MediaFrame, PageIntro } from "@/components/site/primitives";
import { QuoteButton } from "@/components/site/contact-actions";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = getSolutionBySlug(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) =>
    pageHead({
      title: `${loaderData?.solution.name ?? "Solutions"} | KUBERR PLYWOOD`,
      description: loaderData?.solution.description ?? "Explore KUBERR PLYWOOD project solutions.",
      path: `/solutions/${loaderData?.solution.slug ?? ""}`,
    }),
  component: SolutionDetailPage,
});

function SolutionDetailPage() {
  const { solution } = Route.useLoaderData();
  return (
    <>
      <PageIntro eyebrow="Solutions" title={solution.name} description={solution.description} />
      <section className="py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <MediaFrame src={solution.image} alt={solution.alt} className="aspect-[4/3]" priority />
          <div>
            <h2 className="text-2xl font-bold text-ink">Materials that work together</h2>
            <ul className="mt-6 grid gap-3">
              {solution.materials.map((item) => (
                <li key={item} className="border border-border px-4 py-3 text-sm font-semibold text-ink">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <QuoteButton label="Request a Quote" />
            </div>
          </div>
        </Container>
      </section>
      <CtaBand title={`Planning a ${solution.name.toLowerCase()} project?`} />
    </>
  );
}
