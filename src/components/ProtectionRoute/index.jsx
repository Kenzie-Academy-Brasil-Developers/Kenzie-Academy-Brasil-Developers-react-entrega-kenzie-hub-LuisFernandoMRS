import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/UserContext/AuthContext";

export const ProtectionRoute = () => {
  const { user, loading } = useContext(AuthenticationContext);
  if (loading) {
    return null;
  }
  return <>{user ? <Outlet /> : <Navigate to={"/"} replace />}</>;
};
