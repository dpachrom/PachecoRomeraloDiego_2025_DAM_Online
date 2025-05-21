import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";

const RadioInput = ({ value, error, onChange, options, ...props }) => {
  return (
    <>
      <RadioGroup row value={value} onChange={onChange} {...props}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </>
  );
};

export default RadioInput;
