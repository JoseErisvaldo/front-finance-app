import { api } from "../../../../../shared/services/http/api";

type LoginDTO = {
  email: string;
  password: string;
};

export const authService = async (data: LoginDTO) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
