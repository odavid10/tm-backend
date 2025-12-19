const { generateToken, validatePassword } = require("../../common/functions");
const { STATUS_REQUEST } = require("../../common/models");
const { authRepository } = require("../repository/auth.repository");

const login = async (req, res) => {
  const { email, password } = req.body;

  const { password: pass, ...user } = await authRepository.findByEmail(email);
  const isValidPassword = await validatePassword(password, pass);

  if (!isValidPassword) {
    return res.status(401).send({
      status: STATUS_REQUEST.UNAUTHORIZED,
      message: "Usuario o contraseña incorrecta",
    });
  }

  const token = await generateToken(user);

  return res.status(200).send({ status: STATUS_REQUEST.SUCCESS, token, user });
};

module.exports = { login };
