import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";
import LoginForm from "../molecules/LoginForm";
import { AuthContext } from "../../contexts/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/calendar-page", { replace: true });
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "20%",
        ml: "40%",
        alignContent: "center",
        justifyContent: "center",
        mt: 8,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Heading text="Iniciar Sesión" variant="h4" align="center" />
      <LoginForm onSubmit={handleLogin} />
      <Typography sx={{ mt: 2, textAlign: "center" }}>
        ¿No tienes cuenta todavía?{" "}
        <Link to="/register-page">Regístrate aquí</Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
