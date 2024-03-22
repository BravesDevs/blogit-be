const bcrypt = require("bcryptjs");
const hashData = async (data) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(data, salt);
  return hash;
};

const comparePassword = async (data, hash) => {
  return await bcrypt.compare(data, hash);
};

module.exports = { hashData, comparePassword };
