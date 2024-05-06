const Products = require("../../models/product");
const throwError = require("../../utils/throwError");

const addProduct = async (req, res) => {
  try {
    const { name, image, content, note } = req.body;
    if (!name) {
      throw throwError("Name not found!", 404);
    }

    if (!image) {
      throw throwError("Image not found!", 404);
    }

    if (!content) {
      throw throwError("content not found!", 404);
    }

    const product = await Products.create({ name, image, content, note });
    if (product) {
      return res
        .status(200)
        .send({ success: "true", message: "Product Added successfully!" });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }

  } catch (error) {
    return res.status(error?.code || 500).send({
      success: false,
      error: error.error || error.message
    })
  }
};

module.exports = addProduct;
