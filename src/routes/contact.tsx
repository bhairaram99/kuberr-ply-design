import { createFileRoute } from "@tanstack/react-router";
import showroomImage from "@/assets/showroom.jpg";
import { pageHead } from "@/lib/seo";
import { company } from "@/data/company";
import { CtaBand, Container, MediaFrame, PageIntro } from "@/components/site/primitives";
import { CallButton, DirectionsButton, QuoteButton, WhatsAppButton } from "@/components/site/contact-actions";
import { EnquiryForm } from "@/components/forms/enquiry-form";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact KUBERR PLYWOOD | Showroom, Enquiry & Project Support",
      description:
        "Have a requirement? Tell KUBERR PLYWOOD what you need and the team will help you find the right products for your project.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Have a Requirement?"
        description="Tell us what you need and our team will help you find the right products for your project."
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold text-ink">Get in touch</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Call, WhatsApp or send an enquiry through the form. The team will help you find the right products for your project.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <CallButton />
              <WhatsAppButton />
              <DirectionsButton />
              <QuoteButton />
            </div>
            <div className="mt-10 space-y-2 text-sm text-muted-foreground">
              {company.contact.address ? <p>{company.contact.address}</p> : <p>Showroom address will be published once confirmed.</p>}
              {company.contact.phone ? <p>{company.contact.phone}</p> : null}
              {company.contact.email ? <p>{company.contact.email}</p> : null}
              {company.contact.openingHours ? <p>{company.contact.openingHours}</p> : <p>Opening hours will be published once confirmed.</p>}
            </div>
          </div>
          <div className="border border-border p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-ink">Enquiry form</h2>
            <p className="mt-2 mb-8 text-sm text-muted-foreground">Share a short requirement and your preferred contact details.</p>
            <EnquiryForm mode="contact" />
          </div>
        </Container>
      </section>
      <section className="bg-surface py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <MediaFrame src={showroomImage} alt="Showroom interior with plywood, laminates, hardware and flush doors" className="aspect-[4/3]" />
          <div>
            <h2 className="text-3xl font-bold text-ink">Visit the showroom</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Explore products, compare finishes and discuss project requirements with the team.
            </p>
            <div className="mt-8 min-h-56 grid place-items-center border border-dashed border-border bg-background px-6 text-center">
              <div>
                <p className="text-sm font-semibold text-ink">Map placeholder</p>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  A map will appear here once the showroom location is published. No address has been invented.
                </p>
                <div className="mt-5 flex justify-center">
                  <DirectionsButton />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
