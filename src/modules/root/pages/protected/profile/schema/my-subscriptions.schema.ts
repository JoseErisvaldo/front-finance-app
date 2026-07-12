import { z } from "zod";

const productSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  image: z.string().nullable(),
});

const priceSchema = z.object({
  id: z.string(),
  unit_amount: z.number().nullable(),
  currency: z.string().nullable(),
  interval: z.string().nullable(),
  interval_count: z.number().nullable(),

  // `products` pode ser omitido ou nulo dependendo do backend
  products: productSchema.optional().nullable(),
});

const subscriptionSchema = z.object({
  id: z.string(),
  // user_id pode vir ausente dependendo do backend; aceitar temporariamente undefined/null
  user_id: z.string().uuid().optional().nullable(),
  status: z.string(),

  // metadata pode faltar dependendo do backend
  metadata: z.record(z.string(), z.unknown()).optional().nullable(),

  // price_id pode vir undefined; aceitar opcionalmente
  price_id: z.string().optional().nullable(),
  quantity: z.number().nullable(),
  cancel_at_period_end: z.boolean().nullable(),

  created: z.string().datetime({ offset: true }),
  current_period_start: z.string().datetime({ offset: true }),
  current_period_end: z.string().datetime({ offset: true }),

  ended_at: z.string().datetime({ offset: true }).nullable(),
  cancel_at: z.string().datetime({ offset: true }).nullable(),
  canceled_at: z.string().datetime({ offset: true }).nullable(),

  trial_start: z.string().datetime({ offset: true }).nullable(),
  trial_end: z.string().datetime({ offset: true }).nullable(),

  // `prices` pode ser um objeto único ou um array de objetos
  prices: z
    .union([priceSchema, z.array(priceSchema)])
    .optional()
    .nullable(),
});

export const mySubscriptionsSchema = z.array(subscriptionSchema);
