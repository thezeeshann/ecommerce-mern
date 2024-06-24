import CartModel from "../models/cart.js";
import OrderModel from "../models/order.js";
import UserModel from "../models/user.js";
import { CART_ITEM_STATUS } from "../utils/constant.js";

export const createOrder = async (req, res) => {
  try {
    const user = req.existUser.userId;
    const { total, cart } = req.body;

    const checkUser = await UserModel.findById(user);

    if (!checkUser) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    if (!Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: "Invalid cart" });
    }

    const newOrder = new OrderModel({
      user: user,
      items: cart.map((item) => ({
        product: item._id,
        productName: item.productName,
        quantity: item.quantity,
        price: item.price,
      })),
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

export const getOrders = async (req, res) => {
  try {
    const user = req.existUser.userId;

    const checkUser = await UserModel.findById(user);
    if (!checkUser) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const orders = await OrderModel.find({ user }).populate(
      "items.product",
      "productName image price"
    );

    if (!orders || orders.length === 0) {
      return res.status(404).json({ error: "No orders found for this user" });
    }
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error("GET ORDERS ERROR", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getOrdersAdmin = async (req, res) => {
  try {
    const orders = await OrderModel.find()
      .populate({
        path: "items.product",
        select: "productName image price",
      })
      .populate({
        path: "user",
        select: "firstName lastName",
      });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ error: "No orders found" });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error("GET ORDERS ADMIN ERROR", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSingleOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await OrderModel.findOne({ orderId }).populate(
      "items.product",
      "productName image price"
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    // const {  } = req.params;
    const { status,orderId } = req.body;

    if (!Object.values(CART_ITEM_STATUS).includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const order = await OrderModel.findOne({ orderId });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.status = status;
    order.updated = Date.now();

    const updatedOrder = await order.save();

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await OrderModel.findOne({ orderId });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    await OrderModel.deleteOne({ orderId });

    return res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
