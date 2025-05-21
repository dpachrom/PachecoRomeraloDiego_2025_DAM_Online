const { getUserById, updateUserProfile } = require("../business/userService");

const getProfile = async (req, res) => {
  try {
    const user = await getUserById(req.user.id);
    res.json(user);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Error al obtener el perfil" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const updatedUser = await updateUserProfile(req.user.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Error al actualizar el perfil" });
  }
};

module.exports = { getProfile, updateProfile };
