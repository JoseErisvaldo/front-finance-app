import axios from "axios";
import { ZodError } from "zod";
import { toast } from "react-toastify";

export const loadError = (error: unknown) => {
  if (error instanceof ZodError) {
    console.error("Erro de validação Zod:", error.issues);

    toast.error("Erro ao validar os dados recebidos.");

    return;
  }

  if (axios.isAxiosError(error)) {
    console.error("Erro da API:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });

    toast.error(
      error.response?.data?.message || "Erro ao comunicar com o servidor.",
    );

    return;
  }

  console.error("Erro inesperado:", error);

  toast.error("Ocorreu um erro inesperado.");
};
