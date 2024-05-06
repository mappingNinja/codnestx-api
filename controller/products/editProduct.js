const Products = require("../../models/product");
const throwError = require("../../utils/throwError");

const editProduct = async (req, res) => {
  try {

    const { update } = req.body
    const product = await Products.findOneAndUpdate({ _id: update?._id }, update)
    if (!product) {
      throw throwError('Product not found!', 404)
    }

    return res.status(200).send({ success: true, message: "Product updated!" })
  } catch (error) {
    return res.status(error?.code || 500).send({
      success: false,
      error: error.error || error.message || 'Internal Server Error'
    })
  }
};

module.exports = editProduct;
