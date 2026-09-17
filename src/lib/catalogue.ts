import { productCategories, products, type ProductCategory, type Product } from "@/data/products";

export interface CatalogueSource {
  getCategories(): Promise<ProductCategory[]>;
  getProducts(category?: string): Promise<Product[]>;
}

const localCatalogue: CatalogueSource = {
  async getCategories() { return productCategories; },
  async getProducts(category) { return category ? products.filter((item) => item.category === category) : products; },
};

export const catalogueService: CatalogueSource = localCatalogue;
export const getCategoryBySlug = (slug: string) => productCategories.find((item) => item.slug === slug);
