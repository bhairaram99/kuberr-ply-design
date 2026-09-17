import kitchenImage from "@/assets/solution-kitchen.jpg";
import wardrobeImage from "@/assets/solution-wardrobe.jpg";
import furnitureImage from "@/assets/solution-furniture.jpg";
import homeImage from "@/assets/solution-home-interior.jpg";
import officeImage from "@/assets/solution-office.jpg";

export type Solution = { id: string; name: string; slug: string; description: string; image: string; alt: string; materials: string[] };
export const solutions: Solution[] = [
  { id: "kitchen", name: "Kitchen", slug: "kitchen", description: "Bring cabinetry, finishes and fittings together for a cohesive kitchen project.", image: kitchenImage, alt: "Modern modular kitchen with wood cabinetry and refined hardware", materials: ["Plywood", "Laminates", "Hinges", "Channels", "Handles", "Kitchen Hardware"] },
  { id: "wardrobe", name: "Wardrobe", slug: "wardrobe", description: "Coordinate structural materials, surfaces and everyday-use hardware for wardrobe projects.", image: wardrobeImage, alt: "Modern wardrobe with warm wood cabinetry and matte laminate doors", materials: ["Plywood", "Laminates", "Hinges", "Channels", "Handles", "Accessories"] },
  { id: "furniture", name: "Furniture", slug: "furniture", description: "Select complementary materials and accessories for custom furniture requirements.", image: furnitureImage, alt: "Custom wood furniture and cabinetry in a refined dining space", materials: ["Plywood", "Laminates", "Hardware", "Furniture Accessories"] },
  { id: "home-interior", name: "Home Interior", slug: "home-interior", description: "Source connected material needs across rooms from one destination.", image: homeImage, alt: "Complete contemporary home interior with coordinated wood materials", materials: ["Plywood", "Laminates", "Doors", "Hardware", "Interior Materials"] },
  { id: "office-commercial", name: "Office & Commercial", slug: "office-commercial", description: "Plan materials for offices, retail, hospitality and other commercial environments.", image: officeImage, alt: "Contemporary commercial office with wood cabinetry and laminate panels", materials: ["Plywood", "Laminates", "Doors", "Hardware", "Interior Solutions"] },
];
