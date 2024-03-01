import ProductModel from "../models/product.js";
import { uploadImageToCloudinary } from "../utils/uploadImage.js";

export const createProducts = async (req, res) => {
  try {
    const { productName, price, description, quantity } = req.body;
    const image = req.files.image;

    if (!productName || !price || !description || !quantity) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required" });
    }

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image fields are required",
      });
    }

    const uploadImage = await uploadImageToCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    const product = await ProductModel.create({
      productName: productName,
      price: price,
      description: description,
      quantity: quantity,
      image: uploadImage.secure_url,
    });

    return res.status(201).json({
      success: true,
      message: "Product create successfully",
      product,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Product not created",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: message.error,
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const singleProduct = await ProductModel.findOne({ _id: productId });
    return res.status(200).json({
      success: false,
      singleProduct,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Unable to fetch single product",
    });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const productId = req.params.id;
    const update = req.body;

    const existProduct = await ProductModel.find({ _id: productId });

    if (!existProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (req.files) {
      const image = req.files.image;
      const productImage = await uploadImageToCloudinary(
        image,
        process.env.FOLDER_NAME
      );
      existProduct.image = productImage.secure_url;
    }

    for (const key in update) {
      if (update.hasOwnProperty(key)) {
        existProduct[key] = update[key];
      }
    }

    await existProduct.save();

    const updatedProduct = await BlogModal.findOne({
      _id: productId,
    });

    return res.status(200).json({
      success: false,
      message: "Product update successfully",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Product not updated",
    });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await ProductModel.findByIdAndDelete({ _id: productId });
    return res.status(201).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Product not deleted",
    });
  }
};
