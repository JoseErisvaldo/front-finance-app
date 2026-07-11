import type { z } from "zod";
import type { PriceSchema, ProductSchema } from "../schema/products.schema";

export type Price = z.infer<typeof PriceSchema>;
export type Product = z.infer<typeof ProductSchema>;
