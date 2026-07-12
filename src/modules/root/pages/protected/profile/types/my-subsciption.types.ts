import type { z } from "zod";
import type { mySubscriptionsSchema } from "../schema/my-subscriptions.schema";

export type MySubscription = z.infer<typeof mySubscriptionsSchema>;
export type MySubscriptions = z.infer<typeof mySubscriptionsSchema>;
