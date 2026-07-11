import { useQuery } from "@tanstack/react-query";
import { getProductsService } from "../service/products.service";
import type { Product } from "../types/products.types";

export const useProductsQueries = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProductsService,
  });
};
