import CategoryModel from "../models/category.js";

export const add = async (req, res) => {
  try {
    const { name, productId } = req.body;
    if (!name || !productId) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }

    const category = await CategoryModel.create({
      name: name,
      products: productId,
    });

    return res.status(201).json({
      success: false,
      data: category,
      message: "Category created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await CategoryModel.find().populate({
      path: "products",
      select: "productName",
    });
    return res.status(200).json({
      success: true,
      data: categories,
      message: "All categories",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
