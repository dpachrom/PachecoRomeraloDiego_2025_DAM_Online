import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ text, variant = "h4", gutterBottom = true, sx, ...props }) => (
  <Typography variant={variant} gutterBottom={gutterBottom} sx={sx} {...props}>
    {text}
  </Typography>
);

export default Heading;
