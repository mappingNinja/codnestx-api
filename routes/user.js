const express = require("express");
const router = express.Router();
const getProducts = require("../controller/products/getProducts");
const register = require("../controller/auth/register");
const login = require("../controller/auth/login");
const getProduct = require("../controller/products/getProduct");
const checkAuth = require("../middlewares/authMiddlewares");

router.post("/register", register);
router.post("/login", login);
router.get("/getProducts", checkAuth, getProducts);
router.post("/getProduct", checkAuth, getProduct);


module.exports = router;
