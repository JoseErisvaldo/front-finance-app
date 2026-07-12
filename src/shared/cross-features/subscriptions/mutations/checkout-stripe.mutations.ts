import { useMutation } from "@tanstack/react-query";
import { postCheckoutStripeService } from "../service/checkout-stripe.service";
import { toast } from "react-toastify";

export const useCheckoutStripeMutation = () => {
  return useMutation<{ url?: string; sessionId?: string }, Error, string>({
    mutationFn: async (priceId: string) => {
      const response = await postCheckoutStripeService(priceId);
      return response;
    },
    onSuccess: async (data) => {
      if (data.url) {
        console.log("Redirecting to url from backend", data.url);
        window.location.href = data.url;
        return;
      }
      if (data.sessionId) {
        console.error(
          "Backend returned only sessionId but no url. Update backend to return session.url or call an endpoint to retrieve it.",
        );
        return;
      }
    },
    onError: () => {
      toast.error(
        "Erro ao criar sessão de checkout com Stripe. Tente novamente mais tarde.",
      );
    },
  });
};
