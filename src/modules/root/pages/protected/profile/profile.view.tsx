import { CircularProgress, Alert, Box, Container } from "@mui/material";
import { useMySubscriptionsQueries } from "./queries/use-my-subscriptions";
import SubscriptionCard from "./components/subscription-card";
import { CardProfile } from "./components/card-profile";

const mockUser = {
  id: "451fdbd2-56cf-4484-aaca-0bd7a1057a16",
  full_name: "José Erisvaldo",
  email: "jose.erisvaldo@email.com",
  member_since: "Março de 2023",
};

export const ProfileView = () => {
  const {
    data: mySubscriptionData,
    isLoading: isMySubscriptionLoading,
    isError: isMySubscriptionError,
  } = useMySubscriptionsQueries();

  const subscriptions = (() => {
    if (!mySubscriptionData) return [];
    if (
      Array.isArray(mySubscriptionData) &&
      mySubscriptionData.length === 1 &&
      Array.isArray(mySubscriptionData[0])
    ) {
      return mySubscriptionData[0];
    }
    return mySubscriptionData as any[];
  })();

  if (isMySubscriptionLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isMySubscriptionError) {
    return <Alert severity="error">Erro ao carregar assinaturas</Alert>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <CardProfile mockUser={mockUser} />

      <SubscriptionCard subscriptions={subscriptions} />
    </Container>
  );
};
