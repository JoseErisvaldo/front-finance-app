import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const PaymentSuccessView = () => {
  return (
    <Box sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Pagamento realizado com sucesso
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Obrigado pela sua compra! Seu pagamento foi processado com sucesso.
        </Typography>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Button component={RouterLink} to="/" variant="outlined">
            Voltar para o início
          </Button>

          <Button component={RouterLink} to="/app/products" variant="contained">
            Ver meus produtos
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default PaymentSuccessView;
