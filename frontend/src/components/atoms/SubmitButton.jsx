import Button from "@mui/material/Button";

const SubmitButton = ({ label, ...props }) => {
  return (
    <Button type="submit" variant="contained" color="primary" {...props}>
      {label}
    </Button>
  );
};

export default SubmitButton;
