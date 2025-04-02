import React from "react";
import { Typography } from "@mui/material";
import UserCard from "../molecules/UserCard";
import Grid from "@mui/material/Grid2";

const users = [
  {
    id: 1,
    name: "Juan",
    image: "https://cdn-icons-png.freepik.com/512/3001/3001764.png",
    description: "Descripción de Juan",
  },
  {
    id: 2,
    name: "María",
    image: "https://cdn-icons-png.freepik.com/512/6833/6833601.png",
    description: "Descripción de María",
  },
];

const UserCardPage = () => {
  const handleViewProfile = (user) => {
    // Como no se si se quiere implementar lo dejo así, ya que la página de login en función del use y pass muestra un perfil.
    console.log("Ver perfil de:", user.name);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Tarjeta de Usuario
      </Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <UserCard
              user={user}
              onViewProfile={() => handleViewProfile(user)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserCardPage;
