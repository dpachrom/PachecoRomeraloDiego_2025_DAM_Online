import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .required("El email es obligatorio")
    .email("Debe ser un email válido"),
  password: yup
    .string()
    .transform((v) => (v === "" ? undefined : v))
    .notRequired()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export default function ProfileForm({ defaultValues, onSubmit, onLogout }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nombre"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nueva contraseña"
            type="password"
            error={!!errors.password}
            helperText={
              errors.password
                ? errors.password.message
                : "Déjalo en blanco para no cambiarla"
            }
          />
        )}
      />

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          Guardar
        </Button>
        <Button variant="outlined" color="error" onClick={onLogout}>
          Cerrar sesión
        </Button>
      </Box>
    </Box>
  );
}
