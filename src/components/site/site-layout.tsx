import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingWhatsApp } from "./contact-actions";
export function SiteLayout({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /><FloatingWhatsApp /></>; }
