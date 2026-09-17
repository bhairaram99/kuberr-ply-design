import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageIntro, Container } from "@/components/site/primitives";
import { EnquiryForm } from "@/components/forms/enquiry-form";

export const Route = createFileRoute("/quote")({
  head: () =>
    pageHead({
      title: "Request a Quote | KUBERR PLYWOOD",
      description:
        "Request a quote from KUBERR PLYWOOD for plywood, laminates, hardware, flush doors, furniture materials and interior products.",
      path: "/quote",
    }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <>
      <PageIntro
        eyebrow="Request a quote"
        title="Tell us what your project needs."
        description="Share the products, quantities and project type. This form is ready for a future CRM or ERP connection; until then, use the honest confirmation state after submit."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl border border-border p-6 sm:p-10">
          <EnquiryForm mode="quote" />
        </Container>
      </section>
    </>
  );
}
