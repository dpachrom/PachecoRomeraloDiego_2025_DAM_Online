import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";

const genders = ["male", "female", "other"];

export default function RegisterForm() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });
  const [sn, setSn] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      setSn({ open: true, message: "Registro correcto", severity: "success" });
      navigate("/login");
    } catch (err) {
      setSn({
        open: true,
        message: err.response?.data?.message || "Error al registrarse",
        severity: "error",
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Contraseña"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <TextField
        label="Edad"
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
        required
      />
      <TextField
        label="Género"
        name="gender"
        select
        value={form.gender}
        onChange={handleChange}
        required
      >
        {genders.map((g) => (
          <MenuItem key={g} value={g}>
            {g}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained">
        Registrarse
      </Button>
      <Snackbar
        open={sn.open}
        autoHideDuration={3000}
        onClose={() => setSn((s) => ({ ...s, open: false }))}
      >
        <Alert severity={sn.severity}>{sn.message}</Alert>
      </Snackbar>
    </Box>
  );
}
