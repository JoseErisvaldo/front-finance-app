import { api } from "../../../services/http/api";

export const postCheckoutStripeService = async (
  priceId: string,
): Promise<{ url?: string; sessionId?: string }> => {
  try {
    const response = await api.post("/checkoutWithStripe", { priceId });
    return response.data;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
};
