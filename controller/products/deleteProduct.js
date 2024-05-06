const Products = require("../../models/product");
const throwError = require("../../utils/throwError");

const deleteProduct = async (req, res) => {
  const { id } = req?.body;
  try {
    if (!id) {
      throw throwError('Id not found', 404)
    }
    
    const product = await Products.findOneAndDelete({ _id: id });
    if (!product) {
      throw throwError('product not found', 404)
    }

    res.status(200).send({
      success: true,
      message: "Product deleted successful!",
    });
  } catch (error) {
    return res.status(error?.code || 500).send({
      success: false,
      error: error.error || error.message || 'Internal Server Error'
    })
  }
};

module.exports = deleteProduct;
