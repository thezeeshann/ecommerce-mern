import CategoryModel from "../models/category.js";

export const add = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }

    const category = await CategoryModel.create({
      name: name,
    });

    return res.status(201).json({
      success: true,
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

export const update = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { productId } = req.body;
    if (!productId) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const category = await CategoryModel.findById(categoryId);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    category.products.push(productId);
    await category.save();
    return res.status(200).json({
      success: true,
      data: category,
      message: "Product added to category successfully",
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
      select: "productName image price slug",
      populate:{
        path:"brand",
        select:"name"
      }
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
