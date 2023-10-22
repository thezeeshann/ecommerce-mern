import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
