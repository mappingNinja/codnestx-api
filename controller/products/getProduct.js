const Products = require("../../models/product");
const throwError = require("../../utils/throwError");

const getProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Products.findOne({ _id: id });
    if (!product) {
      throw throwError('Product not found!', 404)
    }

    return res.status(200).send({ success: true, product });
  } catch (error) {
    return res.status(error?.code || 500).send({
      success: false,
      error: error.error || error.message || 'Internal Server Error'
    })
  }
};

module.exports = getProduct;
