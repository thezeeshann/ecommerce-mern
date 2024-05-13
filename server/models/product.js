import mongoose from "mongoose";
import slugify from "slugify";

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  slug: {
    type: String,
    unique: true,
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
  isActive: {
    type: Boolean,
    default: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.pre("save", function (next) {
  if (!this.isModified("productName")) {
    return next();
  }
  this.slug = slugify(this.productName, { lower: true });
  next();
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
