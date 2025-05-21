import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SwitchDarkMode from "../atoms/SwitchDarkMode";
import MenuButton from "../atoms/MenuButton";

const AppBarCustom = ({ title, onMenuClick }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {onMenuClick && <MenuButton onClick={onMenuClick} />}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <SwitchDarkMode />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
