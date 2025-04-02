import React, { useState } from "react";
import { Box } from "@mui/material";
import Heading from "../atoms/Heading";
import TextBoxMol from "../molecules/TexBoxMol";

const TextBoxPage = () => {
  const [text, setText] = useState("");

  return (
    <Box>
      <Heading text="Text box" variant="h2" sx={{ mt: 4, mb: 6 }} />
      <TextBoxMol text={text} onChange={(e) => setText(e.target.value)} />
    </Box>
  );
};

export default TextBoxPage;
