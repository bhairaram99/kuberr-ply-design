import plywoodImage from "@/assets/product-plywood.jpg";
import laminatesImage from "@/assets/product-laminates.jpg";
import hardwareImage from "@/assets/product-hardware.jpg";
import doorsImage from "@/assets/product-flush-doors.jpg";
import furnitureImage from "@/assets/product-furniture-materials.jpg";
import interiorImage from "@/assets/product-interior-materials.jpg";

export type ProductCategory = {
  id: string; name: string; slug: string; description: string; image: string; alt: string; uses: string[];
};

export type Product = {
  id: string; name: string; slug: string; category: string; description: string; image: string; status: "featured" | "available";
};

export const productCategories: ProductCategory[] = [
  { id: "plywood", name: "Plywood", slug: "plywood", description: "Quality plywood for furniture, kitchens, wardrobes, cabinets, interiors and commercial projects.", image: plywoodImage, alt: "Plywood sheets displayed in an architectural materials showroom", uses: ["Furniture", "Kitchens", "Wardrobes", "Cabinets", "Interior projects"] },
  { id: "laminates", name: "Laminates", slug: "laminates", description: "A wide selection of decorative laminates in different colours, designs, textures and finishes for modern and traditional interiors.", image: laminatesImage, alt: "Coordinated woodgrain, stone and solid-colour laminate samples", uses: ["Cabinet finishes", "Furniture surfaces", "Wall applications", "Residential interiors", "Commercial interiors"] },
  { id: "hardware", name: "Hardware", slug: "hardware", description: "Furniture and interior hardware including hinges, handles, drawer channels, locks, knobs, cabinet fittings, connectors, screws and kitchen fittings.", image: hardwareImage, alt: "Neatly organized furniture handles, hinges, channels, locks and fittings", uses: ["Hinges", "Handles", "Drawer channels", "Locks & knobs", "Cabinet fittings"] },
  { id: "flush-doors", name: "Flush Doors", slug: "flush-doors", description: "Reliable flush doors suitable for homes, offices, commercial spaces and interior projects.", image: doorsImage, alt: "Warm wood flush doors in a contemporary interior", uses: ["Homes", "Offices", "Commercial spaces", "Interior projects"] },
  { id: "furniture-materials", name: "Furniture Materials", slug: "furniture-materials", description: "Essential materials and accessories for furniture manufacturing, assembly and finishing.", image: furnitureImage, alt: "Clean professional cabinetry and furniture workshop", uses: ["Manufacturing", "Assembly", "Finishing", "Custom furniture", "Cabinetry"] },
  { id: "interior-materials", name: "Interior Materials", slug: "interior-materials", description: "A range of products and accessories to help complete residential, commercial and furniture projects.", image: interiorImage, alt: "Completed interior with coordinated cabinetry, panels and doors", uses: ["Residential projects", "Commercial projects", "Furniture projects", "Finishing work"] },
];

export const products: Product[] = productCategories.map((category) => ({
  id: `${category.id}-featured`, name: category.name, slug: category.slug, category: category.id,
  description: category.description, image: category.image, status: "featured",
}));
