import ReviewModel from "../models/review.js";
import ProductModel from "../models/product.js";

export const getReview = async (req, res) => {
  try {
    const reviews = await ReviewModel.find()
      .populate({
        path: "product",
        select: "productName slug ",
      })
      .populate({
        path: "user",
        select: "firstName lastName",
      })
      .exec();
    return res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    return res.status(404).json({
      succes: false,
      message: "internal server error",
    });
  }
};

export const getReviewWithProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const isProductMatch = await ReviewModel.findOne({ product: productId });
    if (!isProductMatch) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    const totalReviews = await ReviewModel.countDocuments({
      product: productId,
    });
    const reviews = await ReviewModel.find({ product: productId })
      .populate({
        path: "product",
        select: "productName slug ",
      })
      .populate({
        path: "user",
        select: "image",
      })
      .exec();
    if (reviews.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No reviews found for the given product ID",
      });
    }
    return res.status(200).json({
      success: true,
      data: reviews,
      totalReviews: totalReviews,
    });
  } catch (error) {
    return res.status(404).json({
      succes: false,
      message: "internal server error",
    });
  }
};

export const addReview = async (req, res) => {
  try {
    const userId = req.existUser.userId;
    const productId = req.params.id;

    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const { title, rating, review } = req.body;

    if (!title || !rating || !review) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existProduct = await ProductModel.find({ _id: productId });

    if (!existProduct) {
      return res.status(404).json({
        succes: false,
        message: "Product not found ",
      });
    }
    const reviewData = await ReviewModel.create({
      product: productId,
      user: userId,
      title: title,
      rating: rating,
      review: review,
    });

    return res.status(201).json({
      success: true,
      message: "Review added",
      data: reviewData,
    });
  } catch (error) {
    return res.status(404).json({
      succes: false,
      message: "internal server error",
    });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.body;
    if (!reviewId) {
      return res.status(400).json({
        success: false,
        message: "Review not found",
      });
    }

    await ReviewModel.findByIdAndDelete({ _id: reviewId });

    return res.status(200).json({
      success: true,
      message: "Review deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
