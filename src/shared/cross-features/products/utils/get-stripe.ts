import { loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<any> | null;

export const getStripe = () => {
  if (!stripePromise) {
    const key = (import.meta as any).env?.VITE_STRIPE_PUBLIC_KEY;
    if (!key) {
      console.error("getStripe: VITE_STRIPE_PUBLIC_KEY is not set");
      stripePromise = Promise.resolve(null);
    } else {
      stripePromise = loadStripe(key);
    }
  }

  return stripePromise;
};
