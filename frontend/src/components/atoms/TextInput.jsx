import TextField from "@mui/material/TextField";

const TextInput = ({ label, value, error, helperText, onChange, ...props }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      error={!!error}
      helperText={helperText}
      margin="normal"
      fullWidth
      {...props}
    />
  );
};

export default TextInput;
