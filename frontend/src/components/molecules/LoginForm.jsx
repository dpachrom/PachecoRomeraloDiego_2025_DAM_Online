import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import TextInput from "../atoms/TextInput";
import SubmitButton from "../atoms/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("El correo es obligatorio")
      .email("Correo inválido"),
    password: yup.string().required("La contraseña es obligatoria"),
  })
  .required();

const LoginForm = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onFormSubmit = (data) => {
    const cleanedData = {
      email: data.email.trim(),
      password: data.password,
    };
    onSubmit(cleanedData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Correo"
            error={errors.email?.message}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Contraseña"
            type="password"
            error={errors.password?.message}
            helperText={errors.password?.message}
          />
        )}
      />
      <SubmitButton label="Login" sx={{ mt: 2 }} />
    </Box>
  );
};

export default LoginForm;
