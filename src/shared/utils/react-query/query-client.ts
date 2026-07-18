import { QueryClient } from "@tanstack/react-query";

//import { toast } from "react-toastify";
//import { handleApiError } from "../error/handle-api-error/handle-api-error";
import { cacheTime } from "./cache-time";

export const queryClient = new QueryClient({
  /*queryCache: new QueryCache({
    onError: () => {
      toast.error(
        "Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.",
      );
    },
  }),*/
  /*mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      if (mutation.meta?.skipGlobalError) return;

      const { message } = handleApiError(error);

      toast.error(message);
    },
  }),*/
  defaultOptions: {
    queries: {
      staleTime: cacheTime.TEN_MINUTES,
      gcTime: cacheTime.THIRTY_MINUTES,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      refetchInterval: false,
    },
  },
});
