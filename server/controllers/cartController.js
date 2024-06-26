import CartModel from "../models/cart.js";
import ProductModel from "../models/product.js";

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    if (!item.product.price || isNaN(item.product.price)) {
      console.error(`Invalid product price for item: ${JSON.stringify(item)}`);
      throw new Error("Invalid product price");
    }
    return total + item.quantity * item.product.price;
  }, 0);
};

export const getCarts = async (req, res) => {
  try {
    const carts = await CartModel.find().populate({
      path: "items.product",
      select: "productName image price",
    }).populate({
      path: "user",
      select: "firstName lastName",
    });

    const uniqueProductIds = new Set();

    carts.forEach((cart) => {
      cart.items.forEach((item) => {
        uniqueProductIds.add(item.product._id.toString());
      });
    });

    const totalProducts = uniqueProductIds.size;

    return res.status(200).json({
      success: true,
      data: carts,
      totalProducts,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

export const add = async (req, res) => {
  try {
    const userId = req.existUser.userId;
    const { items } = req.body;
    const productId = items[0].product;
    const quantity = items[0].quantity;

    const product = await ProductModel.findById(productId);
    if (!product || isNaN(product.price)) {
      console.error(
        "Invalid product or missing price for productId:",
        productId
      );
      return res.status(400).json({
        success: false,
        message: "Invalid product or missing price",
      });
    }

    let existingUserCart = await CartModel.findOne({ user: userId }).populate({
      path: "items.product",
      select: "price productName",
    });

    if (!existingUserCart) {
      const newCart = new CartModel({
        user: userId,
        items: [{ product: productId, quantity }],
        totalPrice: product.price * quantity,
      });

      await newCart.save();

      return res
        .status(201)
        .json({ message: "Product added to cart successfully" });
    } else {
      const existingCartItem = existingUserCart.items.find(
        (item) => item.product._id.toString() === productId.toString()
      );

      if (existingCartItem) {
        existingCartItem.quantity += quantity;
      } else {
        existingUserCart.items.push({ product: productId, quantity });
      }

      existingUserCart = await existingUserCart.populate({
        path: "items.product",
        select: "price productName",
      });

      try {
        existingUserCart.totalPrice = calculateTotalPrice(
          existingUserCart.items
        );
      } catch (error) {
        console.error("Error calculating total price:", error);
        return res.status(400).json({
          success: false,
          message: "Error calculating total price",
        });
      }

      try {
        await existingUserCart.save();
      } catch (saveError) {
        console.error("Error saving the cart:", saveError);
        return res.status(500).json({
          success: false,
          message: "Error saving the cart",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Product added to cart successfully",
      });
    }
  } catch (error) {
    console.error("Error in add to cart handler:", error);
    res.status(400).json({
      success: false,
      message: "Your request could not be processed. Please try again.",
    });
  }
};

export const deleteProductFromCart = async (req, res) => {
  try {
    const userId = req.existUser.userId;
    const { productId } = req.body;

    let existingUserCart = await CartModel.findOne({ user: userId }).populate({
      path: "items.product",
      select: "price productName",
    });

    if (!existingUserCart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const itemIndex = existingUserCart.items.findIndex(
      (item) => item.product._id.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart",
      });
    }

    existingUserCart.items.splice(itemIndex, 1);

    if (existingUserCart.items.length > 0) {
      try {
        existingUserCart.totalPrice = calculateTotalPrice(
          existingUserCart.items
        );
      } catch (error) {
        console.error("Error calculating total price:", error);
        return res.status(400).json({
          success: false,
          message: "Error calculating total price",
        });
      }
    } else {
      await CartModel.deleteOne({ user: userId });
      return res.status(200).json({
        success: true,
        message: "Product removed and cart deleted",
      });
    }
    await existingUserCart.save();

    return res.status(200).json({
      success: true,
      message: "Product removed from cart",
      cart: existingUserCart,
    });
  } catch (error) {
    console.error("Error deleting product from cart:", error);
    res.status(500).json({
      success: false,
      message: "Your request could not be processed. Please try again.",
    });
  }
};

