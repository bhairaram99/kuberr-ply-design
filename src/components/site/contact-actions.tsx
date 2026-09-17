import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Button } from "@/components/ui/button";

const message = encodeURIComponent("Hello KUBERR PLYWOOD, I would like to enquire about your products.");
export const whatsappUrl = company.contact.whatsapp ? `https://wa.me/${company.contact.whatsapp.replace(/\D/g, "")}?text=${message}` : "";

export function WhatsAppButton({ label = "WhatsApp Us", variant = "outline" as const }) {
  if (!whatsappUrl) return <Button variant={variant} disabled title="WhatsApp number will be added soon"><MessageCircle />{label}</Button>;
  return <Button asChild variant={variant}><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle />{label}</a></Button>;
}
export function CallButton() {
  if (!company.contact.phone) return <Button variant="outline" disabled title="Phone number will be added soon"><Phone />Call Us</Button>;
  return <Button asChild variant="outline"><a href={`tel:${company.contact.phone}`}><Phone />Call Us</a></Button>;
}
export function DirectionsButton() {
  if (!company.contact.mapsUrl) return <Button variant="outline" disabled title="Showroom location will be added soon"><MapPin />Get Directions</Button>;
  return <Button asChild variant="outline"><a href={company.contact.mapsUrl} target="_blank" rel="noreferrer"><MapPin />Get Directions</a></Button>;
}
export function FloatingWhatsApp() {
  if (!whatsappUrl) return null;
  return <a aria-label="WhatsApp KUBERR PLYWOOD" href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-ink text-background shadow-xl transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><MessageCircle className="size-5" /></a>;
}
export function QuoteButton({ label = "Get a Quote", variant = "default" as const }) {
  return <Button asChild variant={variant}><Link to="/quote">{label}</Link></Button>;
}
