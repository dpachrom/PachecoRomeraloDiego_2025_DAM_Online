import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileCard from "../molecules/ProfileCard";

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/user-card-page", { replace: true });
  };

  if (!user || !user.isAuthenticated) {
    return <div>No estás autenticado. Por favor, inicia sesión.</div>;
  }

  return (
    <div>
      <ProfileCard user={user} onLogout={handleLogout} />
    </div>
  );
};

export default ProfilePage;
