import CartModel from "../models/cart.js";

export const add = async (req, res) => {
  try {
    const userId = req.existUser.userId;
    const { items } = req.body;
    const productId = items[0].product;
    const quantity = items[0].quantity;

    const existingUserCart = await CartModel.findOne({ user: userId }).populate(
      "items.product"
    );

    if (!existingUserCart) {
      const newCart = new CartModel({
        user: userId,
        items: [{ product: productId, quantity }],
        totalPrice: 0,
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

      existingUserCart.totalPrice = existingUserCart.items.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      );

      await existingUserCart.save();
      return res
        .status(200)
        .json({ message: "Product added to cart successfully" });
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

export const getCarts = async (req, res) => {
  try {
    const carts = await CartModel.find().populate({
      path: "items.product",
      select: "productName",
    });
    return res.status(200).json({
      success: true,
      data: carts,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};
