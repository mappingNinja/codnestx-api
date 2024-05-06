const Users = require('../models/users');
const throwError = require('../utils/throwError');

const checkAdmin = async (req, res, next) => {
  try {
    const user = await Users.findOne({ _id: req.body.userId, isAdmin: true })
    if (!user) {
      throw throwError("Access restricted!", 403);
    }
    next();
  } catch (error) {
    res.status(error?.code || 500).send({
      success: false,
      error: error.error || error.message || ''
    });

  }
}

module.exports = checkAdmin;