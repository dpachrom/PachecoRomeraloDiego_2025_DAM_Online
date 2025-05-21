import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const MenuButton = ({ onClick, sx }) => {
  return (
    <IconButton
      color="inherit"
      edge="start"
      onClick={onClick}
      sx={{ mr: 2, ...sx }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
