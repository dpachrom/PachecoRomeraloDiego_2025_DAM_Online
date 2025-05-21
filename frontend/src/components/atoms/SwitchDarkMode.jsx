import { useContext } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeContext";

const SwitchDarkMode = ({ label = "Modo Oscuro" }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <FormControlLabel
      control={
        <Switch checked={darkMode} onChange={toggleDarkMode} color="primary" />
      }
      label={label}
    />
  );
};

export default SwitchDarkMode;
