const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

exports.register = async (req, res) => {
  try {
    const { nombre, correo, contraseña, rol } = req.body;

    const hashedPass = await bcrypt.hash(contraseña, 10);

    const user = await User.create({ nombre, correo, contraseña: hashedPass, rol });
    res.status(201).json({ msg: "Usuario registrado", user });
  } catch (err) {
    res.status(400).json({ msg: "Error en registro", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    const user = await User.findOne({ where: { correo } });
    if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

    const valid = await bcrypt.compare(contraseña, user.contraseña);
    if (!valid) return res.status(401).json({ msg: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: user.id, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Error en login", error: err.message });
  }
};

exports.profile = async (req, res) => {
  const user = await User.findByPk(req.user.id, { attributes: { exclude: ["contraseña"] } });
  res.json(user);
};
