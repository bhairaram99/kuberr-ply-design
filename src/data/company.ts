export const company = {
  name: "KUBERR PLYWOOD",
  tagline: "Build Better. Furnish Better. Finish Better.",
  positioning: "Complete Interior & Furniture Material Solutions",
  description: "KUBERR PLYWOOD is a one-stop destination for plywood, laminates, hardware, flush doors, furniture materials and interior products.",
  contact: {
    phone: import.meta.env.VITE_PHONE_NUMBER ?? "",
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
    email: import.meta.env.VITE_EMAIL ?? "",
    address: import.meta.env.VITE_SHOWROOM_ADDRESS ?? "",
    openingHours: import.meta.env.VITE_OPENING_HOURS ?? "",
    mapsUrl: import.meta.env.VITE_GOOGLE_MAPS_URL ?? "",
  },
} as const;

export const audiences = [
  { title: "Homeowners", description: "Materials for kitchens, wardrobes, bedrooms, furniture, doors and complete home interiors." },
  { title: "Carpenters", description: "Plywood, laminates, hardware and accessories required for furniture and interior work." },
  { title: "Furniture Manufacturers", description: "Materials and hardware for manufacturing and finishing furniture." },
  { title: "Interior Designers & Architects", description: "A broad selection of materials, finishes and fittings for interior projects." },
  { title: "Contractors & Builders", description: "Materials for residential, commercial and construction projects, including bulk requirements." },
  { title: "Businesses", description: "Solutions for offices, shops, restaurants, hotels and other commercial spaces." },
] as const;

export const benefits = [
  { title: "One-Stop Destination", description: "Get plywood, laminates, hardware, doors and other interior materials from one place." },
  { title: "Wide Product Selection", description: "Choose from a variety of products, designs, finishes and hardware options." },
  { title: "Competitive Pricing", description: "Solutions suitable for different project sizes and budgets." },
  { title: "Quality-Focused Products", description: "Dependable products for furniture, interiors and construction requirements." },
  { title: "Retail & Bulk Orders", description: "For individual customers, contractors, builders, designers and businesses." },
  { title: "Customer Support", description: "Help selecting suitable products according to your requirements." },
] as const;
