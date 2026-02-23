import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(StudentContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;