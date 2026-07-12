import { api } from "../../../services/http/api";
import { ProductSchema } from "../schema/subscriptions.schema";
import type { Product } from "../types/subscriptions.types";
import { loadError } from "../../../utils/error/load-error/load-error";

export const getSubscriptionsService = async (): Promise<Product[]> => {
  try {
    const response = await api.get("/plans");

    const products = ProductSchema.array().parse(response.data);

    return products;
  } catch (error) {
    loadError(error);
    throw error;
  }
};
