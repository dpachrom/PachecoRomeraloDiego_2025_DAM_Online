import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const SelectInput = ({ label, value, error, helperText, onChange, options, ...props }) => {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      error={!!error}
      helperText={helperText}
      margin="normal"
      fullWidth
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInput;
