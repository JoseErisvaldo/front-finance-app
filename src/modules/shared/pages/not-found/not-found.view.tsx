import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const NotFoundView: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 8 }}>
      <Box sx={{ fontSize: 120, fontWeight: 700, color: "text.secondary" }}>
        404
      </Box>
      <Typography variant="h4" gutterBottom>
        Página não encontrada
      </Typography>
      <Typography sx={{ variant: "body1", color: "text.secondary" }}>
        Desculpe, a página que você procura não existe ou foi removida.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => (window.location.href = "/app")}
      >
        Voltar para o início
      </Button>
    </Container>
  );
};

export default NotFoundView;
