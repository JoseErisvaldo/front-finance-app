import { Box, Typography, Chip, Stack } from "@mui/material";
import type { Product } from "../types/subscriptions.types";

export const ProductHeader = ({ product }: { product: Product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        alignItems: "stretch",
      }}
    >
      {product.image && (
        <Box
          sx={{
            width: { xs: "100%", md: 300 },
            height: { xs: 170, md: 200 },
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
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

      <Box
        sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 0.5,
          }}
        >
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
