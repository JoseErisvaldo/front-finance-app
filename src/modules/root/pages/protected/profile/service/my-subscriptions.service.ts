import type { MySubscriptions } from "../types/my-subsciption.types";
import { mySubscriptionsSchema } from "../schema/my-subscriptions.schema";
import { api } from "../../../../../../shared/services/http/api";
import { loadError } from "../../../../../../shared/utils/error/load-error/load-error";

export const getMySubscriptionsService = async (): Promise<
  MySubscriptions[] | undefined
> => {
  try {
    const response = await api.get("/mySubscriptions");

    const mySubscriptions = mySubscriptionsSchema.parse(response.data);
    return [mySubscriptions];
  } catch (error) {
    loadError(error);
    return undefined;
  }
};
