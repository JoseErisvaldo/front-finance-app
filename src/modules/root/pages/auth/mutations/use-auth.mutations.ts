import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { toast } from "react-toastify";
import { useController } from "../../../../../shared/store/auth";
import { useNavigate } from "react-router-dom";

export const useAuthMutations = () => {
  const navigate = useNavigate();
  const { setAuth } = useController();

  return useMutation({
    mutationFn: authService,

    onSuccess: (data) => {
      setAuth(data);

      toast.success("Login realizado com sucesso!");
      navigate("/app", { replace: true });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          "Erro ao realizar login email ou senha inválidos",
      );
    },
  });
};
