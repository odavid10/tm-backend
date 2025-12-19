const jwt = require("jsonwebtoken");

const { JWT_SECRET, EXPIRE_TOKEN } = require("../../environment/envrionment");

const verifyJWt = (token) => {
  const secret = JWT_SECRET || "clave_secreta";

  return jwt.verify(token, secret);
};

const generateToken = async (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRE_TOKEN });
};

module.exports = {
  generateToken,
  verifyJWt,
};
