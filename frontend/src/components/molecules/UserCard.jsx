import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const UserCard = ({ user, onViewProfile }) => {
  return (
    <Card>
      <CardHeader title={user.name} />
      <CardMedia component="img" image={user.image} alt={user.name} />
      <CardContent>
        <Typography variant="body2">{user.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onViewProfile}>
          Ver Perfil
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
