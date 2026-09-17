import { productCategories, products, type ProductCategory, type Product } from "@/data/products";
import { solutions, type Solution } from "@/data/solutions";

export interface CatalogueSource {
  getCategories(): Promise<ProductCategory[]>;
  getProducts(category?: string): Promise<Product[]>;
  getSolutions(): Promise<Solution[]>;
}

const localCatalogue: CatalogueSource = {
  async getCategories() {
    return productCategories;
  },
  async getProducts(category) {
    return category ? products.filter((item) => item.category === category) : products;
  },
  async getSolutions() {
    return solutions;
  },
};

export const catalogueService: CatalogueSource = localCatalogue;
export const getCategoryBySlug = (slug: string) => productCategories.find((item) => item.slug === slug);
export const getSolutionBySlug = (slug: string) => solutions.find((item) => item.slug === slug);
