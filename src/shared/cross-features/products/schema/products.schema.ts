import z from "zod";

const PriceSchema = z.object({
  id: z.string(),
  type: z.enum(["recurring", "one_time"]),
  active: z.boolean(),
  currency: z.string(),
  interval: z.string().nullable(),
  metadata: z.record(z.string(), z.any()),
  description: z.string().nullable(),
  unit_amount: z.number(),
  interval_count: z.number().nullable(),
  trial_period_days: z.number().nullable(),
});

const ProductSchema = z.object({
  id: z.string(),
  active: z.boolean(),
  name: z.string(),
  description: z.string().nullable(),
  image: z.string().nullable(),
  metadata: z.record(z.string(), z.any()),
  prices: z.array(PriceSchema),
});

export { PriceSchema, ProductSchema };
