import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../molecules/RegisterForm";

export default function RegisterPage() {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Crear cuenta
      </Typography>
      <RegisterForm />
      <Typography sx={{ mt: 2, textAlign: "center" }}>
        ¿Ya tienes cuenta?{" "}
        <MuiLink component={RouterLink} to="/login" underline="hover">
          Inicia sesión
        </MuiLink>
      </Typography>
    </Box>
  );
}
