import { Box, Typography, Chip, Stack } from "@mui/material";
import type { Product } from "../types/subscriptions.types";

export const ProductHeader = ({ product }: { product: Product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        alignItems: "center",
        minHeight: { md: 240 },
      }}
    >
      {product.image && (
        <Box
          sx={{
            width: { xs: "100%", md: 360 },
            height: { xs: 180, md: 240 },
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 300ms ease",
            }}
          />
        </Box>
      )}

      <Box sx={{ flex: 1 }}>
        <Stack sx={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>

          <Chip
            label={product.active ? "Ativo" : "Inativo"}
            color={product.active ? "success" : "default"}
            size="small"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {product.description ?? "Sem descrição disponível"}
        </Typography>
      </Box>
    </Box>
  );
};
