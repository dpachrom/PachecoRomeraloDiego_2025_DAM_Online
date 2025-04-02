import React, { useContext } from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";

function Perfil() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Perfil del Usuario
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={user.name} subheader={user.email} />
        <CardContent>
          <Typography variant="body2">
            Esta es la página de perfil usando Context API.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Perfil;
