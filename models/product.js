const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const Products = mongoose.model("products", ProductSchema, "products");
module.exports = Products;
