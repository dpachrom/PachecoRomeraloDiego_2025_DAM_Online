const User = require("../models/user");
const bcrypt = require("bcrypt");
const createError = require("../utils/createError");

async function register({ name, email, password, age, gender }) {
  const exists = await User.findOne({ where: { email } });
  if (exists) {
    throw createError("El email ya está registrado", 409);
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hash,
    age,
    gender,
  });

  const { password: _, ...userData } = user.toJSON();
  return userData;
}

async function getUserById(id) {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  if (!user) {
    throw createError("Usuario no encontrado", 404);
  }
  return user.toJSON();
}

async function updateUserProfile(id, data) {
  const user = await User.findByPk(id);
  if (!user) {
    throw createError("Usuario no encontrado", 404);
  }

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  await user.update(data);

  const { password: _, ...userData } = user.toJSON();
  return userData;
}

module.exports = { getUserById, updateUserProfile, register };
