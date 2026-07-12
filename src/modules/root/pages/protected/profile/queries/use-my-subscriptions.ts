import { useQuery } from "@tanstack/react-query";
import { getMySubscriptionsService } from "../service/my-subscriptions.service";
import type { MySubscriptions } from "../types/my-subsciption.types";

export const useMySubscriptionsQueries = () => {
  return useQuery<MySubscriptions[]>({
    queryKey: ["my-subscriptions"],
    queryFn: async () => {
      const result = await getMySubscriptionsService();
      return result ?? [];
    },
  });
};
