import { useQuery } from "@tanstack/react-query";
import { getSubscriptionsService } from "../service/subscriptions.service";
import type { Product } from "../types/subscriptions.types";

export const useSubscriptionsQueries = () => {
  return useQuery<Product[]>({
    queryKey: ["subscriptions"],
    queryFn: getSubscriptionsService,
  });
};
