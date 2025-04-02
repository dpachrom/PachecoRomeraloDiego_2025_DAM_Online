import React from 'react';
import CardMedia from '@mui/material/CardMedia';

const CardImage = ({ src, alt, height = 140, ...props }) => {
  return (
    <CardMedia
      component="img"
      height={height}
      image={src}
      alt={alt}
      {...props}
    />
  );
};

export default CardImage;
