import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user && user.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
