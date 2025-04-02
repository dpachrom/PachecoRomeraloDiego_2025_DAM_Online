import React from "react";
import { Box } from "@mui/material";
import TextFieldCustom from "../atoms/TextFieldCustom";
import DisplayText from "../atoms/DisplayText";

const TexBoxMol = ({ text, onChange }) => {
  return (
    <Box>
      <TextFieldCustom label="Escribe aquí" value={text} onChange={onChange} />
      <DisplayText text={text} sx={{ mt: 4 }} />
    </Box>
  );
};

export default TexBoxMol;
