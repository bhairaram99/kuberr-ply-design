import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, MessageCircle } from "lucide-react";
import { Brand } from "./brand";
import { Container } from "./primitives";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { productCategories } from "@/data/products";
import { solutions } from "@/data/solutions";
import { whatsappUrl } from "./contact-actions";
import { cn } from "@/lib/utils";

function MenuGroup({
  label,
  hub,
  items,
}: {
  label: string;
  hub: "/products" | "/solutions";
  items: { name: string; slug: string; description: string }[];
}) {
  return (
    <div className="group relative">
      <Link
        to={hub}
        className="flex h-14 items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-[min(540px,calc(100vw-2rem))] -translate-x-1/2 translate-y-2 border border-border bg-popover p-4 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {items.map((item) =>
            hub === "/products" ? (
              <Link
                key={item.slug}
                to="/products/$slug"
                params={{ slug: item.slug }}
                className="group/item p-3 transition-colors hover:bg-accent"
              >
                <span className="block text-sm font-bold text-ink group-hover/item:text-primary">{item.name}</span>
                <span className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{item.description}</span>
              </Link>
            ) : (
              <Link
                key={item.slug}
                to="/solutions/$slug"
                params={{ slug: item.slug }}
                className="group/item p-3 transition-colors hover:bg-accent"
              >
                <span className="block text-sm font-bold text-ink group-hover/item:text-primary">{item.name}</span>
                <span className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{item.description}</span>
              </Link>
            ),
          )}
        </div>
        <Link to={hub} className="mt-3 flex items-center justify-between border-t px-3 pt-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">
          View all {label}
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/95 backdrop-blur transition-all",
        scrolled && "border-border shadow-sm",
      )}
    >
      <Container className={cn("flex items-center justify-between gap-4 transition-all", scrolled ? "h-16" : "h-20")}>
        <Link to="/" aria-label="KUBERR PLYWOOD home" className="min-w-0">
          <Brand />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="flex h-14 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-primary"
            activeProps={{ className: "text-primary border-primary" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="flex h-14 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-primary"
            activeProps={{ className: "text-primary border-primary" }}
          >
            About
          </Link>
          <MenuGroup label="Products" hub="/products" items={productCategories} />
          <MenuGroup label="Solutions" hub="/solutions" items={solutions} />
          <Link
            to="/bulk-orders"
            className="flex h-14 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-primary"
            activeProps={{ className: "text-primary border-primary" }}
          >
            Bulk Orders
          </Link>
          <Link
            to="/contact"
            className="flex h-14 items-center border-b-2 border-transparent text-sm font-semibold transition-colors hover:text-primary"
            activeProps={{ className: "text-primary border-primary" }}
          >
            Contact
          </Link>
          <Button asChild>
            <Link to="/quote">Get a Quote</Link>
          </Button>
          {whatsappUrl ? (
            <Button asChild variant="ghost" size="icon" aria-label="WhatsApp KUBERR PLYWOOD">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle />
              </a>
            </Button>
          ) : null}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[88vw] max-w-sm overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <Brand />
              </SheetTitle>
              <SheetDescription>Explore products and project solutions.</SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-col">
              <MobileLink to="/" label="Home" />
              <MobileLink to="/about" label="About" />
              <p className="mt-5 mb-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Products</p>
              {productCategories.map((item) => (
                <MobileLink key={item.slug} to="/products/$slug" slug={item.slug} label={item.name} nested />
              ))}
              <p className="mt-5 mb-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Solutions</p>
              {solutions.map((item) => (
                <MobileLink key={item.slug} to="/solutions/$slug" slug={item.slug} label={item.name} nested />
              ))}
              <MobileLink to="/bulk-orders" label="Bulk Orders" />
              <MobileLink to="/contact" label="Contact" />
              <SheetClose asChild>
                <Button asChild className="mt-6">
                  <Link to="/quote">Get a Quote</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}

function MobileLink({
  to,
  label,
  nested = false,
  slug,
}: {
  to: "/" | "/about" | "/bulk-orders" | "/contact" | "/products/$slug" | "/solutions/$slug";
  label: string;
  nested?: boolean;
  slug?: string;
}) {
  const className = cn("border-b py-3.5 text-base font-semibold text-foreground", nested && "pl-3 text-sm font-medium");
  return (
    <SheetClose asChild>
      {to === "/products/$slug" && slug ? (
        <Link to="/products/$slug" params={{ slug }} className={className}>
          {label}
        </Link>
      ) : to === "/solutions/$slug" && slug ? (
        <Link to="/solutions/$slug" params={{ slug }} className={className}>
          {label}
        </Link>
      ) : (
        <Link to={to as "/"} className={className}>
          {label}
        </Link>
      )}
    </SheetClose>
  );
}
