const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const createError = require("../utils/createError");

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw createError("User not found", 401);
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw createError("Wrong password", 401);
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "12h" }
  );

  return token;
};

module.exports = { login };
