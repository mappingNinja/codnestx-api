const bcryptjs = require("bcryptjs");

const hashPassword = async (password) => {
  try {
    const saltRounds = bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hashSync(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    console.log("error in hashPassword ; ", err);
  }
};

const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcryptjs.compareSync(password, hashedPassword);
  return isMatch;
};

module.exports = { hashPassword, comparePassword };
