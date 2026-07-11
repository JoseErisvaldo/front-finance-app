import { api } from "../../../services/http/api";
import { ProductSchema } from "../schema/products.schema";
import type { Product } from "../types/products.types";
import { loadError } from "../../../utils/error/load-error/load-error";

export const getProductsService = async (): Promise<Product[]> => {
  try {
    const response = await api.get("/plans");

    const products = ProductSchema.array().parse(response.data);

    return products;
  } catch (error) {
    loadError(error);
    throw error;
  }
};
