const authService = require("../business/authService");
const userService = require("../business/userService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Error en el login" });
  }
};

async function register(req, res) {
  try {
    const nuevo = await userService.register(req.body);
    // opcional: generar token o devolver datos
    res.status(201).json({ user: nuevo });
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
}

const me = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user.id);
    res.json(user);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Error al obtener la información" });
  }
};

module.exports = { login, me, register, };
