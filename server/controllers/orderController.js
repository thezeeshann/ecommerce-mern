// import { CartModel } from "../models/cart.js";
import CartModel from "../models/cart.js";
import OrderModel from "../models/order.js";
import UserModel from "../models/user.js";

export const createOrder = async (req, res) => {
  try {
    const user = req.existUser.userId;
    const { total, cart } = req.body;

    const checkUser = await UserModel.findById(user);

    if (!checkUser) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const checkCart = await CartModel.findById(cart).populate("items.product");
    if (!checkCart) {
      return res.status(400).json({ error: "Invalid cart ID" });
    }

    const newOrder = new OrderModel({
      user: user,
      cart: cart,
      total: total,
    });

    const savedOrder = await newOrder.save();

    res.status(200).json({
      success: true,
      message: `Your order has been placed successfully!`,
      data: savedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
