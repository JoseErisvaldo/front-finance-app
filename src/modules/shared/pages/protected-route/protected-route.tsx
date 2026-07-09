import { Navigate } from "react-router-dom";
import { useController } from "../../../../shared/store/auth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useController();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
