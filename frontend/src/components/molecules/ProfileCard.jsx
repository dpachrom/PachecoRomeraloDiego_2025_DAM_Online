import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const ProfileCard = ({ user, onLogout }) => {
  return (
    <Card sx={{ maxWidth: 345, mt: 4 }}>
      <CardHeader title={user.name} subheader={user.email} />
      <CardContent>
        <Typography variant="body2">
          Bienvenido, {user.name}. Este es tu perfil.
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        onClick={onLogout}
        sx={{ m: 2 }}
      >
        Cerrar Sesión
      </Button>
    </Card>
  );
};

export default ProfileCard;
