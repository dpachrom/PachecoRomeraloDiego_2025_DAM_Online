import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  Divider,
  Toolbar,
} from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import AppBarCustom from "./molecules/AppBarCustom";

function GlobalLayout() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* Mostrar "Login" solo si no hay usuario autenticado */}
        {(!user || !user.isAuthenticated) && (
          <>
            <ListItemButton component={Link} to="/">
              <ListItemText
                primary="Login"
                sx={{ textAlign: "center", backgroundColor: "#1976d2" }}
              />
            </ListItemButton>
            <Divider />
          </>
        )}
        <ListItemButton component={Link} to="/alendar-page">
          <ListItemText primary="Calendario" />
        </ListItemButton>
        <ListItemButton component={Link} to="/task-list-page">
          <ListItemText primary="Tareas" />
        </ListItemButton>
        <Divider />
        <ListItemButton component={Link} to="/form-page">
          <ListItemText primary="Formulario de asistencia" />
        </ListItemButton>
        <Divider />
        {/* Mostrar "Profile" solo si el usuario está autenticado */}
        {user && user.isAuthenticated && (
          <>
            <ListItemButton component={Link} to="/profile-page">
              <ListItemText
                primary="Mi Perfil"
                sx={{ textAlign: "center", backgroundColor: "#1976d2" }}
              />
            </ListItemButton>
            <Divider />
          </>
        )}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarCustom
        title="Ionut Task"
        onMenuClick={isMobile ? handleDrawerToggle : undefined}
      />

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 6,
          ml: { sm: 30 },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "calc(100vh - 64px)",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default GlobalLayout;
