const express = require("express");
const router = express.Router();

const addProduct = require("../controller/products/addProduct");
const editProduct = require("../controller/products/editProduct");
const deleteProduct = require("../controller/products/deleteProduct");
const checkAdmin = require("../middlewares/checkAdmin");
const checkAuth = require("../middlewares/authMiddlewares");

router.post("/addProduct", checkAuth, checkAdmin, addProduct);
router.post("/editProduct", checkAuth, checkAdmin, editProduct);
router.post("/deleteProduct", checkAuth, checkAdmin, deleteProduct);

module.exports = router;
