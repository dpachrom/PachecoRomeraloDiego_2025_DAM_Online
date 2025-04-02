import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

function ModalConfirmacion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Modal de Confirmación
      </Typography>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Mostrar Modal
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirmación</DialogTitle>
        <DialogContent>
          <Typography>¿Estás seguro de realizar esta acción?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Aceptar
          </Button>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalConfirmacion;
