import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const ConfirmDialog = ({
  open,
  onClose,
  onAccept,
  onCancel,
  title,
  message,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAccept}>Aceptar</Button>
        <Button onClick={onCancel}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
