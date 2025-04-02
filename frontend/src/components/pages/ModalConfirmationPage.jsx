import React, { useState } from "react";
import { Box } from "@mui/material";
import Heading from "../atoms/Heading";
import CustomButton from "../atoms/ButtonIcon";
import ConfirmDialog from "../molecules/ConfirmDialog";

const ModalConfirmationPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    setOpen(false);
    // No hay logica de aceptar, pero por buena praxis he generado el handler.
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Heading text="Modal de Confirmación" variant="h4" />
      <CustomButton
        variant="contained"
        label="Mostrar Modal"
        onClick={handleOpen}
        sx={{ mt: 2 }}
      />
      <ConfirmDialog
        open={open}
        onClose={handleClose}
        onAccept={handleAccept}
        onCancel={handleCancel}
        title="Confirmación"
        message="¿Estás seguro de realizar esta acción?"
      />
    </Box>
  );
};

export default ModalConfirmationPage;
