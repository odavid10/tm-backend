const bcrypt = require("bcrypt");

const validatePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log("hashPassword", hashPassword);

  return hashedPassword;
};

const isStrongPassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.@$*\-_]{8,}$/;
  return regex.test(password);
};

module.exports = {
  hashPassword,
  isStrongPassword,
  validatePassword,
};
