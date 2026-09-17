import { Link } from "@tanstack/react-router";
import { Brand } from "./brand";
import { Container } from "./primitives";
import { CallButton, WhatsAppButton } from "./contact-actions";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import { solutions } from "@/data/solutions";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Bulk Orders", to: "/bulk-orders" },
  { label: "Contact", to: "/contact" },
];

function FooterLinks({
  title,
  items,
  className,
}: {
  title: string;
  items: { label: string; to: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-background/55">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="text-sm text-background/80 transition-colors hover:text-background">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-background">
      <Container className="grid grid-cols-2 gap-x-8 gap-y-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-12">
        <div className="col-span-2 sm:col-span-1">
          <div className="inline-flex rounded-2xl bg-white p-3 shadow-sm">
            <Brand className="h-12 max-w-[180px] sm:h-14 sm:max-w-[200px]" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-background/65">{company.description}</p>
          <p className="mt-5 text-sm font-bold text-background">{company.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CallButton variant="light" />
            <WhatsAppButton variant="light" />
          </div>
        </div>
        <FooterLinks title="Quick links" items={links} />
        <FooterLinks
          title="Products"
          items={productCategories.map((item) => ({ label: item.name, to: `/products/${item.slug}` }))}
        />
        <FooterLinks
          title="Solutions"
          items={solutions.map((item) => ({ label: item.name, to: `/solutions/${item.slug}` }))}
          className="col-span-2 sm:col-span-1"
        />
      </Container>
      <div className="border-t border-background/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© KUBER PLYWOOD. All rights reserved.</p>
          <p>Complete Interior & Furniture Material Solutions</p>
        </Container>
      </div>
    </footer>
  );
}
