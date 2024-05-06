const Users = require("../../models/users");
const generateToken = require("../../utils/generateToken");
const { hashPassword, comparePassword } = require("../../utils/hashPassword");
const throwError = require("../../utils/throwError");
const isUser = require("../../utils/throwError");

const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      throw throwError("Invalid email or password", 404);
    }

    const findUser = await Users.findOne({ email: email.toLowerCase() });
    if (!findUser) {
      throw throwError("Email is not registered", 404);
    }

    const matchPassword = await comparePassword(password, findUser?.password);
    if (!matchPassword) {
      throw throwError("Invalid password", 404);
    }

    const token = await generateToken(findUser._id);
    const { _id, name, phone, isAdmin, gdTokens, image, address } = findUser || {};
    const user = {
      _id,
      name,
      email,
      phone,
      image,
      gdTokens,
      address,
      token,
      isAdmin,
      imageUrl: image,
    };

    return res.status(200).send({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    return res.status(error.code || 500).send({
      success: false,
      error: error.message || error.error,
    });
  }
};

module.exports = login;
