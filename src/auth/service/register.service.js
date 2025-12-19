const { hashPassword } = require("../../common/functions");
const { STATUS_REQUEST } = require("../../common/models");
const { authRepository } = require("../repository/auth.repository");
const { validateRegisterData } = require("../utils");

const registerService = async (req, res) => {
  const { names, email, password } = req.body;
  try {
    const validationError = validateRegisterData(req.body);
    if (validationError) {
      return res
        .status(400)
        .send({ status: STATUS_REQUEST.ERROR, message: validationError });
    }

    const userExists = await authRepository.findByEmail(email);
    if (userExists) {
      return res
        .status(409)
        .json({ status: STATUS_REQUEST.ERROR, message: "Email ya registrado" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await authRepository.create(names, email, hashedPassword);

    return res.status(201).json({
      status: STATUS_REQUEST.SUCCESS,
      data: newUser,
      message: "Usuario registrado exitosamente",
    });
  } catch (error) {
    console.error("Error en registerService", error);
    return res.status(500).json({
      status: STATUS_REQUEST.ERROR,
      message: "Error al registrar el usuario.",
      error: error.message,
    });
  }
};

module.exports = { registerService };
