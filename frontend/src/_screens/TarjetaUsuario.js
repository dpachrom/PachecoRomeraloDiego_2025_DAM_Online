import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
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

function TarjetaUsuario() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Tarjeta de Usuario
      </Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title={user.name} />
              <CardMedia component="img" image={user.image} alt={user.name} />
              <CardContent>
                <Typography variant="body2">{user.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver Perfil</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TarjetaUsuario;
