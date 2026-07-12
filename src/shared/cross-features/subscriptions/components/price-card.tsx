import { Box, Typography, Stack, Button } from "@mui/material";
import type { Price } from "../types/subscriptions.types";
import { formatPrice } from "../../../helpers/format-price/format-price";
import { useCheckoutStripeMutation } from "../mutations/checkout-stripe.mutations";

export const PriceCard = ({
  price,
  title,
  actionLabel = "Comprar",
}: {
  price: Price;
  title?: string;
  actionLabel?: string;
}) => {
  const { mutate: checkoutStripe, isPending } = useCheckoutStripeMutation();
  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        minHeight: 160,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack spacing={{ xs: 0.5, sm: 1 }} alignItems="flex-start">
        {title && (
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
        )}
        {price.description && (
          <Typography variant="body2" color="text.secondary">
            {price.description}
          </Typography>
        )}
      </Stack>

      <Stack
        sx={{
          mt: 3,
          gap: 2,
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, flex: 1, textAlign: "left" }}
          color="primary"
        >
          {formatPrice(price.unit_amount)}
        </Typography>
        <Button
          variant="contained"
          size="medium"
          sx={{ width: { xs: "100%", sm: "auto" } }}
          onClick={() => checkoutStripe(price.id)}
          disabled={isPending}
        >
          {isPending ? "Processando..." : actionLabel}
        </Button>
      </Stack>
    </Box>
  );
};
