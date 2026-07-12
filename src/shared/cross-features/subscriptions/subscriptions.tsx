import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Inventory2 } from "@mui/icons-material";
import { useSubscriptionsQueries } from "./queries/use-subscriptions.queries";
import { SubscriptionsContent } from "./components/subscriptions-content";

export const Subscriptions = () => {
  const { data, isLoading, isError } = useSubscriptionsQueries();

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Alert severity="error">Erro ao carregar os produtos.</Alert>;
  }

  if (!data || data.length === 0) {
    return <Alert severity="info">Nenhum produto disponivel no momento.</Alert>;
  }

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ alignItems: "center", mb: 2.5 }}
      >
        <Inventory2 sx={{ color: "text.secondary" }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Catalogo de Assinaturas
        </Typography>
        <Chip label={data.length} size="small" sx={{ fontWeight: 600 }} />
      </Stack>

      <Grid container spacing={2.5}>
        {data.map((product) => (
          <Grid size={12} key={product.id}>
            <Card
              variant="outlined"
              sx={{
                width: "100%",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <SubscriptionsContent product={product} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
