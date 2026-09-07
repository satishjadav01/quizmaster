import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import Loader from "../Components/Loader";

export default function ProtectedRoute({ children }) {
  const { currentUser, authLoading } = useContext(AuthContext);
  if (authLoading) {
    return <Loader />;
  }
  if (!currentUser) {
    return <Navigate to="/homepage" replace />;
  }
  return children;
}
