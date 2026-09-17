import { createFileRoute } from "@tanstack/react-router";
import { HeroSection, ManifestoSection } from "@/components/home/hero";
import {
  AudienceSection,
  BulkSection,
  CategorySection,
  ShowroomSection,
  SolutionSelector,
  WhyChooseSection,
} from "@/components/home/sections";
import { CtaBand } from "@/components/site/primitives";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "KUBERR PLYWOOD | Plywood, Laminates, Hardware & Interior Materials",
      description:
        "KUBERR PLYWOOD provides plywood, laminates, hardware, flush doors, furniture materials and interior products for homeowners, carpenters, designers, contractors, builders and businesses.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <CategorySection />
      <WhyChooseSection />
      <AudienceSection />
      <SolutionSelector />
      <BulkSection />
      <ShowroomSection />
      <CtaBand />
    </>
  );
}
