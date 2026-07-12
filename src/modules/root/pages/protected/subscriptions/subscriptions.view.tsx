import { Box } from "@mui/material";
import { Subscriptions } from "../../../../../shared/cross-features/subscriptions/subscriptions";

export const SubscriptionsView = () => {
  return (
    <Box>
      <h3>Produtos</h3>
      <Box sx={{ mb: 2 }}>
        <p>Veja todos os produtos disponíveis abaixo.</p>
      </Box>
      <Subscriptions />
    </Box>
  );
};
