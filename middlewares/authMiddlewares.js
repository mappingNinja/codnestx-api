const jwt = require("jsonwebtoken");
const throwError = require("../utils/throwError");

const loginMiddleware = async (req, res, next) => {
  try {
    let { authorization: token } = req.headers || {};
    if (!token) {
      throw throwError("Invalid user! Please login again", 401);
    }

    if (!token.startsWith("Bearer")) {
      throw throwError("Invalid Token! Please login again", 401);
    }

    token = (token.split(" ") || [])[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode) {
      req.body.userId = decode.id;
      next();
    }
  } catch (error) {
    return res.status(error?.code || 401).send({
      success: false,
      error: "Invalid user! Please login again",
    });
  }
};

module.exports = loginMiddleware;
