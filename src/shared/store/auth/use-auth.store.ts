import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Auth, User } from "./types/auth.types";

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;

  setAuth: (data: Auth) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,

      setAuth: (data) =>
        set({
          user: data.user,
          accessToken: data.access_token,
          refreshToken: data.refresh_token ?? null,
        }),

      clearAuth: () =>
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
        }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
