import { createFileRoute } from "@tanstack/react-router";
import bulkImage from "@/assets/bulk-project.jpg";
import { pageHead } from "@/lib/seo";
import { CtaBand, Container, MediaFrame, PageIntro } from "@/components/site/primitives";
import { QuoteButton, WhatsAppButton } from "@/components/site/contact-actions";

export const Route = createFileRoute("/bulk-orders")({
  head: () =>
    pageHead({
      title: "Bulk Orders | Project Materials for Contractors, Builders & Businesses",
      description:
        "KUBERR PLYWOOD serves bulk material requirements for contractors, builders, interior designers, furniture manufacturers and businesses.",
      path: "/bulk-orders",
    }),
  component: BulkOrdersPage,
});

function BulkOrdersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Bulk orders"
        title="Planning a large project?"
        description="KUBERR PLYWOOD also serves customers with bulk material requirements. Share the products, quantities and project type so the team can help you plan."
      />
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <MediaFrame src={bulkImage} alt="Commercial interior project with coordinated wood materials ready for bulk supply" className="aspect-[4/3]" />
          <div>
            <h2 className="text-2xl font-bold text-ink">Useful for</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Contractors", "Builders", "Interior Designers", "Furniture Manufacturers", "Businesses"].map((item) => (
                <li key={item} className="border border-border px-4 py-3 text-sm font-semibold">
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-bold text-ink">What we can discuss</h2>
            <ul className="mt-6 grid gap-3">
              {["Product selection", "Quantity requirements", "Pricing", "Availability", "Bulk orders", "Project materials"].map(
                (item) => (
                  <li key={item} className="text-sm leading-6 text-muted-foreground">
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteButton label="Request a Quote" />
              <WhatsAppButton />
            </div>
          </div>
        </Container>
      </section>
      <CtaBand title="Share your bulk requirement" />
    </>
  );
}
