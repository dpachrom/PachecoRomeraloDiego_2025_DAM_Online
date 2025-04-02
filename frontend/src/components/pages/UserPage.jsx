import React from "react";
import UserCard from "../components/molecules/UserCard";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

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

const UsersPage = () => {
  const handleViewProfile = (userId) => {
    console.log("Ver perfil del usuario con id:", userId);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Usuarios
      </Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid xs={12} sm={6} md={4} key={user.id}>
            <UserCard
              user={user}
              onViewProfile={() => handleViewProfile(user.id)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UsersPage;
