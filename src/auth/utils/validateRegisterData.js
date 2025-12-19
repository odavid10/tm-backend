const { isStrongPassword } = require("../../common/functions");

const validateRegisterData = (data) => {
  const { names, email, password } = data;

  if (!names || !email || !password) {
    return "Los campos names, email y password son requeridos.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "El formato del correo electrónico no es válido.";
  }

  if (!isStrongPassword(password)) {
    return "La contraseña debe tener al menos 8 caracteres e incluir letras y números.";
  }

  return null;
};

module.exports = validateRegisterData;
