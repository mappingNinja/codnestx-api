const Products = require("../../models/product");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    return res.status(200).send({ success: true, products });
  } catch (error) {
    return res.status(error?.code || 500).send({
      success: false,
      error: error.error || error.message || 'Internal Server Error'
    })
  }
};

module.exports = getProducts;
