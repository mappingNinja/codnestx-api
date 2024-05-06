require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const generateToken = async (id) => {
  const token = await jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "10d",
  });
  return token;
};

module.exports = generateToken;
