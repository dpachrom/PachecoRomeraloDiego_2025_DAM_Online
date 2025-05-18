const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const createError = require("../utils/createError");
const userService = require("./userService");

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

async function register({ name, email, password, age, gender }) {
  // comprueba primero que no exista otro user con ese email...
  const exists = await userService.getByEmail(email);
  if (exists) throw createError("Email ya registrado", 409);

  const hashed = await bcrypt.hash(password, 10);
  const user = await userService.create({
    name,
    email,
    password: hashed,
    age,
    gender,
  });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "12h" }
  );
  return token;
}

module.exports = { login, register };
