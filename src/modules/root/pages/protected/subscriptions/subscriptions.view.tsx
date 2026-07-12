import { Container, Typography } from "@mui/material";
import { Subscriptions } from "../../../../../shared/cross-features/subscriptions/subscriptions";

export const SubscriptionsView = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
        Produtos
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Veja todos os produtos disponiveis abaixo.
      </Typography>
      <Subscriptions />
    </Container>
  );
};
