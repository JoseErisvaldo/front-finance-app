import { Box, Divider, Typography } from "@mui/material";
import type { Product } from "../types/products.types";
import { getIntervalSingular, getIntervalPlural } from "../utils/intervals";
import { ProductHeader } from "./product-header";
import { PriceCard } from "./price-card";

type Props = { product: Product };

export const ProductsContent = ({ product }: Props) => {
  const recurring = product.prices.filter((p) => p.type === "recurring");
  const oneTime = product.prices.filter((p) => p.type === "one_time");

  const unitDays: Record<string, number> = {
    day: 1,
    week: 7,
    month: 30,
    year: 365,
  };

  const recurringGroups = (() => {
    const map = new Map<string, any>();
    recurring.forEach((price) => {
      const key = `${price.interval_count}_${price.interval}`;
      if (!map.has(key)) {
        map.set(key, {
          interval: price.interval,
          interval_count: price.interval_count,
          prices: [],
        });
      }
      map.get(key).prices.push(price);
    });
    return Array.from(map.entries())
      .map(([key, val]) => ({
        key,
        interval: val.interval,
        interval_count: val.interval_count,
        prices: val.prices,
        weight: (val.interval_count || 1) * (unitDays[val.interval] ?? 30),
      }))
      .sort((a, b) => a.weight - b.weight);
  })();

  const recurringItems = recurringGroups.flatMap((group: any) =>
    group.prices.map((price: any) => ({
      price,
      title: `A cada ${group.interval_count} ${group.interval_count === 1 ? getIntervalSingular(group.interval) : getIntervalPlural(group.interval)}`,
    })),
  );

  return (
    <Box>
      <ProductHeader product={product} />

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 1, mb: 1 }}>
        Assinaturas
      </Typography>

      {recurringItems.length > 0 ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" },
            gap: 2,
            alignItems: "stretch",
            mb: 2,
          }}
        >
          {recurringItems.map((item: any) => (
            <Box key={item.price.id} sx={{ display: "block", width: "100%" }}>
              <PriceCard
                price={item.price}
                title={item.title}
                actionLabel="Assinar"
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Não existem assinaturas para esta categoria.
        </Typography>
      )}

      <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
        Pagamentos únicos
      </Typography>

      {oneTime.length > 0 ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          {oneTime.map((price: any) => (
            <Box
              key={price.id}
              sx={{
                display: "block",
                width: "100%",
              }}
            >
              <PriceCard
                price={price}
                title="Pagamento único"
                actionLabel="Comprar"
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Não existem pagamentos únicos para esta categoria.
        </Typography>
      )}
    </Box>
  );
};
