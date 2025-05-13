import React from "react";
import { Box } from "@mui/material";
import ValidatedForm from "../molecules/ValidateForm";
import Heading from "../atoms/Heading";

const FormPage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Heading sx={{ ml: 100 }} text="Formulario de asistencia" variant="h4" />
      <ValidatedForm onSubmit={onSubmit} />
    </Box>
  );
};

export default FormPage;
