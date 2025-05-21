import { useState } from "react";
import { Box, Alert, Collapse } from "@mui/material";
import Heading from "../atoms/Heading";
import ButtonIcon from "../atoms/ButtonIcon";

const IconButtonMol = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <Box>
      <Heading text="Un botón para pulsar!" />

      <ButtonIcon variant="contained" onClick={handleClick} />

      <Collapse in={showAlert} sx={{ mt: 2 }}>
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          Button pressed!
        </Alert>
      </Collapse>
    </Box>
  );
};

export default IconButtonMol;
