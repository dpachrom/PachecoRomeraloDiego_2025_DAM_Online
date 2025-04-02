import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ButtonIcon = ({
  onClick,
  label = "Añadir",
  icon: IconComponent = AddIcon,
  ...props
}) => {
  return (
    <Button
      variant="outline"
      color="primary"
      startIcon={<IconComponent />}
      onClick={onClick}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ButtonIcon;

