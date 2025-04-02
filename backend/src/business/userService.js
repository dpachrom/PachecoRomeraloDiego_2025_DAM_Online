const User = require('../models/user');
const bcrypt = require('bcrypt');
const createError = require('../utils/createError');

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) {
    throw createError('Usuario no encontrado', 404);
  }
  return user;
};

const updateUserProfile = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw createError('Usuario no encontrado', 404);
  }
  
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  await user.update(data);
  return user;
};

module.exports = { getUserById, updateUserProfile };
