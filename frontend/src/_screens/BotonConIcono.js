// src/screens/BotonConIcono.jsx
import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";

function BotonConIcono() {
  const handleClick = () => {
    alert("¡Botón presionado!");
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Un botón para pulsar!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Púlsame!
      </Button>
    </div>
  );
}

export default BotonConIcono;
