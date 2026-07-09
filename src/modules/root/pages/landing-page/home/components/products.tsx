import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

type Preco = {
  id: string;
  tipo: "recorrente" | "unico";
  ativo: boolean;
  moeda: string;
  intervalo: string | null;
  valor: number;
  intervaloContagem: number | null;
};

type Produto = {
  id: string;
  ativo: boolean;
  nome: string;
  descricao: string | null;
  imagem: string | null;
  precos: Preco[];
};

const formatarPreco = (valor: number) => {
  return (valor / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const produtosMock: Produto[] = [
  {
    id: "prod_UmeuuU2x5QxQMw",
    ativo: true,
    nome: "PRODUTO A",
    descricao: null,
    imagem: null,
    precos: [
      {
        id: "price_1",
        tipo: "recorrente",
        ativo: true,
        moeda: "brl",
        intervalo: "mês",
        valor: 2000,
        intervaloContagem: 1,
      },
      {
        id: "price_2",
        tipo: "unico",
        ativo: true,
        moeda: "brl",
        intervalo: null,
        valor: 10000,
        intervaloContagem: null,
      },
    ],
  },
  {
    id: "prod_UmiSFHAbVdNJaM",
    ativo: true,
    nome: "PRODUTO B",
    descricao: null,
    imagem: "https://via.placeholder.com/400x200",
    precos: [
      {
        id: "price_3",
        tipo: "recorrente",
        ativo: true,
        moeda: "brl",
        intervalo: "mês",
        valor: 20000,
        intervaloContagem: 3,
      },
    ],
  },
];

export const PaginaProdutos = () => {
  return (
    <Box sx={{ minHeight: "100vh", py: 5, bgcolor: "background.default" }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Produtos disponíveis
        </Typography>

        <Grid container spacing={3}>
          {produtosMock.map((produto) => (
            <Grid key={produto.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {produto.imagem && (
                  <CardMedia
                    component="img"
                    height="160"
                    image={produto.imagem}
                    alt={produto.nome}
                  />
                )}

                <CardContent sx={{ flex: 1 }}>
                  <Stack
                    sx={{ direction: "row", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {produto.nome}
                    </Typography>

                    <Chip
                      label={produto.ativo ? "Ativo" : "Inativo"}
                      color={produto.ativo ? "success" : "default"}
                      size="small"
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    {produto.descricao ?? "Sem descrição disponível"}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Planos e preços
                  </Typography>

                  <Stack spacing={1}>
                    {produto.precos.map((preco) => (
                      <Box
                        key={preco.id}
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: "action.hover",
                        }}
                      >
                        <Stack
                          sx={{
                            direction: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="body2">
                            {preco.tipo === "recorrente"
                              ? `Assinatura (${preco.intervalo})`
                              : "Pagamento único"}
                          </Typography>

                          <Typography sx={{ fontWeight: 600 }}>
                            {formatarPreco(preco.valor)}
                          </Typography>
                        </Stack>

                        {preco.intervaloContagem && (
                          <Typography variant="caption" color="text.secondary">
                            Cobrança a cada {preco.intervaloContagem} período(s)
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
