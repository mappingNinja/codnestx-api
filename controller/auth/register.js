const Users = require("../../models/users");
const { hashPassword } = require("../../utils/hashPassword");
const throwError = require("../../utils/throwError");

const findUser = async ({ email }) => {
  return await Users.findOne({ email });
};

const register = async (req, res) => {
  try {
    const { name, email, answer, password } = req.body || {};

    if (!name) {
      throw throwError("Name is required", 404);
    }

    if (!email) {
      throw throwError("Email is required", 404);
    }

    if (!answer) {
      throw throwError("Answer is required", 404);
    }

    if (!password) {
      throw throwError("Password is required", 404);
    }

    const existingUser = await findUser({ email: email.toLowerCase() });
    if (existingUser) {
      throw throwError("User already registered use Login", 400);
    }

    const hashedPassword = await hashPassword(password);
    const user = await Users.create({
      name,
      email: email.toLowerCase(),
      answer: answer.toLowerCase(),
      password: hashedPassword,
    });
    if (user) {
      return res.status(201).send({
        success: true,
        message: "User registration successeful kindly login!",
        user,
      });
    }
  } catch (error) {
    return res.status(error?.code || 500).send({
      success: false,
      error: error.error || error.message || "Something Went Wrong",
    });
  }
};

(module.exports = register), { findUser };
