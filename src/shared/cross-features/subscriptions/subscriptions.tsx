import { Container, Grid, Card, CardContent } from "@mui/material";
import { useSubscriptionsQueries } from "./queries/use-subscriptions.queries";
import { SubscriptionsContent } from "./components/subscriptions-content";

export const Subscriptions = () => {
  const { data } = useSubscriptionsQueries();

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {data?.map((product) => (
          <Grid item xs={12} key={product.id} sx={{ width: "100%" }}>
            <Card
              sx={{
                width: "100%",
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                overflow: "hidden",
              }}
            >
              <CardContent>
                <SubscriptionsContent product={product} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
