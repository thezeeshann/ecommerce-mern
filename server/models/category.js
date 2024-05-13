import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    slug: "categoryName",
    required: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const CategoryModel = mongoose.model("Category", CategorySchema);
export default CategoryModel;
