const { verifyJWt } = require("../common/functions");
const { STATUS_REQUEST } = require("../common/models");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      status: STATUS_REQUEST.ERROR,
      message: "Acceso denegado. No se proporcionó un token.",
    });
  }

  try {
    const decoded = verifyJWt(token);

    req.userId = decoded.id_user;

    next();
  } catch (error) {
    console.error("Error al verificar token:", error.message);

    return res.status(403).json({
      status: STATUS_REQUEST.ERROR,
      message: "Token sin privilegios o expirado.",
    });
  }
};

module.exports = { verifyToken };
