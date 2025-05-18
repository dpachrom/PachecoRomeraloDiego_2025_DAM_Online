// src/components/pages/RegisterPage.jsx
import { Box, Typography, Link } from "@mui/material";
import RegisterForm from "../molecules/RegisterForm";

export default function RegisterPage() {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Crear cuenta
      </Typography>
      <RegisterForm />
      <Typography sx={{ mt: 2, textAlign: "center" }}>
        ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
      </Typography>
    </Box>
  );
}
