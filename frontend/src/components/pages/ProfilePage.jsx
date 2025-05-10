// src/components/pages/ProfilePage.jsx
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileForm from "../molecules/ProfileForm";
import { Box, Typography, Snackbar, Alert } from "@mui/material";

export default function ProfilePage() {
  const { user, updateUser, logout } = useContext(AuthContext);
  const [snackbar, setSnackbar] = React.useState(null);

  if (!user) return null;

  const handleLogout = () => {
    logout();
  };

  const handleSubmit = async (data) => {
    try {
      await updateUser(data);
      setSnackbar({ severity: "success", message: "Perfil actualizado" });
    } catch (err) {
      setSnackbar({ severity: "error", message: err.message });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Mi perfil
      </Typography>

      <ProfileForm
        defaultValues={{ name: user.name, email: user.email, password: "" }}
        onSubmit={handleSubmit}
        onLogout={handleLogout}
      />

      {snackbar && (
        <Snackbar
          open
          autoHideDuration={3000}
          onClose={() => setSnackbar(null)}
        >
          <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
        </Snackbar>
      )}
    </Box>
  );
}
