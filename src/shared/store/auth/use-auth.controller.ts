import { useAuthStore } from "./use-auth.store";

export const isAuthenticated = () =>
  Boolean(useAuthStore.getState().accessToken);

export const useController = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);
  const user = useAuthStore((s) => s.user);
  const accessToken = useAuthStore((s) => s.accessToken);
  const refreshToken = useAuthStore((s) => s.refreshToken);

  return {
    setAuth,
    clearAuth,
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
  };
};

export default useController;
