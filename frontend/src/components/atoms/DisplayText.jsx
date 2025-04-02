import React from 'react';
import { Typography } from '@mui/material';

const DisplayText = ({ text, sx, ...props }) => {
  return (
    <Typography color="primary" fontWeight={400} variant="body1" sx={sx} {...props}>
      Texto ingresado:
      <br/><br/>
      {text}
    </Typography>
  );
};

export default DisplayText;
