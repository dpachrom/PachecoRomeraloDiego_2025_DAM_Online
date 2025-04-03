import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";
import LoginForm from "../molecules/LoginForm";
import { AuthContext } from "../../contexts/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/button-with-icon-page", { replace: true });
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mt: 8,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Heading text="Iniciar Sesión" variant="h4" align="center" />
      <LoginForm onSubmit={handleLogin} />
    </Box>
  );
};

export default LoginPage;
