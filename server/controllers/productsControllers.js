import ProductModel from "../models/product.js";
import { uploadImageToCloudinary } from "../utils/uploadImage.js";

export const priceLowTOHignProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({}).sort({ price: 1 });
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const priceHighToLowProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({}).sort({ price: -1 });
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { productName, price, description, quantity, brand } = req.body;
    const image = req.files?.image;

    if (!productName || !price || !description || !quantity || !brand) {
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
      brand: brand,
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
    const products = await ProductModel.find({})
      .sort({ created: -1 })
      .populate({
        path: "brand",
        select: "name description slug isActive",
      });

    const totalProducts = await ProductModel.countDocuments();

    return res.status(200).json({
      success: true,
      total: totalProducts,
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
    const productSlug = req.params.slug;
    const singleProduct = await ProductModel.findOne({
      slug: productSlug,
    }).populate({
      path: "brand",
      select: "name slug isActive",
    });
    return res.status(200).json({
      success: true,
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

    let product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (req.files && req.files.image) {
      const image = req.files.image;
      const productImage = await uploadImageToCloudinary(
        image,
        process.env.FOLDER_NAME
      );
      update.image = productImage.secure_url;
    }

    product = await ProductModel.findByIdAndUpdate(productId, update, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Product not updated",
      error: error.message,
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
