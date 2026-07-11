import { api } from "../../../services/http/api";
import { ProductSchema } from "../schema/products.schema";
import type { Product } from "../types/products.types";

export const getProductsService = async (): Promise<Product[]> => {
  try {
    const response = await api.get("/plans");

    const products = ProductSchema.array().parse(response.data);

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
