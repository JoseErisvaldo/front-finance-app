import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

export const HomeView = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
          color: "#fff",
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Controle seus produtos e assinaturas de forma simples
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
            Venda assinaturas mensais ou produtos únicos com um sistema moderno,
            rápido e escalável.
          </Typography>

          <Stack
            sx={{ direction: "row", spacing: 2, justifyContent: "center" }}
          >
            <Button variant="contained" color="secondary" size="large">
              Começar agora
            </Button>

            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
            >
              Ver produtos
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 5, textAlign: "center" }}
        >
          Tudo que você precisa em um só lugar
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  💳 Assinaturas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Crie planos recorrentes mensais ou personalizados para seus
                  clientes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  🛒 Produtos únicos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Venda produtos avulsos com pagamento único de forma simples.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  ⚡ Alta performance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sistema rápido, moderno e preparado para escalar seu negócio.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "grey.100", py: 8 }}>
        <Container>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, textAlign: "center", mb: 5 }}
          >
            Modelos de venda
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Assinaturas
                    </Typography>
                    <Chip label="Recorrente" color="primary" size="small" />
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ mt: 2 }}
                    color="text.secondary"
                  >
                    Ideal para planos mensais, acesso contínuo ou serviços
                    recorrentes.
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    <Typography variant="body2">
                      ✔ Cobrança automática
                    </Typography>
                    <Typography variant="body2">✔ Renovação mensal</Typography>
                    <Typography variant="body2">
                      ✔ Controle de acesso
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Compras únicas
                    </Typography>
                    <Chip
                      label="Pagamento único"
                      color="success"
                      size="small"
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ mt: 2 }}
                    color="text.secondary"
                  >
                    Ideal para produtos digitais ou físicos com pagamento único.
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    <Typography variant="body2">
                      ✔ Pagamento instantâneo
                    </Typography>
                    <Typography variant="body2">✔ Sem recorrência</Typography>
                    <Typography variant="body2">
                      ✔ Liberação imediata
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, textAlign: "center" }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Pronto para começar?
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Crie seus produtos e comece a vender hoje mesmo.
          </Typography>

          <a href="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large">
              Criar minha conta ou fazer login
            </Button>
          </a>
        </Container>
      </Box>
    </Box>
  );
};
