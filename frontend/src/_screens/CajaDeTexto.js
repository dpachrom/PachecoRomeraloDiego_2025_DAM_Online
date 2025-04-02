import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function CajaDeTexto() {
  const [text, setText] = useState("");

  return (
    <div>
      <Typography variant="h2" gutterBottom sx={{ mt: 4, mb: 6 }}>
        Text box
      </Typography>
      <TextField
        label="Escribe aquí"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Typography
        color="primary"
        fontWeight={400}
        variant="body1"
        sx={{ mt: 4 }}
      >
        Texto ingresado:
        <br />
        <br />
        {text}
      </Typography>
    </div>
  );
}

export default CajaDeTexto;
