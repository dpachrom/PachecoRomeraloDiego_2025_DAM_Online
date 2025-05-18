import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/material";
import TextInput from "../atoms/TextInput";
import SelectInput from "../atoms/SelectInput";
import RadioInput from "../atoms/RadioInput";
import SubmitButton from "../atoms/SubmitButton";

const schema = yup
  .object({
    name: yup.string().required("El nombre es obligatorio"),
    age: yup
      .number()
      .typeError("La edad debe ser un número")
      .required("La edad es obligatoria"),
    gender: yup.string().required("El género es obligatorio"),
  })
  .required();

const ValidatedForm = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
    },
  });

  const ageOptions = Array.from({ length: 50 }, (_, i) => ({
    value: i + 1,
    label: String(i + 1),
  }));

  const genderOptions = [
    { value: "male", label: "Masculino" },
    { value: "female", label: "Femenino" },
  ];

  return (
    <Box
      align="center"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Nombre"
            error={errors.name?.message}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Email"
            error={errors.name?.message}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <SelectInput
            {...field}
            label="Edad"
            error={errors.age?.message}
            helperText={errors.age?.message}
            options={ageOptions}
          />
        )}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <RadioInput
            {...field}
            options={genderOptions}
            error={errors.gender?.message}
          />
        )}
      />

            <Controller
        name="Description"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Description"
            error={errors.name?.message}
            helperText={errors.name?.message}
          />
        )}
      />

      <SubmitButton label="Enviar" sx={{ mt: 2 }} />
    </Box>
  );
};

export default ValidatedForm;
