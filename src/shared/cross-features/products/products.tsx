import { Container, Grid, Card, CardContent } from "@mui/material";
import { useProductsQueries } from "./queries/use-products.queries";
import { ProductsContent } from "./components/products-content";

export const Products = () => {
  const { data } = useProductsQueries();

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
                <ProductsContent product={product} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
