import { Box } from "@mui/material";
import { Products } from "../../../../../shared/cross-features/products/products";

export const ProductsView = () => {
  return (
    <Box>
      <h3>Produtos</h3>
      <Box sx={{ mb: 2 }}>
        <p>Veja todos os produtos disponíveis abaixo.</p>
      </Box>
      <Products />
    </Box>
  );
};
